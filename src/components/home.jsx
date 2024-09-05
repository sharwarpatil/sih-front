// // import React, { useEffect, useState } from "react";
// // import "../styles/home.css";
// // import { useNavigate } from "react-router-dom";
// // import Hero from "./Hero/hero";
// // import Product from "./product/product";
// // import Top from "./TopBar/top";
// // import Nav from "./Navbar/nav";
// // import BASE_URL from "../Server/base_url";
// // import { Inventory } from "@mui/icons-material";

// // const Home = () => {
// //   const navigate = useNavigate();
// //   let token = localStorage.getItem("token");

// //   const [top, setTop] = useState([]);
// //   const [vegetable, setVegetable] = useState([]);
// //   const [fruit, setFruit] = useState([]);
// //   const [flours, setFlours] = useState([]);
// //   const [masala, setMasala] = useState([]);
// //   const [rice, setRice] = useState([]);
// //   const [dal, setDal] = useState([]);

// //   useEffect(() => {
// //     if (!token) {
// //       navigate("/signup");
// //       return;
// //     }

// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch(`${BASE_URL}/api/product/view`, {
// //           method: "GET",
// //           headers: {
// //             "Content-Type": "application/json",
// //             "auth-token": localStorage.getItem("token"),
// //           },
// //         });
// //         const json = await response.json();
// //         let top = json.filter((item) => {
// //           return item.rating >= 4;
// //         });
// //         console.log(top);
// //         let veg = json.filter((item) => {
// //           return item.cat === "vegetable";
// //         });
// //         let fruit = json.filter((item) => {
// //           return item.cat === "fruit";
// //         });
// //         let masala = json.filter((item) => {
// //           return item.cat === "masala";
// //         });
// //         let rice = json.filter((item) => {
// //           return item.cat === "rice";
// //         });
// //         let dal = json.filter((item) => {
// //           return item.cat === "dal";
// //         });
// //         let flours = json.filter((item) => {
// //           return item.cat === "flours";
// //         });
// //         setTop(top);
// //         setFruit(fruit);
// //         setVegetable(veg);
// //         setMasala(masala);
// //         setRice(rice);
// //         setDal(dal);
// //         setFlours(flours);
// //       } catch (error) {
// //         console.error("Error fetching products:", error.message);
// //       }
// //     };

// //     // Call fetchData function when component mounts
// //     fetchData();
// //   }, [token]); // Call useEffect when token changes

// //   const [searchData, setSearchData] = useState([]);

// //   return (
// //     <>
// //       {/* <Navbar /> */}
// //       <Nav setSearchData={setSearchData} />
// //       {searchData.length !== 0 && (
// //         <>
// //           <Top name={"Search Items"} />
// //           <Product data={searchData} />
// //         </>
// //       )}
// //       <Hero />

// //       {top.length > 0 && (
// //         <>
// //           <Top name={"Top Products"} />
// //           <Product data={top} />
// //         </>
// //       )}
// //       {vegetable.length > 0 && (
// //         <>
// //           <Top name={"Vegetables"} />
// //           <Product data={vegetable} />
// //         </>
// //       )}
// //       {fruit.length > 0 && (
// //         <>
// //           <Top name={"Fruits"} />
// //           <Product data={fruit} />
// //         </>
// //       )}
// //       {flours.length > 0 && (
// //         <>
// //           <Top name={"Flours"} />
// //           <Product data={flours} />
// //         </>
// //       )}
// //       {rice.length > 0 && (
// //         <>
// //           <Top name={"Rice"} />
// //           <Product data={rice} />
// //         </>
// //       )}
// //       {dal.length > 0 && (
// //         <>
// //           <Top name={"Dal"} />
// //           <Product data={dal} />
// //         </>
// //       )}
// //       {masala.length > 0 && (
// //         <>
// //           <Top name={"Masalas"} />
// //           <Product data={masala} />
// //         </>
// //       )}
// //     </>
// //   );
// // };

// // export default Home;
// import React, { useEffect, useState } from "react";
// import "../styles/home.css";
// import { useNavigate } from "react-router-dom";
// import Hero from "./Hero/hero";
// import Product from "./product/product";
// import Top from "./TopBar/top";
// import Nav from "./Navbar/nav";
// import BASE_URL from "../Server/base_url";

// const Home = () => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   const [list, setList] = useState([]);
//   const [top, setTop] = useState([]);
//   const [vegetable, setVegetable] = useState([]);
//   const [fruit, setFruit] = useState([]);
//   const [flours, setFlours] = useState([]);
//   const [masala, setMasala] = useState([]);
//   const [rice, setRice] = useState([]);
//   const [dal, setDal] = useState([]);

//   useEffect(() => {
//     if (!token) {
//       navigate("/signup");
//       return;
//     }

//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/api/product/view`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             "auth-token": token,
//           },
//         });
//         const json = await response.json();

//         const filteredList = json.filter((item) => item.rating); // Adjust this line to filter based on the rating or another criteria
//         const veg = json.filter((item) => item.cat === "vegetable");
//         const fruit = json.filter((item) => item.cat === "fruit");
//         const masala = json.filter((item) => item.cat === "masala");
//         const rice = json.filter((item) => item.cat === "rice");
//         const dal = json.filter((item) => item.cat === "dal");
//         const flours = json.filter((item) => item.cat === "flours");

//         setList(filteredList);
//         setTop(filteredList); // Update this if you want to filter 'top' products differently
//         setFruit(fruit);
//         setVegetable(veg);
//         setMasala(masala);
//         setRice(rice);
//         setDal(dal);
//         setFlours(flours);
//       } catch (error) {
//         console.error("Error fetching products:", error.message);
//       }
//     };

//     fetchData();
//   }, [token]);

//   const [searchData, setSearchData] = useState([]);

//   return (
//     <>
//       <Nav setSearchData={setSearchData} />
//       {searchData.length !== 0 && (
//         <>
//           <Top name={"Search Items"} />
//           <Product data={searchData} />
//         </>
//       )}
//       <Hero />
//       {list.length > 0 && (
//         <>
//           <Top name={"Products"} />
//           <Product data={list} />
//         </>
//       )}
//       {top.length > 0 && (
//         <>
//           <Top name={"Top Products"} />
//           <Product data={top} />
//         </>
//       )}
//       {vegetable.length > 0 && (
//         <>
//           <Top name={"Vegetables"} />
//           <Product data={vegetable} />
//         </>
//       )}
//       {fruit.length > 0 && (
//         <>
//           <Top name={"Fruits"} />
//           <Product data={fruit} />
//         </>
//       )}
//       {flours.length > 0 && (
//         <>
//           <Top name={"Flours"} />
//           <Product data={flours} />
//         </>
//       )}
//       {rice.length > 0 && (
//         <>
//           <Top name={"Rice"} />
//           <Product data={rice} />
//         </>
//       )}
//       {dal.length > 0 && (
//         <>
//           <Top name={"Dal"} />
//           <Product data={dal} />
//         </>
//       )}
//       {masala.length > 0 && (
//         <>
//           <Top name={"Masalas"} />
//           <Product data={masala} />
//         </>
//       )}
//     </>
//   );
// };

// export default Home;
import React, { useEffect, useState } from "react";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero/hero";
import Product from "./product/product";
import Top from "./TopBar/top";
import Nav from "./Navbar/nav";
import BASE_URL from "../Server/base_url";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [list, setList] = useState([]);
  const [top, setTop] = useState([]);
  const [vegetable, setVegetable] = useState([]);
  const [fruit, setFruit] = useState([]);
  const [flours, setFlours] = useState([]);
  const [masala, setMasala] = useState([]);
  const [rice, setRice] = useState([]);
  const [dal, setDal] = useState([]);
  const [inventoryData, setInventoryData] = useState([]); // State for inventory items
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    if (!token) {
      navigate("/signup");
      return;
    }

    const fetchData = async () => {
      try {
        // Fetching products
        const productResponse = await fetch(`${BASE_URL}/api/product/view`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
          },
        });
        const productJson = await productResponse.json();

        // Fetching inventory items
        const inventoryResponse = await fetch(
          `${BASE_URL}/api/inventory/show`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token": token,
            },
          }
        );
        const inventoryJson = await inventoryResponse.json();

        // Set the state for inventory items
        setInventoryData(inventoryJson.product);

        // Filtering products by categories
        const topProducts = productJson.filter((item) => item.rating > 4);
        const veg = productJson.filter((item) => item.cat === "vegetable");
        const fruits = productJson.filter((item) => item.cat === "fruit");
        const masalas = productJson.filter((item) => item.cat === "masala");
        const rices = productJson.filter((item) => item.cat === "rice");
        const dals = productJson.filter((item) => item.cat === "dal");
        const flour = productJson.filter((item) => item.cat === "flours");

        // Set state for product categories
        setTop(topProducts);
        setVegetable(veg);
        setFruit(fruits);
        setMasala(masalas);
        setRice(rices);
        setDal(dals);
        setFlours(flour);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    // Fetch data when the component mounts
    fetchData();
  }, [token]);

  return (
    <>
      <Nav setSearchData={setSearchData} />
      {searchData.length > 0 && (
        <>
          <Top name={"Search Items"} />
          <Product data={searchData} />
        </>
      )}
      <Hero />

      {/* Inventory Items */}
      {inventoryData.length > 0 && (
        <>
          <Top name={"Inventory Items"} />
          <div className="inventoryWrapper mt-4">
            <div className="table-responsive">
              <table className="table">
                {/* <thead>
                  <tr>
                    <th>Product</th>
                  </tr>
                </thead> */}
                <tbody>
                  {inventoryData.map((item, index) => (
                    <tr key={index}>
                      <td width={"50%"}>
                        <div className="d-flex align-items-center">
                          <div className="img">
                            <img
                              src={`${item.image}?im=Resize=(100,100)`}
                              className="w-100"
                              alt={item.productName}
                            />
                          </div>
                          <div className="info pl-4">
                            <h4>{item.productName}</h4>
                            <h4 className="myOrder_info myOrder_info_price">
                              RS. {item.price}/KG
                            </h4>
                            {item.CurQuantity < 0.1 ? (
                              <h4 className="myOrder_info OUT_OF_STOCK">
                                Out Of Stock
                              </h4>
                            ) : item.CurQuantity > 1 ? (
                              <h4 className="myOrder_info">
                                In Stock: {item.CurQuantity}KG
                              </h4>
                            ) : (
                              <h4 className="myOrder_info">
                                In Stock: {item.CurQuantity * 1000}GM
                              </h4>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* Other Product Categories */}
      {list.length > 0 && (
        <>
          <Top name={"Products"} />
          <Product data={list} />
        </>
      )}
      {top.length > 0 && (
        <>
          <Top name={"Top Products"} />
          <Product data={top} />
        </>
      )}
      {vegetable.length > 0 && (
        <>
          <Top name={"Vegetables"} />
          <Product data={vegetable} />
        </>
      )}
      {fruit.length > 0 && (
        <>
          <Top name={"Fruits"} />
          <Product data={fruit} />
        </>
      )}
      {flours.length > 0 && (
        <>
          <Top name={"Flours"} />
          <Product data={flours} />
        </>
      )}
      {rice.length > 0 && (
        <>
          <Top name={"Rice"} />
          <Product data={rice} />
        </>
      )}
      {dal.length > 0 && (
        <>
          <Top name={"Dal"} />
          <Product data={dal} />
        </>
      )}
      {masala.length > 0 && (
        <>
          <Top name={"Masalas"} />
          <Product data={masala} />
        </>
      )}
    </>
  );
};

export default Home;
