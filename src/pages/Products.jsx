import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import {
  Plus,
  Search,
  X,
  Package,
} from "lucide-react";

import toast from "react-hot-toast";

import {
  addProduct,
  deleteProduct,
} from "../features/products/productSlice";

import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const Products = () => {

  const dispatch = useDispatch();

  const { products } = useSelector(
    (state) => state.products
  );

  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productStatus, setProductStatus] =
    useState("Available");

  // FILTER PRODUCTS
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // ADD PRODUCT
  const handleAddProduct = () => {

    if (!productName || !productPrice) {
      toast.error("Please fill all fields");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: productName,
      price: `$${productPrice}`,
      status: productStatus,
    };

    dispatch(addProduct(newProduct));

    toast.success("Product added successfully");

    setProductName("");
    setProductPrice("");
    setProductStatus("Available");

    setShowModal(false);
  };

  // DELETE PRODUCT
  const handleDelete = (id) => {

    dispatch(deleteProduct(id));

    toast.success("Product deleted");
  };

  return (
    <div>

      <Header
        title="Products"
        subtitle={`${products.length} Products Available`}
        rightContent={
          <div className="flex flex-col sm:flex-row gap-4">

            {/* SEARCH */}
            <div className="relative">

              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 outline-none w-full sm:w-72"
              />

            </div>

            {/* BUTTON */}
            <button
              onClick={() => setShowModal(true)}
              className="bg-green-500 hover:bg-green-400 transition px-5 py-3 rounded-xl font-medium flex items-center justify-center gap-2"
            >
              <Plus size={18} />
              Add Product
            </button>

          </div>
        }
      />

      {/* EMPTY STATE */}
      {filteredProducts.length === 0 ? (

        <div className="bg-white/5 border border-white/10 rounded-3xl p-16 text-center">

          <Package
            size={60}
            className="mx-auto text-slate-500 mb-5"
          />

          <h2 className="text-2xl font-semibold">
            No Products Found
          </h2>

          <p className="text-slate-400 mt-2">
            Try searching with another keyword
          </p>

        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {filteredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
              handleDelete={handleDelete}
            />

          ))}

        </div>

      )}

      {/* MODAL */}
      {showModal && (

        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">

          <div className="w-full max-w-md bg-slate-900 border border-white/10 rounded-3xl p-6">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-6">

              <h2 className="text-2xl font-bold">
                Add Product
              </h2>

              <button
                onClick={() => setShowModal(false)}
                className="hover:bg-white/10 p-2 rounded-lg transition"
              >
                <X size={20} />
              </button>

            </div>

            {/* FORM */}
            <div className="space-y-5">

              <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) =>
                  setProductName(e.target.value)
                }
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none"
              />

              <input
                type="number"
                placeholder="Price"
                value={productPrice}
                onChange={(e) =>
                  setProductPrice(e.target.value)
                }
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none"
              />

              <select
                value={productStatus}
                onChange={(e) =>
                  setProductStatus(e.target.value)
                }
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none"
              >
                <option value="Available">
                  Available
                </option>

                <option value="Out of Stock">
                  Out of Stock
                </option>

              </select>

              <button
                onClick={handleAddProduct}
                className="w-full bg-green-500 hover:bg-green-400 transition rounded-xl py-3 font-semibold"
              >
                Add Product
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default Products;

