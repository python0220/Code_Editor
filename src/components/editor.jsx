import { useState } from "react";

import { Box,styled } from "@mui/material";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

import {Controlled as ControlledEditor} from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';


import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import '../App.css';

const Heading = styled(Box)`
  width: 70px;
  background:#1d1e22;
  display:flex;
  padding:9px 12px;
  justify-content:space-between;

`;


const Header = styled(Box)`
    display:flex;
    background: #060606;
    color: #AAAEBC;
    justify-content: space-between;
    font-weight: 700;
`

const Container = styled(Box)`
    flex-grow:1;
    flex-basic:0;
    display:flex;
    flex-direction:column;
    padding: 0 5px 0 0;
    max-width: calc(100vw/3);
`


const Editor = ({heading,icon,iconcolor,value,onChange}) => {
    const [open , setOpen] = useState(true);

    const handleChange = (editor,data,value) => {
        onChange(value)
    }

    return (
        <Container style={open?null: {flexGrow:0}} >
            <Header>
                <Heading>
                    <Box component="span"
                    style={{
                        background:iconcolor,
                        heigh:20,
                        width:20,
                        display:"flex",
                        placeContent:'center',
                        borderRadius: 5,
                        paddingBottom: 2,
                        alignSelf:'center'
                    }}
                    >
                        {icon}
                    </Box>
                    {heading}
                </Heading>
                <CloseFullscreenIcon
                fontSize="small"
                onClick={() => setOpen(prevState => !prevState)}
                style={{
                    alignSelf:'center'
                }}
                />
            </Header>

           <ControlledEditor
           className="controlled-editor" 
           options={{
            theme: 'material',
            lineNumbers: true
          }}
          value={value}
          onBeforeChange={handleChange}
           />
        </Container>
    )
}

export default Editor;