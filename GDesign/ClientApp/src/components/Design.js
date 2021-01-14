import React from 'react';
import {Navbar} from './Navbar';
import { Layout } from 'antd';


const { Content,Footer } = Layout;
export const Design = (props) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar/>
      <Layout className="site-layout">
        <Content className="site-layout-background" style={{padding:24,margin:0,minHeight:280}}>
        {props.children}
        </Content>
        <Footer style={{ textAlign: 'center',backgroundColor:"black",color:"white", padding:"20px"}}>
        {new Date().getFullYear()} Made by Greg
        </Footer>
      </Layout>
    </Layout>
  );
}