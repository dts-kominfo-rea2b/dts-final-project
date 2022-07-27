import { Box, Link, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const About = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            minHeight: "100px",
            padding: 5,
            borderRadius: "30px",
            background:
              " linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)",
            marginY: 5,
          }}
        >
          <Stack spacing={1}>
            <Typography>
              <strong>Gusti Adi Putra</strong>
              <strong>Dina Kominfo Kab.Lahat</strong>
              {" "}
            </Typography>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default About;
