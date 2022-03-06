import React from 'react';
import { DataGrid, GridColDef, GridCellParams, GridCallbackDetails, MuiEvent, GridToolbar } from '@mui/x-data-grid';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton, Tooltip } from '@mui/material'

interface Prop {
    columns: GridColDef[],
    rows: readonly {
        [key: string]: any;
    }[],
    onCellClick: (
        params: GridCellParams, 
        event: MuiEvent<React.MouseEvent>, 
        details: GridCallbackDetails
    ) => void,
    onClickAddButton: () => void,
    addButtonTooltipTitle: string,
    isLoading: boolean
}

const DataGridComponent = ({ columns, rows, onCellClick, onClickAddButton, addButtonTooltipTitle, isLoading }: Prop) => 
{
    return (
        <div>
            <Tooltip title={ addButtonTooltipTitle } placement='left-start'>
                <IconButton 
                    sx={{ 
                        position: 'absolute',
                        right: 10,
                        bottom: 50
                    }}
                    onClick={ onClickAddButton }
                >
                    <AddCircleIcon sx={{ fontSize: '4rem' }} />
                </IconButton>
            </Tooltip>
            <DataGrid 
                rows={ rows } 
                columns={ columns } 
                autoHeight
                loading={ isLoading }
                onCellClick={ onCellClick }
                rowsPerPageOptions={ [5, 10, 15] }
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