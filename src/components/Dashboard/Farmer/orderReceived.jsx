import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./orderReceived.css";
import Swal from "sweetalert2";
import Status from "./order_status.jsx";
import BASE_URL from "../../../Server/base_url";

const Order = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getOrders();
  }, []);

  // Function to fetch orders
  const getOrders = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/orderReceived/show`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });
      const json = await response.json();
      setData(json.orders);
    } catch (error) {
      console.log("Error fetching orders:", error.message);
    }
  };

  // Function to cancel an order
  const cancelOrder = async (orderId) => {
    try {
      // Send a DELETE request to the server with the order ID in the URL
      const response = await fetch(
        `${BASE_URL}/api/orderReceived/cancel/${orderId}`,
        {
          method: "DELETE", // Use DELETE method
          headers: {
            "Content-Type": "application/json",
            "auth-token": token, // Add the auth token for authorization
          },
        }
      );

      // Check for HTTP response status
      if (!response.ok) {
        // If the response status is not in the range of 200-299
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the response
      const json = await response.json();

      // Check if the cancellation was successful
      if (json.success) {
        Swal.fire(
          "Order Canceled",
          "The order has been canceled successfully",
          "success"
        );
        getOrders(); // Refresh the orders after cancellation
      } else {
        Swal.fire(
          "Error",
          json.message || "Failed to cancel the order. Please try again.",
          "error"
        );
      }
    } catch (error) {
      console.error("Error canceling the order:", error.message);
      Swal.fire(
        "Error",
        "An error occurred while canceling the order. Please try again.",
        "error"
      );
    }
  };

  // Show buyer info in a popup
  const onInfo = (index) => {
    const buyer = data[index];
    const text = `
      <div>Name - ${buyer.buyer_name}</div>
      <div>State - ${buyer.buyer_address.state}</div>
      <div>City - ${buyer.buyer_address.city}</div>
      <div>Pin - ${buyer.buyer_address.pin}</div>
      <div>PH no. - ${buyer.buyer_ph}</div>
    `;
    Swal.fire({
      title: "Buyer Details",
      html: text,
    });
  };

  const onHome = () => {
    navigate("/");
  };

  return (
    <>
      <section className="cartSection mb-5">
        <div className="container-fluid">
          <div className="row inventory_body">
            <div className="">
              <div className="d-flex align-items-center w-100">
                <div className="left">
                  <h1 className="hd mb-0 cart_head">Orders Received</h1>
                  <p className="cart_head_sub">
                    Check Your Order Received List Here
                  </p>
                </div>
              </div>

              <div className="cartWrapper mt-4">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th className="row_center">Buyer</th>
                        <th className="row_center">Status</th>
                        <th className="row_center">Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      {data.length > 0 &&
                        data.map(
                          (item, index) =>
                            item.status !== "delivered" && (
                              <tr key={index}>
                                <td width={"50%"}>
                                  <div className="d-flex align-items-center">
                                    <div className="img">
                                      <Link>
                                        <img
                                          src={
                                            item.image + "?im=Resize=(100,100)"
                                          }
                                          className="w-100"
                                          alt={item.productName}
                                        />
                                      </Link>
                                    </div>

                                    <div className="info pl-4">
                                      <Link>
                                        <h4>{item.productName}</h4>
                                      </Link>
                                      <h4 className="myOrder_info myOrder_info_price">
                                        Original Price: RS. {item.price}
                                      </h4>
                                      {item.negotiation && (
                                        <h4 className="myOrder_info myOrder_info_price text-red-500">
                                          Negotiated Price: RS.{" "}
                                          {item.negotiation}
                                        </h4>
                                      )}

                                      {item.quantity < 1 ? (
                                        <h4 className="myOrder_info">
                                          Weight: {item.quantity * 1000}GM
                                        </h4>
                                      ) : (
                                        <h4 className="myOrder_info">
                                          Weight: {item.quantity}KG
                                        </h4>
                                      )}
                                    </div>
                                  </div>
                                </td>

                                <td align="center">
                                  <button
                                    type="button"
                                    className="btn btn-outline-info"
                                    onClick={() => onInfo(index)}
                                  >
                                    Info
                                  </button>
                                </td>

                                <Status
                                  key={index}
                                  data={item}
                                  getOrders={getOrders}
                                />

                                <td align="center">
                                  <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => cancelOrder(item.id)}
                                  >
                                    Cancel
                                  </button>
                                </td>
                              </tr>
                            )
                        )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
