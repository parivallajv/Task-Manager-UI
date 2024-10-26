import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Layout, Typography, Button, List, Space, Card, Row, Col } from "antd";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

// Styled Components
const StyledLayout = styled(Layout)`
  min-height: 100vh;
  background: #f5f7fa; /* Light background */
`;

const StyledSection = styled.section`
  padding: 40px 20px;
  max-width: 800px;
  margin: 40px auto; /* Centered on desktop */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCard = styled(Card)`
  width: 100%;
  border-radius: 8px;
  background: #ffffff; /* Card background */
  color: #333333; /* Dark text color */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

const StyledAddress = styled.address`
  margin: 20px 0;
  font-style: normal; /* Remove default italic style */
  color: #666666; /* Lighter text for address */
`;

const FooterContainer = styled(Footer)`
  background: #ffffff; /* White footer */
  text-align: center;
`;

const FeatureCard = styled(Card)`
  border: none;
  background: #e6f7ff; /* Light blue background for feature cards */
  color: #333333; /* Dark text color */
  transition: transform 0.3s;
  margin-bottom: 20px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

const Public = () => {
  return (
    <StyledLayout>
      <Header
        style={{
          background: "#ffffff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title level={1} style={{ color: "#333333", margin: 0 }}>
          Welcome to <span className="nowrap">TaskMaster Pro!</span>
        </Title>
        <Link to="/login">
          <Button type="primary" size="large" shape="round">
            Employee Login
          </Button>
        </Link>
      </Header>
      <Content>
        <StyledSection>
          <StyledCard>
            <Text style={{ color: "#333333" }}>
              TaskMaster Pro is designed to help you efficiently manage your
              tasks and enhance productivity. Our intuitive platform provides a
              variety of features to streamline your workflow.
            </Text>
            <Title level={2} style={{ color: "#333333", textAlign: "center" }}>
              Features:
            </Title>
            <Row gutter={16} style={{ marginTop: "20px" }}>
              <Col span={8}>
                <FeatureCard>
                  <Title level={4}>Task Creation</Title>
                  <Text>Create and manage your tasks effortlessly.</Text>
                </FeatureCard>
              </Col>
              <Col span={8}>
                <FeatureCard>
                  <Title level={4}>Collaboration</Title>
                  <Text>Work together with team members on projects.</Text>
                </FeatureCard>
              </Col>
              <Col span={8}>
                <FeatureCard>
                  <Title level={4}>Notifications</Title>
                  <Text>Receive real-time updates and notifications.</Text>
                </FeatureCard>
              </Col>
              <Col span={8}>
                <FeatureCard>
                  <Title level={4}>Custom Boards</Title>
                  <Text>Customize your task boards to fit your workflow.</Text>
                </FeatureCard>
              </Col>
              <Col span={8}>
                <FeatureCard>
                  <Title level={4}>Time Tracking</Title>
                  <Text>Keep track of time spent on tasks.</Text>
                </FeatureCard>
              </Col>
              <Col span={8}>
                <FeatureCard>
                  <Title level={4}>Reporting</Title>
                  <Text>Generate reports on your productivity.</Text>
                </FeatureCard>
              </Col>
            </Row>
            <StyledAddress>
              TaskMaster Pro
              <br />
              123 Productivity Lane
              <br />
              Innovation City, CA 54321
              <br />
              <a href="tel:+15559999999" style={{ color: "#666666" }}>
                (555) 999-9999
              </a>
            </StyledAddress>
            <Text style={{ color: "#333333" }}>Owner: Alex Manager</Text>
          </StyledCard>
        </StyledSection>
      </Content>
      <FooterContainer>
        <Space>{/* You may choose to keep the button here as well */}</Space>
      </FooterContainer>
    </StyledLayout>
  );
};

export default Public;
