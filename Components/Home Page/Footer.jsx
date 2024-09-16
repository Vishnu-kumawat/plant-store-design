import { Store, Instagram, Twitter, Facebook } from 'lucide-react';

function Footer() {
    return (
        <div className='bg-black text-white pt-10 pb-5 font-serif mt-14'>
            <div className='flex mx-20'>
                <div className='pr-32 pt-5' style={{ borderTop: '2px solid white', borderBottom: '2px solid white' }}>
                    <p>Garden Care</p>
                    <p className='mt-5'>123 Bang Street leviko, CA</p>
                    <p>8034, USA</p>
                    <p className='mt-5'>+801776438</p>
                    <p>info@plantscare.com</p>
                </div>
                <div className='border-2 border-solid border-white px-28 text-center'>
                    <div className='flex mt-5 ml-36'>
                        <p className='mt-1'> <Store /> </p>
                        <p className='text-2xl ml-3'>Store</p>
                    </div>
                    <div className='mt-5'>
                        <p>The seed of gardening is a love that never dies, but it never</p>
                        <p>grow to the enduring happiness that the love of gardening</p>
                        <p>Provides to the nature.</p>
                    </div>
                    <div className='flex justify-center mt-10 pb-5'>
                        <p> <Instagram /> </p>
                        <p className='ml-8'> < Twitter /></p>
                        <p className='ml-8'> < Facebook /></p>
                    </div>
                </div>
                <div className='flex px-20 pt-5' style={{ borderTop: '2px solid white', borderBottom: '2px solid white' }}>
                    <div>
                        <p className='text-xl'>Pages</p>
                        <p className='text-gray-200'>Home</p>
                        <p className='text-gray-200'>About</p>
                        <p className='text-gray-200'>Blog</p>
                        <p className='text-gray-200'>Team</p>
                        <p className='text-gray-200'>Contact</p>
                        <p className='text-gray-200'>Services</p>
                    </div>
                    <div className='ml-16'>
                        <p className='text-xl'>Utility Pages</p>
                        <p className='text-gray-200'>Style guide</p>
                        <p className='text-gray-200'>Not Found</p>
                        <p className='text-gray-200'>Protected</p>
                        <p className='text-gray-200'>Licenses</p>
                        <p className='text-gray-200'>Changelog</p>
                    </div>
                </div>
            </div>
            <p className='text-center mt-4'>Copyright © 2024 Lustria. All Rights Reserved</p>
        </div>
    )
}

export default Footer
