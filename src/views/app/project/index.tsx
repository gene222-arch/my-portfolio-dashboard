import React, { useEffect } from 'react';
import { GridColDef, GridCellParams, GridCallbackDetails, MuiEvent, GridRenderCellParams } from '@mui/x-data-grid';
import { useDispatch, connect } from 'react-redux';
import { getProjectsStart } from './../../../redux/project/action.creators';
import { createStructuredSelector } from 'reselect';
import { projectSelector } from './../../../redux/project/selectors';
import { ProjectState } from '../../../types/states/project/ProjectState';
import { Tooltip } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { CREATE_PROJECT_PATH, EDIT_PROJECT_PATH } from '../../../routes/path';
import DataGridComponent from '../../../components/DataGridComponent';


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
        <DataGridComponent 
            columns={ columns }
            rows={ projectState.projects }
            onCellClick={ handleOnCellClick }
            onClickAddButton={ handleClickAdd }
            addButtonTooltipTitle='Create Project'
            isLoading={ projectState.isLoading }
        />
    );
};

const mapStateToProps = createStructuredSelector({
    projectState: projectSelector
});

export default connect(mapStateToProps)(ProjectPage);