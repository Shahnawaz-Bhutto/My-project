import React, { useEffect, useState } from "react";

// Component to display individual product cards for related products
const ProductCard = ({ product }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center hover:shadow-2xl transition-shadow">
    <img
      src={product.image}
      alt={product.title}
      className="w-32 h-32 object-contain mb-4"
    />
    <h2 className="text-sm font-semibold text-center mb-1">{product.title}</h2>
    <p className="text-green-600 font-bold">${product.price}</p>
  </div>
);

function App() {
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  // Fetch main product
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  // Fetch related products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => setRelated(data))
      .catch((err) => console.error(err));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-lg">Loading product...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Main Product Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:flex">
        {/* Product Images */}
        <div className="md:w-1/2 p-6 flex flex-col items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-contain mb-4"
          />
          <div className="flex space-x-2">
            {/* Thumbnails could be mapped if multiple images */}
            <img
              src={product.image}
              alt="thumbnail"
              className="w-20 h-20 object-contain rounded-lg border border-gray-200 hover:border-blue-500 cursor-pointer transition"
            />
            <img
              src={product.image}
              alt="thumbnail"
              className="w-20 h-20 object-contain rounded-lg border border-gray-200 hover:border-blue-500 cursor-pointer transition"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 font-semibold mr-2">
                {product.rating.rate} ⭐
              </span>
              <span className="text-gray-500">({product.rating.count} reviews)</span>
            </div>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-3xl font-bold text-green-600 mb-6">${product.price}</p>

            {/* Quantity Selector */}
            <div className="flex items-center mb-6">
              <span className="mr-4 font-semibold">Quantity:</span>
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center border-t border-b border-gray-200"
              />
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
