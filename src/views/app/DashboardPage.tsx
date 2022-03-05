import { useEffect, useMemo } from 'react';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '../../components/dashboard/Card';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import PlaylistAddCheckCircleOutlinedIcon from '@mui/icons-material/PlaylistAddCheckCircleOutlined';
import RecommendIcon from '@mui/icons-material/Recommend';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import { Divider, SvgIconTypeMap } from '@mui/material';
import { useDispatch, connect } from 'react-redux';
import { getPageReportStart } from '../../redux/page-report/action.creators';
import { createStructuredSelector } from 'reselect';
import { pageReportSelector } from './../../redux/page-report/selectors';
import { PageReportState } from '../../types/states/page-report/PageReportState';
import { OverridableComponent } from '@mui/material/OverridableComponent';


export type GeneralAnalytic = {
	label: string,
	value: number,
	icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    }
};

const defaultData: GeneralAnalytic[] = [
	{
		label: 'Likes',
		value: 0,
		icon: RecommendIcon
	},
	{
		label: 'Projects',
		value: 0,
		icon: PlaylistAddCheckCircleOutlinedIcon
	},
	{
		label: 'Sent Mails',
		value: 0,
		icon: MarkEmailUnreadIcon
	},
	{
		label: 'Views',
		value: 0,
		icon: RemoveRedEyeOutlinedIcon
	}
];

interface Prop {
	pageReportState: PageReportState
}

const DashboardPage = ({ pageReportState }: Prop) => 
{
	const dispatch = useDispatch();
	
	const data: GeneralAnalytic[] = useMemo(() => 
	{
		const { pageReport } = pageReportState;

		const result = defaultData.map(d => 
		{
			switch (d.label) 
			{
				case 'Likes':
					return {
						...d,
						value: pageReport.likes	
					};

				case 'Views':
					return {
						...d,
						value: pageReport.views
					};

				case 'Sent Mails':
					return {
						...d,
						value: pageReport.sent_mails
					};
				
				default:
					return {
						...d,
						value: pageReport.projects
					};
			}
		});

		return result;
	}, [pageReportState.pageReport]);

	useEffect(() => {
		dispatch(getPageReportStart());
	}, []);

    return (
        <Container maxWidth="lg">
            <Grid container spacing={ 4 } justifyContent='center'>
				{
					data.map((d, index) => (
						<Grid item xs={ 12 } sm={ 2 } key={ index }>
							<Card { ...d } />
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