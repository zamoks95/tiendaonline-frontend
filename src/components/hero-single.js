import * as React from "react"
const HeroSingle = ({ title, subtitle }) => {
    return (
        <section className='text-center lg:text-left mb-4'>
            <h1 className=' text-4xl md:text-6xl tracking-tight font-extrabold text-gray-900  mb-4 uppercase'>{title}</h1>
            <p className='text-xl text-gray-800'>{subtitle}</p>
        </section>
    )
}
export default HeroSingle;