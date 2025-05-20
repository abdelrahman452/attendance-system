import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

// Menu item configuration with paths for routing
function getItem(label, key, icon, children, path) {
  return {
    key,
    icon,
    children,
    label,
    path,
  };
}

const items = [
  getItem("Dashboard", "1", <PieChartOutlined />, null, "/"),
  getItem("Branches", "2", <UserOutlined />, null, "/branches"),
  getItem("Public Holiday", "3", <DesktopOutlined />, null, "/publicholiday"),
  getItem("Shifts", "4", <FileOutlined />, null, "/shifts"),
  getItem("Employees", "5", <PieChartOutlined />, null, "/employees"),
  getItem("Departments", "6", <PieChartOutlined />, null, "/departments"),
  // getItem(
  //   "Team",
  //   "sub2",
  //   <TeamOutlined />,
  //   [
  //     getItem("Team 1", "6", null, null, "/teams/1"),
  //     getItem("Team 2", "8", null, null, "/teams/2"),
  //   ],
  //   "/teams"
  // ),
];

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Find the selected menu key based on the current path
  const selectedKey = items
    .flatMap((item) => [item, ...(item.children || [])])
    .find((item) => item.path === location.pathname)?.key;

  // Handle menu item clicks for navigation
  const handleMenuClick = ({ key }) => {
    const selectedItem = items
      .flatMap((item) => [item, ...(item.children || [])])
      .find((item) => item.key === key);
    if (selectedItem?.path) {
      navigate(selectedItem.path);
    }
  };

  // Generate breadcrumb items dynamically based on the current route
  const breadcrumbItems = () => {
    const pathSnippets = location.pathname.split("/").filter((i) => i);
    const items = pathSnippets.map((snippet, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      return (
        <Breadcrumb.Item key={url}>
          {snippet.charAt(0).toUpperCase() + snippet.slice(1)}
        </Breadcrumb.Item>
      );
    });
    return [<Breadcrumb.Item key="home">Home</Breadcrumb.Item>, ...items];
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        breakpoint="lg"
        collapsedWidth="80"
        width={250}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            // background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          selectedKeys={[selectedKey]}
          mode="inline"
          items={items}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            {breadcrumbItems()}
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        {/* <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default AppLayout;
