import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;
const FooterPage = () => {
    return (
        <Footer style={{ backgroundColor: '#000', minHeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <span style={{ fontFamily: 'Montserrat', color: '#fff', fontWeight: '400', fontSize: '15' }}>&copy; EdTech by Febry Nugroho | 2022</span>
        </Footer>
    )
}

export default FooterPage;