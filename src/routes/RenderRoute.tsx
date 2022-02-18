import { Route as RRDRoute, Routes } from 'react-router-dom';
import { Route } from '../types/route';

interface Prop {
    routes: Route[]
}

const RenderRoute = ({ routes }: Prop) => 
{
    return (
        <Routes>
            {
                routes.map(({ key, path, component: Component }) => (
                    <RRDRoute  
                        key={ key }
                        path={ path }
                        element={ <Component /> }
                    />
                ))
            }
            <RRDRoute path='*' element={ <div>Not Found</div> } />
        </Routes>
    );
}

export default RenderRoute