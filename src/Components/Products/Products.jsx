import React, { useEffect, useState } from 'react';
import Item from '../Items/Item';
import ProductForem from '../ProductForem/ProductForm';

function Products() {
  const [product, setProducts] = useState([]);
  const [code, setCode] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  let updateProduct = (index) => {
    const prd = product[index];
    setCode(prd.code);
    setPrice(prd.price);
    setCategory(prd.category);
    setCategory(prd.stock);
    setEditingIndex(index);
  };

  let deleteProd = (id) => {
    const newArr = product.filter((prd) => prd.id !== id);
    setProducts(newArr);
    localStorage.setItem('products', JSON.stringify(newArr));

    if (product[editingIndex]?.id === id) {
      setEditingIndex(null);
      setCode('');
      setPrice(0);
      setCategory('');
    }
  };

  let handleCode = (e) => setCode(e.target.value);
  let handlePrice = (e) => setPrice(+e.target.value);
  let handleCategory = (e) => setCategory(e.target.value);
  let handleStock = (e) => setStock(e.target.value);

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  const addToProduct = (e) => {
    e.preventDefault();
    let newProd = structuredClone(product);

    if (editingIndex !== null) {
      newProd[editingIndex] = {
        ...newProd[editingIndex],
        code,
        price,
        category,
        stock

      };
    } else {
      newProd.push({
        id: Date.now(),
        code,
        price,
        category,
        stock

      });
    }

    setProducts(newProd);
    localStorage.setItem('products', JSON.stringify(newProd));

    setCode('');
    setPrice('');
    setCategory('');
    setStock('')
    setEditingIndex(null);
  };

  return (
    <>
      <h2 className="text-center my-5 font-mono font-extrabold">Simple CRUD</h2>

      <div className="container mx-auto py-5">
    <ProductForem code={code}
  price={price}
  stock={stock}
  category={category}
  editingIndex={editingIndex}
  handleCode={handleCode}
  handlePrice={handlePrice}
  handleStock={handleStock}
  handleCategory={handleCategory}
  handleSubmit={addToProduct}
  handleCancel={() => {
    setEditingIndex(null);
    setCode('');
    setPrice('');
    setCategory('');
    setStock('')
  }}/>

        <div className="row mt-10">
          {product.map((ele, index) => (
            <Item
              key={ele.id}
              deleteProd={deleteProd}
              updateProduct={updateProduct}
              prdIndex={index}
              dataFromProducts={ele}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
