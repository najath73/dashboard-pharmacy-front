import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './pages/dashboardPharmacyPage'
import ProductList from './pages/productInPharmacyPage'


const AppRoutes = ()=> {
    return (
        <Routes>
            <Route path="/" element= {<MainLayout/>}/>
            <Route path="/pharmacy/:id/list-product" element= {<ProductList/>}/>

        </Routes>
    );
}
export default AppRoutes;
