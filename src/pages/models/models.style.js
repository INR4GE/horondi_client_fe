import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1280,
    margin: '50px auto',
    display: 'flex',
    flexFlow: 'wrap',
    boxSizing: 'border-box'
  },
  modelItem: {
    flex: '1 0 31.3333%',
    maxWidth: '31%',
    margin: 10,
    borderRadius: '10px',
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
      opacity: '.3',
      position: 'absolute',
      transition: 'opacity .2s ease',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    },
    '&:hover div:last-child': {
      zIndex: 12,
      transform: 'scale(1.1)'
    },
    '&:hover:after': {
      opacity: '.1'
    }
  },
  modelItemTitle: {
    padding: 10,
    display: 'flex',
    alignItems: 'flex-end',
    zIndex: 10,
    color: 'white',
    fontSize: '1.5em',
    fontWeight: 'bold',
    textShadow: '2px 2px 10px black'
  },
  modelItemImage: {
    width: '100%',
    height: '100%',
    transition: 'all .2s ease'
  }
}));
