import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Alleviate 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <ul>
                <li>
                The government launched new policies to alleviate the effects of inflation on low-income families.
                </li>
                <li>
                The government launched new policies to alleviate the effects of inflation on low-income families.
                </li>
            </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}
