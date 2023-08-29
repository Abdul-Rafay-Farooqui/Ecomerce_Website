import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    container:{
        backgroundColor: '#242424',
        padding: "8px",
    },
    icon: {
        marginRight: '20px',
    },
    button: {
        marginTop: '40px',
        marginLeft: '100px'
    },
    cardGrid: {
        Padding : "20px", 
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "colunm",
    },
    cardMedia: {
        paddingTop: "56.25%",
    },
    cardContent: {
        flexGrow: '1',
    } 


}));
export default useStyles;