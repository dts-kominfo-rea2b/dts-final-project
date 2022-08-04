import React, { useState, useContext } from 'react';
import { Layout, Image, Menu, Button, Dropdown } from 'antd';
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { MenuOutlined } from "@ant-design/icons";
import Loading from './Loading';
import StateContext from '../context/StateContext';
import "../assets/css/navbar.css";
const { Header } = Layout

const Navbar = () => {
    const [user, isLoading] = useAuthState(auth);
    const { navMenu, setNavMenu } = useContext(StateContext);
    const navigate = useNavigate();
    const [mobile, setMobile] = useState(false);
    const checkResponsive = () => {
        if (window.innerWidth <= 580) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    };

    window.addEventListener("resize", checkResponsive);
    const handleMenu = (e) => {
        switch (e?.key) {
            case '1':
                setNavMenu(['1']);
                navigate("/");
                break;
            case '2':
                navigate("/about");
                setNavMenu(['2']);
                break;
            case '3':
                setNavMenu(['3']);
                navigate("/contact");
                break;
            case '4':
                handleAuth();
                break;
            default:
                break;
        }
    }
    const handleAuth = () => {
        if (user) {
            signOut(auth)
                .then(() => {
                    navigate("/login");
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            return navigate("/login");
        }
    };
    const menu = () => {
        return (
            <div style={{ width: 510, height: 'auto', marginLeft: '-100' }}>
                <Menu
                    mode="vertical"
                    style={{ backgroundColor: "#f0f0f0" }}
                    defaultSelectedKeys={navMenu}
                    onClick={e => handleMenu(e)}
                >
                    <Menu.Item key={"1"}>Homepage</Menu.Item>
                    <Menu.Item key={"2"}>About Us</Menu.Item>
                    <Menu.Item key={"3"}>Contact</Menu.Item>
                    <Menu.Item key={"4"}>{user ? 'Logout' : 'Login'}</Menu.Item>
                </Menu>

            </div>
        );
    }
    return (
        <>
            {
                isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <Header style={{ backgroundColor: "#f0f0f0", minHeight: "80px" }}>
                            {mobile ? (
                                <div className="header-wrapper">
                                    <Image onClick={(e) => navigate("/")} style={{ cursor: 'pointer' }} preview={false} src="/EdTech.png" width={120} />
                                    <Dropdown overlay={menu} trigger={['click']}>

                                        <div className="header-mobile-icon">
                                            <MenuOutlined />
                                        </div>
                                    </Dropdown>
                                </div>
                            ) : (
                                <div className="header-wrapper">
                                    <Image onClick={(e) => navigate("/")} style={{ cursor: 'pointer' }} preview={false} src="/EdTech.png" width={120} />
                                    <Menu
                                        mode="horizontal"
                                        style={{ backgroundColor: "#f0f0f0" }}
                                        defaultSelectedKeys={navMenu}
                                        onClick={e => handleMenu(e)}
                                    >
                                        <Menu.Item key={"1"}>Homepage</Menu.Item>
                                        <Menu.Item key={"2"}>About Us</Menu.Item>
                                        <Menu.Item key={"3"}>Contact</Menu.Item>
                                    </Menu>
                                    <Button
                                        shape="round"
                                        size="large"
                                        style={{ width: "150px" }}
                                        onClick={handleAuth}
                                    >
                                        {user ? "Logout" : "Login"}
                                    </Button>
                                </div>
                            )}

                        </Header>
                    </>
                )
            }
        </>
    )
}

export default Navbar