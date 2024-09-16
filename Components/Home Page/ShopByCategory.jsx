import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ShopByCategory = () => {
    const [additionalPlants, setAdditionalPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAdditionalPlants = async () => {
            setLoading(true);
            const response = await fetch('https://perenual.com/api/species-list?page=2&key=sk-9fRi66dd7e76a596d6768'); // Adjust the URL to get new data
            if (!response.ok) {
                setError('Error fetching plant data.');
                setLoading(false);
                return;
            }
            const data = await response.json();
            setAdditionalPlants(data.data.slice(0, 4)); // Limit to 4 items
            setLoading(false);
        };

        fetchAdditionalPlants();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <div className="text-center">
                <p className="text-4xl font-semibold mt-10">Shop by Category</p>
                <p className="mt-6 text-gray-500">Shop by category to find the perfect plants, tools, and accessories for your garden. Discover a</p>
                <p className="text-gray-500">wide range of products tailored to your gardening needs.</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mx-4 mt-10'>
                {additionalPlants.map(plant => (
                    <div key={plant.id} className=' p-2 rounded-lg mx-10'>
                        <img src={plant.default_image?.medium_url} alt={plant.common_name} className='w-full h-48 object-cover mb-4 rounded-lg' />
                        <h3 className='text-lg text-center font-semibold text-slate-800'>{plant.common_name || "No Common Name"}</h3>
                    </div>
                ))}
            </div>
            <div className=' flex justify-center mt-10'>
                <button className='bg-green-500 text-white px-5 py-2 rounded-xl flex text-lg font-mono'> View All <ArrowRight className='ml-3' /> </button>
            </div>
        </div>
    );
}

export default ShopByCategory;
