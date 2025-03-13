import React from 'react'

const ProductName:React.FC<{ProductName:string}> = ({ProductName}) => {
  
  return (
    <div>{ProductName}</div>
  )
}

export default ProductName