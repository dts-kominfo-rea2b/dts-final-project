import React, { useState } from "react";
import { Row, Col, Button, Form, Input, Image, notification } from "antd";
import image from "../assets/images/ilustration1.svg";
import { NavLink, useNavigate } from "react-router-dom";
import "../assets/css/Login.css";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (values) => {
    setLoading(true);
    const email = values?.email;
    const password = values?.password;
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const userInfo = userCredential.user;
        if (userInfo?.emailVerified) {
          setLoading(false);
          navigate("/dashboard");
        } else {
          notification.error({
            message: `Login Gagal`,
            description: "Mohon konfirmasi email anda!",
            duration: 5,
          });
          setLoading(false);
        }
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        notification.error({
          message: `Login Gagal`,
          description:
            "Akun tidak ditemukan, daftarkan diri anda terlebih dahulu!",
          duration: 5,
        });
        setLoading(false);
      });
  };

  return (
    <div className="login-container">
      <Row className="login-content">
        <Col
          xl={12}
          lg={12}
          md={24}
          sm={24}
          xs={24}
          style={{
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div className="left-content">
            <Image
              preview={false}
              src={image}
              className="image-login"
              alt="Login Page"
            />
          </div>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24} style={{ margin: "auto" }}>
          <div className="right-content">
            <h1 className="login-title">Login</h1>
            <hr className="login-line" />
            <h3 className="login-subtitle">Hai, Selamat datang kembali</h3>

            <Form
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              className="login-form"
              onFinish={handleSubmit}
            >
              <Form.Item
                name="email"
                style={{ margin: 0 }}
                label={<label style={{ color: "#e6f7ff" }}>Email</label>}
                rules={[
                  {
                    required: true,
                    message: "Email tidak boleh kosong!",
                  },
                  {
                    type: "email",
                    message: "Format email salah",
                  },
                ]}
              >
                <Input
                  placeholder="example@gmail.com"
                  size="large"
                  style={{ borderRadius: "20px" }}
                />
              </Form.Item>
              <Form.Item
                style={{ margin: 0 }}
                label={<label style={{ color: "#e6f7ff" }}>Password</label>}
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Password tidak boleh kosong!",
                  },
                ]}
              >
                <Input.Password
                  type="password"
                  placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                  size="large"
                  style={{ borderRadius: "20px" }}
                />
              </Form.Item>
              <Form.Item wrapperCol={{ span: 24 }}>
                <Button
                  ghost
                  loading={loading}
                  shape="round"
                  htmlType="submit"
                  size="large"
                  style={{ width: "100%", marginTop: 30 }}
                >
                  Masuk
                </Button>
                <h3 className="login-subtitle2">
                  Baru di EdTech ?{" "}
                  <NavLink to="/register">Register disini</NavLink>
                </h3>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
