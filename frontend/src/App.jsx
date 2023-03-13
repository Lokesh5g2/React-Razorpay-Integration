import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './components/Home.jsx'
import OrderSuccess from './components/OrderSuccess.jsx'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paymentsuccess" element={<OrderSuccess />} />
      </Routes>
    </Router>
  );
}

export default App
