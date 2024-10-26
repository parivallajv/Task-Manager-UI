import React from "react";
import styled from "styled-components";
import { Button, Input, Checkbox, Typography, Space, Form } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth, getUsers } from "../../redux/actions";

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

const LoginForm = () => {
  const { Link } = Typography;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (values) => {
    const { email, password } = values;
    try {
      console.log(values, "values");

      dispatch(getAuth({ username: email, password }));
      // dispatch(getUsers());

      // navigate("/users");
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
        <Title>Log in to your account</Title>
        <Text>Start making your dreams come true</Text>
        <Form
          name="login"
          initialValues={{ remember: true }}
          layout="vertical"
          style={{ width: "300px" }}
          onFinish={(values) => handleLogin(values)}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input placeholder="Enter your email" />
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
            >
              <Checkbox defaultChecked>
                <Text2> Remember me</Text2>
              </Checkbox>
              <Link href="#">Forgot password</Link>
            </Space>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Sign in
            </Button>
          </Form.Item>

          {/* sign up with google will be added in features */}
          {/* <Form.Item>
            <Button
              type="default"
              block
              icon={
                <img
                  src="https://i.ibb.co/16mw2q7/Illustration-of-Google-icon-on-transparent-background-PNG.png"
                  alt="Google"
                  style={{ width: "20px", marginRight: "8px" }}
                />
              }
            >
              Sign in with Google
            </Button>
          </Form.Item> */}
        </Form>
        <Text>
          Don't have an account? <Link href="/signup">Sign up</Link>
        </Text>
      </Space>
    </LoginContainer>
  );
};

export default LoginForm;
