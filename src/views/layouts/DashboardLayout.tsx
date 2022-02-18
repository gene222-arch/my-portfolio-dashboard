import { ReactNode } from 'react'

interface Prop {
    children: ReactNode
}

const DashboardLayout = ({ children }: Prop) => 
{
    return (
        <div>
            DashboardLayout
            { children }
        </div>
    );
};

export default DashboardLayout