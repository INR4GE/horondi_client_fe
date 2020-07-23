import { makeStyles } from '@material-ui/core/styles';

const heart = {
  marginTop: '1.2rem',
  marginRight: '1.2rem',
  fontSize: '2.5rem',
  '&:hover': {
    transform: 'scale(1.1)',
    cursor: 'pointer'
  },
  '@media (max-width: 600px)': {
    marginRight: '0'
  }
};

const useStyles = makeStyles((theme) => ({
  heart: {
    ...heart
  },
  redHeart: {
    ...heart,
    color: '#ed0505'
  },
  submit: {
    display: 'flex',
    '@media (max-width: 600px)': {
      '& *': {
        marginRight: '0.5rem'
      }
    },
    '@media (max-width: 1300px)': {
      marginTop: '0'
    }
  },
  submitButton: {
    marginRight: '1rem',
    marginTop: '1rem',
    textTransform: 'none',
    textAlign: 'center',
    fontSize: '1rem',
    backgroundColor: theme.palette.button.normal.backgroundColor,
    color: theme.palette.button.normal.color,
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    },
    '@media (max-width: 600px)': {
      marginRight: '0',
      paddingRight: '0',
      fontSize: '0.8rem'
    }
  }
}));

export default useStyles;
