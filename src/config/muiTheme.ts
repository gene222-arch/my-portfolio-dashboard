import { createTheme, Theme, responsiveFontSizes } from "@mui/material/styles";

const muiTheme: Theme = createTheme({
    palette: {
        mode: "dark"
    }
});

export default responsiveFontSizes(muiTheme);