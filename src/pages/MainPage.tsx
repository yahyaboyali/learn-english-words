import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';


export default function MainPage() {
    const navigate = useNavigate();

    const handleAboutClick = () => {
        navigate('/flashCards');
    };
    return (
        <>
            <Button>Add Flash Card</Button>
            <Button onClick={handleAboutClick}>My Flash Cards</Button>
        </>
    )
}