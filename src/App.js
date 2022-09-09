import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DealerLogin from "./components/DealerLogin";
import DealerSignUp from "./components/DealerSignUp";
import ViewAllCrops from "./components/ViewAllCrops";
import DealerDashboard from "./components/DealerDashboard";
import FarmerDashBoard from "./components/FarmerDashBorad";
import FarmerLogin from "./components/FarmerLogin";
import AboutUs from "./components/AboutUs";
import AddCrops from "./components/AddCrops";
import UpdateCrops from "./components/UpdateCrops";
import { useState,useEffect, React } from "react";
import ListAllDealers from "./components/ListAllDealers";
import { FarmerViewCrops } from "./components/FarmerViewCrops";

import DealerViewProfile from "./components/DealerViewProfile";
import UpdateCrop from "./components/UpdateCrop";
import DeleteCrop from "./components/DeleteCrop";
import Footer from "./components/Footer";
import PaymentOpen from "./Payment Component/PaymentOpen";
import DealerViewAllCrops from "./components/DealerViewAllCrops";
import FarmerViewDealer from "./components/FarmerViewDealer";
import FarmerDeleteDealer from "./components/FarmerDeleteDealer";
import Cart from "./components/Cart";
// import AdminLogin from "./components/AdminLogin";
import AdminPage from "./components/AdminPage";
import ListOfAllFarmers from "./components/ListOfFarmers";
import AdminLogin1 from "./components/AdminLogin1";
import { AdminViewCrops } from "./components/AdminViewCrops";
import AdminViewDealers from "./components/AdminViewDealers";
import FarmerSignUp from "./components/FarmerSignUp";
import FarmerViewProfile from "./components/FarmerViewProfile";

function App() {
  // const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  // const [crops, setCrops] = useState([]);
  
  const handleClick = (cr) => {
    if (cart.indexOf(cr) !== -1) return;
  setCart([...cart, cr]);
  };


 const handleChange = (cr, d) => {
   const ind = cart.indexOf(cr);
   const arr = cart;
   arr[ind].quantity += d;

   if (arr[ind].quantity === 0) arr[ind].quantity = 1;
   setCart([...arr]);
 };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/dealer/login" element={<DealerLogin />} />
            
          <Route path="/farmer/login" element={<FarmerLogin />} />
          <Route path="/farmer/signup" element={<FarmerSignUp />} />
          <Route path="/addcrops" element={<AddCrops />} />
          {/* <Route path="/crop/update" element={<UpdateCrops />} /> */}
          <Route path="/crop/update/:id" element={<UpdateCrop />} />

          {/* <Route path="/deletecrops" element={<DeleteCrops/>} />  */}
          <Route path="/crop/delete/:id" element={<DeleteCrop />} />
          <Route path="/farmer/profile/:farmerId" element={<FarmerViewProfile/>} />
          
          <Route path="/dealer/signup" element={<DealerSignUp />} />
          <Route path="/allCrops" element={<ViewAllCrops />} />
           <Route path="/viewallcrops" element={<DealerViewAllCrops  handleClick={handleClick}/>} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>}/>
          <Route path="/dealer/dashborad" element={<DealerDashboard />} />
          <Route path="/farmer/dashborad" element={<FarmerDashBoard />} />
          <Route path="/alldealers" element={<ListAllDealers />} />
          <Route path="/farmerviewcrops" element={<FarmerViewCrops />} />
          <Route path="/dealer/get/:dealerId" element={<FarmerViewDealer />} />
          <Route
            path="/dealer/delete/:dealerId"
            element={<FarmerDeleteDealer />}
          />
          <Route path="/dealerprofile/:dealerId" element={<DealerViewProfile />} />

          <Route path="/payment" element={<PaymentOpen />} />


            {/* <Route path="/admin/login" element={<AdminLogin />} /> */}
            <Route path="/admin/login" element={<AdminLogin1 />} />
            <Route path="/admin/page" element={<AdminPage />} />
            <Route path="/admin/view/Crops" element={<AdminViewCrops/>} />
            <Route path="/admin/view/dealers" element={<AdminViewDealers/>} />
            <Route path="/farmer/list" element={<ListOfAllFarmers />} />
        </Routes>
      </Router>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
