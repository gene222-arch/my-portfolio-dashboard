import React, { ReactNode } from 'react';
import { DataGrid, GridCellParams, GridCallbackDetails, MuiEvent, GridToolbar } from '@mui/x-data-grid';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton, Tooltip, Typography, Grid, Button, FormControlLabel, Switch, Box } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';

interface Prop {
    title?: ReactNode,
    onCellClick?: (
        params: GridCellParams, 
        event: MuiEvent<React.MouseEvent>, 
        details: GridCallbackDetails
    ) => void,
    addAction?: boolean,
    onClickAddButton?: () => void,
    addButtonTooltipTitle?: string,
    deleteAction?: boolean,
    onClickDeleteButton?: () => void,
    restoreAction?: boolean,
    onClickRestoreButton?: () => void,
    isArchived?: boolean,
    setIsArchived?: React.Dispatch<React.SetStateAction<boolean>>
    isLoading: boolean,
}

const DataGridComponent = ({ 
    title,
    onCellClick = () => 1, 
    addAction = true, 
    onClickAddButton, 
    addButtonTooltipTitle, 
    deleteAction,
    onClickDeleteButton,
    restoreAction,
    onClickRestoreButton,
    isArchived,
    setIsArchived,
    isLoading, 
    ...props 
}: Prop & Omit<React.ComponentProps<typeof DataGrid>, "classes">) => 
{
    return (
        <div>
            {
                (addAction && addButtonTooltipTitle) && (
                    <Tooltip title={ addButtonTooltipTitle } placement='left-start'>
                        <IconButton 
                            sx={{ 
                                position: 'fixed',
                                right: 50,
                                bottom: 50,
                                zIndex: 9999
                            }}
                            onClick={ onClickAddButton }
                        >
                            <AddCircleIcon sx={{ fontSize: '4rem' }} />
                        </IconButton>
                    </Tooltip>
                )
            }
            {
                (typeof isArchived !== 'undefined') && (
                    <Box sx={{ textAlign: 'right' }}>
                        <Tooltip title='View archived emails'>
                            <FormControlLabel 
                                control={<Switch checked={ isArchived } 
                                onChange={ e => setIsArchived?.(! isArchived)} />} 
                                label="" 
                            />
                        </Tooltip>
                    </Box>
                )
            }
            <Grid container spacing={1} alignItems='center' justifyContent='space-between'>
                {
                    title && (
                        <Grid item>
                            <Typography variant="h3" py={ 2 } pl={ 2 }>{ title }</Typography>
                        </Grid>
                    )
                }
                {
                    (restoreAction && isArchived) && (
                        <Grid item>
                            <Tooltip title='Restore'>
                                <span>
                                    <Button variant='text' color="warning" onClick={ onClickRestoreButton } disabled={ !props.rows.length }>
                                        <SettingsBackupRestoreIcon />
                                    </Button>
                                </span>
                            </Tooltip>
                        </Grid>
                    )
                }
                {
                    (deleteAction && !isArchived) && (
                        <Grid item>
                            <Tooltip title='Delete'>
                                <span>
                                    <Button variant="text" color="error" onClick={ onClickDeleteButton } disabled={ !props.rows.length }>
                                        <RemoveCircleIcon />
                                    </Button>
                                </span>
                            </Tooltip>
                        </Grid>
                    )
                }
            </Grid>
            <DataGrid 
                { ...props }
                autoHeight
                loading={ isLoading }
                onCellDoubleClick={ onCellClick }
                pageSize={ 5 }
                rowsPerPageOptions={ [5, 10, 15, 20, 100] }
                components={{ Toolbar: GridToolbar }}
                density='comfortable'
                sx={{
                    '& .MuiDataGrid-cell:hover': {
                        color: 'primary.main',
                        cursor: 'pointer'
                    }
                }}
            />
        </div>
    );
};

export default DataGridComponent;