import React from 'react';
import { Typography, Box, Avatar } from '@mui/material';
import { User } from '../service/types'; // User tipini kendi dosya yolunuza göre ayarlayın

// Props tipi tanımı
type WelcomeComponentProps = {
    user: User | null;
};

const WelcomeComponent: React.FC<WelcomeComponentProps> = ({ user }) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            p={2}
            bgcolor="background.paper"
            borderRadius={2}
            boxShadow={2}
        >
            <Avatar alt={user?.userName} src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56, marginRight: 2 }} />

            <Typography variant="h6">
                Welcome, {user?.userName}!
            </Typography>
        </Box>
    );
}

export default WelcomeComponent;
