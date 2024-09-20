import { Store, Instagram, Twitter, Facebook } from 'lucide-react';

function Footer() {
    return (
        <div className="bg-black text-white pt-10 pb-5 font-serif mt-14">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row lg:mx-20">
                    {/* Contact Information */}
                    <div className="lg:pr-32 lg:pt-5 mb-6 lg:mb-0 px-6 lg:px-0 border-t-2 border-b-2 border-white">
                        <p className="text-xl font-semibold">Garden Care</p>
                        <p className="mt-5">123 Bang Street Leviko, CA</p>
                        <p>8034, USA</p>
                        <p className="mt-5">+801776438</p>
                        <p>info@plantscare.com</p>
                    </div>

                    {/* Store Section */}
                    <div className="lg:border-2 border-solid border-white px-6 lg:px-12 py-6 text-center mb-6 lg:mb-0">
                        <div className="flex justify-center items-center mt-5">
                            <Store className="text-3xl" />
                            <p className="text-2xl ml-3">Store</p>
                        </div>
                        <div className="mt-5 text-sm lg:text-base">
                            <p>The seed of gardening is a love that never dies, but it never</p>
                            <p>grows to the enduring happiness that the love of gardening</p>
                            <p>provides to nature.</p>
                        </div>
                        <div className="flex justify-center mt-10 pb-5 space-x-8 text-2xl">
                            <Instagram />
                            <Twitter />
                            <Facebook />
                        </div>
                    </div>

                    {/* Pages Section */}
                    <div className="flex flex-col lg:flex-row px-6 lg:px-20 py-6 lg:py-5 border-t-2 border-b-2 border-white">
                        <div className="mb-6 lg:mb-0">
                            <p className="text-xl font-semibold">Pages</p>
                            <ul className="text-gray-200 mt-3">
                                <li>Home</li>
                                <li>About</li>
                                <li>Blog</li>
                                <li>Team</li>
                                <li>Contact</li>
                                <li>Services</li>
                            </ul>
                        </div>
                        <div className="lg:ml-16">
                            <p className="text-xl font-semibold">Utility Pages</p>
                            <ul className="text-gray-200 mt-3">
                                <li>Style Guide</li>
                                <li>Not Found</li>
                                <li>Protected</li>
                                <li>Licenses</li>
                                <li>Changelog</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="text-center mt-4 text-sm lg:text-base">Copyright © 2024 Lustria. All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;
