import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../assets/mui-theme';


const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: theme.palette.secondary.main,
  },
  '& .MuiOutlinedInput-root': {
    color: theme.palette.secondary.main,
    '& fieldset': {
      borderColor: theme.palette.secondary.main,
      color: theme.palette.secondary.main,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.background.contrastText,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.secondary.main,
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.background.contrastText,
  }
});

export default CustomTextField;