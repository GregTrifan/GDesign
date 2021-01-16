import { Button, Table ,Typography} from 'antd';
import React, { useCallback, useEffect, useState } from 'react';

const {Title} = Typography;
export const FetchData = () => {
  const [forecasts,setForecasts] = useState([]);
  const [loading,setLoad] = useState(true);

  const columns = [
    {
      title: 'Date',
    dataIndex: 'date',
      key: 'date',
    },
    {
    title: 'Temp. (C)',
    dataIndex: 'temperatureC',
    key: 'celsius',
    },
    {
      title: 'Temp. (F)',
    dataIndex: 'temperatureC',
    key: 'fahrenheit',
    },
    {
      title: 'Summary',
      dataIndex: 'summary',
      key: 'summary',
    }
  ]
  const renderForecastsTable=(forecasts) => {
    return (
      <div className="container">
      <Table dataSource={forecasts} columns={columns} />
      </div>
    );
  }
  const populateWeatherData= useCallback(() => {
    fetch('getweather',{method:"POST"}) // Fetch the 127.0.0.1/getweather route
    .then((response) => response.json()) // Turn to array of objects
    .then(res => res.map((entry)=>{
      var beauty = new Date(entry.date);
      return {date:beauty.toUTCString(),
        temperatureC:entry.temperatureC,
      temperatureF:entry.temperatureF,
      summary:entry.summary
    }
    }))
    .then(entry => {setForecasts(entry)}) // set the forecasts as the API Response
    .then(() => setLoad(false)) // Now it's loaded
    .catch((error) => {
      console.log(error)
    });
  },[]);
  useEffect(() => {
    populateWeatherData();
  },[populateWeatherData]);

  let contents = loading
  ? <p><em>Loading...</em></p>
  : renderForecastsTable(forecasts);
  return (
    <div style={{textAlign:"center"}}>
      <Title>Weather forecast</Title>
      <p >This component demonstrates fetching data from the server.</p>
      {contents}
      <Button type="primary" onClick={populateWeatherData}>Update Weather</Button>
    </div>
  );
}