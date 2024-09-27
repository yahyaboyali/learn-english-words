import { useEffect, useState } from 'react'
import './App.css'
import BasicCard from './Components/Card'
import ResponsiveAppBar from './Components/Navigation'
import FlashCardService from './service/flashCard'

type Word = {
  id: number
  word: string
  sentence: string
}
function App() {

  const [words, setWords] = useState<Word[]>([])
  useEffect(() => {
    let flashCardService = new FlashCardService();
    flashCardService.getAll().then
      (result => 
        setWords(result.data))
  }, [])
  console.log(words)
  return (
    <>
      <ResponsiveAppBar />
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

export default App
