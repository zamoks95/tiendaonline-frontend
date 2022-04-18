import React from 'react';

const HomeHeader = ({ pageDescription }) => {
    const { title, description, main_image } = pageDescription;
    return (
        <section className={'flex gap-2 sm:h-screen sm:-mt-32 mb-6 pt-10 md:pt-32'}>
            <header className={'w-full sm:w-2/3 md:w-1/2 pr-16 flex flex-col justify-center'}>
                <h1 className={'text-6xl tracking-tight font-extrabold text-gray-800 mb-4'}>{title}</h1>
                <p className={'text-xl text-gray-800'}>{description}</p>
            </header>
            <div className={'hidden sm:flex sm:w-1/3 md:w-1/2 bg-indigo-500 justify-between rounded-2xl overflow-hidden relative'}>
                <div className={'w-full flex flex-col gap-6 justify-center'} style={{ backgroundPosition: 'center', backgroundImage: `url(${main_image.localFile.publicURL})` }}>
                </div>
            </div>
        </section>
    )
}

export default HomeHeader;