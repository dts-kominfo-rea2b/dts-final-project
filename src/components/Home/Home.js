import Hero from "../Hero/Hero";
import NavigationBar from "../Navbar/NavigationBar";
import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import ListSurat from '../ListSurat/ListSurat';
import Footer from '../Footer/Footer';

const Title = styled.h3`
    font-family: 'Quicksand', serif;
    font-weight: 700;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:1rem 0;
    margin-bottom: 1rem;
    text-shadow: 3px 2px 2px #ccc;
`;

const Home = () => {
    return (
        <>
            <NavigationBar />
            <Hero />
            <Container>
                <Title>Daftar Surah</Title>
                <ListSurat />
            </Container>
            <Footer />
        </>
    )
}

export default Home;