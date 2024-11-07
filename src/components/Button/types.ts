export interface IButtonProps {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled: boolean;
}

export interface IButtonPropsStyle extends React.HtmlHTMLAttributes<HTMLButtonElement>{
    disabled: boolean;
}