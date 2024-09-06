// import React, { useState } from "react";
// import Swal from "sweetalert2";
// import { Link, useNavigate } from "react-router-dom";
// import "./main.css";
// import Header from "./header";
// import { FaHistory } from "react-icons/fa";
// import { FaCartShopping } from "react-icons/fa6";
// import { FaShoppingBag } from "react-icons/fa";

// import MyOrder from "./myOrder";
// import OrderHistory from "./orderHistory";
// import Review from "./YourReview";
// import Setting from "../Farmer/setting";

// import { BsMenuButtonWideFill, BsGearFill } from "react-icons/bs";
// import { FaHome } from "react-icons/fa";
// import { IoClose } from "react-icons/io5";

// function Main() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const [option, setOption] = useState("order");

//   // const data = location.state.data;

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   const handleOptionClick = (optionName) => {
//     setOption(optionName);
//     setOpenSidebarToggle(false); // Close sidebar after selecting an option
//   };

//   const navigate = useNavigate();

//   //Home
//   const onHome = () => {
//     navigate("/");
//   };
//   //cart
//   const goCart = () => {
//     navigate("/cart");
//   };

//   //Logout
//   const onLogOut = () => {
//     Swal.fire({
//       title: "Log Out",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // Swal.fire({
//         //   title: "Log Out",
//         //   text: "",
//         //   icon: "success",
//         // });
//         localStorage.removeItem("token");
//         localStorage.removeItem("role");
//         navigate("/");
//         window.location.reload();
//       }
//     });
//   };
//   return (
//     <div className="grid-container">
//       <Header OpenSidebar={OpenSidebar} />
//       <aside
//         id="sidebar"
//         className={openSidebarToggle ? "sidebar-responsive" : ""}
//       >
//         <div className="sidebar-title">
//           <div className="sidebar-brand" onClick={onHome}>
//             Cropify
//           </div>
//           <span className="icon close_icon" onClick={OpenSidebar}>
//             <IoClose />
//           </span>
//         </div>

//         <ul className="sidebar-list">
//           <li className="sidebar-list-item" onClick={onHome}>
//             <FaHome className="icon" /> Home
//           </li>

//           <li
//             className="sidebar-list-item"
//             onClick={() => handleOptionClick("order")}
//           >
//             <FaShoppingBag className="icon" /> My Orders
//           </li>
//           <li className="sidebar-list-item" onClick={goCart}>
//             <FaCartShopping className="icon" /> My Cart
//           </li>
//           <li
//             className="sidebar-list-item"
//             onClick={() => handleOptionClick("history")}
//           >
//             <FaHistory className="icon" /> Order History
//           </li>
//           <li
//             className="sidebar-list-item"
//             onClick={() => handleOptionClick("review")}
//           >
//             <BsMenuButtonWideFill className="icon" /> Your Reviews
//           </li>
//           <li
//             className="sidebar-list-item"
//             onClick={() => handleOptionClick("setting")}
//           >
//             <BsGearFill className="icon" /> Setting
//           </li>
//           <li className="sidebar-list-item" onClick={onLogOut}>
//             <a>
//               <i className="fa-solid fa-right-from-bracket icon"></i> Log Out
//             </a>
//           </li>
//         </ul>
//       </aside>
//       {/* Render component based on the selected option */}
//       {option === "order" ? (
//         <MyOrder />
//       ) : option === "history" ? (
//         <OrderHistory />
//       ) : option === "review" ? (
//         <Review />
//       ) : (
//         <Setting />
//       )}
//     </div>
//   );
// }

// export default Main;
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import "./main.css";
import Header from "./header";
import { FaHistory } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";

import MyOrder from "./myOrder";
import OrderHistory from "./orderHistory";
import Review from "./YourReview";
import Setting from "../Farmer/setting";

import { BsMenuButtonWideFill, BsGearFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function Main() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [option, setOption] = useState("order");

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleOptionClick = (optionName) => {
    setOption(optionName);
    setOpenSidebarToggle(false); // Close sidebar after selecting an option
  };

  const navigate = useNavigate();

  //Home
  const onHome = () => {
    navigate("/");
  };
  //Cart
  const goCart = () => {
    navigate("/cart");
  };

  //Logout
  const onLogOut = () => {
    Swal.fire({
      title: "Log Out",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/");
        window.location.reload();
      }
    });
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <aside
        id="sidebar"
        className={`${
          openSidebarToggle ? "sidebar-responsive" : ""
        } bg-gray-100 p-4`}
      >
        <div className="sidebar-title flex justify-between items-center rounded-2xl">
          <div
            className="sidebar-brand cursor-pointer text-xl"
            onClick={onHome}
          >
            Cropify
          </div>
          <span
            className="icon close_icon cursor-pointer"
            onClick={OpenSidebar}
          >
            <IoClose />
          </span>
        </div>

        <ul className="sidebar-list mt-4">
          <li
            className="sidebar-list-item flex items-center space-x-2 p-2 cursor-pointer"
            onClick={onHome}
          >
            <FaHome className="icon" /> <span>Home</span>
          </li>
          <li
            className="sidebar-list-item flex items-center space-x-2 p-2 cursor-pointer"
            onClick={() => handleOptionClick("order")}
          >
            <FaShoppingBag className="icon" /> <span>My Orders</span>
          </li>
          <li
            className="sidebar-list-item flex items-center space-x-2 p-2 cursor-pointer"
            onClick={goCart}
          >
            <FaCartShopping className="icon" /> <span>My Cart</span>
          </li>
          <li
            className="sidebar-list-item flex items-center space-x-2 p-2 cursor-pointer"
            onClick={() => handleOptionClick("history")}
          >
            <FaHistory className="icon" /> <span>Order History</span>
          </li>
          <li
            className="sidebar-list-item flex items-center space-x-2 p-2 cursor-pointer"
            onClick={() => handleOptionClick("review")}
          >
            <BsMenuButtonWideFill className="icon" /> <span>Your Reviews</span>
          </li>
          <li
            className="sidebar-list-item flex items-center space-x-2 p-2 cursor-pointer"
            onClick={() => handleOptionClick("setting")}
          >
            <BsGearFill className="icon" /> <span>Setting</span>
          </li>
          <li
            className="sidebar-list-item flex items-center space-x-2 p-2 cursor-pointer"
            onClick={onLogOut}
          >
            <i className="fa-solid fa-right-from-bracket icon"></i>{" "}
            <span>Log Out</span>
          </li>
        </ul>
      </aside>

      {/* Render component based on the selected option */}
      {option === "order" ? (
        <MyOrder />
      ) : option === "history" ? (
        <OrderHistory />
      ) : option === "review" ? (
        <Review />
      ) : (
        <Setting />
      )}
    </div>
  );
}

export default Main;
