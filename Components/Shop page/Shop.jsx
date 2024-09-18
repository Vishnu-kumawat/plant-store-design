import { useState, useEffect } from 'react';
import { ArrowLeftFromLine, Search, ChevronDown, ChevronUp } from 'lucide-react';

const Shop = () => {
  const [price, setPrice] = useState(10000);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(true);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch('https://perenual.com/api/species-list?page=1&key=sk-2i6G66e7bafca7bde6871');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPlants(data.data); // Assuming 'data' contains the array of plants
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPlants();
  }, []);

  // Function to generate a random price between 10 and 100
  const generateRandomPrice = () => {
    return (Math.random() * (100 - 10) + 10).toFixed(2);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const toggleAvailability = () => {
    setIsAvailabilityOpen(!isAvailabilityOpen);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <div>
      <div className="flex justify-around bg-green-50">
        <div>
          <img
            className="w-96 mix-blend-multiply"
            src="https://img.freepik.com/free-vector/realistic-green-leaves-background_52683-89787.jpg?t=st=1726550422~exp=1726554022~hmac=28f7b8ef1d163d75376560488269d8dbbd14429427d95a2a3de0de347b880a62&w=1060"
            alt="Green Leaves Background"
          />
        </div>
        <div className="flex items-center">
          <p className="text-5xl text-center font-semibold">Shop</p>
        </div>
        <div>
          <img
            className="w-96 mix-blend-multiply"
            src="https://img.freepik.com/premium-photo/green-succulent-plant-closeup_1282444-14752.jpg?uid=R119575077&ga=GA1.1.816295967.1700043709&semt=ais_hybrid"
            alt="Green Succulent Plant"
          />
        </div>
      </div>

      <div className="flex mt-20 mx-20">
        <div className="border flex items-center rounded-3xl justify-between w-[500px] py-3 text-2xl font-semibold">
          <p className="ml-5 items-center">Filters</p>
          <p className="mr-5 bg-gray-100 rounded-xl py-1 px-2">
            <ArrowLeftFromLine />
          </p>
        </div>

        <div className="flex justify-around py-1 px-2 items-center border rounded-3xl w-full ml-8 mr-20">
          <p className="font-semibold">All</p>
          <p className="text-gray-500 font-semibold">House Plants</p>
          <p className="text-gray-500 font-semibold">Potter Plants</p>
          <p className="text-gray-500 font-semibold">Seeds</p>
          <p className="text-gray-500 font-semibold">Small Plants</p>
          <p className="text-gray-500 font-semibold">Succulents</p>
          <p className="text-gray-500 font-semibold">Terrariums</p>
        </div>
      </div>

      <div className="flex mx-20 mt-10">
        <div className="w-[335px] border rounded-xl">
          <div className="relative flex items-center mx-5 mt-5">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-3xl w-full bg-gray-50"
            />
            <Search className="absolute left-3 text-gray-500" />
          </div>

          <div className="bg-gray-100 p-4 mt-5 mx-5 rounded-xl">
            <p className="mx-2 text-2xl font-semibold mb-2 px-2 border-gray-300 pb-3 border-b">Price Range</p>
            <div className="flex items-center">
              <input
                type="range"
                min={1000}
                max={4500}
                value={price}
                onChange={handlePriceChange}
                className="w-full text-green-700 slider mt-4"
              />
            </div>
            <div className="flex justify-between mt-4 text-gray-500">
              <span className='bg-white px-2 py-1 rounded-xl'>${price}</span> {/* Show current price value */}
              <span className='bg-white px-2 py-1 rounded-xl'>$45,00</span>
            </div>
          </div>

          {/* Availability Section */}
          <div className="mx-5 mt-5 bg-gray-100 rounded-xl">
            <div className="">
              <div className="flex border-b border-gray-300 mx-4 items-center justify-between px-2 py-3 cursor-pointer" onClick={toggleAvailability}>
                <p className="text-2xl font-semibold">Availability</p>
                {isAvailabilityOpen ? <ChevronUp /> : <ChevronDown />}
              </div>
              {isAvailabilityOpen && (
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <input type="checkbox" id="inStock" className="mr-2" />
                    <label htmlFor="inStock">In Stock</label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input type="checkbox" id="perOrder" className="mr-2" />
                    <label htmlFor="perOrder">Per Order</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="upcoming" className="mr-2" />
                    <label htmlFor="upcoming">Upcoming</label>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Categories Section */}
          <div className="mx-5 my-5 bg-gray-100 rounded-xl">
            <div className="">
              <div className="flex items-center border-b border-gray-300 mx-4 justify-between px-2 py-3 cursor-pointer" onClick={toggleCategories}>
                <p className="text-2xl font-semibold">Categories</p>
                {isCategoriesOpen ? <ChevronUp /> : <ChevronDown />}
              </div>
              {isCategoriesOpen && (
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <input type="checkbox" id="all" className="mr-2" />
                    <label htmlFor="all">All</label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input type="checkbox" id="outdoor" className="mr-2" />
                    <label htmlFor="outdoor">Outdoor</label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input type="checkbox" id="indoor" className="mr-2" />
                    <label htmlFor="indoor">Indoor</label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input type="checkbox" id="terraceBalcony" className="mr-2" />
                    <label htmlFor="terraceBalcony">Terrace & Balcony</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="officeDesk" className="mr-2" />
                    <label htmlFor="officeDesk">Office Desk</label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="p-4">

          {error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {plants.map((plant) => (
                <div key={plant.id} className="bg-white shadow-md rounded-lg p-4">
                  <img
                    src={plant.default_image?.thumbnail || 'https://via.placeholder.com/150'}
                    alt={plant.common_name || 'No name available'}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <h2 className="mt-2 text-lg font-semibold text-center">{plant.common_name || 'Unnamed Plant'}</h2>
                  <p className="text-gray-700 text-center font-bold">${generateRandomPrice()}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
