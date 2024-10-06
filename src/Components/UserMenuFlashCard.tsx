import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FlashCardService from '../service/flashCard'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/selector';

export default function UserMenuFlashCard() {
    const user = useSelector(selectUser); // Kullanıcı bilgilerini al

    const navigate = useNavigate();


    const handleAddFlashCardButton = () => {
        navigate('/addFlashCard');
    };

    const handleFlashCards = async () => {
        const userNumber = user?.id ?? -1

        try {
            const response = await FlashCardService.getByUserId(userNumber);
            navigate('/flashCards', { state: { userCards: response.data.data } })

        } catch (error) {
            console.error('Kullanıcı bilgileri alınırken hata oluştu:', error);
        }
    }
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Flash Cards
                </Typography>
                <Accordion style={{ marginTop: '7px' }} >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        Adding Flash Cards
                    </AccordionSummary>
                    <AccordionDetails>
                        To expand your English vocabulary, it's important to regularly add new words to your learning collection. When you encounter a word you don't know, take the time to understand its meaning, pronunciation, and usage in different contexts. Here's how you can add a new vocabulary word:
                        <ol>
                            <li>
                                <b>Find a New Word:</b> This could be from a book, article, or conversation. Choose a word that you find useful or interesting.
                            </li>
                            <li>
                                <b>Understand the Word:</b> Look up its definition in a dictionary. Pay attention to the word’s part of speech (noun, verb, adjective, etc.), synonyms, and antonyms.
                            </li>
                            <li>
                                <b>Example Sentences:</b> Try to understand the word in context by reading example sentences. This will help you grasp how the word is used naturally.
                            </li>
                        </ol>

                    </AccordionDetails>
                    <AccordionActions>
                        <Button onClick={handleAddFlashCardButton}>Add Flash Card</Button>
                    </AccordionActions>
                </Accordion>
                <Accordion style={{ marginTop: '7px' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        Viewing Your Added Vocabulary Flashcards:
                    </AccordionSummary>
                    <AccordionDetails>
                        To review the vocabulary you’ve added, use your flashcard collection regularly. This process helps reinforce your memory and ensures long-term retention of the words. When viewing flashcards:
                        <ol>
                            <li>
                                <b>Go Through Your Cards:</b> Review each flashcard by reading the word, its definition, and example sentence.
                            </li>
                            <li>
                                <b>Self-Testing:</b> Before revealing the definition, try to recall the meaning of the word on your own. This active recall strengthens learning.
                            </li>
                            <li>
                                <b>Repetition:</b> Try to understand the word in context by reading example sentences. This will help you grasp how the word is used .naturally
                            </li>
                        </ol>

                    </AccordionDetails>
                    <AccordionActions>
                        <Button onClick={handleFlashCards}>get Flash Cards</Button>
                    </AccordionActions>
                </Accordion>
            </CardContent>
        </Card>
    );
}
