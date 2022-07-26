import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../assets/mui-theme';


const CustomCard = styled(Card)({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: '50px',
  padding: '15px 0',
  overflow: 'visible'
});

export default CustomCard;