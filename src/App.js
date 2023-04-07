import { Container, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MyAppBar from './layout/MyAppBar';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: 50,
  },
});

function App() {
  const classes = useStyles();

  return (
    <div>
      <MyAppBar />
      <Container className={classes.container} maxWidth="xs">
        <TextField id="standard-basic" label="Task" variant="standard" />
      </Container>
    </div>
  );
}

export default App;
