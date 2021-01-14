import React, { useState } from 'react';
import {Button, Typography} from 'antd';

const {Title} = Typography;
export const Counter = () => {
  const [num,setNum] = useState(0);
  let incrementCounter = () => setNum(num+1);
  return (
    <div style={{textAlign:"center"}}>
    <Title>Counter</Title>

    <h3>This is a simple example of a React component.</h3>

    <Title level={5}>Current count: <strong>{num}</strong></Title>

    <Button type="primary" size="large" shape="round" onClick={incrementCounter}>Increment</Button>
  </div>
  );
}
