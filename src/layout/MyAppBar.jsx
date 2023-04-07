import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, Typography } from '@mui/material';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  }
}));

function Layout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Task App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Layout;