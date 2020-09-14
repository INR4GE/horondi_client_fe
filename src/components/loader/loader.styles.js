import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    animationName: '',
    animationDuration: ''
  },
  ldsDualRing: {
    display: 'inline-block',
    margin: '0 auto',
    alignItems: 'center',
    alignSelf: 'center',
    '&::after': {
      content: '" "',
      display: 'block',
      width: (props)=> props.width ? props.width : '64px',
      height: (props)=> props.height ? props.height : '64px',
      margin: '8px',
      borderRadius: '50%',
      borderWidth: (props)=> `${props.thickness ? props.thickness : '6px'}`,
      borderStyle: 'solid',
      borderColor: `${theme.palette.textColor} transparent ${theme.palette.textColor} transparent`,
      animation: '$ldsDualRing 1.2s linear infinite',
    },
  },
  '@keyframes ldsDualRing': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  }
}));
