import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import Link from 'next/link'

import { Col } from 'react-bootstrap'


const WhatsappWidgetKumarkom = () => {

    const phone = '+919946105501'
    const text = 'Hello%20I%20have%20an%20enquiry.'


    return (

        <Col className='position-fixed end-0 bottom-0 p-lg-5 p-3'>
            <Link href={`https://wa.me/${phone}?text=${text}`} target='_blank' className='text-decoration-none' >

                <button type="button" class="btn btn-success d-flex flex-row  justify-content-center align-items-center rounded-4" >
                    {/* <div className='whatsapp-hover-show'>
                        Chat with us
                    </div> */}
                    <div>
                        <FaWhatsapp size="45" />
                    </div>
                </button>
            </Link>
        </Col>

    )
}

export default WhatsappWidgetKumarkom
