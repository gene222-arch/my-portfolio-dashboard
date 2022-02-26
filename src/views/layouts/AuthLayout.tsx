import { ReactNode } from 'react'

interface Prop {
    children: ReactNode
}

const AuthLayout = ({ children }: Prop) => {
    return (
        <div>
            { children }
        </div>
    );
};

export default AuthLayout