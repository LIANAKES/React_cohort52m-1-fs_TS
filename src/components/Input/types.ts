export interface InputProps {
    name: string;
    type: string;
    placeholder?: string;
    label?: string;
    id?: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
