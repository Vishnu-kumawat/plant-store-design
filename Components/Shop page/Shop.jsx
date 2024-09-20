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
        setPlants(data.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPlants();
  }, []);

  // Generate a random price between 10 and 100
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
    <div className="p-4 md:px-10 lg:px-20">
      {/* Header Section */}
      <div className="flex justify-around bg-green-50 py-4">
        <img
          className="w-1/3 md:w-96 mix-blend-multiply"
          src="https://img.freepik.com/free-vector/realistic-green-leaves-background_52683-89787.jpg?t=st=1726550422~exp=1726554022~hmac=28f7b8ef1d163d75376560488269d8dbbd14429427d95a2a3de0de347b880a62&w=1060"
          alt="Green Leaves Background"
        />
        <div className="flex items-center">
          <p className="text-3xl md:text-5xl text-center font-semibold">Shop</p>
        </div>
        <img
          className="w-1/3 md:w-96 mix-blend-multiply"
          src="https://img.freepik.com/premium-photo/green-succulent-plant-closeup_1282444-14752.jpg?uid=R119575077&ga=GA1.1.816295967.1700043709&semt=ais_hybrid"
          alt="Green Succulent Plant"
        />
      </div>

      {/* Filters and Categories */}
      <div className="flex flex-col md:flex-row mt-10 mx-4 md:mx-20">
        <div className="border flex items-center rounded-3xl justify-between w-full md:w-[500px] py-3 text-lg md:text-2xl font-semibold mb-4 md:mb-0">
          <p className="ml-5">Filters</p>
          <p className="mr-5 bg-gray-100 rounded-xl py-1 px-2">
            <ArrowLeftFromLine />
          </p>
        </div>
        <div className="flex flex-wrap justify-around py-2 items-center border rounded-3xl w-full md:ml-8 md:mr-20">
          <p className="font-semibold">All</p>
          <p className="text-gray-500 font-semibold">House Plants</p>
          <p className="text-gray-500 font-semibold">Potter Plants</p>
          <p className="text-gray-500 font-semibold">Seeds</p>
          <p className="text-gray-500 font-semibold">Small Plants</p>
          <p className="text-gray-500 font-semibold">Succulents</p>
          <p className="text-gray-500 font-semibold">Terrariums</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mx-4 md:mx-20 mt-10 gap-10">
        {/* Sidebar */}
        <div className="w-full md:w-[335px] border rounded-xl p-4">
          <div className="relative flex items-center mb-5">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-3xl w-full bg-gray-50"
            />
            <Search className="absolute left-3 text-gray-500" />
          </div>

          <div className="bg-gray-100 p-4 rounded-xl">
            <p className="text-xl md:text-2xl font-semibold mb-2 pb-3 border-b">Price Range</p>
            <input
              type="range"
              min={1000}
              max={4500}
              value={price}
              onChange={handlePriceChange}
              className="w-full mt-4"
            />
            <div className="flex justify-between mt-4 text-gray-500">
              <span className='bg-white px-2 py-1 rounded-xl'>${price}</span>
              <span className='bg-white px-2 py-1 rounded-xl'>$4500</span>
            </div>
          </div>

          {/* Availability Section */}
          <div className="bg-gray-100 rounded-xl mt-5">
            <div className="border-b p-3 cursor-pointer flex justify-between items-center" onClick={toggleAvailability}>
              <p className="text-xl md:text-2xl font-semibold">Availability</p>
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

          {/* Categories Section */}
          <div className="bg-gray-100 rounded-xl mt-5">
            <div className="border-b p-3 cursor-pointer flex justify-between items-center" onClick={toggleCategories}>
              <p className="text-xl md:text-2xl font-semibold">Categories</p>
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

        {/* Plants Grid */}
        <div className="flex-1">
          {error ? (
            <p className="text-red-500 text-center">{error}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {plants.map((plant) => (
                <div key={plant.id} className="border rounded-xl p-4">
                  <img
                    src={plant.default_image?.small_url}
                    alt={plant.common_name || 'Unknown Plant'}
                    className="h-40 w-full object-cover rounded-t-xl"
                  />
                  <h3 className="text-lg font-semibold mt-4">{plant.common_name || 'Unknown Plant'}</h3>
                  <p className="text-gray-500 mt-2">${generateRandomPrice()}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
