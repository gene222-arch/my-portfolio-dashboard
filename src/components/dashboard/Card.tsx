import { Card as MuiCard, CardContent, Grid, IconButton, SvgIconTypeMap, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { GeneralAnalytic } from '../../views/app/DashboardPage';

const Card = ({ label, value, icon: Icon }: GeneralAnalytic) => 
{
    return (
        <MuiCard 
            sx={{ 
                width: '100%', 
                height: '23vh',
                background: `linear-gradient(to bottom, #2c2c2c 1%, #121212 100%);` 
            }}
        >
            <CardContent>
                <Grid container spacing={ 2 } flexDirection='column' alignItems='center'>
                    <Grid item>
                        <IconButton>
                            <Icon fontSize='large' />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" color='GrayText'>
                            { label }
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" sx={{ color: '#ec5b53' }}>
                            <strong>{ value }</strong>
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </MuiCard>
    );
};

export default Card;