import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FlashCardService from '../service/flashCard'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/selector';
import { useDispatch } from 'react-redux';
import { setFlashCards } from '../features/flashCardSlice';

export default function UserMenuFlashCard() {
    const user = useSelector(selectUser); // Kullanıcı bilgilerini al
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleAddFlashCardButton = () => {
        navigate('/addFlashCard');
    };

    const handleFlashCards = async () => {
        const userNumber = user?.id ?? -1

        try {
            const response = await FlashCardService.getByUserId(userNumber);
            dispatch(setFlashCards(response.data.data))
            navigate('/flashCards')

        } catch (error) {
            console.error('Kullanıcı bilgileri alınırken hata oluştu:', error);
        }
    }
    const handlePlayHangman = async () => {
        const userNumber = user?.id ?? -1

        try {
            const response = await FlashCardService.getByUserId(userNumber);
            dispatch(setFlashCards(response.data.data))
            navigate('/hangman')

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
                <Accordion style={{ marginTop: '7px' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        Hangman
                    </AccordionSummary>
                    <AccordionDetails>
                        Hangman is a fun and interactive game that can help reinforce your vocabulary while making the learning process enjoyable. Here’s how to effectively use Hangman in conjunction with your flashcards:
                        <ol>
                            <li>
                                <b>Select Vocabulary Words:</b>  Choose words from your flashcard collection that you want to practice. This ensures you are working with vocabulary that is relevant to your learning goals.
                            </li>
                            <li>
                                <b>Play Regularly:</b>  Make Hangman a regular part of your study routine. This consistent practice will help solidify your vocabulary and make learning feel less like a chore and more like a game.
                            </li>
                        </ol>

                    </AccordionDetails>
                    <AccordionActions>
                        <Button onClick={handlePlayHangman}>Play the Game</Button>
                    </AccordionActions>
                </Accordion>
            </CardContent>
        </Card>
    );
}
