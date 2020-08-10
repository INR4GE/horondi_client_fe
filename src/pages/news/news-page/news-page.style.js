import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  newsTitle: {
    textAlign: 'center'
  },
  NewsPageItem: {
    margin: '5rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(25rem, auto))',
    gridColumnGap: '10px',
    justifyContent: 'center'
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1
  }
}));
