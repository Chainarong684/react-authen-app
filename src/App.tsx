import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Layout } from 'antd'

import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'

const App = () => {
  const { Content } = Layout

  return (
    <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Content style={{ backgroundColor: '#add8e6' }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Content>
        <Footer />
      </Layout>
    </div>
  )
}

export default App
