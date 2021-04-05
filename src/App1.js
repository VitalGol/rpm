t Articles from "./components/Articles/Articles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // color: "#000000",
        // backgroundColor: "#46b3e6",
    },
    menuImg: {
        marginRight: theme.spacing(2),
        height: "80px",
        width: "80px",
        margin: "5px 5px 5px 0",
    },
    title: {
        // color: "#212529",
        color: "#46b3e6",
        flexGrow: 1,
    },
    menuRight: {
        // marginLeft: 0,
        // padding: 0,
        // color: "red",
        color: "#000",
    },
}));
const App = () => {

    return ( <
        div className = { classes.root } >
        <
        AppBar position = "static"
        style = {
            { backgroundColor: "inherit" } } >
        <
        Toolbar >
        <
        Avatar alt = "Remy Sharp"
        src = "../assets/logoRPM.png"
        className = { classes.menuImg }
        /> <
        Typography variant = "h6"
        className = { classes.title } >
        Результативно Позитивно Мягко <
        /Typography>

        <
        Tabs value = { selectedTab }
        onChange = { handleChange }
        className = { classes.menuRight } >
        <
        Tab label = "Главная" / >
        <
        Tab label = "Рейки" / >
        <
        Tab label = "Остеопатия" / >
        <
        Tab label = "Массаж" / >
        <
        Tab label = "Курсы, обучение" / >
        <
        Tab label = "Статьи" / >
        <
        /Tabs> <
        /Toolbar> <
        /AppBar>

        { selectedTab === 0 && < About / > } { selectedTab === 1 && < Rejki / > } { selectedTab === 2 && < Osteopathy / > } { selectedTab === 3 && < Massage / > } { selectedTab === 4 && < Courses / > } { selectedTab === 5 && < Articles / > } <
        /div>
    );
};
export default App;