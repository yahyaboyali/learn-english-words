// AddFlashCard.tsx
import React, { useState } from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FlashCardService, { FlashCard } from '../service/flashCard'; // Servisi içe aktarıyoruz
import { useSelector } from 'react-redux';
import { selectUser } from '../features/selector';


const AddFlashCard: React.FC = () => {
  const [word, setWord] = useState<string>('');
  const [sentence, setSentence] = useState<string>('');
  const [translate, setTranslate] = useState<string>('');
  const user = useSelector(selectUser); // Kullanıcı bilgilerini al

  const [successMessage, setSuccessMessage] = useState<string>('');
  const navigate = useNavigate(); // Yönlendirme için kullan

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userNumber = user?.id ?? -1
    const flashCard: FlashCard = { word, sentence, translate, userNumber };

    try {
      const response = await FlashCardService.addFlashCard(flashCard); // Servis metodunu çağırıyoruz
      setSuccessMessage(response ?? 'success');
      // Başarılı ekleme sonrası yönlendirme
      setTimeout(() => {
        navigate('/'); // Ana sayfaya yönlendir
      }, 2000);
    } catch (error) {
      console.error('Hata:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Add New Word
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Word"
          variant="outlined"
          fullWidth
          margin="normal"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          required
        />
        <TextField
          label="Sentence"
          variant="outlined"
          fullWidth
          margin="normal"
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
          required
        />
        <TextField
          label="Translate"
          variant="outlined"
          fullWidth
          margin="normal"
          value={translate}
          onChange={(e) => setTranslate(e.target.value)}
          required
        />
        <Button variant="contained" color="success" type="submit">
          Save
        </Button>
      </form>
      {successMessage && <Typography color="green">{successMessage}</Typography>}
    </Container>
  );
};

export default AddFlashCard;
