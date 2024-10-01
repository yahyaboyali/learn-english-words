import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import UserService from '../service/users'
import FlashCardService from '../service/flashCard'
import { useDispatch } from "react-redux";
import { setUser } from "../features/userSlice";

interface User {
    id: number;
    userName: string;
}
export default function MainPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch(); // dispatch'i tanımlıyoruz

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        UserService.getAll().then(result =>
            setUsers(result.data.data)
        )
    }, [])
    const handleUserChange = async (event: React.SyntheticEvent, newValue: User | null) => {
        console.log(event)
        if (newValue) {
            try {
                // Seçilen kullanıcıya ait bilgileri al
                const response = await FlashCardService.getByUserId(newValue.id);
                dispatch(setUser(newValue));
                // Kartlar sayfasına yönlendir
                navigate(`/flashCards`, { state: { userCards: response.data.data } }); // Yönlendirme ve state ile veri gönderimi
            } catch (error) {
                console.error('Kullanıcı bilgileri alınırken hata oluştu:', error);
            }
        }
    };

    return (
        <>
            <Autocomplete getOptionLabel={(option) => option.userName} // Bu kısım objeden string alır
                onChange={handleUserChange}
                options={users} renderInput={(params) => <TextField {...params} label="Users"
                    sx={{ width: 300 }}
                />}
            />
        </>
    )
}