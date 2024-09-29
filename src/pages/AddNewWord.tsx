// AddFlashCard.tsx
import React, { useState } from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FlashCardService, { FlashCard } from '../service/flashCard'; // Servisi içe aktarıyoruz

const AddFlashCard: React.FC = () => {
  const [word, setWord] = useState<string>('');
  const [sentence, setSentence] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const navigate = useNavigate(); // Yönlendirme için kullan

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const flashCard: FlashCard = { word, sentence };

    try {
      await FlashCardService.addFlashCard(flashCard); // Servis metodunu çağırıyoruz
      setSuccessMessage('FlashCard başarıyla eklendi!');
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
        FlashCard Ekle
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Kelime"
          variant="outlined"
          fullWidth
          margin="normal"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          required
        />
        <TextField
          label="Cümle"
          variant="outlined"
          fullWidth
          margin="normal"
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Ekle
        </Button>
      </form>
      {successMessage && <Typography color="green">{successMessage}</Typography>}
    </Container>
  );
};

export default AddFlashCard;
