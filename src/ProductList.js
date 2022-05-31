import { Link } from 'react-router-dom'
import React, { useState ,useEffect  } from 'react'
// import css module ,作用是讓你的classname自動變成唯一的，避免重複使用同樣的名字
// import style from './productList.module.css'
// import { useState } from 'react'
import Title from './Title'
import QuantityBtn from './QuantityBtn'




export default function ProductList() {
    
   let [productList,setProductList] = useState([])
//    let [input,setInput]=useState("")
               
    useEffect(()=>{
        //1 ：如果沒有dependencr array ： component每次render都會觸發
        //2 ：dependencr array 是空的時候 ： 只會在第一次網頁render的時候觸發
        //3 :dependencr array 有變數的時候 ：第一次網頁render的時候 + 指定的變數改變的時候 會觸發
        fetch('https://raw.githubusercontent.com/tankhaihong/test/main/test.json')
            .then(response => response.json())
            .then(data=>setProductList(data))
            console.log(productList)
    },[])//dependencr array

    // useEffect(()=>{
    //     if(input.length>4)
    //         console.log("可以")
    //     else
    //         console.log("太短")    
    // },[input])
//     const [showProduct,setShowProduct]= useState(false)


  return (
    //React Fragment(會讓你的網頁變小，別人更容易地下載)
    //React Fragment的簡寫 <> </>
    <> 
        {/* <input type="text" onChange={e=>setInput(e.target.value)}/> */}
        {/* {showProduct && <button onClick={()=>{setShowProduct(false)}}>隱藏顯示</button>}
        {!showProduct && <button onClick={()=>{setShowProduct(true)}}>顯示產品</button>} */}
        {/* inline css style */}
        {/* backgroundColor 是js裏面的style，而不是css的style*/}
        
        <Title mainTitle="請選擇您要的手機" subTitle='今日有九折'/>
        <div className='container'>
            {
                // map=js裏面的array功能
                // showProduct && 
                (productList || []).map(product=>( 
                    <React.Fragment key={product.id}>
                        <div className='containerItem'>
                            {product.name}<br/>
                            {product.price}<br/>
                            <Link to={"/product_detail/"+product.id}>
                                <img src={process.env.PUBLIC_URL+"/photo/"+product.image}/><br/>
                            </Link>
                            {product.description}<br/>
                        </div>
                        <QuantityBtn productInfo={product}/>
                    </React.Fragment>
                ))
            }
        </div>
    </>
  )
}
