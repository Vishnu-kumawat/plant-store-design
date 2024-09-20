import { ArrowRight } from 'lucide-react';

function Body() {
    return (
        <div className="bg-green-50 pb-14">

            <div className='flex flex-col lg:flex-row justify-center items-center mix-blend-multiply px-4 lg:px-0'>
                <div className='mb-8 lg:mb-0'>
                    <img className='h-60 lg:h-80' src="https://img.freepik.com/free-vector/plant-emoji_78370-262.jpg" alt="Plant Emoji" />
                </div>
                <div className='text-center mb-8 lg:mb-0'>
                    <p className='text-3xl lg:text-7xl'>Trees Plants to Grow in</p>
                    <p className='text-3xl lg:text-7xl'>Your Living Room</p>
                    <button className='bg-green-600 text-white px-4 py-2 text-lg font-semibold mt-8 rounded-lg'>
                        Shop Now
                    </button>
                </div>
                <div className='mb-8 lg:mb-0'>
                    <img className='h-60 lg:h-80 lg:ml-8' src="https://img.freepik.com/free-psd/pothos-epipremnum-aureum-flower-png-isolated-transparent-background_191095-12098.jpg?t=st=1726388650~exp=1726392250~hmac=b4b3c8dee140e92ebe52a2182cf788b46a4d6dd06a0df3c7eff229c8362b8912&w=740" alt="Pothos Plant" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row mx-4 lg:mx-20 mt-10 justify-around">
                <div className='bg-white rounded-3xl w-full lg:w-[500px] p-6'>
                    <p className='text-gray-500 mb-6'>
                        Tree-planting is the process of transplanting tree seedlings, generally for forestry, land reclamation. It differs from the transplantation of larger trees in arboriculture.
                    </p>
                    <p className='flex items-center text-green-500 text-xl mb-10 cursor-pointer'>
                        Learn More <ArrowRight className='ml-2' />
                    </p>
                    <div className='flex justify-around'>
                        <div className='text-center'>
                            <p className='font-semibold text-2xl'>200+</p>
                            <p className='text-gray-500'>Plant Species</p>
                        </div>
                        <div className='text-center'>
                            <p className='font-semibold text-2xl'>1.2k+</p>
                            <p className='text-gray-500'>Member Joined</p>
                        </div>
                    </div>
                </div>
                <div className='mt-10 lg:mt-0'>
                    <img className="h-60 lg:h-80 w-full lg:w-[700px] rounded-3xl object-cover" src="https://img.freepik.com/free-photo/happy-business-owner-holding-we-are-open-sign_53876-129323.jpg?t=st=1726389273~exp=1726392873~hmac=8ba2fb7b8330b5b96136329a44bc24735fb1a6e4532aa0d23a7d33dc01bd8014&w=1060" alt="Business Owner" />
                </div>
            </div>

        </div>
    );
}

export default Body;
