import React from 'react';
import {Breadcrumb, Button, Input, Layout, Menu, theme} from 'antd';
import './App.css';
import {LeftOutlined, RightOutlined, ShareAltOutlined, UserAddOutlined} from "@ant-design/icons";
import MyInput from "./components/input/MyInput";
import MyButton from "./components/button/MyButton";

const {Header, Content, Footer} = Layout;

function UserOutlined() {
    return null;
}

const App: React.FC = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Layout className="layout">
            <Header>
                <div className="logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={new Array(3).fill(null).map((_, index) => {
                        const key = index + 1;
                        return {
                            key,
                            label: `nav ${key}`,
                        };
                    })}
                />
            </Header>
            <Content style={{padding: '80px 50px'}}>
                <div className="site-layout-content">
                    <h1 className="reg-form-title">Account security</h1>
                    <div className="underline"></div>
                    <div className="form-wrap">
                        <p className="reg-form-desc"><UserAddOutlined/>Personal data</p>
                        <div className="reg-input-inner">
                            <div className="reg-input-wrap">
                                <MyInput type='password' text="Enter your password"/>
                                <p className="input-desc">Minimum eight (8) characters. At least one (1) uppercase
                                    (A-Z), lowercase (a-z), digit (0-9) and special characters (~`@#$)</p>
                            </div>
                            <div className="reg-input-wrap">
                                <MyInput type='password' text="Repeat your password"/>
                            </div>
                        </div>
                        <div className="underline"></div>
                        <p className="reg-form-desc"><ShareAltOutlined/> Contacts</p>
                        <div className="reg-input-inner">
                            <div className="reg-input-wrap">
                                <MyInput type='text' text="Enter your Email"/>
                            </div>
                            <div className="reg-input-wrap">
                                <MyInput type='text'
                                    text="Enter your phone number (optional)"/>
                            </div>
                        </div>
                        <div className="underline"></div>
                        <div className="form-bottom-wrap">
                            <MyButton class="go-back-btn"  btnValue = "Go back">
                            </MyButton>
                            <MyButton classBtn="next-step-btn" btnArrow={<RightOutlined/>} btnValue="Next step"></MyButton>
                        </div>
                    </div>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    );
};

export default App;
