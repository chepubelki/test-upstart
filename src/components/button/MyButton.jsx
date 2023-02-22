import React from 'react';
import {Button} from "antd";
import './MyButton.css';
import {LeftOutlined, RightOutlined} from "@ant-design/icons";

const MyButton = ({classBtn, btnValue, btnArrow}) => {
    return (
        <Button className={classBtn}>{btnValue}{btnArrow}</Button>
    );
};

export default MyButton;