import { useOrders } from "../hooks/useOrders";

function OrdersPage() {
  const { orders, loading } = useOrders();

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Orders</h1>
      <div className="grid gap-4">
        {orders.map((order) => (
          <div key={order.id} className="border rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold">{order.productName}</h3>
            <p className="text-gray-600">Price: ${order.price}</p>
            <p className="text-gray-600">Quantity: {order.quantity}</p>
            <p className="text-gray-600">
              Date: {order.timestamp.toDate().toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrdersPage;
