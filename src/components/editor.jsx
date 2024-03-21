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


const Editor = () => {
    return (
        <Box>
            <Header>
                <Heading>
                    <Box component="span"
                    style={{
                        background:'red',
                        heigh:20,
                        width:20,
                        display:"flex",
                        placeContent:'center',
                        borderRadius: 5,
                        paddingBottom: 2,
                    }}
                    >
                        /
                    </Box>
                    Html
                </Heading>
                <CloseFullscreenIcon/>
            </Header>

           <ControlledEditor
           className="controlled-editor" 
           options={{
            theme: 'material',
            lineNumbers: true
          }}
          
           />
        </Box>
    )
}

export default Editor;