import { Box, Button, Divider, Grid2, Paper } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

type Props = {
    title: string
    content: string
    userNumber: number
    id: number
}
export default function Note(props: Props) {
    const navigate = useNavigate()
    const handleEditButton = () => {
        navigate('/editNote', { state: { note: props } })
    }
    return (
        <Card sx={{ minWidth: 300, minHeight: 250 }}>
            <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography gutterBottom variant="h4" component="div" textAlign={'center'}>
                        {props.title}
                    </Typography>
                </Box>
                <Divider />
                <Typography variant="h6" sx={{ color: 'text.primary' }}>
                    <Grid2 container spacing={2}>
                        <Grid2 size={12}>
                            <Paper style={{ padding: '20px' }}>
                                <Typography variant="body1" dangerouslySetInnerHTML={{ __html: props.content }} />
                            </Paper>
                        </Grid2>
                    </Grid2>
                </Typography>
                <Grid2 sx={{ marginTop: '10px', textAlign: 'right' }}>
                    <Button variant='contained' onClick={handleEditButton} >Düzenle</Button>
                </Grid2>
            </CardContent>
        </Card>
    )
}
