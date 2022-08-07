import React, { useContext } from "react";
import LayoutDashboard from "../layout/layout";
import { Card, Col, Row } from "antd";
import StateContext from "../context/StateContext";

const Dashboard = () => {
  const { theme } = useContext(StateContext);
  return (
    <LayoutDashboard>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <Card
            title={
              <span
                style={{
                  backgroundColor: theme === "light" ? "#fff" : "#212130",
                  color: theme === "light" ? "#000" : "#fff",
                }}
              >
                Jumlah User
              </span>
            }
            bordered={false}
            style={{
              backgroundColor: theme === "light" ? "#fff" : "#212130",
              color: theme === "light" ? "#000" : "#fff",
              borderRadius: "20px",
            }}
          >
            1000
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <Card
            title={
              <span
                style={{
                  backgroundColor: theme === "light" ? "#fff" : "#212130",
                  color: theme === "light" ? "#000" : "#fff",
                }}
              >
                Jumlah Artikel
              </span>
            }
            bordered={false}
            style={{
              backgroundColor: theme === "light" ? "#fff" : "#212130",
              color: theme === "light" ? "#000" : "#fff",
              borderRadius: "20px",
            }}
          >
            562
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <Card
            title={
              <span
                style={{
                  backgroundColor: theme === "light" ? "#fff" : "#212130",
                  color: theme === "light" ? "#000" : "#fff",
                }}
              >
                Jumlah Kontributor
              </span>
            }
            bordered={false}
            style={{
              backgroundColor: theme === "light" ? "#fff" : "#212130",
              color: theme === "light" ? "#000" : "#fff",
              borderRadius: "20px",
            }}
          >
            167
          </Card>
        </Col>
      </Row>
    </LayoutDashboard>
  );
};

export default Dashboard;
