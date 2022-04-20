import React, { useState } from 'react';
import { Link } from 'gatsby';
import { default as JSCookie } from 'js-cookie';

const Cookies = () => {
    const [hasCookie, setCookie] = useState(JSCookie.get('_ga_consent') !== undefined ? true : false);

    const handleAccept = () => {
        JSCookie.set('_ga_consent', true, { path: '' })
        setCookie(true);
    }

    if (hasCookie) return null;
    return (
        <div className="max-w-screen-xl mx-auto fixed z-10 bg-white inset-x-5 p-5 bottom-10 rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between">
            <div className="w-full">Esta pagina web utiliza Cookies para ofrecerte la mejor experiencia de usuario posible. Si continuas navegando por esta pagina web, aceptas el uso de estas cookies.
                <Link to="/politica-de-cookies" className="text-indigo-600 whitespace-nowrap  hover:underline ml-2">Leer más</Link></div>
            <div className="flex gap-4 items-center flex-shrink-0">
                <button onClick={() => handleAccept()} className="bg-indigo-500 px-5 py-2 text-white rounded-md hover:bg-indigo-700 focus:outline-none">Aceptar Cookies</button>
            </div>
        </div >
    )
}

export default Cookies