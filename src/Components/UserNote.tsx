import { useEffect, useState } from 'react';
import { Container, Grid2, Pagination } from '@mui/material';
import { NoteDto } from '../service/types';
import { useSelector } from 'react-redux';
import { selectNotes } from '../features/selector';
import Note from './Note';

export default function UserNote() {
    const [notes, setNotes] = useState<NoteDto[]>([])
    const userNotes = useSelector(selectNotes)
    const [currentStep, setCurrentStep] = useState(1);
    const stepsPerPage = 1;
    useEffect(() => {
        setNotes(userNotes ?? [])
    }, [userNotes]);
    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentStep(value);
        console.log(event)
    };
    const startIndex = (currentStep - 1) * stepsPerPage;
    const selectedStep = notes.slice(startIndex, startIndex + stepsPerPage);

    return (
        <>
            <Container>
                <Grid2 direction="column"
                    container sx={{
                        alignItems: "center", justifyContent: "center",
                    }}>
                    {selectedStep.map((step, index) => (
                        <div key={index} style={{ margin: 10 }}>
                            <Note content={step.content} title={step.title} userNumber={step.userNumber} id={step.id ?? -1} />
                        </div>
                    ))}

                    <Pagination
                        count={Math.ceil(notes.length / stepsPerPage)}
                        page={currentStep}
                        onChange={handlePageChange}
                        color="primary"
                        style={{ marginTop: '20px', display: 'inline-block' }}
                        variant="outlined"
                    />
                </Grid2>
            </Container>

        </>
    );
}

