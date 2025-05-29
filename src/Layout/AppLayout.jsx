import React, { useState } from "react";
import {
  ApartmentOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  DashboardOutlined,
  DesktopOutlined,
  FileOutlined,
  FileTextOutlined,
  PieChartOutlined,
  RestOutlined,
  TeamOutlined,
  UserAddOutlined,
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
  getItem(
    "Dashboard",
    "1",
    <DashboardOutlined style={{ fontSize: "x-large" }} />,
    null,
    "/"
  ),
  getItem(
    "Manual Logs",
    "2",
    <FileTextOutlined style={{ fontSize: "x-large" }} />,
    null,
    "/manuallogs"
  ),
  getItem(
    "Branches",
    "3",
    <ApartmentOutlined style={{ fontSize: "x-large" }} />,
    null,
    "/branches"
  ),
  getItem(
    "Public Holiday",
    "4",
    <CalendarOutlined style={{ fontSize: "x-large" }} />,
    null,
    "/publicholiday"
  ),
  getItem(
    "Shifts",
    "5",
    <ClockCircleOutlined style={{ fontSize: "x-large" }} />,
    null,
    "/shifts"
  ),
  getItem(
    "Employees",
    "6",
    <TeamOutlined style={{ fontSize: "x-large" }} />,
    null,
    "/employees"
  ),
  getItem(
    "Assign Employees",
    "7",
    <UserAddOutlined style={{ fontSize: "x-large" }} />,
    null,
    "/assignemployees"
  ),
  getItem(
    "Departments",
    "8",
    <AppstoreOutlined style={{ fontSize: "x-large" }} />,
    null,
    "/departments"
  ),
  getItem(
    "Employee Vacances",
    "9",
    <RestOutlined style={{ fontSize: "x-large" }} />,
    null,
    "/employeevacances"
  ),
  getItem(
    "Reports",
    "10",
    <BarChartOutlined style={{ fontSize: "x-large" }} />,
    null,
    "/reports"
  ),
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
              minHeight: 360,
              // background: colorBgContainer,
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
