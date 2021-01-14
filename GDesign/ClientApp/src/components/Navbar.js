import React from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import {DashboardOutlined,HomeOutlined} from '@ant-design/icons';
import {TiWeatherPartlySunny} from 'react-icons/ti';
const { Sider } = Layout;
export const  Navbar = () => {
  return (
    <Sider 
    breakpoint="md"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
    >
      <div className="logo">G Design</div>
          <Menu theme="dark" mode="inline">
          <Menu.Item key="0" icon={<HomeOutlined/>}>
          <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="1" icon={<TiWeatherPartlySunny/>}>
          <Link to="/fetch-data"> Weather</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DashboardOutlined />}>
            <Link to="/counter">Counter</Link>
          </Menu.Item>
          </Menu>
       </Sider>
  );
}
