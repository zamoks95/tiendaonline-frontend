import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const PoliticaPrivacidad = ({ data }) => {
  const { name: pageName } = data.strapiPages;
  return (
    <Layout location={'Politica de Privacidad'} title={'Politica de Privacidad'}>
      <Seo title="Politica de Privacidad" />
      <section className='text-center lg:text-left mb-8'>
        <h1 className=' text-4xl md:text-6xl tracking-tight font-extrabold text-gray-900  mb-4'>POLÍTICA DE PRIVACIDAD</h1>
        <p className='text-xl text-gray-800 mb-4'>La presente <strong>Política de Privacidad</strong> establece los términos en que  usa y protege la información que <strong>{pageName}.tiendaonline.one</strong> es proporcionada por sus usuarios al momento de utilizar su sitio web.</p>
        <p className='text-xl text-gray-800 mb-4'>Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento.</p>
        <p className='text-xl text-gray-800 mb-4'> Sin embargo esta <strong>Política de Privacidad</strong> puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.</p>
      </section>
      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Información que es recogida</h2>
        <p className='text-xl text-gray-800 mb-4'>Nuestro sitio web podrá recoger información personal por ejemplo: Nombre,  información de contacto como  su dirección de correo electrónica e información demográfica. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.</p>
      </section>
      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Uso de la información recogida</h2>
        <p className='text-xl text-gray-800 mb-4'>Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios.</p>
        <p className='text-xl text-gray-800 mb-4'>Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.</p>
        <p className='text-xl text-gray-800 mb-4'><strong>{pageName}.tiendaonline.one</strong> está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.</p>
      </section>
      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Cookies</h2>
        <p className='text-xl text-gray-800 mb-4'>Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador, al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web, y también facilita las futuras visitas a una web recurrente. Otra función que tienen las cookies es que con ellas las web pueden reconocerte individualmente y por tanto brindarte el mejor servicio personalizado de su web.</p>
        <p className='text-xl text-gray-800 mb-4'>Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia.</p>
        <p className='text-xl text-gray-800 mb-4'>Esta información es empleada únicamente para análisis estadístico y después la información se elimina de forma permanente. Usted puede eliminar las cookies en cualquier momento desde su ordenador. Sin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web, estás no dan acceso a información de su ordenador ni de usted, a menos de que usted así lo quiera y la proporcione directamente noticias.</p>
        <p className='text-xl text-gray-800 mb-4'>Usted puede aceptar o negar el uso de cookies, sin embargo la mayoría de navegadores aceptan cookies automáticamente pues sirve para tener un mejor servicio web. También usted puede cambiar la configuración de su ordenador para declinar las cookies. Si se declinan es posible que no pueda utilizar algunos de nuestros servicios.</p>
      </section>
      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Enlaces a Terceros</h2>
        <p className='text-xl text-gray-800 mb-4'>Este sitio web pudiera contener enlaces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros.</p>
        <p className='text-xl text-gray-800 mb-4'>Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.</p>
      </section>
      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Control de su información personal</h2>
        <p className='text-xl text-gray-800 mb-4'>En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web.  Cada vez que se le solicite rellenar un formulario, como el de alta de usuario, puede marcar o desmarcar la opción de recibir información por correo electrónico.  En caso de que haya marcado la opción de recibir nuestro boletín o publicidad usted puede cancelarla en cualquier momento.</p>
        <p className='text-xl text-gray-800 mb-4'>Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.</p>
      </section>
      <section className='text-center lg:text-left mb-8'>
        <p className='text-xl text-gray-800 mb-4'><strong>{pageName}.tiendaonline.one</strong> Se reserva el derecho de cambiar los términos de la presente <strong>Política de Privacidad</strong> en cualquier momento.</p>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PoliticaDePrivacidad {
    strapiPages {
      name
    }
  }
`


export default PoliticaPrivacidad

