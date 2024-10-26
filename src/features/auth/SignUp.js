import React from "react";
import styled from "styled-components";
import { Button, Input, Typography, Space, Form, Select } from "antd";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: -20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  border-radius: 20px;
  padding: 10px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
  line-height: 1.5;
  letter-spacing: 0.5px;
`;

const Text2 = styled(Text)`
  text-align: left;
`;

const SignUpForm = () => {
  const { Link } = Typography;

  const { Option } = Select;

  const handleSignUp = async (values) => {
    const { email, password, roles } = values;

    try {
      const response = await fetch("http://localhost:3500/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify JSON content type
        },
        body: JSON.stringify({
          username: email,
          roles: roles,
          password,
        }),
      });

      // Check if response is successful
      if (!response.ok) {
        throw new Error("Sign Up failed");
      }

      const data = await response.json(); // Parse JSON response
      console.log("Sign up successful:", data); // Handle success (replace with actual actions)
    } catch (error) {
      console.error("Error:", error); // Handle error
    }
  };

  return (
    <LoginContainer>
      <Space direction="vertical" size="large" align="center">
        <Logo
          src="https://i.ibb.co/jvczTm8/logo-with-white-background-removebg-preview.png"
          alt="Logo"
        />
        <Title>Sign up to create an account</Title>
        <Text>Start making your dreams come true</Text>
        <Form
          name="login"
          initialValues={{ remember: true }}
          layout="vertical"
          style={{ width: "300px" }}
          onFinish={(values) => handleSignUp(values)}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            name="roles"
            rules={[
              {
                required: true,
                message: "Please select at least one role!",
              },
            ]}
          >
            <Select mode="multiple" placeholder="Select user roles">
              <Option value="user">User</Option>
              <Option value="manager">Manager</Option>
              <Option value="admin">Admin</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                min: 8,
                message: "Please enter your password!",
              },
            ]}
          >
            <Input.Password placeholder="********" />
          </Form.Item>
          <Form.Item>
            <Space
              size="large"
              align="center"
              style={{ justifyContent: "space-between", display: "flex" }}
            ></Space>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <Text>
          Already have an account? <Link href="/login">Login</Link>
        </Text>
      </Space>
    </LoginContainer>
  );
};

export default SignUpForm;
