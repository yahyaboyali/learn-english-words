import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Container, TextField, Button, Typography, Paper, Grid2 } from '@mui/material';
import Note from '../service/Note';
import { NoteDto } from '../service/types';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/selector';
import { useNavigate } from 'react-router-dom';


const NotePage: React.FC = () => {
    const [title, setTitle] = useState<string>(''); // Başlık durumu
    const [content, setContent] = useState<string>(''); // İçerik durumu
    const user = useSelector(selectUser); // Kullanıcı bilgilerini al
    const [successMessage, setSuccessMessage] = useState<string>('');
    const navigate = useNavigate(); // Yönlendirme için kullan
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const userNumber = user?.id ?? -1
        const note: NoteDto = { title, content, userNumber }
        if (!title || !content) {
            alert('Başlık ve içerik boş olamaz!');
            return;
        }
        try {
            const response = await Note.saveNote(note)
            setSuccessMessage(response ?? 'success');
            // Başarılı ekleme sonrası yönlendirme
            setTimeout(() => {
                navigate('/'); // Ana sayfaya yönlendir
            }, 2000);
            setTitle(''); // Başlığı sıfırla
            setContent(''); // İçeriği sıfırla
        } catch (error) {
            console.error('Not kaydedilirken bir hata oluştu:', error);
        }
    };

    return (
        <Container maxWidth="md" style={{ marginTop: '20px' }}>
            <form onSubmit={handleSubmit}>
                <Grid2 container spacing={2}>
                    <Grid2 size={12}>
                        <Typography variant="h4" gutterBottom>
                            Not Sayfası
                        </Typography>
                    </Grid2>
                    <Grid2 size={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                setTitle('');
                                setContent('');
                            }}
                            style={{ marginBottom: '20px' }}
                        >
                            Yeni Sayfa Oluştur
                        </Button>
                    </Grid2>
                    <Grid2 size={12}>
                        <Paper style={{ padding: '20px', height: '400px' }}> {/* Yüksekliği arttırdık */}
                            <TextField
                                label="Başlık"
                                variant="outlined"
                                fullWidth
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                style={{ marginBottom: '20px' }}
                            />
                            <ReactQuill
                                modules={{
                                    toolbar: [
                                        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                                        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                        [{ 'color': [] }, { 'background': [] }], // Yazı rengi ve arka plan rengi seçenekleri
                                        ['link', 'image', 'table'],
                                        ['clean']
                                    ],
                                }}
                                value={content}
                                onChange={setContent}
                                style={{ height: '200px' }} // Yüksekliği ayarladık
                            />
                        </Paper>
                    </Grid2>
                    <Grid2 size={12} marginTop={2}>
                        <Button type="submit" variant="contained" color="success">
                            Kaydet
                        </Button>
                    </Grid2>
                </Grid2>
            </form>
            {successMessage && <Typography color="green">{successMessage}</Typography>}
        </Container>
    )
};

export default NotePage;
