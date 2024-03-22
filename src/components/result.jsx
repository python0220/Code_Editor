
import { useState ,useEffect} from 'react';
import {Box,styled} from '@mui/material';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

const Result = () => {
    const {Html,Css,Js} = useContext(DataContext);
    const {src,setSrc} = useState('');
    const srcCode = `
    <html>
    <body>${Html}</body>
    <style>${Css}</style>
    <sript>${Js}</sript>
    </html>`
    return (
        <Box>
            <iframe title='Output' sandbox='allow-scripts' frameBorder={0}
            width="100%"
            height= "100%"
             srcDoc={srcCode}></iframe>
        </Box>
    )
}

export default Result;