import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextFields from './../../components/account-page/TextFields';

const AccountPage = () => 
{
    return (
        <Container maxWidth="lg">
            <Grid container spacing={1}>
                <Grid item>
                    <TextFields />
                </Grid>
                <Grid item>

                </Grid>
            </Grid>
        </Container>
    );
};

export default AccountPage;