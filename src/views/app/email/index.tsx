import { IconButton, Tooltip } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import DataGridComponent from 'components/DataGridComponent';
import { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { destroyEmailsStart, getEmailsStart, restoreEmailsStart } from 'redux/email/action.creators';
import { emailSelector } from 'redux/email/selectors';
import { createStructuredSelector } from 'reselect';
import { EmailItemType, EmailState } from 'types/states/email/EmailState';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import DisplayEmailContentDialog from 'components/email/DisplayEmailContentDialog';

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 300 },
    { field: 'email', headerName: 'Email', width: 300 },
    { field: 'message', headerName: 'Message', width: 412 },
    { field: 'created_at', headerName: 'Mailed at', width: 300 }
];

interface Prop {
    emailState: EmailState
}

const Email = ({ emailState }: Prop) => 
{
    const dispatch = useDispatch();
    const [ isArchived, setIsArchived ] = useState(false);
    const [ email, setEmail ] = useState<EmailItemType | null>(null)
    const [ emailIDs, setEmailIDs ] = useState<number[]>([]);
    const [ open, setOpen ] = useState(false);

    const handleClickView = (payload: EmailItemType) => {
        setEmail(payload);
        setOpen(true);
    };

    useEffect(() => {
        dispatch(getEmailsStart({ archive: isArchived }));
    }, [isArchived]);

    return (
        <div>
            <DisplayEmailContentDialog email={ email } open={ open } setOpen={ setOpen } />
            <DataGridComponent  
                title='Emails'
                rows={ emailState.emails }
                columns={[
                    ...columns,
                    { 
                        field: 'action buttons', 
                        headerName: 'Action', 
                        width: 100,
                        renderCell: (params: GridRenderCellParams<any, any, any>) => (
                            <Tooltip title='View More Details' placement='top-start'>
                                <IconButton onClick={ () => handleClickView(params.row) }>
                                    <VisibilityTwoToneIcon color='info' />
                                </IconButton>
                            </Tooltip>
                        ),
                    }
                ]}
                addAction={ false }
                deleteAction
                checkboxSelection
                onSelectionModelChange={ e => setEmailIDs(e as number[]) }
                onClickDeleteButton={ () => dispatch(destroyEmailsStart({ ids: emailIDs })) }
                restoreAction
                onClickRestoreButton={ () => dispatch(restoreEmailsStart({ ids: emailIDs })) }
                isArchived={ isArchived }
                setIsArchived={ setIsArchived }
                isLoading={ emailState.isLoading }
            />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    emailState: emailSelector
});

export default connect(mapStateToProps)(Email);