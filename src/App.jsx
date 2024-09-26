import { useEffect, useState } from 'react';
import './App.css'
import { Navbar } from './components/organisms/Navbar/Navbar';
import { get } from './service/Api';
import { SideMenu } from './components/molecules/sideMenu/SideMenu';
import { HomePage } from './components/layout/HomePage/HomePage';
import { MyFlights } from './components/layout/MyFlights/MyFlights';
import Router from './routes/Router';

function App() {
  const [allFlightsData, setData] = useState([]);

  const getFlightsData = async () => {
    const allFlightsData = await get();
    setData(allFlightsData)
  };

useEffect(()=> {
  getFlightsData();
},[])
   
  return (
    <>
      <Navbar ></Navbar>
      <div className='app container-fluid'>
      <div className='left'>
      <Router allFlightsData={allFlightsData}></Router>
      </div>
    <div className='sideMenu'>
      <SideMenu></SideMenu>
    </div>
      </div>
   
    </>
  )
}

export default App