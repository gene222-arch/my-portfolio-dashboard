import React, { useEffect } from 'react';
import { GridColDef, GridCellParams, GridCallbackDetails, MuiEvent, GridRenderCellParams } from '@mui/x-data-grid';
import { useDispatch, connect } from 'react-redux';
import { getTestimonialsStart } from './../../../redux/testimonial/action.creators';
import { createStructuredSelector } from 'reselect';
import { testimonialSelector } from './../../../redux/testimonial/selectors';
import { TestimonialState } from '../../../types/states/testimonial/TestimonialState';
import { Rating, Tooltip } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { CREATE_TESTIMONIAL_PATH, EDIT_TESTIMONIAL_PATH } from '../../../routes/path';
import DataGridComponent from '../../../components/DataGridComponent';


const renderCell = (params: GridRenderCellParams<any, any, any>) => (
    <Tooltip title='Edit' placement='top-start'>
        <span>{ params.value }</span>
    </Tooltip>
);

const renderCellRate = (params: GridRenderCellParams<any, any, any>) => (
    <Tooltip title='Edit' placement='top-start'>
		<Rating name="half-rating" value={ parseFloat(params.value) } precision={ 0.5 } />
    </Tooltip>
);

const renderCellBody = (params: GridRenderCellParams<any, any, any>) => (
    <Tooltip title='Edit' placement='top-start'>
        <span>{ params.value.substr(0, 55)+ '...' }</span>
    </Tooltip>
);

const columns: GridColDef[] = [
    { field: 'id', hide: true, renderCell },
    { field: 'name', headerName: 'Name', width: 300, renderCell },
    { field: 'body', headerName: 'Body', width: 500, renderCell: renderCellBody },
    { field: 'profession', headerName: 'Profession', width: 300, renderCell },
    { field: 'rate', headerName: 'Rate', width: 300, renderCell: renderCellRate },
];

interface Prop {
    testimonialState: TestimonialState
}

const TestimonialPage = ({ testimonialState }: Prop) => 
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
            EDIT_TESTIMONIAL_PATH.replace(':id', params.row.id)
        );
    };

    const handleClickAdd = () => navigate(CREATE_TESTIMONIAL_PATH);

    useEffect(() => {
        dispatch(getTestimonialsStart());
    }, []);

    return (
        <DataGridComponent 
            columns={ columns }
            rows={ testimonialState.testimonials }
            onCellClick={ handleOnCellClick }
            onClickAddButton={ handleClickAdd }
            addButtonTooltipTitle='Create Testimonial'
            isLoading={ testimonialState.isLoading }
        />
    );
};

const mapStateToProps = createStructuredSelector({
    testimonialState: testimonialSelector
});

export default connect(mapStateToProps)(TestimonialPage);