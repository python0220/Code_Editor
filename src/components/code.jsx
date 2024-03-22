import Editor from './editor';
import { Box,styled } from '@mui/material';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
    display: flex;
    background: #060606;
`


const Code = ()=>{
    const {Html,setHtml,Css,setCss,Js,setJs} =  useContext(DataContext);

    return (
        <Container>
        <Editor
        heading="HTML"
        icon ="/"
        iconcolor='red'
        value={Html}
        onChange={setHtml}
        />
        <Editor
        heading="CSS"
        icon ="*"
        iconcolor='blue'
        value={Css}
        onChange={setCss}
        />
        <Editor
        heading="JS"
        icon ="{}"
        iconcolor='yellow'
        value={Js}
        onChange={setJs}
        />
        </Container>
    )
}

export default Code;