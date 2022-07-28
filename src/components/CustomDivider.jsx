import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../assets/mui-theme';

const CustomDivider = styled(Divider)({
  backgroundColor: theme.palette.primary.main,
  border: "2px solid rgba(0,0,0,0)",
  borderRadius: 1,
});

export default CustomDivider;