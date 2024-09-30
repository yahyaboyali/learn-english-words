import { Box, Button, CardActions, Divider } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

type Props = {
  word: string
  sentence: string
  translate: string
}
export default function MediaCard(props: Props) {
  const [showTranslate, setShowTranslate] = useState(false)

  const handleToggleTranslate = () => {
    setShowTranslate(prevState => !prevState);
  };
  return (
    <Card sx={{ minWidth: 300, minHeight: 250 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h4" component="div" textAlign={'center'}>
            {props.word}
          </Typography>
          {showTranslate && (
            <Typography variant="h6" sx={{ color: 'text.primary', ml: 2 }}>
              {props.translate}
            </Typography>
          )}
        </Box>
        <Divider />
        <Typography variant="h6" sx={{ color: 'text.primary' }}>
          {props.sentence}
        </Typography>

      </CardContent>
      <CardActions>
        <Box display="flex" justifyContent="center" width="100%">
          <Button variant="outlined" onClick={handleToggleTranslate} sx={{ mt: 2 }}>
            {showTranslate ? 'Hide Translation' : 'Show Translation'}
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
