import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextFields from './../../components/account-page/TextFields';
import { useDispatch, connect } from 'react-redux';
import { useEffect } from 'react';
import { getAccountDetailsStart } from './../../redux/auth/action.creators';
import { createStructuredSelector } from 'reselect';
import { userSelector } from './../../redux/auth/selectors';
import { User } from './../../types/states/auth/User';

interface Prop {
    userState: User
}

const AccountPage = ({ userState }: Prop) => 
{
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAccountDetailsStart(userState.id));
    }, []);

    return (
        <Container maxWidth="lg">
            <Grid container spacing={1}>
                <Grid item>
                    <TextFields key={ JSON.stringify(userState) } />
                </Grid>
                <Grid item>

                </Grid>
            </Grid>
        </Container>
    );
};

const mapStateToProps = createStructuredSelector({
    userState: userSelector
});

export default connect(mapStateToProps)(AccountPage);