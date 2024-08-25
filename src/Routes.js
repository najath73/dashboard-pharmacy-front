import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import MainLayout from './pages/dashboardPharmacyPage'
import ProductList from './pages/productInPharmacyPage'
import LoginPage from './pages/loginPage';
import PrivateRoute from './components/privateRoute';
import UpdateProductPage from './pages/updateProductPage'
import AddProductForm from './pages/addProductPage'
import ListUserPage from './pages/listUserPage'
import AddUserPage from './pages/addUserPaage'
import UpdateUserPage from './pages/updateUserPage'

const AppRoutes = ()=> {
    return (
        <Routes>
            <Route path='/login' element={<LoginPage/>} />
            <Route path="/" element= {<PrivateRoute element={<MainLayout/>} />}/>
            <Route path="/pharmacy/list-product" element= {< PrivateRoute element={<ProductList/>}/>}/>
            <Route path="/update-product/:id" element= {<PrivateRoute element={<UpdateProductPage/>} />}/>
            <Route path="/add-product" element= {<PrivateRoute element={<AddProductForm/>} />}/>
            <Route path="/list-user" element= {<PrivateRoute element={<ListUserPage/>} />}/>
            <Route path="/add-user" element= {<PrivateRoute element={<AddUserPage/>} />}/>
            <Route path="/update-user/:id" element= {<PrivateRoute element={<UpdateUserPage/>} />}/>


        </Routes>
    );
}
export default AppRoutes;
