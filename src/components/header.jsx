import { AppBar,Toolbar,styled } from "@mui/material";
import Logo from "../assests/img.png";

const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;
    position:static;
`


const Header = () =>{
    return (
        <Container>
            <Toolbar>
                <img src= {Logo} alt="CodePen" />
            </Toolbar>
        </Container>
    );
}

export default Header;