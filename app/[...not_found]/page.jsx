import React from 'react'

import Header from '../../components/Shared/Header'
import Footer from '../../components/Shared/Footer'
import { Col, Container } from 'react-bootstrap'


const NotFound = () => {
    return (
        <div>
            <Header />
            <Container className='custom-kumarkom-menu-container pb-5  d-flex flex-column justify-content-center'>
                <Col className='d-flex flex-column justify-content-center mt-5'>
                    <h1 className='fw-bold text-dark-emphasis'>
                        Not Found
                    </h1>
                    <p>
                        Apologies, but we were unable to find what you were looking for.
                    </p>
                    {/* <h5 className='d-block w-auto bg-purple d-d-inline-block text-white p-2'>
                        Go Back to Home page
                    </h5> */}
                </Col>
            </Container>
            <Footer />
        </div>
    )
}

export default NotFound
