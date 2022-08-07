import React from 'react';
import { Space, Spin } from 'antd'

const Loading = () => {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Space
                size="center"
                style={{ display: "flex", flexDirection: "column" }}
            >
                <Spin size="large" />
                <span
                    style={{
                        fontFamily: "Iceland",
                        fontWeight: "800",
                        fontSize: "20px",
                        marginTop: "25px",
                    }}
                >
                    Loading
                </span>
            </Space>
        </div >
    )
}

export default Loading