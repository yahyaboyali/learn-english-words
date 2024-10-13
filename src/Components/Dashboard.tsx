import { Routes, Route } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import FlashCards from '../pages/FlashCards'
import AddFlashCard from '../pages/AddNewWord'
import ResponsiveAppBar from './Navigation'
import NotePage from '../pages/NotePage'
import UserPage from '../pages/UserPage'
import Hangman from '../pages/Hangman'
import UserNote from './UserNote'
import EditNote from '../pages/EditNote'

export default function Dashboard() {
    return (
        <div>
            <ResponsiveAppBar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/flashCards" element={<FlashCards />} />
                <Route path="/addFlashCard" element={<AddFlashCard />} />
                <Route path='/notePad' element={<NotePage />} />
                <Route path='/userPage' element={<UserPage />} />
                <Route path='/hangman' element={<Hangman />} />
                <Route path='/userNote' element={<UserNote />} />
                <Route path='/editNote' element={<EditNote />} />
            </Routes>
        </div>
    )
}