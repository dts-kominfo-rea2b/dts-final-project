import React from "react";
import { Button, Box } from "@mui/material";

const Buttons = ({ filterItem, setItem, menuItems, dataGSM }) => {
    return (
        <Box sx={{mt: 4, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', mb: 7}}>
            <p>Filter By Category:</p>
            {
                menuItems.map((Val, slug) => {
                    return (
                        <Button variant="contained" sx={{ ml: 2, mr: 2 }} onClick={() => filterItem(Val)} key={slug} >{Val}</Button>
                    );
                })
            }
            <Button variant="contained" sx={{ ml: 2, mr: 2 }} onClick={() => setItem(dataGSM)}>All</Button>
        </Box>
    );
};

export default Buttons;