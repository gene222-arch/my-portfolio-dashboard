import { IconButton, Tooltip } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import DataGridComponent from 'components/DataGridComponent';
import { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { getEmailsStart } from 'redux/email/action.creators';
import { emailSelector } from 'redux/email/selectors';
import { createStructuredSelector } from 'reselect';
import { EmailState } from 'types/states/email/EmailState';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 300 },
    { field: 'email', headerName: 'Email', width: 300 },
    { field: 'message', headerName: 'Message', width: 412 },
    { field: 'created_at', headerName: 'Mailed at', width: 300 },
    { 
        field: 'action buttons', 
        headerName: 'Action', 
        width: 100,
        renderCell: (params: GridRenderCellParams<any, any, any>) => (
            <Tooltip title='View More Details' placement='top-start'>
                <IconButton>
                    <VisibilityTwoToneIcon color='info' />
                </IconButton>
            </Tooltip>
        ),
    }
];

interface Prop {
    emailState: EmailState
}

const Email = ({ emailState }: Prop) => 
{
    const dispatch = useDispatch();
    const [ isArchived, setIsArchived ] = useState(false);

    useEffect(() => {
        dispatch(getEmailsStart({ archive: isArchived }));
    }, []);

    return (
        <DataGridComponent
            columns={ columns }
            rows={ emailState.emails }
            onCellClick={ () => 1 }
            onClickAddButton={ () => 1 }
            addButtonTooltipTitle=''
            isLoading={ emailState.isLoading }
        />
    );
};

const mapStateToProps = createStructuredSelector({
    emailState: emailSelector
});

export default connect(mapStateToProps)(Email);