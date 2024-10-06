import { useEffect, useState } from 'react'
import BasicCard from '../Components/Card'
import { Button, Container, Grid2, Pagination } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectFlashCards, selectUser } from '../features/selector'
import { FlashCardDto } from '../service/types'

function FlashCards() {
  const navigate = useNavigate();
  const user = useSelector(selectUser); // Kullanıcı bilgilerini al
  const flashCards = useSelector(selectFlashCards);
  const userCards = flashCards; // Yönlendirmeden gelen kullanıcı bilgileri
  const [words, setWords] = useState<FlashCardDto[]>([])
  const [currentStep, setCurrentStep] = useState(1);
  const stepsPerPage = 1;

  useEffect(() => {
    setWords(userCards ?? [])
  }, [userCards])
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentStep(value);
    console.log(event)
  };
  const startIndex = (currentStep - 1) * stepsPerPage;
  const selectedStep = words.slice(startIndex, startIndex + stepsPerPage);

  const handleBackToUserPage = () => {
    navigate(`/userPage`, { state: { user: user } }); // Yönlendirme ve state ile veri gönderimi

  }
  return (
    <>
      <Container>
        <Grid2 direction="column"
          container sx={{
            alignItems: "center", justifyContent: "center",
          }}>
          {selectedStep.map((step, index) => (
            <div key={index} style={{ margin: 10 }}>
              <BasicCard word={step.word} sentence={step.sentence} translate={step.translate} />
            </div>
          ))}

          <Pagination
            count={Math.ceil(words.length / stepsPerPage)}
            page={currentStep}
            onChange={handlePageChange}
            color="primary"
            style={{ marginTop: '20px', display: 'inline-block' }}
            variant="outlined"
          />
        </Grid2>
        <Grid2 sx={{ marginTop: '10px' }}>
          <Button variant='contained' onClick={handleBackToUserPage}>geri dön </Button>
        </Grid2>
      </Container>

    </>
  )
}

export default FlashCards
