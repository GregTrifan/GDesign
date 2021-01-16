import {Button, Typography} from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React,{useState} from 'react';

const {Title} = Typography;

export const Home = () => {
    const [loading,setLoading] = useState(false);
    const [visible,setVisible] = useState(false);
    // Showing modal
    const showModal = () => {
      setVisible(true);
    };
    // Handlers for modal buttons
    const handleOk = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setVisible(false);
      }, 3000);
    };
    const handleCancel = () => {
      setVisible(false);
    }

    return (
    <div>
      <Title>Hello, world!</Title>
      <p>Welcome to your new single-page application, built with:</p>
      <ul>
        <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
        <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
        <li><a href='https://ant.design/'>Ant Design</a> for layout and styling</li>
      </ul>
      <p>To help you get started, we have also set up:</p>
      <ul>
        <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
        <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
        <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
      </ul>
      <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
    <Button onClick={showModal}>Press me!</Button>
    <Modal
      visible={visible}
      title="Dialog"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Return
        </Button>,
        <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
          Submit
        </Button>,
      ]}
      >
        <p>Thanks for clicking!!</p>
      </Modal>
    </div>
  );
}