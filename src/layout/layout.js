import { Layout, Image, Button, Menu, Switch } from 'antd';
import React, { useContext } from 'react';
import avatar from '../assets/images/avatar.png';
import '../assets/css/header.css';
import { useNavigate } from 'react-router-dom'
import {
    ContainerOutlined,
    HomeOutlined
} from '@ant-design/icons';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import StateContext from '../context/StateContext'

const { Header, Sider, Content } = Layout;


const LayoutDashboard = ({ children }) => {
    const { menuActive, setMenuActive, theme, setTheme } = useContext(StateContext)
    const navigate = useNavigate();

    const handleMenu = (e) => {
        switch (e?.key) {
            case '1':
                setMenuActive(['1']);
                navigate("/dashboard");
                break;
            case '2':
                navigate("/dashboard/create");
                setMenuActive(['2']);
                break;
            default:
                break;
        }
    }
    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate("/login");
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <Layout>
            <Header style={{ backgroundColor: theme === 'light' ? '#FFFFFF' : '#212130', lineHeight: 0, height: 'auto' }}>
                <div className='header-layout-wrapper'>
                    {
                        theme === 'light' ? <Image preview={false} src="/EdTech.png" width={125} /> : <Image preview={false} src="/EdTech-white.png" width={125} />
                    }

                    <div className='right-layout-header'>
                        <span style={{ color: theme === 'light' ? '#000' : '#fff', fontFamily: 'iceland', fontWeight: '500', fontSize: 22 }}>Theme</span>
                        <Switch
                            defaultChecked
                            onChange={(e) => setTheme(e ? 'light' : 'dark')}
                            checkedChildren="Light"
                            unCheckedChildren="Dark"
                        />
                        <Image style={{ padding: 0, margin: 0 }} preview={false} src={avatar} width={40} />
                        <Button ghost={theme !== 'light' ? true : false} shape="round"
                            size="large" onClick={handleLogout}>Logout</Button>
                    </div>
                </div>
            </Header>
            <Layout>
                <Sider style={{ minHeight: '90vh', backgroundColor: theme === 'light' ? '#FFFFFF' : '#212130' }}>
                    <hr style={{ marginBottom: 20, width: '70%', textAlign: 'center', height: 3, backgroundColor: '#5932EA' }} />
                    <Menu
                        style={{ backgroundColor: theme === 'light' ? '#FFFFFF' : '#212130', color: theme === 'light' ? '#000' : '#fff' }}
                        mode="inline"
                        defaultSelectedKeys={menuActive}
                        onClick={e => handleMenu(e)}
                        items={[
                            {
                                key: '1',
                                icon: <HomeOutlined />,
                                label: 'Homepage',
                            },
                            {
                                key: '2',
                                icon: <ContainerOutlined />,
                                label: 'Create Post',
                            },
                        ]}
                    />



                </Sider>
                <Content style={{ backgroundColor: theme === 'light' ? '#F2F4FA' : '#171622', padding: 20 }} >{children}</Content>
            </Layout>
        </Layout>
    )
}

export default LayoutDashboard;