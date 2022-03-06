import React, { useEffect } from 'react';
import { DataGrid, GridColDef, GridCellParams, GridCallbackDetails, MuiEvent, GridRenderCellParams } from '@mui/x-data-grid';
import { useDispatch, connect } from 'react-redux';
import { getProjectsStart } from './../../../redux/project/action.creators';
import { createStructuredSelector } from 'reselect';
import { projectSelector } from './../../../redux/project/selectors';
import { ProjectState } from '../../../types/states/project/ProjectState';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton, Tooltip } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { CREATE_PROJECT_PATH, EDIT_PROJECT_PATH } from '../../../routes/path';


const renderCell = (params: GridRenderCellParams<any, any, any>) => (
    <Tooltip title='Edit' placement='top-start'>
        <span>{ params.value }</span>
    </Tooltip>
);

const columns: GridColDef[] = [
    { field: 'id', hide: true, renderCell },
    { field: 'title', headerName: 'Title', width: 315, renderCell },
    { field: 'image_url', headerName: 'Image', width: 315, renderCell },
    { field: 'description', headerName: 'Description', width: 500, renderCell },
    { field: 'created_at', headerName: 'Date Created', width: 200, renderCell },
];

interface Prop {
    projectState: ProjectState
}

const ProjectPage = ({ projectState }: Prop) => 
{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnCellClick = (
        params: GridCellParams, 
        event: MuiEvent<React.MouseEvent>, 
        details: GridCallbackDetails
    ) => 
    {
        navigate(
            EDIT_PROJECT_PATH.replace(':id', params.row.id)
        );
    };

    const handleClickAdd = () => navigate(CREATE_PROJECT_PATH);

    useEffect(() => {
        dispatch(getProjectsStart());
    }, []);

    return (
        <div>
            <Tooltip title='Create Project' placement='left-start'>
                <IconButton 
                    sx={{ 
                        position: 'absolute',
                        right: 10,
                        bottom: 50
                    }}
                    onClick={ handleClickAdd }
                >
                    <AddCircleIcon sx={{ fontSize: '4rem' }} />
                </IconButton>
            </Tooltip>
            <DataGrid 
                rows={ projectState.projects } 
                columns={ columns } 
                autoHeight
                loading={ projectState.isLoading }
                onCellClick={ handleOnCellClick }
                rowsPerPageOptions={ [5, 10, 15] }
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

const mapStateToProps = createStructuredSelector({
    projectState: projectSelector
});

export default connect(mapStateToProps)(ProjectPage);