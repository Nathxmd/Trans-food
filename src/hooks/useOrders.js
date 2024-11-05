// src/hooks/useOrders.js
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../config/firebase";

export const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "orders"), orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const ordersData = [];
      querySnapshot.forEach((doc) => {
        ordersData.push({ id: doc.id, ...doc.data() });
      });
      setOrders(ordersData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addOrder = async (product) => {
    try {
      await addDoc(collection(db, "orders"), {
        productId: product.id,
        productName: product.name,
        price: product.price,
        quantity: 1,
        timestamp: new Date(),
      });
      return true;
    } catch (error) {
      console.error("Error adding order:", error);
      return false;
    }
  };

  return { orders, loading, addOrder };
};
