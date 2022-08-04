import React from "react";
import { Box } from "@mui/material";

const Deskripsi = (props) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ width: 'auto', display: 'flex', textAlign: 'justify' }}>
                {props.description}
            </Box>
        </Box>
    );
}

export default Deskripsi;