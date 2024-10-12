import { Box, Button, CardActions, Divider } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { selectTranslateState } from '../features/selector';
import { useDispatch } from 'react-redux';
import { clearTranslateStatus, setTranslateStatus } from '../features/translate';

type Props = {
  word: string
  sentence: string
  translate: string
}
export default function MediaCard(props: Props) {
  //const [showTranslate, setShowTranslate] = useState(false)
  const translateState = useSelector(selectTranslateState)
  const dispatch = useDispatch(); // dispatch'i tanımlıyoruz

  const handleToggleTranslate = () => {
    if (translateState) {
      dispatch(clearTranslateStatus());
    } else {
      dispatch(setTranslateStatus());
    }
  };
  return (
    <Card sx={{ minWidth: 300, minHeight: 250 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h4" component="div" textAlign={'center'}>
            {props.word}
          </Typography>
          {translateState && (
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
            {translateState ? 'Hide Translation' : 'Show Translation'}
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
