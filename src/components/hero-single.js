import * as React from "react"
const HeroSingle = ({ title, subtitle, imageSrc }) => {
    console.log(title, subtitle, imageSrc)
    return (
        <section className="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right" style={{ maxWidth: '1600px', height: '32rem', backgroundImage: `url('${imageSrc}')` }}>

            <div className="container mx-auto">

                <div className="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
                    <h1 className="text-black text-2xl my-4">{title}</h1>
                    <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="https://google.com">{subtitle}</a>

                </div>

            </div>

        </section>
    )
}
export default HeroSingle;