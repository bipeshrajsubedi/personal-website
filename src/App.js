import logo from './logo.svg';
import './App.css';
import  React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Publications from './pages/Publications'
import Cerebro from './pages/Cerebro'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Home/>
  },
  {
    path: '/home',
    element:<Home/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path: '/projects',
    element:<Projects/>
  },
  {
    path: '/publications',
    element:<Publications/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/cerebro',
    element:<Cerebro/>
  }
  

]);

function App() {
  
  return (
    <RouterProvider router={router}/>
    
  );
}

export default App;
