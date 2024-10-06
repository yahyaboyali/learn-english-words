//import { useSelector } from "react-redux";
//import { selectUser } from "../features/selector";
import WelcomeComponent from "../Components/WelcomeComponent";
import UserMenuFlashCard from "../Components/UserMenuFlashCard";
import { Grid2 } from "@mui/material";
import { useLocation } from "react-router-dom";
import { UserMenuCard } from "../Components/UserMenuNoteCard";

export default function UserPage() {
    //const user = useSelector(selectUser); // Kullanıcı bilgilerini al
    const location = useLocation();
    const user = location.state?.user;
    // console.log(userCards)
    return (
        <>
            <Grid2 container spacing={2}>
                <Grid2 size={12}>
                    <WelcomeComponent user={user} />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <UserMenuFlashCard />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <UserMenuCard />
                </Grid2>
            </Grid2>

        </>
    )
}
