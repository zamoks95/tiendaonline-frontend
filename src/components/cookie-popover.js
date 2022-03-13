import CookieBanner from "react-cookie-banner"
import React, { useState } from 'react';
const CookiePopover = () => {
    /*  const [accepted, setAccepted] = useState(false);
     const message = "Buildo uses cookies to guarantee users the employment of its site features, offering a better purchasing experience. By continuing to browse the site you're agreeing to our use of cookies."
 
     var browser = browser
 
     !accepted && browser.cookies.get('accepts-cookies') && browser.cookies.remove('accepts-cookies') */

    return (
        <>
            <p>
                {/*   accepts-cookies: {cookies.get('accepts-cookies') || 'false'} */}
            </p>
            {/*   <CookieBanner
                message={message}
                link={<a href='http://nocookielaw.com/'>More information on our use of cookies</a>}
                buttonMessage='Close'
                dismissOnScroll={false}
                dismissOnClick={true}
                onAccept={() => setAccepted(true)}
            /> */}
        </>
    )
}

export default CookiePopover;