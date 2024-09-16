import { ArrowRight } from 'lucide-react';
function Body() {
    return (
        <div className="bg-green-50 pb-14">

            <div className='flex justify-center items-center mix-blend-multiply'>
                <div>
                    <img className='h-80' src="https://img.freepik.com/free-vector/plant-emoji_78370-262.jpg" alt="" />
                </div>
                <div className='text-center'>
                    <p className='text-center text-7xl'>Trees Plants to Grow in </p>
                    <p className='text-center text-7xl'>Your Living Room </p>
                    <button className='bg-green-600 text-white px-5 py-2 text-lg font-semibold mt-8 rounded-lg'> Shop Now </button>
                </div>
                <div >
                    <img className='h-80 ml-8' src="https://img.freepik.com/free-psd/pothos-epipremnum-aureum-flower-png-isolated-transparent-background_191095-12098.jpg?t=st=1726388650~exp=1726392250~hmac=b4b3c8dee140e92ebe52a2182cf788b46a4d6dd06a0df3c7eff229c8362b8912&w=740" alt="" />
                </div>
            </div>

            <div className="flex mx-20 h-80 mt-10 justify-around">
                <div className='bg-white rounded-3xl w-[500px] '>
                    <p className='text-gray-500 mx-7 mt-10'>Tree-planting is the process of transplating tree seedings , generally for forestry , land reclamation. It differs from the transplatation of larger trees in arboriculture.</p>
                    <p className='flex mx-7 mt-10 text-green-500 text-xl'>Learn More <ArrowRight /> </p>
                    <div className='flex mt-10'>
                        <div className='mx-7'>
                            <p className='font-semibold text-2xl'>200+</p>
                            <p className='text-gray-500'>Plant Species</p>
                        </div>
                        <div>
                            <p className='font-semibold text-2xl'>1.2k+</p>
                            <p className='text-gray-500'>Member joined </p>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="h-80 w-[700px] rounded-3xl" src="https://img.freepik.com/free-photo/happy-business-owner-holding-we-are-open-sign_53876-129323.jpg?t=st=1726389273~exp=1726392873~hmac=8ba2fb7b8330b5b96136329a44bc24735fb1a6e4532aa0d23a7d33dc01bd8014&w=1060" alt="" />
                </div>

            </div>

        </div>
    )
}

export default Body
