import React from 'react';

function ProductForm({
  code,
  price,
  category,
  stock,
  editingIndex,
  handleCode,
  handlePrice,
  handleCategory,
  handleSubmit,
  handleStock,
  handleCancel
}) {
  // ✅ التأكد إن كل الحقول مش فاضية
  const isFormValid =
    code.trim() !== '' &&
    category.trim() !== '' &&
    stock !== '' &&
    price > 0;

  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/2 mx-auto bg-slate-600/60 relative p-6 rounded-xl shadow-xl"
    >
      <h2 className="text-center text-white mb-6">
        {editingIndex !== null ? 'Edit Product' : 'Add Product'}
      </h2>

      {/* Product Name */}
      <div className="relative">
        <input
          list="groups"
          value={code}
          onChange={handleCode}
          id="ProductName"
          name="ProductName"
          type="text"
          placeholder="Product Name"
          className="peer w-full border-0 border-b-2 border-amber-300 bg-transparent text-white focus:border-amber-500 focus:outline-none placeholder-transparent"
        />
        <datalist id="groups">
          <option value="Toshiba" />
          <option value="Samsung" />
          <option value="Apple" />
          <option value="HP" />
          <option value="Lenovo" />
        </datalist>
        <label
          htmlFor="ProductName"
          className="absolute -my-2 left-0 -top-3.5 text-sm text-amber-300 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-amber-500"
        >
          Product Name
        </label>
      </div>

      {/* Product Price */}
      <div className="relative my-10">
        <input
          value={price}
          onChange={handlePrice}
          id="productPrice"
          name="productPrice"
          type="number"
          placeholder="Product Price"
          className="peer w-full border-0 border-b-2 border-amber-300 bg-transparent text-white focus:border-amber-500 focus:outline-none placeholder-transparent"
        />
        <label
          htmlFor="productPrice"
          className="absolute -my-2 left-0 -top-3.5 text-sm text-amber-300 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-amber-500"
        >
          Product Price
        </label>
      </div>

      {/* Product Category */}
      <div className="relative my-10">
        <input
          value={category}
          onChange={handleCategory}
          id="productCategory"
          name="productCategory"
          type="text"
          placeholder="Product Category"
          className="peer w-full border-0 border-b-2 border-amber-300 bg-transparent text-white focus:border-amber-500 focus:outline-none placeholder-transparent"
        />
        <label
          htmlFor="productCategory"
          className="absolute -my-2 left-0 -top-3.5 text-sm text-amber-300 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-amber-500"
        >
          Product Category
        </label>
      </div>

      {/* Product Stock */}
      <div className="relative my-10">
        <input
          value={stock}
          onChange={handleStock}
          id="handleStock"
          name="handleStock"
          type="number"
          placeholder="Stock"
          className="peer w-full border-0 border-b-2 border-amber-300 bg-transparent text-white focus:border-amber-500 focus:outline-none placeholder-transparent"
        />
        <label
          htmlFor="handleStock"
          className="absolute -my-2 left-0 -top-3.5 text-sm text-amber-300 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-amber-500"
        >
          Stock
        </label>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <button
          type="submit"
          className={`btn-outline-success ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!isFormValid}
        >
          {editingIndex !== null ? 'Update Product' : 'Add Product'}
        </button>

        {editingIndex !== null && (
          <button
            type="button"
            onClick={handleCancel}
            className="btn-outline-warning"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default ProductForm;
