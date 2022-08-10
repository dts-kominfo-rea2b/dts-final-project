import {detailgsmdb} from '../api/gsmarena';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import theme from '../themes/theme';
import {Card, Box, ThemeProvider, List, ListItem, Button} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const DetailPage = () => {

    let params = useParams();

    const [gsm, setGsm] = useState([]);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const difetchDetail = await detailgsmdb.get("/"+params?.slug);
                setGsm(difetchDetail.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchDetail();
    }, [params?.slug]);

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Navbar></Navbar>
                <Card sx={{ display: 'flex', marginTop:3, marginLeft:1, marginRight:1, marginBottom:10}}>
                    <Box sx={{marginTop: 11}}>
                        <Box sx={{display: 'flex', paddingLeft: 1}}>
                            <Button variant="outlined" href='/'>Back to Home</Button>
                        </Box>
                        <Box sx={{display: 'flex', width: '100%', flexDirection: 'column', flexWrap: 'wrap', marginBottom:6}}>
                        <h1>{params?.phone_names}</h1>

                            {
                                gsm.map(item => (
                                    <List>
                                        <ListItem>{item.phone_name}.</ListItem>
                                        <ListItem sx={{textAlign: 'right'}}>{item.specifications}</ListItem>
                                        <ListItem>{item.slug}</ListItem>
                                    </List>
                                ))
                            }
                            <hr/>
                        </Box>
                    </Box>
                </Card>
                <Footer></Footer>
            </div>
        </ThemeProvider>
    )
}

export default DetailPage;