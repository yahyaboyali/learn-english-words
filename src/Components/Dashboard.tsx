import { Routes, Route } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import FlashCards from '../pages/FlashCards'
import AddFlashCard from '../pages/AddNewWord'
import ResponsiveAppBar from './Navigation'
import NotePage from '../pages/NotePage'
import UserPage from '../pages/UserPage'

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
            </Routes>
        </div>
    )
}