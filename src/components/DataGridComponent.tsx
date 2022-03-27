import React from 'react';
import { DataGrid, GridColDef, GridCellParams, GridCallbackDetails, MuiEvent, GridToolbar } from '@mui/x-data-grid';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton, Tooltip, Typography } from '@mui/material'

interface Prop {
    title?: string,
    columns: GridColDef[],
    rows: readonly {
        [key: string]: any;
    }[],
    onCellClick: (
        params: GridCellParams, 
        event: MuiEvent<React.MouseEvent>, 
        details: GridCallbackDetails
    ) => void,
    addAction?: boolean,
    onClickAddButton?: () => void,
    addButtonTooltipTitle: string,
    isLoading: boolean
}

const DataGridComponent = ({ title, columns, rows, onCellClick, addAction = true, onClickAddButton, addButtonTooltipTitle, isLoading }: Prop) => 
{
    return (
        <div>
            {
                addAction && (
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
                title && <Typography variant="h3" py={ 2 } pl={ 2 }>{ title }</Typography>
            }
            <DataGrid 
                rows={ rows } 
                columns={ columns } 
                autoHeight
                loading={ isLoading }
                onCellClick={ onCellClick }
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