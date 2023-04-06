import { Container, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
  }
});

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="sm">
      <TextField id="standard-basic" label="Task" variant="standard" />
    </Container>
  );
}

export default App;
