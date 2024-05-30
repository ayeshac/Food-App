import './App.css';
import logo from './FoodLogo.png';
import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter, RouterProvider,Outlet} from 'react-router-dom'
import About from './components/About';


function AppLayout() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}


export default AppLayout