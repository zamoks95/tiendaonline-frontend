import React from 'react';

import { AiOutlineArrowRight } from 'react-icons/ai';
const HomeCategories = () => {

    return (
        <section className='mb-6 py-6'>
            <header className={'flex justify-between mb-4'}>
                <h2 className={'text-2xl font-extrabold text-gray-800'}>Shop by Category</h2>
                <a className={'text-xl font-bold text-gray-800 flex items-center'} href="#">Browse all categories <AiOutlineArrowRight className={'ml-2 mt-1'} /></a>
            </header>
            <main className={'flex gap-6 flex-col md:flex-row'}>
                <a href='https://google.com' className='w-full md:w-1/2 h-100 md:h-auto bg-indigo-800 rounded-2xl relative px-4 overflow-hidden hover:drop-shadow-lg hover:scale-95 transition-all' style={{ backgroundPosition: 'center', backgroundImage: 'url(https://s1.eestatic.com/2021/07/12/actualidad/595952167_195030066_1706x960.jpg)' }}>
                    <div className='absolute bottom-4'>
                        <label className='text-xl font-bold text-white' style={{ textShadow: '1px 1px 3px black' }}>Workspace 1</label>
                        <p className='text-lg text-white' style={{ textShadow: '1px 1px 3px black' }}>Shop Now</p>
                    </div>
                </a>
                <div className='w-full md:w-1/2 flex flex-col gap-6'>
                    <a href='https://google.com' className='h-100 md:h-250 bg-purple-800  rounded-2xl relative px-4 overflow-hidden hover:drop-shadow-lg hover:scale-95 transition-all' style={{ backgroundPosition: 'center', backgroundImage: 'url(https://s1.eestatic.com/2021/07/12/actualidad/595952167_195030066_1706x960.jpg)' }}>
                        <div className='absolute bottom-4'>
                            <label className='text-xl font-bold text-white' style={{ textShadow: '1px 1px 3px black' }}>Workspace 2</label>
                            <p className='text-lg text-white' style={{ textShadow: '1px 1px 3px black' }}>Shop Now</p>
                        </div>
                    </a>
                    <a href='https://google.com' className='h-100 md:h-250 bg-purple-800 rounded-2xl relative px-4 overflow-hidden hover:drop-shadow-lg hover:scale-95 transition-all' style={{ backgroundPosition: 'center', backgroundImage: 'url(https://s1.eestatic.com/2021/07/12/actualidad/595952167_195030066_1706x960.jpg)' }}>
                        <div className='absolute bottom-4'>
                            <label className='text-xl font-bold text-white' style={{ textShadow: '1px 1px 3px black' }}>Workspace 3</label>
                            <p className='text-lg text-white' style={{ textShadow: '1px 1px 3px black' }}>Shop Now</p>
                        </div>
                    </a>
                </div>
            </main>
        </section>
    )
}

export default HomeCategories;