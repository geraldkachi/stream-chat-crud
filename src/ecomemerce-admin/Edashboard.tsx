import React from 'react'
import { Route, Routes } from 'react-router'
import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import MainLayout from './Layout/MainLayout'
import Blank from './pages/Blank'
import Dashboard from './pages/Dashboard'
import '../ecomemerce-admin/scss/App.scss'

const Edashboard = () => {
  return (
    <>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<Blank />} />
            <Route path="products" element={<Blank />} />
            <Route path="customers" element={<Blank />} />
            <Route path="settings" element={<Blank />} />
            <Route path="stats" element={<Blank />} />
          </Route>
    </>
  )
}

export default Edashboard