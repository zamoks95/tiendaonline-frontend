import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const TerminosYCondiciones = ({ data }) => {

  const { name: pageName } = data.strapiPages;
  return (
    <Layout location={'Términos y Condiciones'} title={'Términos y Condiciones'}>
      <Seo title="Términos y Condiciones" />

      <section className='text-center lg:text-left mb-8'>
        <h1 className=' text-4xl md:text-6xl tracking-tight font-extrabold text-gray-900  mb-4'>TÉRMINOS Y CONDICIONES</h1>
      </section>

      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Generalidades</h2>
        <p className='text-xl text-gray-800 mb-4'><strong>{pageName}.tiendaonline.one</strong> gestiona este sitio web. En todo el sitio, los términos "nosotros", "nos" y "nuestro" se refieren en lo sucesivo a <strong>{pageName}.tiendaonline.one</strong>. <strong>{pageName}.tiendaonline.one</strong> ofrece esta página web, incluida toda la información, las herramientas y los servicios que se ponen en este sitio a disposición suya, el usuario, siempre y cuando acepte la totalidad de los términos, condiciones, políticas y avisos contemplados aquí.</p>
        <p className='text-xl text-gray-800 mb-4'>Al visitar nuestro sitio y/o comprarnos algo, usted interactúa con nuestro "Servicio" y reconoce como vinculantes los siguientes términos y condiciones <i>(denominados en lo sucesivo "Términos del servicio", "Términos")</i>, incluidos aquellos términos y condiciones adicionales y las políticas que se mencionan aquí y/o disponibles por medio de hipervínculo. Estos Términos del servicio se aplican a todos los usuarios del sitio, incluyendo de manera enunciativa mas no limitativa los usuarios que son navegadores, proveedores, clientes, comerciantes y/o que aporten contenido.</p>
        <p className='text-xl text-gray-800 mb-4'>Lea estos Términos del servicio detenidamente antes de acceder o utilizar nuestra página web. Al acceder o utilizar cualquier parte del sitio, usted acepta estos Términos del servicio. Si no acepta la totalidad de los términos y condiciones de este acuerdo, no podrá acceder al sitio web ni utilizar ningún servicio. Si estos Términos del servicio se considerasen una oferta, la aceptación se limita expresamente a los presentes Términos del servicio.</p>
        <p className='text-xl text-gray-800 mb-4'>Las nuevas funciones o herramientas que se agreguen a la tienda actual también estarán sujetas a los Términos del servicio. Puede revisar la versión más reciente de los Términos del servicio en cualquier momento en esta página. Nos reservamos el derecho de actualizar, cambiar o reemplazar cualquier parte de los presentes Términos del servicio mediante la publicación de actualizaciones o cambios en nuestra página web. Es su responsabilidad revisar esta página periódicamente para ver los cambios. Su uso de la página web o el acceso a ella de forma continuada después de la publicación de cualquier cambio constituye la aceptación de dichos cambios.</p>
      </section>

      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Sección 1: Términos de la tienda online</h2>
        <p className='text-xl text-gray-800 mb-4'>Al aceptar los presentes Términos del servicio, usted declara que tiene la mayoría de edad en su estado o provincia de residencia, o que es mayor de edad en su estado o provincia de residencia y que nos ha dado su consentimiento para permitir que cualquiera de las personas menores que dependen de usted utilice este sitio.</p>
        <p className='text-xl text-gray-800 mb-4'>No puede utilizar nuestros productos para ningún fin ilegal o no autorizado ni puede, al hacer uso del Servicio, infringir las leyes de su jurisdicción <i>(incluyendo de manera enunciativa más no limitativa, las leyes de derechos de autor)</i>.</p>
        <p className='text-xl text-gray-800 mb-4'>No transmitirá ningún gusano o virus informáticos ni ningún código de naturaleza destructiva.</p>
        <p className='text-xl text-gray-800 mb-4'>El incumplimiento o violación de cualquiera de los Términos dará como resultado la rescisión inmediata de sus Servicios.</p>
      </section>

      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Sección 2: Condiciones generales</h2>
        <p className='text-xl text-gray-800 mb-4'>Nos reservamos el derecho de rechazar el servicio a cualquier persona, por cualquier motivo, en cualquier momento.</p>
        <p className='text-xl text-gray-800 mb-4'>Usted comprende que su contenido <i>(sin incluir la información de la tarjeta de crédito)</i> puede transferirse sin cifrar e implicar <i>(a)</i> transmisiones en varias redes; y <i>(b)</i> cambios para adaptarse a los requisitos técnicos de conexión de redes o dispositivos y cumplir con ellos. La información de la tarjeta de crédito siempre se cifra durante la transferencia a través de las redes.</p>
        <p className='text-xl text-gray-800 mb-4'>Usted acepta no reproducir, duplicar, copiar, vender, revender ni aprovechar ninguna parte del Servicio, uso del Servicio o acceso al Servicio o cualquier contacto en el sitio web a través de la cual se presta el servicio, sin nuestro permiso expreso por escrito.</p>
        <p className='text-xl text-gray-800 mb-4'>Los encabezados utilizados en este acuerdo se incluyen solo para facilitar la lectura y no limitarán ni afectarán los presentes Términos.</p>
      </section>

      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Sección 3: Exactitud, totalidad y cronología de la información</h2>
        <p className='text-xl text-gray-800 mb-4'>No nos responsabilizamos si la información disponible en este sitio no es precisa, completa o actualizada. El material presentado en este sitio se proporciona solo para información general y no se debe confiar en él ni utilizarlo como la única base para tomar decisiones sin consultar fuentes de información principales, más precisas, más completas o más recientes. Al confiar en cualquier material de este sitio lo hace por su cuenta y riesgo.</p>
        <p className='text-xl text-gray-800 mb-4'>Este sitio puede contener cierta información histórica. La información histórica, inevitablemente, no es actual y se proporciona únicamente como referencia. Nos reservamos el derecho de modificar el contenido de este sitio en cualquier momento, pero no tenemos la obligación de actualizar ninguna información en nuestro sitio. Usted acepta que es su responsabilidad controlar los cambios en nuestro sitio.</p>
      </section>

      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Sección 4: Modificaciones al servicio y precios</h2>
        <p className='text-xl text-gray-800 mb-4'>Los precios de nuestros productos están sujetos a cambios sin previo aviso.</p>
        <p className='text-xl text-gray-800 mb-4'>Nos reservamos el derecho de modificar o discontinuar el Servicio <i>(o cualquier parte o contenido del mismo)</i> sin previo aviso en cualquier momento.</p>
        <p className='text-xl text-gray-800 mb-4'>No seremos responsables ante usted ni ante ningún tercero por ninguna modificación, cambio de precio, suspensión o interrupción del Servicio.</p>
      </section>
      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Sección 5: Productos o servicios</h2>
        <p className='text-xl text-gray-800 mb-4'>Ciertos productos o servicios pueden estar disponibles exclusivamente online a través del sitio web. Estos productos o servicios pueden tener cantidades limitadas y están sujetos a devolución o cambio solo de acuerdo con nuestra Política de devolución.</p>
        <p className='text-xl text-gray-800 mb-4'>Hemos hecho todo lo viable para mostrar con la mayor precisión posible los colores y las imágenes de nuestros productos que aparecen en la tienda. No podemos garantizar que la visualización de cualquier color en el monitor de su computadora sea precisa.</p>
        <p className='text-xl text-gray-800 mb-4'>Nos reservamos el derecho, pero no estamos obligados, de limitar las ventas de nuestros productos o servicios a cualquier persona, región geográfica o jurisdicción. Podemos ejercer este derecho caso por caso. Nos reservamos el derecho de limitar las cantidades de cualquier producto o servicio que ofrecemos. Todas las descripciones de los productos o los precios de los productos están sujetos a cambios en cualquier momento y sin previo aviso, a nuestra entera discreción. Nos reservamos el derecho de discontinuar cualquier producto en cualquier momento. Cualquier oferta de cualquier producto o servicio que se realice en este sitio no tiene validez donde dicho producto o servicio esté prohibido.</p>
        <p className='text-xl text-gray-800 mb-4'>No garantizamos que la calidad de cualquier producto, servicio, información u otro material que usted haya comprado u obtenido cumplirá con sus expectativas, o que cualquier error en el Servicio se corregirá.</p>
      </section>
      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Sección 6: Esactitud de la facturación y de la información de la cuenta</h2>
        <p className='text-xl text-gray-800 mb-4'>Nos reservamos el derecho de rechazar cualquier pedido que realice en nuestra tienda. Podemos, a nuestro exclusivo criterio, limitar o cancelar las cantidades compradas por persona, por hogar o por pedido. Estas restricciones pueden incluir pedidos realizados con la misma cuenta de cliente, la misma tarjeta de crédito o pedidos que usen la misma dirección de facturación o de envío. En el caso de que realicemos un cambio o cancelemos un pedido, intentaremos notificarle vía correo electrónico o la dirección de facturación / número de teléfono proporcionados en el momento en que se realizó el pedido. Nos reservamos el derecho de limitar o prohibir los pedidos que, a nuestra entera discreción, parezcan haber sido realizados por comerciantes, revendedores o distribuidores.</p>
        <p className='text-xl text-gray-800 mb-4'>Usted acepta suministrar información completa y precisa de la compra y cuenta actual, para todas las compras realizadas en nuestra tienda. Usted acepta actualizar rápidamente su cuenta y demás informaciones, entre ellas, su dirección de correo electrónico, los números de tarjeta de crédito y las fechas de vencimiento, para que podamos completar sus transacciones y contactarlo según sea necesario.</p>
        <p className='text-xl text-gray-800 mb-4'>Para obtener más información, consulte nuestra Política de devoluciones.</p>
      </section>
      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Sección 7: Herramientas opcionales</h2>
        <p className='text-xl text-gray-800 mb-4'>Podemos proporcionarle acceso a herramientas de terceros que no supervisamos, ni tenemos ningún control sobre ellas, ni tampoco contribuimos.</p>
        <p className='text-xl text-gray-800 mb-4'>Usted reconoce y acepta que brindamos acceso a dichas herramientas "tal como se encuentran" y "según disponibilidad" sin garantías, representaciones ni condiciones de ningún tipo y sin ningún tipo de respaldo. No tendremos ninguna responsabilidad como consecuencia del uso que haga de herramientas opcionales de terceros o en relación a ellas.</p>
        <p className='text-xl text-gray-800 mb-4'>Cualquier uso que haga de las herramientas opcionales ofrecidas a través del sitio es por su cuenta y riesgo, y debe asegurarse de estar familiarizado con los términos según los cuales los proveedores externos relevantes suministran dichas herramientas y aprobarlos.</p>
        <p className='text-xl text-gray-800 mb-4'>También podemos, en el futuro, ofrecer nuevos servicios o funciones a través del sitio web <i>(incluido el lanzamiento de nuevas herramientas y recursos)</i>. Estas nuevas funciones o servicios también estarán sujetos a los presentes Términos de servicio.</p>
      </section>
      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Sección 8: Enlaces a terceros</h2>
        <p className='text-xl text-gray-800 mb-4'>Algunos contenidos, productos y servicios disponibles a través de nuestro Servicio pueden incluir recursos de terceros.</p>
        <p className='text-xl text-gray-800 mb-4'>Los enlaces de terceros en este sitio pueden dirigirlo a páginas web de terceros que no están afiliados a nosotros. No somos responsables de examinar o evaluar el contenido o la exactitud, ni garantizamos ni asumiremos ninguna obligación ni responsabilidad por los recursos o páginas web de terceros, ni por ningún otro material, producto o servicio de terceros.</p>
        <p className='text-xl text-gray-800 mb-4'>No somos responsables de ningún daño o perjuicio relacionado con la compra o el uso de bienes, servicios, recursos, contenido o cualquier otra transacción realizada en conexión con sitios web de terceros. Revise cuidadosamente las políticas y prácticas de terceros, y asegúrese de comprenderlas antes de participar en cualquier transacción. Las quejas, reclamos, inquietudes o preguntas referentes a productos de terceros deben dirigirse a estos.</p>
      </section>
      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Sección 9: Comentarios de los usuarios, opiniones y otras comunicaciones</h2>
        <p className='text-xl text-gray-800 mb-4'>Si, a petición nuestra, usted envía ciertas comunicaciones específicas <i>(por ejemplo, participaciones en un concurso)</i> o, sin una solicitud nuestra, envía ideas creativas, sugerencias, propuestas, planes u otros materiales, ya sea online, por correo electrónico, por correo postal, o de otro modo <i>(denominado en lo sucesivo y de manera colectiva, 'comentarios')</i>, usted acepta que podemos, en cualquier momento, sin restricción: editar, copiar, publicar, distribuir, traducir y usar en cualquier medio cualquier comentario que usted nos envíe. No tenemos ni tendremos ninguna obligación <i>(1)</i> de mantener ningún comentario de manera confidencial; <i>(2)</i> pagar alguna compensación por cualquier comentario; o <i>(3)</i> responder a cualquier comentario.</p>
        <p className='text-xl text-gray-800 mb-4'>Podemos, pero no tenemos la obligación de monitorear, editar o eliminar contenido que a nuestra entera discreción determinemos que es ilegal, ofensivo, amenazante, calumnioso, difamatorio, pornográfico, obsceno u objetable, o que infrinja la propiedad intelectual de cualquiera de las partes o de los presentes Términos del servicio.</p>
        <p className='text-xl text-gray-800 mb-4'>Usted acepta que sus comentarios no infringirán ningún derecho de terceros, incluidos los derechos de autor, marca registrada, privacidad, personalidad u otro derecho personal o de propiedad. Además, acepta que sus comentarios no contendrán material difamatorio, ilegítimo, abusivo u obsceno, ni contendrán ningún virus informático ni otro software dañino que pueda afectar de cualquier manera el funcionamiento del Servicio o de cualquier sitio web relacionado. No puede utilizar una dirección de correo electrónico falsa, simular ser otra persona o engañarnos o engañar a terceros sobre el origen de los comentarios. Usted es el único responsable de los comentarios que realice y de su exactitud. No asumimos ninguna responsabilidad ni ninguna obligación por los comentarios publicados por usted o por un tercero.</p>
      </section>
      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Sección 10: Información personal</h2>
        <p className='text-xl text-gray-800 mb-4'>El envío de la información personal que haga a través de la tienda se rige por nuestra Política de privacidad. Para ver nuestra Política de privacidad.</p>
      </section>
      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Sección 11: Errores, inexactitudes y omisiones</h2>
        <p className='text-xl text-gray-800 mb-4'>Puede haber información en nuestro sitio o en el Servicio que, ocasionalmente, contenga errores tipográficos, inexactitudes u omisiones que puedan relacionarse con descripciones de productos, precios, promociones, ofertas, cargos por envío de productos, tiempos de tránsito y disponibilidad. Nos reservamos el derecho de corregir cualquier error, inexactitud u omisión, de cambiar o actualizar información, o cancelar pedidos si alguna información en el Servicio o en cualquier página web relacionada es inexacta en cualquier momento sin previo aviso <i>(incluso después de haber enviado su pedido)</i>.</p>
        <p className='text-xl text-gray-800 mb-4'>No asumimos ninguna obligación de actualizar, modificar o aclarar la información en el Servicio o en cualquier sitio web relacionado, incluyendo de manera enunciativa pero no limitativa, la información de precios, excepto cuando lo exija la ley. Ninguna actualización especificada o fecha de actualización aplicada en el Servicio o en cualquier sitio web relacionado debe tomarse para indicar que toda la información en el Servicio o en cualquier sitio web relacionado se modificó o actualizó.</p>
      </section>
      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Sección 12: Usos prohibidos</h2>
        <p className='text-xl text-gray-800 mb-4'> Además de las prohibiciones establecidas en los Términos del servicio, se le prohíbe utilizar el sitio o su contenido <i>(a)</i> para cualquier propósito ilegal; <i>(b)</i> para solicitar a otros que realicen o participen en cualquier acto ilegal; <i>(c)</i> para infringir cualquier reglamento, norma, ley u ordenanza local internacional, federal, provincial o estatal; <i>(d)</i> para infringir o violar nuestros derechos de propiedad intelectual o los derechos de propiedad intelectual de otros; <i>(e)</i> acosar, abusar, insultar, dañar, difamar, calumniar, denigrar, intimidar o discriminar por motivos de género, orientación sexual, religión, etnia, raza, edad, nacionalidad o discapacidad; <i>(f)</i> enviar información falsa o engañosa; <i>(g)</i> cargar o transmitir virus o cualquier otro tipo de código dañino que afecte o pueda afectar a la funcionalidad o el funcionamiento del Servicio o de cualquier sitio web relacionado, de otros sitios web o de Internet; <i>(h)</i> recopilar o rastrear la información personal de otros; <i>(i)</i> enviar correo no deseado, phishing, pharm, pretexto, spider, rastrear o extraer; <i>(j)</i> para cualquier propósito obsceno o inmoral; o <i>(k)</i> para interferir o eludir las funciones de seguridad del Servicio o de cualquier sitio web relacionado, o de otros sitios web o de Internet. Nos reservamos el derecho de dar por terminado su uso del Servicio o de cualquier sitio web relacionado por infringir cualquiera de los usos prohibidos.</p>
      </section>
      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Sección 13: Limitación de responsabilidad</h2>
        <p className='text-xl text-gray-800 mb-4'> No garantizamos, representamos ni aseguramos que el uso que haga de nuestro servicio será sin interrupciones, oportuno, seguro o sin errores.</p>
        <p className='text-xl text-gray-800 mb-4'> No garantizamos que los resultados que se puedan obtener del uso del servicio sean exactos o confiables.</p>
        <p className='text-xl text-gray-800 mb-4'>Usted acepta que periódicamente, podamos eliminar el servicio por lapsos de tiempo indefinidos o cancelar el servicio en cualquier momento, sin notificarle.</p>
        <p className='text-xl text-gray-800 mb-4'>Usted acepta expresamente que su uso del servicio o la imposibilidad de utilizarlo corre por su riesgo. El servicio y todos los productos y servicios que se le entregan a través del servicio <i>(salvo que así lo especifiquemos nosotros)</i> se ofrecen "tal como están" y "según disponibilidad" para su uso, sin ninguna representación, garantía o condición de ningún tipo, ya sea expresa o implícita, entre las que se incluyen todas las garantías implícitas o condiciones de comerciabilidad, calidad comercial, idoneidad para un propósito particular, durabilidad, título y no violación.</p>
        <p className='text-xl text-gray-800 mb-4'>En ningún caso <strong>{pageName}.tiendaonline.one</strong>, nuestros directores, funcionarios, empleados, afiliados, agentes, contratistas, pasantes, proveedores, proveedores de servicios o licenciantes serán responsables de cualquier lesión, pérdida, reclamo o cualquier daño directo, indirecto, incidental, punitivo, especial o consecuente de cualquier tipo, incluyendo de manera enunciativa más no limitativa; la pérdida de beneficios, pérdida de ingresos, pérdida de ahorros, pérdida de datos, costos de reemplazo o daños similares, ya sea por contrato, perjuicio <i>(incluida la negligencia)</i>, responsabilidad estricta o de otro tipo, que surjan del uso que haga de cualquiera de los servicios o de cualquier producto adquirido por medio del servicio, o para cualquier otro reclamo relacionado de alguna manera con su uso del servicio o de cualquier producto, incluidos, entre otros, cualquier error u omisión en cualquier contenido, o cualquier pérdida o daño de cualquier tipo en el que se haya incurrido como resultado del uso del servicio o de cualquier contenido <i>(o producto)</i> publicado, transmitido o puesto a disposición a través del servicio, incluso si se informa de su posibilidad.</p>
        <p className='text-xl text-gray-800 mb-4'>Debido a que algunos estados o jurisdicciones no permiten la exclusión o la limitación de la responsabilidad por daños consecuentes o incidentales, en dichos estados o jurisdicciones, nuestra responsabilidad se limitará a la extensión máxima de lo permitido por la ley.</p>
      </section>
      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Sección 14: Indemnización</h2>
        <p className='text-xl text-gray-800 mb-4'>Usted acepta indemnizar, defender y mantener indemne a <strong>{pageName}.tiendaonline.one</strong> y a nuestra empresa matriz, subsidiarias, afiliadas, asociados, funcionarios, directores, agentes, contratistas, licenciantes, proveedores de servicios, subcontratistas, proveedores, pasantes y empleados, de cualquier reclamo o demanda, incluidos los honorarios razonables de abogados, en los que un tercero haya incurrido debido a su incumplimiento de los presentes Términos del servicio o de los documentos que incorporan como referencia o que surjan por su incumplimiento de los mismos, o por la violación de cualquier ley o derechos de un tercero que haga.</p>
      </section>
      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Sección 15: Divisibilidad</h2>
        <p className='text-xl text-gray-800 mb-4'>En caso de que se determine que alguna disposición de los presentes Términos del servicio sea ilegal, nula o inaplicable, dicha disposición será, no obstante, ejecutable en la medida en que lo permita la legislación aplicable, y la parte inaplicable se considerará separada de los presentes Términos del servicio, sin que dicha determinación afecte a la validez y aplicabilidad de las demás disposiciones.</p>
      </section >
      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Sección 16: Recisión</h2>
        <p className='text-xl text-gray-800 mb-4'>Las obligaciones y responsabilidades de las partes incurridas antes de la fecha de rescisión seguirán vigentes después de la rescisión de este contrato a todos los efectos.</p>
        <p className='text-xl text-gray-800 mb-4'>Estos Términos del servicio se encuentran vigentes a menos que usted o nosotros los rescindamos. Puede rescindir los presentes Términos del servicio en cualquier momento al notificarnos que ya no desea utilizar nuestros Servicios o cuando cese de utilizar nuestro sitio.</p>
        <p className='text-xl text-gray-800 mb-4'>Si a nuestro juicio usted incumple, o sospechamos que ha incumplido con cualquier término o disposición de los presentes Términos del servicio, podemos rescindir igualmente este acuerdo en cualquier momento sin previo aviso y usted seguirá siendo responsable de todos los importes adeudados, hasta la fecha de rescisión inclusive; y/o en consecuencia podemos denegarle el acceso a nuestros Servicios <i>(o a parte de ellos)</i>.</p>
      </section>
      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Sección 17: Acuerdo completo</h2>
        <p className='text-xl text-gray-800 mb-4'>El hecho de que no ejerzamos o hagamos valer algún derecho o disposición de los presentes Términos del Servicio no constituirá una renuncia a dicho derecho o disposición.</p>
        <p className='text-xl text-gray-800 mb-4'>Estos Términos de servicio y cualquier política o regla de funcionamiento que hayamos publicado en este sitio o con respecto al Servicio constituye el acuerdo y el entendimiento completo entre usted y nosotros, y rigen su uso del Servicio, sustituyendo a cualquier acuerdo, comunicación o propuesta anterior o contemporánea, ya sea oral o escrita, entre usted y nosotros <i>(incluyendo de manera enunciativa más no limitativa, las versiones anteriores de los Términos del servicio)</i>.</p>
        <p className='text-xl text-gray-800 mb-4'>Cualquier ambigüedad en la interpretación de los presentes Términos del servicio no se interpretará en contra de la parte redactora.</p>
      </section>
      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Sección 18: Ley aplicable</h2>
        <p className='text-xl text-gray-800 mb-4'>Los presentes Términos del servicio y cualquier acuerdo por separado por el cual le proporcionemos Servicios se regirán e interpretarán de acuerdo con las leyes de B, España.</p>
      </section>
      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Sección 19: Cambios en los términos del servicio</h2>
        <p className='text-xl text-gray-800 mb-4'>Puede revisar la versión más reciente de los Términos del servicio en cualquier momento en esta página.</p>
        <p className='text-xl text-gray-800 mb-4'>Nos reservamos el derecho, a nuestra entera discreción, de actualizar, cambiar o sustituir cualquier parte de los presentes Términos del servicio mediante la publicación de actualizaciones y cambios en nuestro sitio web. Es su responsabilidad consultar nuestro sitio web periódicamente para ver los cambios. El uso que haga de nuestra página web o del Servicio o su acceso a cualquiera de estos de forma continua después de la publicación de cualquier cambio en los presentes Términos del servicio, constituye la aceptación de dichos cambios.</p>
      </section>
      <section className='text-center lg:text-left mb-8'>
        <h2 className='text-2xl tracking-tight font-extrabold text-gray-900 md:text-4xl mb-4'>Sección 20: Información de contacto</h2>
        <p className='text-xl text-gray-800 mb-4'>Las preguntas sobre los Términos del servicio se deben enviar utilizando el formulario que se puede encontrar en <Link className='text-indigo-700 hover:text-indigo-900 underline' to="contacto" title="Ir al contacto"><strong>{pageName}.tiendaonline.one/contacto</strong></Link>.</p>
      </section>
    </Layout >
  )
}

export const pageQuery = graphql`
  query TerminosYCondiciones {
    strapiPages {
      name
    }
  }
`

export default TerminosYCondiciones

