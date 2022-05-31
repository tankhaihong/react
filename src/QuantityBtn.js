import React from 'react'
import { useState ,useContext} from 'react'
import { CartContext } from './CartContext'

export default function QuantityBtn({productInfo}) {

    const {cartItems,setCartItems} = useContext(CartContext)

    //購物車有沒有此商品
    let productIndexInCart = cartItems.findIndex((element)=>{
        return element.id === productInfo.id
    })
    //findIndex
    //如果在購物車裏面有該物品 =》 返回索引位置 0，1 ，2......
    //如果在購物車裏面内 沒有 該物品 =》 返回-1

    let [numInCart,setNumInCart]=useState(
        (productIndexInCart===-1) ? 0 : cartItems[productIndexInCart].quantity
    )
    const handleAdd =()=>{

        if(productIndexInCart===-1)
        {
            setCartItems(
                [{
                        id : productInfo.id,
                        name: productInfo.name,
                        image: productInfo.image,
                        price: productInfo.price,
                        description: productInfo.description,
                        quantity:1
                },
                ...cartItems]
            )
        }
        else
        {
            let newCartArray=[...cartItems]
            newCartArray[productIndexInCart].quantity++
            setCartItems(newCartArray)
        }
        setNumInCart(numInCart+1)
    }
    const handleSubtract=()=>{

        if(cartItems[productIndexInCart].quantity===1)
        {
            let newCartArray=[...cartItems]
            //splice用來remove的
            newCartArray.splice(productIndexInCart,1)
            setCartItems(newCartArray)
        }

        else
        {
            let newCartArray=[...cartItems]
            newCartArray[productIndexInCart].quantity--
            setCartItems(newCartArray)
        }
        setNumInCart(numInCart-1)
    }
    return (
      <div>
          {
              (numInCart===0)?
              <span onClick={handleAdd}>加入購物車</span>:
              <div>
                  <span className="subtractBtn" onClick={handleSubtract}>-</span>
                  {numInCart}件
                  <span className="addBtn" onClick={handleAdd}>+</span>
              </div>
          }
      </div>
    )
}
