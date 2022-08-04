import React, { useState } from "react";
import { Row, Col, Button, Form, Input, Image, notification } from "antd";
import image from "../assets/images/ilustration2.svg";
import "../assets/css/Register.css";
import { NavLink, useNavigate } from "react-router-dom";
import { fireStore, auth } from "../config/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { MD5 } from "crypto-js";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const name = values.name;
      const email = values.email;
      const password = values.password;
      await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(auth.currentUser);
      await addDoc(collection(fireStore, "users"), {
        name: name,
        email: email,
        password: MD5(password).toString(),
        timestamp: serverTimestamp(),
      });
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      navigate("/login");
      notification.success({
        message: `Register Berhasil`,
        description: "Mohon periksa email untuk mengkonfirmasi akun anda!",
        duration: 6,
      });
      setLoading(false);
    } catch (error) {
      notification.error({
        message: `Register Gagal`,
        description: "Mohon periksa kembali data dan koneksi internet anda!",
        duration: 5,
      });
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="register-container">
      <Row className="register-content">
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
          <div className="register-left-content">
            <Image
              preview={false}
              src={image}
              className="image-register"
              alt="Register Page"
            />
          </div>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24} style={{ margin: "auto" }}>
          <div className="register-right-content">
            <h1 className="register-title">Register</h1>
            <hr className="register-line" />
            <h3 className="register-subtitle">Daftarkan diri anda sekarang!</h3>

            <Form
              onFinish={handleSubmit}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Form.Item
                name="name"
                style={{ margin: 0 }}
                label={<label style={{ color: "#e6f7ff" }}>Nama Lengkap</label>}
                rules={[
                  {
                    required: true,
                    message: "Nama tidak boleh kosong!",
                  },
                ]}
              >
                <Input
                  placeholder="example"
                  size="large"
                  style={{ borderRadius: "20px" }}
                />
              </Form.Item>

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
                  style={{ width: "100%", marginTop: 25 }}
                >
                  Daftar
                </Button>
              </Form.Item>
              <h3 className="register-subtitle2">
                Sudah punya akun ? <NavLink to="/login">Login disini</NavLink>
              </h3>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
