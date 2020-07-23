import React from 'react';
import ChevronDown2Icon from "assets/icons/ChevronDown2Icon";

interface IProps {
    label?: string;
    name?: string;
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    icon?: boolean;
    onChange?: any;
    onBlur?: any;
    onClick?: () => void;
}

const Input = (
    {
        label,
        name,
        disabled,
        placeholder,
        value,
        icon,
        onBlur,
        onChange,
        onClick,
    }: IProps) => {
    return (
        <div className={"customInputWrapper"}>
            <div className="inputLabel">{label}</div>
            <div onClick={onClick} className="customInput">
                <input
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    disabled={disabled}
                    onBlur={onBlur}
                    onChange={onChange}

                />
                {icon && <ChevronDown2Icon/>}
            </div>
        </div>
    );
};

export default Input;
