import { ReactNode } from 'react'

interface Prop {
    children: ReactNode
}

const AuthLayout = ({ children }: Prop) => {
    return (
        <div>
            AuthLayout
            { children }
        </div>
    );
};

export default AuthLayout