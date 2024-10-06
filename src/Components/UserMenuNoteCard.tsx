import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material';


export const UserMenuCard = () => {
    const handleAddNote = () => {
    };

    const handleGetNotes = async () => {

    }
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Notes
                </Typography>
                <Accordion style={{ marginTop: '7px' }} >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        Adding Notes
                    </AccordionSummary>
                    <AccordionDetails>
                        Creating notes is an excellent way to organize and deepen your learning. Here’s how to effectively add a general note:
                        <ol>
                            <li>
                                <b>Choose a Topic:</b> Identify the main subject of the note—this could be a grammar rule, study tip, or cultural insight related to English learning.
                            </li>
                            <li>
                                <b>Personal Insights: </b> Jot down how this note relates to your learning journey or why it’s important. This personal touch makes the information more memorable.
                            </li>
                            <li>
                                <b>Write Clearly: </b>  Summarize the key points in your own words. Keeping it concise and clear will make the information easier to review later.
                            </li>
                        </ol>

                    </AccordionDetails>
                    <AccordionActions>
                        <Button onClick={handleAddNote}>Add New Note</Button>
                    </AccordionActions>
                </Accordion>
                <Accordion style={{ marginTop: '7px' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        Viewing Your Notes:
                    </AccordionSummary>
                    <AccordionDetails>
                        Regularly reviewing your general notes helps reinforce what you've learned and keeps important information fresh in your mind. Here’s how to effectively view your notes:
                        <ol>
                            <li>
                                <b>Read and Reflect: </b> Go through each note, taking time to reflect on the key points and how they relate to your current learning.
                            </li>
                            <li>
                                <b>Update if Needed: </b>If you’ve gained new insights or want to add more examples, feel free to update your notes. Keeping them relevant enhances their usefulness.
                            </li>
                        </ol>

                    </AccordionDetails>
                    <AccordionActions>
                        <Button onClick={handleGetNotes}>get Notes</Button>
                    </AccordionActions>
                </Accordion>
            </CardContent>
        </Card>
    )
}
