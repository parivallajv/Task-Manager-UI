import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import selectors from "../../redux/selectors";
import { List, Avatar, Tag, Typography, Space, Badge } from "antd";

const { Title, Text } = Typography;

// Styled Components
const Container = styled.div`
  padding: 20px;
  background-color: #f0f2f5;
  min-height: 100vh;
`;

const UserListContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const StyledListItem = styled(List.Item)`
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserDetails = styled.div`
  margin-left: 15px;
`;

const RoleTag = styled(Tag)`
  margin-left: 5px;
`;

const StatusTag = styled(Badge)`
  margin-left: 10px;
`;

const UserList = () => {
  const users = useSelector(selectors?.getUsersData);

  return (
    <Container>
      <UserListContainer>
        <Title level={3} style={{ textAlign: "center", marginBottom: "20px" }}>
          User Directory
        </Title>
        <List
          itemLayout="horizontal"
          dataSource={users}
          renderItem={(user) => (
            <StyledListItem>
              <UserInfo>
                <Avatar style={{ backgroundColor: "#87d068" }}>
                  {user?.username.charAt(0).toUpperCase()}
                </Avatar>
                <UserDetails>
                  <Title level={5}>{user?.username}</Title>
                  <Text type="secondary">ID: {user?._id}</Text>
                </UserDetails>
              </UserInfo>
              <Space direction="horizontal">
                <Space direction="horizontal" size="small">
                  <Text strong>Roles: </Text>
                  {user?.roles.map((role, index) => (
                    <RoleTag color="blue" key={index}>
                      {role?.toUpperCase()}
                    </RoleTag>
                  ))}
                </Space>
                <StatusTag
                  status={user?.active ? "success" : "error"}
                  text={user?.active ? "Active" : "Inactive"}
                />
              </Space>
            </StyledListItem>
          )}
        />
      </UserListContainer>
    </Container>
  );
};

export default UserList;
