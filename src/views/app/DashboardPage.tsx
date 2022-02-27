import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '../../components/dashboard/Card';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import PlaylistAddCheckCircleOutlinedIcon from '@mui/icons-material/PlaylistAddCheckCircleOutlined';
import { Divider } from '@mui/material';

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
	},
	{
		label: 'Projects',
		value: 15,
		icon: PlaylistAddCheckCircleOutlinedIcon
	}
];

const DashboardPage = () => 
{
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

export default DashboardPage