import "./App.css";
import Landing from "../src/pages/Landing";
import { Routes, Route } from "react-router-dom";
import Qu from "../src/pages/Qu";
import Signup from "./Pages/Signup";
import Card from "../src/Compnent/sataDisplay/Card";
import Owner from "../src/pages/Owner";
import OwnerApartment from "../src/pages/OwnerApartment";
import BottomNavigation from "../src/Compnent/navigation/BottomNavigation";
import Login from "../src/pages/Login";
import ApartmentHistory from "../src/pages/ApartmentHistory";
import MaintenanceRequest from "../src/pages/MaintenanceRequest";
import RentPayments from "../src/pages/RentPayments";
import RequestAddBuilding from "../src/pages/RequestAddBuilding";
import AddTenant from "../src/pages/AddTenant";
import AddApartment from "../src/pages/AddApartment";
import Profile from "../src/pages/Profile";
import PaymentPage from "./Pages/PaymentPage";
function App() {
  return (
    <div className="font-Arabic">
      {<Routes>
        {/* For component testing */}
        <Route path="/Owner" element={<Owner />} /> {/* صفحة عقارات المالك */}
        {/* <Route path="/Apartment" element={<Owner />} /> */}
        <Route path="/Apartment" element={<OwnerApartment />} />{" "}
        {/* شقق العقار*/}
        <Route path="/ApartmentHistory" element={<ApartmentHistory />} />{" "}
        {/* سجل صيانة الشقة */}
        <Route
          path="/MaintenanceRequest"
          element={<MaintenanceRequest />}
        />{" "}
        {/* صفحة رفع طلب صيانة */}
        <Route path="/RentPayments" element={<RentPayments />} />{" "}
        {/* صفحة جدول الدفعات */}
        <Route
          path="/RequestAddBuilding"
          element={<RequestAddBuilding />}
        />{" "}
        {/* صفحة طلب اضافة عقار */}
        <Route path="/AddTenant" element={<AddTenant />} />{" "}
        {/* صفحة اضافة مستاجر */}
        <Route path="/AddApartment" element={<AddApartment />} />{" "}
        {/* صفحة اضافة شقة */}
        <Route path="/Profile" element={<Profile />} /> {/* ملف التعريف */}
      </Routes>}

      <div>
        <Routes>
          <Route path="/" element={<Landing />} /> {/* الصفحة الرئيسية */}
          <Route path="/Qu" element={<Qu />} /> {/* الاسئلة الشائعة */}
          <Route path="/signup" element={<Signup />} /> {/*صفحة التسجيل  */}
          <Route path="/login" element={<Login />} /> {/* صفحة الدخول  */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
