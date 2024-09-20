function Feedback() {
    return (
        <div className="px-4 lg:px-0">
            <p className="text-center text-2xl md:text-4xl font-semibold font-serif mb-6 md:mb-10 mt-6 md:mt-10">
                Our Customer Feedback
            </p>
            <div className="flex flex-col lg:flex-row items-center lg:items-start h-auto lg:h-96 bg-gray-100 rounded-3xl p-6 lg:p-0 mx-4 lg:mx-32">
                <div className="flex justify-center items-center mb-6 lg:mb-0">
                    <img
                        className="h-40 ml-10 mt-5 w-40 md:h-60 md:w-60 lg:h-80 lg:w-80 rounded-full object-cover"
                        src="https://img.freepik.com/premium-photo/woman-with-smile-that-says-she-is-posing-photo_1044943-121720.jpg?w=740"
                        alt="Customer Feedback"
                    />
                </div>
                <div className="lg:mt-14 lg:ml-10 text-center lg:text-left">
                    <p className="font-semibold text-xl md:text-2xl text-gray-500">⭐⭐⭐⭐⭐ 5.0</p>
                    <p className="text-gray-500 mt-4 md:mt-10 font-serif text-base md:text-xl">
                        But that you may see whence all this born error is pleasure those who
                    </p>
                    <p className="text-gray-500 font-serif text-base md:text-xl">
                        accuse and praise pain, I will open the whole matter, and those very
                    </p>
                    <p className="text-gray-500 font-serif text-base md:text-xl">
                        things from that discoverer of truth and as it were an architect.
                    </p>
                    <p className="font-serif text-base md:text-xl mt-4 md:mt-10">Dianne Russell</p>
                    <p className="text-gray-500 font-serif text-base md:text-xl mt-2 md:mt-3">
                        Owner, Architecture Studio
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Feedback;
