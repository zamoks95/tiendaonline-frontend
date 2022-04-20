import * as React from "react"
import { Link } from 'gatsby'
const Footer = () => {
    return (
        <footer className={`bg-indigo-700 py-6`}>
            <span className="text-sm text-white text-center block">© 2022 TiendaOnline.one</span>
            <ul className="flex flex-wrap text-white items-center text-center justify-center mt-3 text-sm text-gray-500">
                <li>
                    <Link to="/politica-privacidad" className="mr-4 hover:underline md:mr-6 text-white">Política de privacidad</Link>
                </li>
                <li>
                    <Link to="/politica-de-cookies" className="mr-4 hover:underline md:mr-6 text-white">Política de cookies</Link>
                </li>
                <li>
                    <Link to="/terminos-y-condiciones" className="mr-4 hover:underline md:mr-6 text-white">Términos y condiciones</Link>
                </li>
            </ul>
        </footer>
    )
}
export default Footer;