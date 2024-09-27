import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

type Props = {
  word : string
  sentence : string
}
export default function MediaCard(props: Props) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.word}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <ul>
                <li>
                  {props.sentence}
                </li>
            </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}
