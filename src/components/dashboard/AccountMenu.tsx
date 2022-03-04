import React from 'react';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import { Menu } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { logoutStart } from './../../redux/auth/action.creators';

interface Prop {
    anchorEl: null | HTMLElement,
    setAnchorEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>
}

const AccountMenu = ({ anchorEl, setAnchorEl }: Prop) => 
{
    const dispatch = useDispatch();

    const handleClickSignout = () => dispatch(logoutStart());

    return (
        <Menu 
            sx={{ width: '20rem' }}
            anchorEl={anchorEl}
            open={ Boolean(anchorEl) }
            onClose={ () => setAnchorEl(null) }
        >
            <MenuItem>
                <ListItemIcon>
                    <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
                <Typography variant="body2" color="text.secondary">
                    ⌘X
                </Typography>
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <ContentCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
                <Typography variant="body2" color="text.secondary">
                    ⌘C
                </Typography>
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>Paste</ListItemText>
                <Typography variant="body2" color="text.secondary">
                    ⌘V
                </Typography>
            </MenuItem>
            <Divider />
            <MenuItem onClick={ handleClickSignout }>
                <ListItemIcon>
                    <LogoutIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Sign out</ListItemText>
            </MenuItem>
        </Menu>
    );
};

export default AccountMenu;
