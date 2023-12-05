import './App.css'
import  { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter} from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Payments from './pages/Payments/Payments'
import RegisterForm from './components/RegisterForm/RegisterForm'
import HotelsAndConnectivity from './pages/HotelsAndConnectivity'
import CashPrice from './pages/CashPrice'
import PageNotFound from './pages/PageNotFound'
import PaymentSuccess from './pages/PaymentSuccess/PaymentSuccess'
import { useEffect } from 'react'
import UserContextProvider from './context/userContexrProvider'
import Sponsors from './components/Sponsors'
import Tutorial from './pages/Tutorial/Tutorial'

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  useEffect(() => {
    console.log('App component mounted');
    return () => {
      console.log('App component unmounted');
    };
  }, []); 

  return (
    !loading && (
    <UserContextProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/register" element={<RegisterForm/>}/>
      <Route path="/ContactUs" element={<ContactUs/>} />
      <Route path="/HotelsAndConnectivity" element={<HotelsAndConnectivity/>}/>
      <Route path="/cash-price" element={<CashPrice/>}/>
      <Route path="*" element={<PageNotFound/>} />
      <Route path="/payments" element={<Payments/>} />
      <Route path="/payments-success" element={<PaymentSuccess/>} />
      <Route path="/tutorial" element={<Tutorial/>} />      
    </Routes>
    <Sponsors/>
    <Footer/>
    </BrowserRouter>
    </UserContextProvider>
    )
  );
}
export default App;
