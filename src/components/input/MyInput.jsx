import React, {useState} from 'react';
import {Input} from "antd";
import './MyInput.css';
import {DeleteOutlined} from "@ant-design/icons";

const MyInput = ({text, type, ...props}) => {
    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState('');
    function handleTextChange(text) {
        setValue(text);

        if (text !== '') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    return (
        <div className="float-input">
            <Input
                value={value}
                onChange={(e) => handleTextChange(e.target.value)}
                type={type}
                rootClassName="input"
                allowClear={{clearIcon: <DeleteOutlined/>}}
            />
            <label
                className={ isActive ? "Active" : ""}
                className="input-text" htmlFor={type}
            >
                {text}
            </label>
        </div>
    );
};

export default MyInput;