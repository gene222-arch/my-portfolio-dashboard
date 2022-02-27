import { ReactNode } from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { createStructuredSelector } from 'reselect';
import { authSelector } from './../../redux/auth/selectors';
import { connect } from 'react-redux';
import { AuthState } from '../../types/states/auth/AuthState';
import { ListItemButton, Tooltip, Grid, Avatar, IconButton } from '@mui/material';
import { ACCOUNT_PATH, DASHBOARD_PATH } from '../../routes/path';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => 
({
    width: drawerWidth,
    transition: theme.transitions.create(
        'width', 
        {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }
    ),
    overflowX: 'hidden'
});

const closedMixin = (theme: Theme): CSSObject => 
({
    transition: theme.transitions.create(
        'width', 
        {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }
    ),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    marginTop: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
    })<AppBarProps>(({ theme, open }) => 
    ({
        padding: '0.5rem 0',
        zIndex: theme.zIndex.drawer + 1,
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
  ({ theme, open }) => 
    ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const drawers = [
    {
        name: 'Dashboard',
        icon: DashboardRoundedIcon,
        path: DASHBOARD_PATH
    },
    {
        name: 'Account',
        icon: PersonRoundedIcon,
        path: ACCOUNT_PATH
    },
    {
        name: 'Projects',
        icon: PlaylistAddCheckCircleRoundedIcon,
        path: ''
    }
];

interface Prop {
    authState: AuthState,
    children: ReactNode
}

const DashboardLayout = ({ authState, children }: Prop) =>
{
    const open = false;
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" open={open} elevation={ 0 }>
                <Toolbar>
                    <Typography variant="subtitle1" noWrap component="div">
                        Good day! { authState.user.name }
                    </Typography>
                    <Grid container spacing={ 1 } alignItems='center' justifyContent='flex-end'>
                        <Grid item>
                            <IconButton>
                                <SearchOutlinedIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton>
                                <NotificationsActiveOutlinedIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton>
                                <Avatar src='https://cdn-icons-png.flaticon.com/512/147/147144.png' />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader />
                <Divider />
                <List>
                    {drawers.map(({ name, icon: Icon, path }, index) => (
                        <Tooltip key={ index } title={ name } placement='right'>
                            <ListItemButton
                                sx={{
                                    mb: 1,
                                    '&:hover': {
                                        transition: 'border-right .25s',
                                        borderRight: `0.25rem solid #ec5b53`
                                    }
                                }}
                                onClick={ () => navigate(path) }
                            >
                                <ListItemIcon>
                                    <Icon />
                                </ListItemIcon>
                            </ListItemButton>
                        </Tooltip>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
               { children }
            </Box>
        </Box>
    );
};

const mapStateToProps = createStructuredSelector({
    authState: authSelector
});

export default connect(mapStateToProps)(DashboardLayout);