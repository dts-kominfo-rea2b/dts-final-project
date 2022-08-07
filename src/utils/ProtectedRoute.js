import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Space, Spin } from 'antd';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';

const ProtectedRoute = ({ children, loginOnly = true }) => {
    const navigate = useNavigate();
    const [user, isLoading] = useAuthState(auth);

    useEffect(() => {
        if (!user && loginOnly) {
            navigate('/login');
            return;
        }
        if (user?.emailVerified && !loginOnly) {
            navigate('/dashboard');
            return;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, navigate]);

    if (isLoading) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Space size="center" style={{ display: 'flex', flexDirection: 'column' }}>
                    <Spin size="large" />
                    <span style={{
                        fontFamily: 'Iceland',
                        fontWeight: '800',
                        fontSize: '20px',
                        marginTop: '25px'
                    }}>Loading</span>
                </Space>
            </div>
        )
    } else {
        return children;
    }
}

export default ProtectedRoute