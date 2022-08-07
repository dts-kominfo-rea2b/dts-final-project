import React, { useEffect, useState } from "react";
import { Layout, Image, Button, Space, Typography, Row, Col } from "antd";
import FooterPage from "../components/FooterPage";
import "../assets/css/beranda.css";
import { useNavigate } from "react-router-dom";
import { fireStore } from "../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import Carousel from "react-multi-carousel";
import { DoubleRightOutlined } from "@ant-design/icons";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
const { Content } = Layout;
const { Paragraph } = Typography;

const Beranda = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [dataBanner, setDataBanner] = useState([]);
  const [category1, setCategory1] = useState([]);
  const [category2, setCategory2] = useState([]);
  const [category3, setCategory3] = useState([]);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  };

  const getArticleBanner = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(fireStore, "blog_post"),
        where("category", "==", "Blog")
      );
      const q2 = query(
        collection(fireStore, "blog_post"),
        where("category", "==", "Website")
      );
      const q3 = query(
        collection(fireStore, "blog_post"),
        where("category", "==", "Android")
      );
      const q4 = query(
        collection(fireStore, "blog_post"),
        where("category", "==", "Laptop")
      );

      const articleBanner = getDocs(q);
      const DataCategory1 = getDocs(q2);
      const DataCategory2 = getDocs(q3);
      const DataCategory3 = getDocs(q4);

      const [data1, data2, data3, data4] = await Promise.all([
        articleBanner,
        DataCategory1,
        DataCategory2,
        DataCategory3,
      ]);
      setDataBanner(
        data1.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
      setCategory1(
        data2.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
      setCategory2(
        data3.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
      setCategory3(
        data4.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };
  useEffect(() => {
    getArticleBanner();
  }, []);
  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Content>
            <Carousel
              responsive={responsive}
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={2000}
              draggable
              infinite
              keyBoardControl
              minimumTouchDrag={80}
              slidesToSlide={1}
            >
              {dataBanner &&
                dataBanner?.map((data, index) => (
                  <div
                    key={index}
                    style={{
                      background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),url(${data?.image})`,
                      width: "100%",
                      minHeight: "450px",
                      position: "center",
                      backgroundSize: "cover",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <span className="content-heading">{data?.title}</span>
                    <Paragraph
                      style={
                        true
                          ? {
                              width: 500,
                              fontFamily: "Montserrat",
                              marginTop: 30,
                              color: "#fff",
                              textAlign: "center",
                            }
                          : undefined
                      }
                      ellipsis={true ? { rows: 3 } : false}
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data?.content !== null ? data?.content : "-",
                        }}
                      />
                    </Paragraph>
                    <Button
                      ghost
                      size="large"
                      style={{ marginTop: 30 }}
                      shape="round"
                      onClick={(e) => handleDetail(data?.id)}
                    >
                      Read article
                    </Button>
                  </div>
                ))}
            </Carousel>
            <Row
              gutter={[5]}
              style={{
                marginLeft: 100,
                marginRight: 100,
                marginTop: 50,
                marginBottom: 50,
              }}
            >
              <Col
                md={24}
                lg={8}
                xl={8}
                style={{ borderRight: "3px solid #000" }}
              >
                <div>
                  <span className="content-category-heading">
                    Website Category
                  </span>
                  <hr
                    style={{
                      backgroundColor: "#000",
                      width: "100%",
                      height: "3px",
                      marginBottom: 40,
                      marginTop: 20,
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "column",
                    marginRight: 20,
                  }}
                >
                  {category1 &&
                    category1?.map((data) => (
                      <div style={{ marginBottom: 20 }}>
                        <Space direction="vertical" size={"middle"}>
                          <Image src={data?.image} width="100%" />
                          <span className="content-article-heading">
                            {data?.title}
                          </span>
                          <Paragraph
                            style={
                              true
                                ? {
                                    fontFamily: "Montserrat",
                                    textAlign: "justify",
                                    textJustify: "newspaper",
                                  }
                                : undefined
                            }
                            ellipsis={true ? { rows: 4 } : false}
                          >
                            <div
                              dangerouslySetInnerHTML={{
                                __html:
                                  data?.content !== null ? data?.content : "-",
                              }}
                            />
                          </Paragraph>
                          <Button
                            ghost
                            size="large"
                            style={{ marginBottom: 20, color: "#000" }}
                            shape="round"
                            onClick={(e) => handleDetail(data?.id)}
                          >
                            Read more <DoubleRightOutlined />
                          </Button>
                        </Space>
                      </div>
                    ))}
                </div>
              </Col>
              <Col
                md={24}
                lg={8}
                xl={8}
                style={{ borderRight: "3px solid #000" }}
              >
                <div
                  style={{
                    textAlign: "center",
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                >
                  <Space direction="vertical" size={"large"}>
                    <span className="content-category-heading">
                      Laptop Category
                    </span>
                    <Paragraph
                      style={
                        true
                          ? {
                              fontFamily: "Montserrat",
                              textAlign: "justify",
                              textJustify: "newspaper",
                            }
                          : undefined
                      }
                      ellipsis={true ? { rows: 2 } : false}
                    >
                      Find out information about Laptop computers. A laptop is a
                      personal computer that can be easily moved and used in a
                      variety of locations
                    </Paragraph>
                  </Space>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "column",
                    marginRight: 10,
                    marginLeft: 10,
                  }}
                >
                  {category3 &&
                    category3?.map((data) => (
                      <div style={{ marginBottom: 20 }}>
                        <Space direction="vertical" size={"middle"}>
                          <Image src={data?.image} width="100%" />
                          <span className="content-article-heading">
                            {data?.title}
                          </span>
                          <Paragraph
                            style={
                              true
                                ? {
                                    fontFamily: "Montserrat",
                                    textAlign: "justify",
                                    textJustify: "newspaper",
                                  }
                                : undefined
                            }
                            ellipsis={true ? { rows: 4 } : false}
                          >
                            <div
                              dangerouslySetInnerHTML={{
                                __html:
                                  data?.content !== null ? data?.content : "-",
                              }}
                            />
                          </Paragraph>
                          <Button
                            ghost
                            size="large"
                            style={{ marginBottom: 20, color: "#000" }}
                            shape="round"
                            onClick={(e) => handleDetail(data?.id)}
                          >
                            Read more <DoubleRightOutlined />
                          </Button>
                        </Space>
                      </div>
                    ))}
                </div>
              </Col>
              <Col md={24} lg={8} xl={8}>
                <div style={{ textAlign: "center" }}>
                  <span className="content-category-heading">
                    Android Category
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "column",
                    marginLeft: 20,
                  }}
                >
                  {category2 &&
                    category2?.map((data) => (
                      <div style={{ marginBottom: 20 }}>
                        <Space direction="vertical" size={"middle"}>
                          <Image src={data?.image} width="100%" />
                          <span className="content-article-heading">
                            {data?.title}
                          </span>
                          <Paragraph
                            style={
                              true
                                ? {
                                    fontFamily: "Montserrat",
                                    textAlign: "justify",
                                    textJustify: "newspaper",
                                  }
                                : undefined
                            }
                            ellipsis={true ? { rows: 4 } : false}
                          >
                            <div
                              dangerouslySetInnerHTML={{
                                __html:
                                  data?.content !== null ? data?.content : "-",
                              }}
                            />
                          </Paragraph>
                          <Button
                            ghost
                            size="large"
                            style={{ marginBottom: 20, color: "#000" }}
                            shape="round"
                            onClick={(e) => handleDetail(data?.id)}
                          >
                            Read more <DoubleRightOutlined />
                          </Button>
                        </Space>
                      </div>
                    ))}
                </div>
              </Col>
            </Row>
          </Content>
          <FooterPage />
        </>
      )}
    </Layout>
  );
};

export default Beranda;
