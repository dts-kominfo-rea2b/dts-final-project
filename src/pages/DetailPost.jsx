import React, { useEffect, useState } from "react";
import { Layout, Image, Button, Space, Typography, Row, Col } from "antd";
import FooterPage from "../components/FooterPage";
import "../assets/css/detailpost.css";
import { useNavigate } from "react-router-dom";
import { fireStore } from "../config/firebase";
import {
  collection,
  query,
  getDocs,
  limit,
  orderBy,
  doc,
  getDoc,
} from "firebase/firestore";
import { DoubleRightOutlined } from "@ant-design/icons";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
const { Content } = Layout;
const { Paragraph } = Typography;

const DetailPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [detailPost, setDetailPost] = useState(null);
  const [recentPost, setRecentPost] = useState([]);

  const getArticle = async () => {
    setLoading(true);
    try {
      const docRef = doc(fireStore, "blog_post", id);

      const q2 = query(
        collection(fireStore, "blog_post"),
        orderBy("timestamp"),
        limit(3)
      );

      const detailArticle = getDoc(docRef);
      const recentSrticle = getDocs(q2);

      const [detail, recent] = await Promise.all([
        detailArticle,
        recentSrticle,
      ]);
      if (detail.exists()) {
        setDetailPost(detail.data());
      } else {
        console.log("No such document!");
      }
      setRecentPost(
        recent.docs.map((doc) => ({
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
    getArticle();
  }, [id]);
  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <>
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
              <Col
                md={12}
                lg={16}
                xl={16}
                style={{ borderRight: "3px solid #000" }}
              >
                <div className="container-detail" style={{ marginRight: 20 }}>
                  <span className="content-category-heading-detail-time">
                    {dayjs(detailPost?.timestamp?.seconds * 1000).format(
                      "DD MMM YYYY / HH:mm "
                    )}
                  </span>
                  <span className="content-category-heading-detail-title">
                    {detailPost?.title}
                  </span>
                  <Image
                    preview={false}
                    src={detailPost?.image}
                    style={{ width: "100%", height: "auto", marginTop: 30 }}
                  />
                  <Paragraph
                    style={
                      true
                        ? {
                            fontFamily: "Montserrat",
                            textAlign: "justify",
                            textJustify: "newspaper",
                            fontWeight: 500,
                            marginTop: 50,
                          }
                        : undefined
                    }
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          detailPost?.content !== null
                            ? detailPost?.content
                            : "-",
                      }}
                    />
                  </Paragraph>
                </div>
              </Col>
              <Col md={24} lg={8} xl={8}>
                <div style={{ textAlign: "center" }}>
                  <span className="content-category-heading-detail">
                    Recent Post
                  </span>
                  <hr
                    style={{
                      backgroundColor: "#000",
                      width: "90%",
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
                    marginLeft: 20,
                  }}
                >
                  {recentPost &&
                    recentPost?.map((data) => (
                      <div style={{ marginBottom: 20 }}>
                        <Space direction="vertical" size={"middle"}>
                          <Image src={data?.image} width="100%" />
                          <span className="content-article-heading-detail">
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

export default DetailPost;
