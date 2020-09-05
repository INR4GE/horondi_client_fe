import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  newsTitle: {
    textAlign: 'center'
  },
  NewsPageItem: {
    marginTop: '5rem',
    margin: '5rem auto',
    marginRight: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(27rem, auto))',
    gridColumnGap: '15px',
    justifyContent: 'center'
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1
  }
}));
