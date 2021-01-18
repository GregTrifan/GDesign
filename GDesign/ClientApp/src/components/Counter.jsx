import React, { useState } from 'react';
import {Button,Input, Typography} from 'antd';
import Modal from 'antd/lib/modal/Modal';
const {Title} = Typography;


export const Counter = () => {
  
  const [modifier,setModifier] = useState(1); // 1 is by default
  const [num,setNum] = useState(0);
  let incrementCounter = () => setNum(num+modifier);
  const [visible,setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  }
  const handleCancel = () => {
      setVisible(false);
  }
  const setMod = (value) => {
      if(value.indexOf("e") !== -1) {
        setModifier(0);
      }
      else {
      setModifier(Number(value));
      }
  }

  return (
    <div style={{textAlign:"center"}}>
    <Title>Counter</Title>

    <h3>This is a simple example of a React component.</h3>

    <Title level={5}>Current count: <strong>{num}</strong></Title>
    <div>
    <Button type="primary" size="large" shape="round" onClick={incrementCounter}>{modifier>=0?`Increment by ${modifier}`:`Decrement by ${modifier}`}</Button>
    </div>
    <div style={{marginTop: 10}}>
    <Button size="large" onClick={showModal}>Modify Value</Button>
    </div>
    <Modal
      visible={visible}
      theme="dark"
      style={{ top: 300 }}
      title="Modify value"
      onCancel={handleCancel}
      footer={[]} //Empty 
      >
        <Input type="number" placeholder="Change number" maxLength={10} defaultValue={modifier} onChange={(e)=>setMod(e.target.value)}></Input>
    </Modal>
  </div>
  );
}
