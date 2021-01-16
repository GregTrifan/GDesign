import React from 'react';
import {Navbar} from './Navbar.jsx';
import { Layout } from 'antd';


const { Content,Footer } = Layout;
export const Design = (props) => {
  return (
    <Layout theme="dark" style={{ minHeight: '100vh' }}>
      <Navbar/>
      <Layout className="site-layout">
        <Content className="site-layout-background" style={{padding:24,margin:0,minHeight:280}}>
        {props.children}
        </Content>
        <Footer style={{ textAlign: 'center',backgroundColor:"#141414",color:"white", padding:"20px"}}>
        {new Date().getFullYear()} Made by Greg
        </Footer>
      </Layout>
    </Layout>
  );
}