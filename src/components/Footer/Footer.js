import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'; 
import MonasLogoUrl from '../../assets/img/monas.svg';

const StyledFooter = styled.footer`
    text-align:center;
    width: 100%;
    display:flex;
    flex:1;
    align-items: center;
    justify-content: center;
    padding:20px 0;
    border-top:1px solid #ccc;
`;

const AuthorLink = styled(Link)`
    color:#333;
    text-decoration: none;
    margin: 0 5px;
    font-weight: 500;
`;

const LoveIcon = styled(FontAwesomeIcon)`
    color:red;
    margin:0 5px;
`;

const MonasIcon = styled.img`
    width: 25px;
    margin-left: 5px;
`;

const Footer = () => {
    return (
        <StyledFooter>
            &copy; All Right Reserved - Developed by <AuthorLink to='https://github.com/ahanafi'> Ahmad Hanafi</AuthorLink>
            with <LoveIcon icon={faHeart} /> in Jakarta <MonasIcon src={MonasLogoUrl} />
        </StyledFooter>
    );
}

export default Footer;