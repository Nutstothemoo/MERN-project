import { useState } from "react";
import { Box, IconButton, InputBase,Typography,Select,MenuItem, FormControl, useTheme ,useMediaQuery } from "@mui/material";
import { Search, Message, Darkmode, Lightmode,Notification, Help, Menu, Close } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode,setLogout } from "../../state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../components/flexBetween";


const Navbar = ()=>{
const [isMobileMenuToggled, setIsMobileMenuToggled]= useState(false);
const dispatch = useDispatch();
const navigate = useNavigate();
const user = useSelector((state)=>{state.user});
const isNonMobileScreens = useMediaQuery("(min-width:1000px");
const theme = useTheme();
const neutralLight = theme.palette.neutral.light;
const dark = theme.palette.neutral.dark;
const background = theme.palette.background.default;
const primaryLight = theme.palette.primary.light;
const alt= theme.palette.background.alt;

const fullName = `${user.firstName} ${user.lastName}`

    return
    <FlexBetween padding ="1rem 6%" backgroundColor={alt}>
        <FlexBetween gap= "1.75 rem">
            <Typography 
            fontWeight="bold"
            fontSize="clamp(1rem, 2 rem , 2.25 rem)"
            color="primary"
            onClick={()=> navigate("/home")}
            sx={{
                "&:hover":{
                    color:primaryLight,
                    cursor:"pointer",
                },
            }}
            >
            FuegCollective 
            </Typography>

            {/* SEARCHBAR */}
            {isNonMobileScreens && (<FlexBetween 
                backgroundColor = {neutralLight} 
                borderRadius ="9px" 
                gap="3rem" 
                padding="0.1 rem 1.5 rem"
                >
                <InputBase placeholder="Rechercher" />
                <IconButton>
                    <Search />
                </IconButton>
                </FlexBetween>
                )}
        </FlexBetween>

        {/* NAVABAR POUR ORDINATEUR */}

        {isNonMobileScreens ? (
        <FlexBetween gap="2rem" >
            <IconButton onClick={()=>dispatch(setMode())}>
                {theme.palette.mode === "dark"? (
                    <Darkmode sx
                )}

            </IconButton>
        </FlexBetween>) : (
        <IconButton>

        </IconButton>
        )}       
        
    </FlexBetween>

};
export default Navbar;