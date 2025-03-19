import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './components/Boton';
import Acordion from './components/Acordion';
import Alerta from './components/Alerta';
import Badge from './components/Badge';
import Collapse from './components/Collapse';
import BreadCrumb from './components/Breadcrumb';
import GrupoBotones from './components/GrupoBotones';
import Card from './components/Card';
import Carrusel from './components/Carrusel';
import Dropdown from './components/Dropdowns';
import ListGroup from './components/ListGroup';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import OffCanvas from './components/OffCanvas';
import Pagination from './components/Pagination';
import Placeholder from './components/Placeholder';
import Popover from './components/Popover';
import Spinner from './components/Spinner';
import Toast from './components/Toast';

function App() {
  return (
    <>
      <Navbar />
      <Badge />
      <Boton />
      <Acordion />
      <Alerta />
      <Collapse />
      <BreadCrumb />
      <GrupoBotones />
      <Card />
      <OffCanvas />
      <Carrusel />
      <Dropdown />
      <ListGroup />
      <Modal />
      <Placeholder />
      <Spinner />
      <Popover />
      <Pagination />
      <Toast />
      
     
    </>
  )
}

export default App


