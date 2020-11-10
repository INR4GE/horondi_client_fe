import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1280,
    margin: '50px auto',
    display: 'flex',
    flexFlow: 'wrap',
    boxSizing: 'border-box',
    justifyContent: 'center'
  },
  modelItem: {
    flex: '1 0 31.3333%',
    margin: 5,
    boxSizing: 'border-box',
    display: 'flex',
    overflow: 'hidden',
    height: 200,
    position: 'relative',
    '& > *': {
      flex: 1
    },
    '&:after': {
      content: `''`,
      background: 'black',
      opacity: '.7',
      position: 'absolute',
      transition: 'opacity .2s ease',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    },
    '&:hover div:last-child img': {
      zIndex: 12,
      transform: 'scale(1.1)'
    },
    '&:hover div:first-child': {
      color: 'black'
    },
    '&:hover:after': {
      opacity: '.1'
    }
  },
  modelItemTitle: {
    padding: 20,
    display: 'flex',
    alignItems: 'flex-end',
    zIndex: 10,
    color: 'white',
    fontSize: '1.6em',
    fontWeight: '400',
    textShadow: '2px 2px 10px black',
    textAlign: 'left',
    transition: 'color .2s ease'
  },
  modelItemImage: {
    width: '50%',
    height: '100%',
    position: 'absolute',
    right: '30px',
    backgroundSize: 'cover',
    '& img': {
      transition: 'all .2s ease',
      width: 'auto',
      height: '100%'
    }
  }
}));
