import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '../../components/dashboard/Card';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import PlaylistAddCheckCircleOutlinedIcon from '@mui/icons-material/PlaylistAddCheckCircleOutlined';
import { Divider } from '@mui/material';
import { useDispatch, connect } from 'react-redux';
import { getPageReportStart } from '../../redux/page-report/action.creators';
import { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { pageReportSelector } from './../../redux/page-report/selectors';
import { PageReportState } from '../../types/states/page-report/PageReportState';

const defaultData = [
	{
		label: 'Views',
		value: '100, 530',
		icon: RemoveRedEyeOutlinedIcon
	},
	{
		label: 'Projects',
		value: 15,
		icon: PlaylistAddCheckCircleOutlinedIcon
	},
	{
		label: 'Views',
		value: '100, 530',
		icon: RemoveRedEyeOutlinedIcon
	}
];

interface Prop {
	pageReportState: PageReportState
}

const DashboardPage = ({ pageReportState }: Prop) => 
{
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPageReportStart());
	}, []);

    return (
        <Container maxWidth="lg">
            <Grid container spacing={ 4 } justifyContent='center'>
				{
					defaultData.map((data, index) => (
						<Grid item xs={ 12 } sm={ 2 } key={ index }>
							<Card { ...data } />
						</Grid>
					))
				}
            </Grid>
			<Divider sx={{ height: '0.05rem', backgroundColor: '#FFFFFF' }} />
        </Container>
    );
};

const mapStateToProps = createStructuredSelector({
	pageReportState: pageReportSelector
});

export default connect(mapStateToProps)(DashboardPage);