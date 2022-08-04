import React from "react";
import Navbar from "../components/Navbar";
import FooterPage from "../components/FooterPage";
import { Layout, Typography } from "antd";
import "../assets/css/about.css";
const { Content } = Layout;
const { Paragraph } = Typography;
const About = () => {
  return (
    <Layout>
      <Navbar />
      <Content>
        <div className="container-about">
          <div className="content-about">
            <span className="heading-about">About</span>
            <hr className="line-about" />
            <span className="brand-about">EdTech</span>
            <Paragraph
              style={
                true
                  ? {
                      fontFamily: "Montserrat",
                      textAlign: "justify",
                      textJustify: "newspaper",
                      marginTop: 20,
                      fontSize: 15,
                    }
                  : undefined
              }
            >
              Education Technology is the largest English-language technology
              media company that focuses on Asia. From the latest news to the
              hottest trends and the boldest startups to the strongest titans,
              we cover everything tech in the region. Our goal is to build and
              serve Asia’s tech and startup community. Apart from producing and
              delivering quality editorial content, we connect brands with early
              adopters via Studios, our advertising agency unit. We organize
              tech conferences and events across Asia, and we operate the
              region’s go-to startup and technology jobs marketplace.
            </Paragraph>
          </div>
        </div>
      </Content>
      <FooterPage />
    </Layout>
  );
};

export default About;
