import { Add, Delete, Remove } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'

const CartItem = ({Food, FoodName, Price, Quantity, deleteItem}) => {

  const [quantity, setQuantity] = useState(Quantity);
  const [price, setprice] = useState(Price);

  const onAddClick = ()=>{
    if (quantity <= 99) {
      setQuantity(quantity+1);
    }
  }
 const onRemoveClick = ()=>{
  if (quantity >= 2) {
    setQuantity(quantity-1);
  }
  }
  useEffect(()=>{
    setprice(Price*quantity);
    setQuantity(quantity * 1);
  },[quantity,FoodName])

  return (
        <>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={Food} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge text-sm badge-ghost badge-sm">{FoodName}</span>
              </td>
              <td>
                <button onClick={onAddClick} className='p-2 bg-base-200 mx-2 rounded-full ' ><Add /></button>
                {quantity}
                <button onClick={onRemoveClick} className='p-2 bg-base-200 mx-2 rounded-full ' ><Remove /> </button>
              </td>
              <td>{price.toFixed(2) }</td>
              <td onClick={deleteItem}  className='flex justify-center items-center h-[4rem] w-24 ' >
                <Delete />
              </td>
            </tr>
     </>
  )
}

export default CartItem