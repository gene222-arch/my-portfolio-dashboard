import { CssBaseline } from '@mui/material';
import { privateRoutes, publicRoutes } from './routes';
import RenderRoute from './routes/RenderRoute';
import AuthLayout from './views/layouts/AuthLayout';
import DashboardLayout from './views/layouts/DashboardLayout';

const App = () => 
{
    return (
        <div>
            <CssBaseline />
            <AuthLayout>
                <RenderRoute routes={ publicRoutes } />
            </AuthLayout>
            <DashboardLayout>
                <RenderRoute routes={ privateRoutes } />
            </DashboardLayout>
        </div>
    )  
};

export default App;
