import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#000000'
  },
  menuButton: {
    color: '#ffffff',
    '@media (min-width: 900px)': {
      display: 'none'
    }
  },
  title: {
    flexGrow: 1
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));
