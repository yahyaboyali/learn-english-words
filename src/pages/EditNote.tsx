import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper, Button, TextField, Grid2 } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Note from '../service/Note';
import { selectUser } from '../features/selector';

const EditNote: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const user = useSelector(selectUser);

    const note = location.state?.note;

    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');

    useEffect(() => {
        if (note) {
            setTitle(note.title);
            setContent(note.content);
        }
    }, [note]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const userNumber = user?.id ?? -1;

        if (!title || !content) {
            alert('Başlık ve içerik boş olamaz!');
            return;
        }

        const updatedNote = { id: note.id, title, content, userNumber };

        try {
            const response = await Note.saveNote(updatedNote); // Notu güncelleyen API çağrısı
            setSuccessMessage(response ?? 'Not başarıyla güncellendi!');

            setTimeout(() => {
                navigate('/userPage', { state: { user: user } }); // Başarılı güncellemeden sonra yönlendirme
            }, 2000);
        } catch (error) {
            console.error('Not güncellenirken bir hata oluştu:', error);
        }
    };
    const handleBackToUserPage = () => {
        navigate(`/userPage`, { state: { user: user } }); // Yönlendirme ve state ile veri gönderimi

    }
    return (
        <Container maxWidth="md" style={{ marginTop: '20px' }}>
            <form onSubmit={handleSubmit}>
                <Grid2 container spacing={2}>
                    <Grid2 size={12}>
                        <Typography variant="h4" gutterBottom>
                            Not Düzenle
                        </Typography>
                    </Grid2>
                    <Grid2 size={12}>
                        <Paper style={{ padding: '20px', height: '400px' }}>
                            <TextField
                                label="Başlık"
                                variant="outlined"
                                fullWidth
                                value={title} // Başlık değerini state'den al
                                onChange={(e) => setTitle(e.target.value)} // Başlık güncelleme
                                required
                                style={{ marginBottom: '20px' }}
                            />
                            <ReactQuill
                                modules={{
                                    toolbar: [
                                        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                                        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                        [{ 'color': [] }, { 'background': [] }],
                                        ['link', 'image', 'table'],
                                        ['clean']
                                    ],
                                }}
                                value={content} // İçerik değerini state'den al
                                onChange={setContent} // İçerik güncelleme
                                style={{ height: '200px' }}
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
            {successMessage && <Typography color="green" style={{ marginTop: '10px' }}>{successMessage}</Typography>}
            <Grid2 sx={{ marginTop: '10px' }}>
                <Button variant='contained' onClick={handleBackToUserPage}>geri dön </Button>
            </Grid2>
        </Container>
    );
};

export default EditNote;
