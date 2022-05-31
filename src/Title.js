import React from 'react'

export default function Title({mainTitle,subTitle}) {
  return (
    <div>
        <h1 style={{backgroundColor:"orangered",borderBottom:"5px solid orange",textAlign:'center'}}>
            {mainTitle}
            {subTitle}
        </h1>
    </div>
  )
}
