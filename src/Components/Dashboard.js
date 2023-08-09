import React from 'react';
import { styled, createTheme, ThemeProvider, alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { secondaryListItems, firstListItems, thirdListItems } from './ListItems';
import Orders from './Orders';
import { Avatar, Tooltip } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import blue from '@mui/material/colors/blue'
import EmailIcon from '@mui/icons-material/Email';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import DoughnutChart from './DoughnutChart';
import AreaChart from './AreaChart';


const dashList = [{
    lb1: "EARNINGS(MONTHLY)",
    lb2: "$40,000",
    clr: "#4e73df",
    icon: <CalendarTodayIcon />
},
{
    lb1: "EARNINGS (ANNUAL)",
    lb2: "$215,000",
    clr: "#1cc88a",
    icon: <AttachMoneyIcon />
}, {
    lb1: "TASK",
    lb2: "50%",
    clr: "#36b9cc",
    icon: <AssignmentIcon />
}, {
    lb1: "PENDING REQUESTS",
    lb2: "18",
    clr: "#f6c23e",
    icon: <ChatBubbleIcon />
}
]

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright ©'}
            <Link color="inherit" href="https://mui.com/">
                SBAdmin2
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#858796",
    color: "#f8f9fc",
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),

}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({

        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            backgroundColor: "#4e73df",
            color: "#f8f9fc",

            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',

                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),

                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },

            }),
        },
    }),
);

const mdTheme = createTheme();

function DashboardContent() {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },

        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#4e73df",
        width: '10%',
        borderRadius: 2,
    }));

    

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),

            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />

                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: "24px",
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: "36px",
                                ...(open && { display: "none" }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ "aria-label": "search" }}
                            />
                        </Search>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        ></Typography>

                        <IconButton color="inherit">
                            <Badge badgeContent={3} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                            <Badge badgeContent={7} color="error">
                                <EmailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                            <Tooltip title="Shiva Prasad">
                                <Avatar sx={{ bgcolor: blue[500] }}>SC</Avatar>
                            </Tooltip>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            px: 1,
                        }}
                    >
                        <EmojiEmotionsIcon />

                        <Typography component="div" variant="h6">
                            &nbsp;&nbsp;SB ADMIN <sup>2</sup>
                        </Typography>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        {firstListItems}
                        <Divider sx={{ my: 1 }} />
                        {secondaryListItems}
                        <Divider sx={{ my: 1 }} />
                        {thirdListItems}
                        <Divider sx={{ my: 1 }} />
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === "light"
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: "100vh",
                        overflow: "auto",
                    }}
                >
                    <Toolbar />
                    <Typography
                        variant="div"
                        component="h1"
                        sx={{ textAlign: "left", m: 2 }}
                    >
                        Dashboard
                    </Typography>

                    <Grid container spacing={2} sx={{ m: 2 }}>
                        {dashList.map((el, index) => (
                            <Grid key={index} item>
                                <Paper
                                    sx={{
                                        height: 100,
                                        width: 300,
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                                        borderLeft: `5px solid ${el.clr}`,

                                        p: 1,
                                    }}
                                >
                                    <Typography
                                        variant="body1"
                                        component="h1"
                                        sx={{ color: `${el.clr}`, textAlign: "left" }}
                                    >
                                        {" "}
                                        {el.lb1}
                                    </Typography>
                                    <Grid container alignItems="left">
                                        <Grid item xs>
                                            <Typography
                                                variant="h5"
                                                component="span"
                                                sx={{ textAlign: "left" }}
                                            >
                                                {" "}
                                                {el.lb2}{" "}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                gutterBottom
                                                variant="h6"
                                                component="div"
                                                sx={{ color: "#858796" }}
                                            >
                                                {el.icon}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container spacing={2} sx={{ m: 2 }}>
                        <Grid key="area" item>
                            <Paper
                                sx={{
                                    height: 450,
                                    width: 830,
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",

                                    p: 3,
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{ color: `#4e73df`, textAlign: "left" }}
                                >
                                    Earnings Overview
                                </Typography>
                                <Divider />
                                <AreaChart />
                            </Paper>
                        </Grid>
                        <Grid key="do" item>
                            <Paper
                                sx={{
                                    height: 450,
                                    width: 400,
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                                    p: 1,
                                }}
                            >
                                {" "}
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{ color: `#4e73df`, textAlign: "left" }}
                                >
                                    {" "}
                                    Revenue Sources
                                </Typography>
                                <Divider />
                                <DoughnutChart />
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ m: 2 }}>
                        <Grid key="order" item>
                            <Paper
                                sx={{
                                    height: 450,
                                    width: 1240,
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",

                                    p: 3,
                                }}
                            >
                                <Orders />
                            </Paper>
                        </Grid>
                    </Grid>

                    <Copyright sx={{ pt: 4 }} />
                </Box>
            </Box>
        </ThemeProvider>
    )

}


export default function Dashboard() {
    return <DashboardContent />;
}