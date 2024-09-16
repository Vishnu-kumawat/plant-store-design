/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const PlantsList = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlants = async () => {
      setLoading(true);
      const response = await fetch('https://perenual.com/api/species-list?page=1&key=sk-2i6G66e7bafca7bde6871');
      if (!response.ok) {
        setError('Error fetching plant data.');
        setLoading(false);
        return;
      }
      const data = await response.json();
      setPlants(data.data);
      setLoading(false);
    };

    fetchPlants();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Limit the displayed items to 4
  const firstFourPlants = plants.slice(0, 4);
  const nextEightPlants = plants.slice(4, 12);

  return (
    <div>
      <div className='flex overflow-x-auto space-x-4 mx-20 mt-10 mb-16 justify-evenly'>
        {firstFourPlants.map(plant => (
          <div key={plant.id} className='flex-none w-64 border p-4 rounded-lg shadow-md mb-5'>
            <img src={plant.default_image?.medium_url} alt={plant.common_name} className='w-full h-48 object-cover mb-4' />
            <h3 className='text-lg font-semibold text-slate-800'>{plant.common_name || "No Common Name"}</h3>
            <p><strong>Scientific Name:</strong> {plant.scientific_name}</p>
            <p><strong>Family:</strong> {plant.family}</p>
            <p><strong>Cycle:</strong> {plant.cycle}</p>
          </div>
        ))}
      </div>

      <div className='text-center'>
        <p className='text-4xl font-semibold'>Featured Products</p>
        <p className='text-gray-500 mt-4'>Discover our Top Trees, chosen for their beauty and resiliance. Add color, fruit, or greenery to</p>
        <p className='text-gray-500'>your garden with these customer favourites. bring nature's charm home today.</p>
        <div className='mt-5'>
          <span className='text-xl font-semibold'> All Plants </span>
          <span className='text-xl text-gray-500'>| New Arrivals | </span>
          <span className='text-xl text-gray-500'>Sale</span>
        </div>
      </div>

      <div className='grid grid-cols-4 gap-4 mx-10 mt-10'>
        {nextEightPlants.map(plant => (
          <div key={plant.id} className='border p-4 rounded-lg shadow-md'>
            <img src={plant.default_image?.medium_url} alt={plant.common_name} className='w-full h-48 object-cover mb-4' />
            <h3 className='text-lg font-semibold text-slate-800'>{plant.common_name || "No Common Name"}</h3>
            <p><strong>Scientific Name:</strong> {plant.scientific_name}</p>
            <p><strong>Family:</strong> {plant.family}</p>
            <p><strong>Cycle:</strong> {plant.cycle}</p>
          </div>
        ))}
      </div>
      <div className=' flex justify-center mt-10'>
        <button className='bg-green-500 text-white px-5 py-2 rounded-xl flex text-lg font-mono'> View All <ArrowRight className='ml-3' /> </button>
      </div>
    </div>
  );
};

export default PlantsList;
