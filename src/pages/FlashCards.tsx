import { useEffect, useState } from 'react'
import FlashCardService from '../service/flashCard'
import BasicCard from '../Components/Card'

type Word = {
  id: number
  word: string
  sentence: string
}
function FlashCards() {

  const [words, setWords] = useState<Word[]>([])
  useEffect(() => {
    FlashCardService.getAll().then
      (result => 
        setWords(result.data))
  }, [])
  console.log(words)
  return (
    <>
      <div >
        {words.map((word) => (
          <div key={word.id} style={{ margin: 10 }}>
            <BasicCard word={word.word} sentence={word.sentence} />
          </div>
        ))}
      </div>
    </>
  )
}

export default FlashCards
