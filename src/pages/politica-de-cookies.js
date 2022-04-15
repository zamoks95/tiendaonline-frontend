import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const UsoDeCookies = ({ data }) => {
  const { name: pageName, title } = data.strapiPages;
  return (
    <Layout location={'Política de cookies'} title={'Política de cookies'} pageName={title}>
      <Seo title="Política de cookies" />
      <section className='text-center lg:text-left mb-8'>
        <h1 className=' text-4xl md:text-6xl tracking-tight font-extrabold text-gray-900  mb-4'>POLÍTICA DE COOKIES</h1>
        <p className='text-xl text-gray-800 mb-4'>En esta web se utilizan cookies de terceros y propias para conseguir que tengas una mejor experiencia de navegación, puedas compartir contenido en redes sociales y para que podamos obtener estadísticas de los usuarios.</p>
        <p className='text-xl text-gray-800 mb-4'>Puedes evitar la descarga de cookies a través de la configuración de tu navegador, evitando que las cookies se almacenen en su dispositivo.</p>
        <p className='text-xl text-gray-800 mb-4'>Como propietario de este sitio web, te comunico que no utilizamos ninguna información personal procedente de cookies, tan sólo realizamos estadísticas generales de visitas que no suponen ninguna información personal.</p>
        <p className='text-xl text-gray-800 mb-4'>Es muy importante que leas la presente política de cookies y comprendas que, si continúas navegando, consideraremos que aceptas su uso.</p>
        <p className='text-xl text-gray-800 mb-4'>Según los términos incluidos en el <strong>Artículo 22.2 de la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico</strong>, si continúas navegando, estarás prestando tu consentimiento para el empleo de los referidos mecanismos.</p>
      </section>

      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Entidad Responsable</h2>
        <p className='text-xl text-gray-800 mb-4'>La entidad responsable de la recogida, procesamiento y utilización de tus datos personales, en el sentido establecido por la <strong>Ley de Protección de Datos Personales</strong> es la página <strong>{pageName}.tiendaonline.one</strong>.</p>
      </section>

      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>¿Qué son las cookies?</h2>
        <p className='text-xl text-gray-800 mb-4'>Las cookies son un conjunto de datos que un servidor deposita en el navegador del usuario para recoger la información de registro estándar de Internet y la información del comportamiento de los visitantes en un sitio web. Es decir, se trata de pequeños archivos de texto que quedan almacenados en el disco duro del ordenador y que sirven para identificar al usuario cuando se conecta nuevamente al sitio web. Su objetivo es registrar la visita del usuario y guardar cierta información. Su uso es común y frecuente en la web ya que permite a las páginas funcionar de manera más eficiente y conseguir una mayor personalización y análisis sobre el comportamiento del usuario.</p>
      </section>

      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>¿Qué tipos de cookies existen?</h2>
        <p className='text-xl text-gray-800 mb-4'>Las cookies utilizadas en nuestro sitio web, son de sesión y de terceros, y nos permiten almacenar y acceder a información relativa al idioma, el tipo de navegador utilizado, y otras características generales predefinidas por el usuario, así como, seguir y analizar la actividad que lleva a cabo, con el objeto de introducir mejoras y prestar nuestros servicios de una manera más eficiente y personalizada.</p>
        <p className='text-xl text-gray-800 mb-4'>Las cookies, en función de su permanencia, pueden dividirse en cookies de sesión o permanentes. Las que expiran cuando el usuario cierra el navegador. Las que expiran en función de cuando se cumpla el objetivo para el que sirven (por ejemplo, para que el usuario se mantenga identificado en los servicios de ) o bien cuando se borran manualmente.</p>
        <table className='mb-4 table-auto w-full'>
          <thead>
            <tr className='text-center'>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Caducidad</th>
              <th>Finalidad</th>
              <th>Clase</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            <tr>
              <td>__utma</td>
              <td>De Terceros (Google Analytics)</td>
              <td>2 años</td>
              <td>Se usa para distinguir usuarios y sesiones.</td>
              <td>No Exenta</td>
            </tr>
            <tr>
              <td>__utmb</td>
              <td>De Terceros (Google Analytics)</td>
              <td>30 minutos</td>
              <td>Se usa para determinar nuevas sesiones o visitas</td>
              <td>No Exenta</td>
            </tr>
            <tr>
              <td>__utmc</td>
              <td>De Terceros (Google Analytics)</td>
              <td>Al finalizar la sesión</td>
              <td>Se configura para su uso con Urchin</td>
              <td>No Exenta</td>
            </tr>
            <tr>
              <td>__utmz</td>
              <td>De Terceros (Google Analytics)</td>
              <td>6 meses</td>
              <td>Almacena el origen o la campaña que explica cómo el usuario ha llegado hasta la página web</td>
              <td>No Exenta</td>
            </tr>
          </tbody>
        </table>
        <p className='text-xl text-gray-800 mb-4'>Adicionalmente, en función de su objetivo, las cookies pueden clasificarse de la siguiente forma:</p>
      </section>

      <section className='text-center lg:text-left mb-8'>
        <h3 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-3xl mb-4'>Cookies de rendimiento</h3>
        <p className='text-xl text-gray-800 mb-4'>Este tipo de Cookie recuerda sus preferencias para las herramientas que se encuentran en los servicios, por lo que no tiene que volver a configurar el servicio cada vez que usted visita. A modo de ejemplo, en esta tipología se incluyen: Ajustes de volumen de reproductores de vídeo o sonido. Las velocidades de transmisión de vídeo que sean compatibles con su navegador. Los objetos guardados en el “carrito de la compra” en los servicios de e-commerce tales como tiendas.</p>
      </section>

      <section className='text-center lg:text-left mb-8'>
        <h3 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-3xl mb-4'>Cookies de geo-localización</h3>
        <p className='text-xl text-gray-800 mb-4'>Estas cookies son utilizadas para averiguar en qué país se encuentra cuando se solicita un servicio. Esta cookie es totalmente anónima, y sólo se utiliza para ayudar a orientar el contenido a su ubicación.</p>
      </section>

      <section className='text-center lg:text-left mb-8'>
        <h3 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-3xl mb-4'>Cookies de registro</h3>
        <p className='text-xl text-gray-800 mb-4'>Las cookies de registro se generan una vez que el usuario se ha registrado o posteriormente ha abierto su sesión, y se utilizan para identificarle en los servicios con los siguientes objetivos:</p>
        <p className='text-xl text-gray-800 mb-4'>Mantener al usuario identificado de forma que, si cierra un servicio, el navegador o el ordenador y en otro momento u otro día vuelve a entrar en dicho servicio, seguirá identificado, facilitando así su navegación sin tener que volver a identificarse. Esta funcionalidad se puede suprimir si el usuario pulsa la funcionalidad [cerrar sesión], de forma que esta cookie se elimina y la próxima vez que entre en el servicio el usuario tendrá que iniciar sesión para estar identificado.</p>
        <p className='text-xl text-gray-800 mb-4'>Comprobar si el usuario está autorizado para acceder a ciertos servicios, por ejemplo, para participar en un concurso.</p>
        <p className='text-xl text-gray-800 mb-4'>Adicionalmente, algunos servicios pueden utilizar conectores con redes sociales tales como Facebook o Twitter. Cuando el usuario se registra en un servicio con credenciales de una red social, autoriza a la red social a guardar una Cookie persistente que recuerda su identidad y le garantiza acceso a los servicios hasta que expira. El usuario puede borrar esta Cookie y revocar el acceso a los servicios mediante redes sociales actualizando sus preferencias en la red social que específica.</p>
      </section>

      <section className='text-center lg:text-left mb-8'>
        <h3 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-3xl mb-4'>Cookies de analíticas</h3>
        <p className='text-xl text-gray-800 mb-4'>Cada vez que un usuario visita un servicio, una herramienta de un proveedor externo genera una cookie analítica en el ordenador del usuario. Esta cookie que sólo se genera en la visita, servirá en próximas visitas a los servicios de para identificar de forma anónima al visitante. Los objetivos principales que se persiguen son:</p>
        <p className='text-xl text-gray-800 mb-4'>Permitir la identificación anónima de los usuarios navegantes a través de la cookie (identifica navegadores y dispositivos, no personas) y por lo tanto la contabilización aproximada del número de visitantes y su tendencia en el tiempo.</p>
        <p className='text-xl text-gray-800 mb-4'>Identificar de forma anónima los contenidos más visitados y por lo tanto más atractivos para los usuarios Saber si el usuario que está accediendo es nuevo o repite visita.</p>
        <p className='text-xl text-gray-800 mb-4'>Importante: Salvo que el usuario decida registrarse en un servicio de , la cookie nunca irá asociada a ningún dato de carácter personal que pueda identificarle. Dichas cookies sólo serán utilizadas con propósitos estadísticos que ayuden a la optimización de la experiencia de los usuarios en el sitio.</p>
      </section>

      <section className='text-center lg:text-left mb-8'>
        <h3 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-3xl mb-4'>Cookies de publicidad</h3>
        <p className='text-xl text-gray-800 mb-4'>Este tipo de cookies permiten ampliar la información de los anuncios mostrados a cada usuario anónimo en los servicios de . Entre otros, se almacena la duración o frecuencia de visualización de posiciones publicitarias, la interacción con las mismas, o los patrones de navegación y/o comportamientos del usuario ya que ayudan a conformar un perfil de interés publicitario. De este modo, permiten ofrecer publicidad afín a los intereses del usuario.</p>
      </section>

      <section className='text-center lg:text-left mb-8'>
        <h3 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-3xl mb-4'>Cookies publicitarias de terceros</h3>
        <p className='text-xl text-gray-800 mb-4'>Además de la publicidad gestionada por las webs de en sus servicios, las webs de ofrecen a sus anunciantes la opción de servir anuncios a través de terceros (“Ad-Servers”). De este modo, estos terceros pueden almacenar cookies enviadas desde los servicios de procedentes de los navegadores de los usuarios, así como acceder a los datos que en ellas se guardan.</p>
        <p className='text-xl text-gray-800 mb-4'>Las empresas que generan estas cookies tienen sus propias políticas de privacidad. En la actualidad, las webs de utilizan la plataforma Doubleclick (Google) para gestionar estos servicios. Para más información, acuda a</p>
        <p className='text-xl text-gray-800 mb-4'><Link className='text-indigo-700 hover:text-indigo-900 underline' to='https://www.google.es/policies/privacy/ads/#toc-doubleclick' title='Más información Google' target='_blank' rel="noreferrer">https://www.google.es/policies/privacy/ads/#toc-doubleclick</Link> y a <Link className='text-indigo-700 hover:text-indigo-900 underline' to='https://www.google.es/policies/privacy/ads/' title='Más información sobre Google' target='_blank' rel="noreferrer">https://www.google.es/policies/privacy/ads/</Link>.</p>
      </section>

      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>¿Cómo puedo deshabilitar las cookies en mi navegador?</h2>
        <p className='text-xl text-gray-800 mb-4'>Se pueden configurar los diferentes navegadores para avisar al usuario de la recepción de cookies y, si se desea, impedir su instalación en el equipo. Asimismo, el usuario puede revisar en su navegador qué cookies tiene instaladas y cuál es el plazo de caducidad de las mismas, pudiendo eliminarlas.</p>
        <p className='text-xl text-gray-800 mb-4'>Para ampliar esta información consulte las instrucciones y manuales de su navegador:</p>
        <ul className=' pl-6'>
          <li className='list-disc'>
            <p className='text-xl text-gray-800 mb-4'>Para más información sobre la administración de las cookies en <strong>Google Chrome:</strong> <Link className='text-indigo-700 hover:text-indigo-900 underline' to='https://support.google.com/chrome/answer/95647?hl=es' title='Más información sobre Google Chrome' target='_blank' rel="noreferrer">https://support.google.com/chrome/answer/95647?hl=es</Link></p>
          </li>
          <li className='list-disc'>
            <p className='text-xl text-gray-800 mb-4'>Para más información sobre la administración de las cookies en <strong>Internet Explorer:</strong> <Link className='text-indigo-700 hover:text-indigo-900 underline' to='http://windows.microsoft.com/es-es/windows-vista/cookies-frequently-asked-questions' title='Más información sobre Internet Explorer' target='_blank' rel="noreferrer">http://windows.microsoft.com/es-es/windows-vista/cookies-frequently-asked-questions</Link></p>
          </li>
          <li className='list-disc'>
            <p className='text-xl text-gray-800 mb-4'>Para más información sobre la administración de las cookies en <strong>Mozilla Firefox:</strong> <Link className='text-indigo-700 hover:text-indigo-900 underline' to='http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we' title='Más información sobre Mozilla Firefox' target='_blank' rel="noreferrer">http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we</Link></p>
          </li>
          <li className='list-disc'>
            <p className='text-xl text-gray-800 mb-4'>Para más información sobre la administración de las cookies en <strong>Safari:</strong> <Link className='text-indigo-700 hover:text-indigo-900 underline' to='http://www.apple.com/es/privacy/use-of-cookies/' title='Más información sobre Safari' target='_blank' rel="noreferrer">http://www.apple.com/es/privacy/use-of-cookies/</Link></p>
          </li>
          <li className='list-disc'>
            <p className='text-xl text-gray-800 mb-4'>Para más información sobre la administración de las cookies en <strong>Opera:</strong> <Link className='text-indigo-700 hover:text-indigo-900 underline' to='http://help.opera.com/Windows/11.50/es-ES/cookies.html' title='Más información sobre Opera' target='_blank' rel="noreferrer">http://help.opera.com/Windows/11.50/es-ES/cookies.html</Link></p>
          </li>
        </ul>
        <p className='text-xl text-gray-800 mb-4'>Si desea dejar de ser seguido por <strong>Google Analytics</strong> visite: <Link className='text-indigo-700 hover:text-indigo-900 underline' to='http://tools.google.com/dlpage/gaoptout' title='dejar de ser seguido por Google Analytics' target='_blank' rel="noreferrer">http://tools.google.com/dlpage/gaoptout</Link></p>
      </section>

      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Para saber más sobre las cookies</h2>
        <p className='text-xl text-gray-800 mb-4'>Puede obtener más información sobre la publicidad online basada en el comportamiento y la privacidad online en el siguiente enlace: <Link className='text-indigo-700 hover:text-indigo-900 underline' to='http://www.youronlinechoices.com/es/' title='Más información sobre la publicidad online' target='_blank' rel="noreferrer">http://www.youronlinechoices.com/es/</Link></p>
        <p className='text-xl text-gray-800 mb-4'>Protección de datos de Google Analytics: <Link className='text-indigo-700 hover:text-indigo-900 underline' to='http://www.google.com/analytics/learn/privacy.html' title='Protección de datos de Google Analytics' target='_blank' rel="noreferrer">http://www.google.com/analytics/learn/privacy.html</Link></p>
        <p className='text-xl text-gray-800 mb-4'>Cómo usa Google Analytics las cookies: <Link className='text-indigo-700 hover:text-indigo-900 underline' to='https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es#analyticsjs' title='Cómo usa Google Analytics las cookies' target='_blank' rel="noreferrer">https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es#analyticsjs</Link></p>
      </section>

      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Actualizaciones y cambios en la política de privacidad/cookies</h2>
        <p className='text-xl text-gray-800 mb-4'>Las webs de pueden modificar esta <strong>Política de Cookies</strong> en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la <strong>Agencia Española de Protección de Datos</strong>, por ello se aconseja a los usuarios que la visiten periódicamente.</p>
        <p className='text-xl text-gray-800 mb-4'>Cuando se produzcan cambios significativos en esta <strong>Política de Cookies</strong>, estos se comunicarán a los usuarios bien mediante la web o a través de correo electrónico a los usuarios registrados.</p>
      </section>
    </Layout >
  )
}

export const pageQuery = graphql`
  query UsoDeCookies(
    $strapiPage: String
  ) {
    strapiPages(name: {eq: $strapiPage}) {
      name
      title
      color
    }
  }
`
export default UsoDeCookies

