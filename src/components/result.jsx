
import { useState ,useEffect} from 'react';
import {Box,styled} from '@mui/material';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
    height: 41vh
`

const Result = () => {
    const {Html,Css,Js} = useContext(DataContext);
    const [src,setSrc] = useState('');
    const srcCode = `
    <html>
    <body>${Html}</body>
    <style>${Css}</style>
    <script>${Js}</script>
    </html>`;



    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode);
        },1000)

        return () => clearTimeout(timeout);
    },[Html,Css,Js])
    return (
        <Container>
            <iframe title='Output' sandbox='allow-scripts' frameBorder={0}
            width="100%"
            height= "100%"
             srcDoc={src}></iframe>
        </Container>
    )
}

export default Result;