import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../assets/mui-theme';


const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: theme.palette.primary.main,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.text.primary,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.primary,
  }
});

export default CustomTextField;