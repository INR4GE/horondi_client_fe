import { colors } from '@material-ui/core';

import theme from './theme';

const white = '#FFFFFF';
const black = '#000000';

export const paletteGenerator = (colorSchema) => ({
  black,
  white,
  textColor: theme[colorSchema].textColor,
  backgroundColor: theme[colorSchema].backgroundColor,
  card: {
    backgroundColor: theme[colorSchema].card.backgroundColor,
    border: theme[colorSchema].card.border,
    childrenBackgroundColor: theme[colorSchema].card.childrenBackgroundColor,
    selectedButton: {
      backgroundColor: theme[colorSchema].card.selectedButton.backgroundColor,
      color: theme[colorSchema].card.selectedButton.color
    }
  },
  button: {
    normal: {
      backgroundColor: theme[colorSchema].button.normal.backgroundColor,
      color: theme[colorSchema].button.normal.color
    },
    hover: {
      backgroundColor: theme[colorSchema].button.hover.backgroundColor,
      color: theme[colorSchema].button.hover.color
    },
    disabled: {
      backgroundColor: theme[colorSchema].button.disabled.backgroundColor,
      color: theme[colorSchema].button.disabled.color
    }
  },
  primary: {
    contrastText: white,
    dark: colors.grey[900],
    main: colors.grey[900],
    light: colors.grey[900]
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue.A400,
    light: colors.blue.A400
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  icon: colors.blueGrey[600],
  type: colorSchema
});
