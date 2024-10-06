import { useState } from 'react';
import { Button, Grid2, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectFlashCards } from '../features/selector'

//const WORDS = ['REACT', 'TYPESCRIPT', 'COMPONENT', 'STATE', 'PROPS'];

function Hangman() {

    const flashCards = useSelector(selectFlashCards);
    const upperCaseWords: string[] = flashCards ?
        flashCards.map((flashCard) => flashCard.word.toUpperCase()) :
        [];
    const [selectedWord, setSelectedWord] = useState(upperCaseWords[Math.floor(Math.random() * upperCaseWords.length)]);
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [wrongGuesses, setWrongGuesses] = useState<number>(0);

    const maxWrongGuesses = 6;

    const handleLetterClick = (letter: string) => {
        if (selectedWord.includes(letter)) {
            setGuessedLetters((prev) => [...prev, letter]);
        } else {
            setWrongGuesses((prev) => prev + 1);
        }
    };

    const isGameOver = wrongGuesses >= maxWrongGuesses;
    const isGameWon = selectedWord.split('').every((letter) => guessedLetters.includes(letter));

    const renderWord = () => {
        return selectedWord.split('').map((letter, index) => (
            <Typography key={index} variant="h4" component="span" style={{ margin: '0 5px' }}>
                {guessedLetters.includes(letter) ? letter : '_'}
            </Typography>
        ));
    };

    const renderKeyboard = () => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        return letters.map((letter) => (
            <Button
                key={letter}
                variant="outlined"
                onClick={() => handleLetterClick(letter)}
                disabled={guessedLetters.includes(letter) || isGameOver || isGameWon}
                style={{ margin: '5px' }}
            >
                {letter}
            </Button>
        ));
    };
    const resetGame = () => {
        setSelectedWord(upperCaseWords[Math.floor(Math.random() * upperCaseWords.length)]);
        setGuessedLetters([]);
        setWrongGuesses(0);
    };
    return (
        <Grid2 container direction="column" alignItems="center" spacing={2}>
            <Grid2>
                <Typography variant="h3">Hangman</Typography>
            </Grid2>
            <Grid2>{renderWord()}</Grid2>
            <Grid2>
                <Typography variant="h5">wrong predictions: {wrongGuesses}</Typography>
            </Grid2>
            <Grid2>{renderKeyboard()}</Grid2>
            {isGameWon && (
                <Grid2>
                    <Typography variant="h4" color="primary">
                        Congratulations! You've won!
                    </Typography>
                    <Button variant="contained" onClick={resetGame}>
                        Restart
                    </Button>
                </Grid2>
            )}
            {isGameOver && (
                <Grid2>
                    <Typography variant="h4" color="error">
                        You have lost! Word: {selectedWord}
                    </Typography>
                    <Button variant="contained" onClick={resetGame}>
                        Restart
                    </Button>
                </Grid2>
            )}
        </Grid2>
    );
};

export default Hangman;
