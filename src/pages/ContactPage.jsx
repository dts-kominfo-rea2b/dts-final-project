import React from "react";
import {
  Layout,
  Input,
  Typography,
  Row,
  Col,
  Card,
  Form,
  Button,
  notification,
} from "antd";
import Navbar from "../components/Navbar";
import FooterPage from "../components/FooterPage";
import imageCard from "../assets/images/contact.png";
import "../assets/css/contact.css";
const { Content } = Layout;
const { Paragraph } = Typography;
const { TextArea } = Input;

const { Meta } = Card;
const ContactPage = () => {
  const handleContact = (value) => {
    notification.success({
      message: `Terimakasih ${value?.name}`,
      description:
        "Pesan anda telah kami terima, akan kami tanggapi secepatnya!",
      duration: 5,
    });
  };
  return (
    <Layout>
      <Navbar />
      <Content>
        <Row
          gutter={[5]}
          style={{
            marginLeft: 100,
            marginRight: 100,
            marginTop: 50,
            marginBottom: 50,
          }}
        >
          <Col md={12} lg={8} xl={8} style={{ borderRight: "3px solid #000" }}>
            <div className="contact-container">
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="EdTech" src={imageCard} />}
              >
                <Meta
                  title="Educational Technology"
                  description="Website developed for digitalent project"
                />
              </Card>
            </div>
          </Col>
          <Col md={24} lg={16} xl={16}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexDirection: "column",
                marginLeft: 40,
              }}
            >
              <span className="contact-data-company">Contact</span>
              <hr
                style={{
                  backgroundColor: "#000",
                  width: "40%",
                  height: "4px",
                  marginLeft: 0,
                }}
              />
              <Paragraph
                style={
                  true
                    ? {
                        fontFamily: "Montserrat",
                        textAlign: "justify",
                        textJustify: "newspaper",
                        marginTop: 20,
                        maxWidth: 500,
                      }
                    : undefined
                }
              >
                Questions and comments are important to us, so please use the
                form below to contact our crew. We will reply as soon as
                possible. Guarantee a response within 24 hours!
              </Paragraph>
              <Form
                onFinish={handleContact}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Form.Item
                  name="name"
                  style={{ margin: 0 }}
                  label={<label>Your Name</label>}
                  rules={[
                    {
                      required: true,
                      message: "Nama tidak boleh kosong!",
                    },
                  ]}
                >
                  <Input placeholder="example" size="large" />
                </Form.Item>
                <Form.Item
                  name="email"
                  style={{ margin: 0 }}
                  label={<label>Your Email</label>}
                >
                  <Input placeholder="example@gmail.com" size="large" />
                </Form.Item>
                <Form.Item
                  name="message"
                  style={{ margin: 0 }}
                  label={<label>Your Message</label>}
                >
                  <TextArea rows={4} placeholder="message" />
                </Form.Item>
                <Button
                  htmlType="submit"
                  size="large"
                  style={{ marginTop: 20 }}
                >
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Content>
      <FooterPage />
    </Layout>
  );
};

export default ContactPage;
