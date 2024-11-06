// src/context/OrderProvider.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import { OrderContext } from "./OrderContext";

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);

  return (
    <OrderContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrderContext.Provider>
  );
}

OrderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
