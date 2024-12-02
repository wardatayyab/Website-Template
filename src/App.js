// import React from "react";
// import './App.css'
// import { BrowserRouter,Routes,Route } from "react-router-dom";
// // import Register from "./Register";
// // import Nav from "./Nav";
// // import Login from "./Login";
// // import Private from "./Private";
// import Tailwind from "./Tailwind";
// import Header2 from "./Header2";
// import SoldOut from "./Soldout";

// function App(){ 
//   return(
// <>
// <BrowserRouter>
// <Routes>
//   {/* <Route element={<Private/>}>
//   <Route path="/" element={<h1>Product page</h1>}></Route>
//   <Route path="/add" element={<h1>Add Page</h1>}></Route>
//   <Route path="/manage" element={<h1>Manage page</h1>}></Route>
//   </Route>
//   <Route path="/signup" element={<Register/>}></Route>
//   <Route path="/login" element={<Login/>}></Route> */}
//   <Route path="/tail" element={<Tailwind/>}></Route>
//   <Route path="/" element={<Header2/>}></Route>
//   <Route path="/sold" element={<SoldOut/>}></Route>

// </Routes>
// </BrowserRouter>
// </>
//   );
// }
// export default App; 



import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ManageProducts from './ManageProducts';
import EditProduct from './EditProduct';
import Soldout from './Soldout';
import AddProduct from './AddProduct';
import All from './All';
import Client from './Client';
import OrderPage from './OrderPage';
import Register1 from './Register1';
import ViewOrder from './ViewOrder';
import Dashboard from './Dashboard';
import { Login1 } from './Login1'; 
import { Private } from './Private'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Private />}>
          <Route path='/manage' element={<ManageProducts />} />
          <Route path='/edit/:id' element={<EditProduct />} />
          <Route path='/soldout' element={<Soldout />} />
          <Route path='/add' element={<AddProduct />} />
          {/* <Route path='/' element={<All />} /> */}
          <Route path='/client' element={<Client />} />
          <Route path='/order' element={<OrderPage />} />
          <Route path="/view" element={<ViewOrder />} />
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route path='/signup' element={<Register1 />} />
        <Route path='/login' element={<Login1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
