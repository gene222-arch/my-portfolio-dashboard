import { CssBaseline } from '@mui/material';
import { createStructuredSelector } from 'reselect';
import { privateRoutes, publicRoutes } from './routes';
import RenderRoute from './routes/RenderRoute';
import AuthLayout from './views/layouts/AuthLayout';
import DashboardLayout from './views/layouts/DashboardLayout';
import { authSelector } from './redux/auth/selectors';
import { connect } from 'react-redux';
import { AuthState } from './types/states/auth/AuthState';
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from './config/muiTheme';

interface Prop {
    authState: AuthState
}

const App = ({ authState }: Prop) => 
{
    return (
        <ThemeProvider theme={ muiTheme }>
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
        </ThemeProvider>
    )  
};

const mapStateToProps = createStructuredSelector({
    authState: authSelector 
});

export default connect(mapStateToProps)(App);
