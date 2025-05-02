import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Form } from "react-bootstrap";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const response = await axios.get(
          `https://ownthreedays-default-rtdb.firebaseio.com/orders.json`
        );

        if (response.data) {
          const loadedOrders = [];

          // Loop over each user
          for (const userId in response.data) {
            const userOrders = response.data[userId];

            for (const orderId in userOrders) {
              const orderData = userOrders[orderId];

              loadedOrders.push({
                userId,
                orderId,
                ...orderData,
              });
            }
          }

          setOrders(loadedOrders.reverse()); // newest first
        }
      } catch (error) {
        console.log("Error fetching orders:", error);
      }
    };

    fetchAllOrders();
  }, []);

  const handleStatusChange = async (userId, orderId, newStatus) => {
    try {
      const orderToUpdate = orders.find(
        (o) => o.userId === userId && o.orderId === orderId
      );
  
      const updatedOrder = { ...orderToUpdate, status: newStatus };
  
      await axios.put(
        `https://ownthreedays-default-rtdb.firebaseio.com/orders/${userId}/${orderId}.json`,
        updatedOrder
      );
  
      setOrders((prev) =>
        prev.map((order) =>
          order.orderId === orderId && order.userId === userId
            ? { ...order, status: newStatus }
            : order
        )
      );
    } catch (error) {
      console.log("Error updating status:", error);
    }
  };
  

  return (
    <div className="p-3">
      <h2>All Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <Card className="mb-3" key={order.orderId}>
            <Card.Body>
              <Card.Title>Order ID: {order.orderId}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                User ID: {order.userId}
              </Card.Subtitle>
              <p><strong>Address:</strong> {order.address}</p>
              <p><strong>Total:</strong> ₹{order.totalAmount}</p>
              <p><strong>Status:</strong> {order.status}</p>

              <Form.Select
                value={order.status}
                onChange={(e) =>
                  handleStatusChange(order.userId, order.orderId, e.target.value)
                }
              >
                <option value="pending">Pending</option>
                <option value="preparing">Preparing</option>
                <option value="delivered">Delivered</option>
              </Form.Select>

              <hr />
              <strong>Items:</strong>
              <ul>
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.name} × {item.quantity} = ₹{item.price * item.quantity}
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default Orders;
