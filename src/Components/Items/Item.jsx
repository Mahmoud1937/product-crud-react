import React from 'react'

function Item({ dataFromProducts ,prdIndex,updateProduct,deleteProd}) {
  const { id, code, price, category, count,stock } = dataFromProducts
  return (<>


    <div className="w-1/3 p-3 opacity-50">
      <div className='bg-slate-300 relative shadow text-slate-900  p-4'>
        <h2>Product Name : {code}</h2>
        <p> Price : {price}</p>
        <p> Category : {category}</p>
        <p> stock : {stock}</p>
       {/* {onSale? <span className='absolute top-2 p-2 text-red-50 right-2 bg-red-600'>Sale</span>:''} */}
        <div className='my-2 '>
          <button onClick={()=>{
            deleteProd(id)
          }} className="btn-outline-danger text-red-50 my-1 w-full"> <i className='fas fa-trash'></i> Delete</button>
<button onClick={() => updateProduct(prdIndex)} className="btn-outline-warning w-full my-2">
  <i className='fas fa-edit'></i> Update
</button>
        </div> 
      </div>

    </div>
  </>
  )
}

export default Item