import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Footer from "./components/Footers"
import Header from "./components/Header"
// import Light from "./components/Light"
import Exam from './components/Exam'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
{/* <Footer/> */}
<Header/>
{/* <Light/> */}
<Exam/>
  </React.StrictMode>,
)
