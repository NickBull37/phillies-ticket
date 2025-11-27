import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { PhilliesTicket } from "./components";

function App() {
    return (
        <Box>
            <Routes>
                <Route path="/" element={<PhilliesTicket />} />
            </Routes>
        </Box>
    );
}

export default App;
