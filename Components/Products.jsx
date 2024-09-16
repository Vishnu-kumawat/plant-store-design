/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('all'); // State to track selected category

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
            setLoading(false);
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    // Filter products based on selected category
    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div>
            <h1 className="font-semibold text-4xl text-center mt-7">Products</h1>

            <div className="flex justify-center space-x-4 mb-8 mt-8">
                <button
                    className={`px-4 py-2 rounded ${selectedCategory === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setSelectedCategory('all')}
                >
                    All Products
                </button>
                <button
                    className={`px-4 py-2 rounded ${selectedCategory === 'men\'s clothing' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setSelectedCategory("men's clothing")}
                >
                    Men's Clothing
                </button>
                <button
                    className={`px-4 py-2 rounded ${selectedCategory === 'women\'s clothing' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setSelectedCategory("women's clothing")}
                >
                    Women's Clothing
                </button>
                <button
                    className={`px-4 py-2 rounded ${selectedCategory === 'jewelery' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setSelectedCategory('jewelery')}
                >
                    Jewelry
                </button>
                <button
                    className={`px-4 py-2 rounded ${selectedCategory === 'electronics' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setSelectedCategory('electronics')}
                >
                    Electronics
                </button>

            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-8 mb-14">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 border rounded-lg shadow-md">
                        <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />
                        <h2 className="font-bold text-lg mt-3">{product.title}</h2>
                        <p className="text-gray-700 mt-4 text-sm font-medium">{product.description.substring(0, 100)}...</p>
                        <p className="text-gray-600 font-medium text-lg mt-2">Price: ${product.price}</p>

                        <div className="flex items-center justify-between mt-2">
                            <p className="text-yellow-500">⭐ {product.rating.rate}</p>
                            <p className="ml-2 text-sm text-gray-500">({product.rating.count} reviews)</p>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;