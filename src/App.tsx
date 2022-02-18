import { CssBaseline } from '@mui/material';
import { createStructuredSelector } from 'reselect';
import { privateRoutes, publicRoutes } from './routes';
import RenderRoute from './routes/RenderRoute';
import AuthLayout from './views/layouts/AuthLayout';
import DashboardLayout from './views/layouts/DashboardLayout';
import { authSelector } from './redux/auth/selectors';
import { connect } from 'react-redux';
import { AuthState } from './types/states/auth/AuthState';

interface Prop {
    authState: AuthState
}

const App = ({ authState }: Prop) => 
{
    return (
        <div>
            <CssBaseline />
            {
                !authState.isAuthenticated && (
                    <AuthLayout>
                        <RenderRoute routes={ publicRoutes } />
                    </AuthLayout>
                )
            }
            {
                authState.isAuthenticated && (
                    <DashboardLayout>
                        <RenderRoute routes={ privateRoutes } />
                    </DashboardLayout>
                )
            }
        </div>
    )  
};

const mapStateToProps = createStructuredSelector({
    authState: authSelector 
});

export default connect(mapStateToProps)(App);
