import React, { useState } from 'react';
import CartItem from './CartItem';
import { v4 as uuidv4 } from 'uuid';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: uuidv4(), FoodName: "salad", Price: 12, Quantity: 3 },
    { id: uuidv4(), FoodName: "pizza", Price: 8.50, Quantity: 1 },
    { id: uuidv4(), FoodName: "burger", Price: 11, Quantity: 4 },
    { id: uuidv4(), FoodName: "fries", Price: 15, Quantity: 2 },
    { id: uuidv4(), FoodName: "rice", Price: 17, Quantity: 8 },
    { id: uuidv4(), FoodName: "chicken", Price: 19, Quantity: 3 },
    { id: uuidv4(), FoodName: "fish", Price: 20, Quantity: 7 },
  ])

  const handleRemoveItem = (id) => {
    const updatedList = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedList);
  };

  return (
    <div className='my-16 w-screen min-h-[50vh]'>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className='bg-red text-xl'>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Food</th>
              <th>Food Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                Food={"http://bit.ly/2gPLxZ4"}
                FoodName={item.FoodName}
                Quantity={item.Quantity}
                deleteItem={() => handleRemoveItem(item.id)}
                Price={item.Price}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
