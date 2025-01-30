import { ReactNode } from 'react';

export interface ButtonProps {
    name?: string,
    type?: 'submit' | 'button' | 'reset',
    onClick: () => void 
    children?: ReactNode;
}
