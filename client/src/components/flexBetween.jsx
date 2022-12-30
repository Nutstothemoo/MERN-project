import { Box } from "@mui/material";
import { styled } from "@mui/system";


// styled components permet de share le CSS entre composant
const FlexBetween = styled(Box) ({
    display: "flex",
    justifyContent:"space-between",
    alignItems:"center"
})
export default FlexBetween;