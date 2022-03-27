import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { EmailItemType } from 'types/states/email/EmailState';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => 
{
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} { ...other }>
            { children }
            { 
                onClose 
                    ? (
                        <IconButton
                            aria-label="close"
                            onClick={onClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    ) 
                    : null
            }
        </DialogTitle>
    );
};

interface Prop {
    email: EmailItemType | null,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DisplayEmailContentDialog = ({ email, open, setOpen }: Prop) => 
{
    const {  
        name,
        email: emailAddress,
        message,
        created_at
    } = email || {};

    const toggle = () => setOpen(! open);

    return (
        <div>
            <BootstrapDialog
                onClose={ toggle }
                aria-labelledby="display-email-content-dialog-title"
                open={ open }
            >
                <BootstrapDialogTitle id="display-email-content-dialog-title" onClose={ toggle }>
                    { name }
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        { message }
                    </Typography>
                    <Typography variant='caption' color='GrayText' gutterBottom>
                         - { emailAddress }
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Typography variant="subtitle2" color='GrayText'>{ created_at }</Typography>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
};

export default DisplayEmailContentDialog;
