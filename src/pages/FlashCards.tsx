import { useEffect, useState } from 'react'
import BasicCard from '../Components/Card'
import { Container, Grid2, Pagination } from '@mui/material'
import { useLocation } from 'react-router-dom'
type Word = {
  id: number
  word: string
  sentence: string
  translate: string
}
function FlashCards() {
  const location = useLocation();
  const userCards = location.state?.userCards; // Yönlendirmeden gelen kullanıcı bilgileri
  console.log(userCards)
  const [words, setWords] = useState<Word[]>([])
  const [currentStep, setCurrentStep] = useState(1);
  const stepsPerPage = 1;

  useEffect(() => {
    setWords(userCards)
  }, [userCards])
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentStep(value);
    console.log(event)
  };
  const startIndex = (currentStep - 1) * stepsPerPage;
  const selectedStep = words.slice(startIndex, startIndex + stepsPerPage);
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
          />
        </Grid2>

      </Container>

    </>
  )
}

export default FlashCards
