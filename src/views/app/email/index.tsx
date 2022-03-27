import { GridColDef } from '@mui/x-data-grid';
import DataGridComponent from 'components/DataGridComponent';

const columns: GridColDef[] = [
    { field: 'id', hide: true },
    { field: 'name', headerName: 'Name', width: 315 },
    { field: 'email', headerName: 'Email', width: 315 },
    { field: 'message', headerName: 'Message', width: 500 },
    { field: 'created_at', headerName: 'Mailed at', width: 200 },
];

const Email = () => 
{
    return (
        <DataGridComponent
            columns={ columns }
            rows={ [] }
            onCellClick={ () => 1 }
            onClickAddButton={ () => 1 }
            addButtonTooltipTitle=''
            isLoading={ false }
        />
    );
};

export default Email;