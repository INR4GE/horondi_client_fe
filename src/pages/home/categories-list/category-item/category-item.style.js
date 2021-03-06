import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  categoryItem: (props) => ({
    backgroundImage: `url(${props.image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'calc(100% - 40px)',
    height: '500px',
    margin: '20px',
    cursor: 'pointer',
    borderRadius: 5,
    boxShadow: '0px 5px 8px #c5c5c5',
    '&:hover': {
      '& span': {
        fontSize: 30
      }
    },
    '@media (max-width: 768px)': {
      width: 'calc(100% - 40px)',
      height: '420px'
    }
  }),
  categoryNameWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: '60%',
    height: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& span': {
      fontSize: 24
    }
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  }
}));
