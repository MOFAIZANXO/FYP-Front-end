import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PropertyManager from './pages/PropertyManagerPages/PropertyManager.js';
import Owner from './pages/OwnerPages/PropertyOwnerForm.js'; // Corrected import from the conflict
import OwnerProfile from './pages/OwnerPages/OwnerMain.js'; // Corrected import from the conflict
import Renter from './pages/RenterPages/Home Tab/WorkOrderForm.js'; // Corrected import from the conflict
import Vendor from './pages/VendorPages/Vendor.js';
import LandingPage from './pages/Landing'; // Imported as LandingPage
import SignUp from './pages/signup/SignUp';
import Login from './pages/login/Login';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ChatPage from './pages/Chat.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/property-manager" element={<PropertyManager />} />
          <Route path="/owner" element={<Owner />} />
          <Route path="/owner_profile" element={<OwnerProfile/>} /> {/* Fixed path */}
          <Route path="/renter" element={<Renter />} />
          <Route path="/property/:index" element={<PropertyDetail />} />
          <Route path="/renterform" element={<ApplyForm />} />
          <Route path="/repairform" element={<RepairForm />} />
          <Route path="/renterprofile" element={<RenterProfile />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
