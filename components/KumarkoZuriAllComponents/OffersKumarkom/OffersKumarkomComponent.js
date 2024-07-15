"use client"
import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Link from 'next/link';

const OffersKumarkomComponent = () => {
    const [offers, setOffers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const response = await fetch('https://docs.thezurihotels.com/wp-admin/edit.php?post_type=kerala');
                const data = await response.json();
                setOffers(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching offers:', error);
                setIsLoading(false);
            }
        };

        fetchOffers();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <style>
                {`
                .carousel-indicators {
                    display: none;
                }
                `}
            </style>

            {/* Desktop view */}
            <Container className='p-0 pt-5 text-center'>
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 pt-4 text-center'>OFFERS</h6>
                <h6 className='mt-4 d-inline-block border border-3 border-top-0 border-end-0 border-start-0 pb-2 '>STAY OFFERS</h6>

                <Col className='d-md-flex flex-column d-none mt-5'>
                    {offers.map((offer, index) => (
                        <Col key={index} className='d-flex flex-row'>
                            <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                                <Image src={offer.image} alt={offer.title.rendered} roundedCircle width={180} height={180}
                                    className='rounded-circle kumarkom-image-overlay'
                                />
                            </Col>
                            <Col md={7} className='text-md-start text-center pe-md-4'>
                                <Col className='d-inline-block'>
                                    <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                    <h6 className='text-center'>{offer.title.rendered}</h6>
                                </Col>
                                <p dangerouslySetInnerHTML={{ __html: offer.content.rendered }} />
                                <Col className='d-flex justify-md-content-center  align-items-md-start p-0 pe-2'>
                                    <Link href={offer.link}
                                        className='bg-black text-center text-decoration-none btn-circle'
                                    >
                                        <p
                                            className=' mb-0 font11px lh-sm text-white'
                                        >
                                            KNOW<br /> MORE
                                        </p>
                                    </Link>
                                </Col>
                            </Col>
                        </Col>
                    ))}
                </Col>
            </Container>

            {/* Mobile View */}
            <Container className='p-0 d-flex flex-column d-md-none '>
                {offers.map((offer, index) => (
                    <Col key={index} className='p-2'>
                        <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                            <Col className='d-flex flex-column align-items-center gap-4'>
                                <Image src='/cl.png' alt='' fluid />
                                <h6 className='py-2 text-center'>{offer.title.rendered}</h6>
                            </Col>
                            <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                                <Image src={offer.image} alt={offer.title.rendered} roundedCircle width={180} height={180}
                                    className='rounded-circle kumarkom-image-overlay'
                                />
                            </Col>
                            <p dangerouslySetInnerHTML={{ __html: offer.content.rendered }} />
                            <Link href={offer.link}
                                className='bg-black text-center text-decoration-none btn-circle'
                            >
                                <p
                                    className=' mb-0 font11px lh-sm text-white'
                                >
                                    KNOW<br /> MORE
                                </p>
                            </Link>
                        </Col>
                    </Col>
                ))}
            </Container>
        </>
    );
}

export default OffersKumarkomComponent;
