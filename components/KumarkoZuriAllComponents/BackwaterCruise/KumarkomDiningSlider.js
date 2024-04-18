'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { Col, Container, Image } from 'react-bootstrap'


const KumarkomDiningSlider = () => {


  

    const [isHover, setIsHover] = useState(false);
    const [isHover1, setIsHover1] = useState(false);
    const [isHover2, setIsHover2] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const handleMouseEnter1 = () => {
        setIsHover1(true);
    };
    const handleMouseLeave1 = () => {
        setIsHover1(false);
    };

    const handleMouseEnter2 = () => {
        setIsHover2(true);
    };
    const handleMouseLeave2 = () => {
        setIsHover2(false);
    };

    const buttonHover = {
        backgroundColor: isHover ? 'black' : 'white',
        color: isHover ? 'white' : 'black',
        border: isHover ? '1px solid black' : '1px solid silver',
        transition: '.5s ease-in',
        fontSize: '13px',
    }

    const buttonHover1 = {
        backgroundColor: isHover1 ? 'black' : 'white',
        color: isHover1 ? 'white' : 'black',
        border: isHover1 ? '1px solid black' : '1px solid silver',
        transition: '.5s ease-in',
        fontSize: '13px',
    }

    const buttonHover2 = {
        backgroundColor: isHover2 ? 'black' : 'white',
        color: isHover2 ? 'white' : 'black',
        border: isHover2 ? '1px solid black' : '1px solid silver',
        transition: '.5s ease-in',
        fontSize: '13px',
    }

    return (
        <>
            <Container className='pt-5 text-center px-md-5' >

                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 pt-4 text-center'>BACKWATER CRIUSE</h6>
                <p className='text-center'>
                Welcome to our exclusive waterfront adventure, where you can indulge in the tranquility of our Backwater cruise aboard the luxurious Laguna House Boat or feel the rush of adrenaline with our thrilling Speed Boat ride. Book your waterfront adventure now and create memories to last a lifetime!
                </p>
                <Col className=''>
                    <Col className='py-5'>
{/* 
                        <Image src='/cl.png' alt='' fluid />
                        <h6 className='py-2 pt-4 text-center'>RESTAURANTS</h6> */}
                        
<h6 className='text-dark'>Laguna House Boat</h6>
 
<p>Perfect for a group of 4!</p>
<p>Enjoy a 2-hour cruise with onboard refreshments</p>
<p>Choose your preferred time slot:</p>
<p>10AM-12Noon</p>
<p>1PM-3PM</p>
<p>4PM-6PM</p>
 
 
<h6>Speed Boat ride:</h6>
<p>Ideal for up to 3 adventurers!</p>
<p>Experience a 1-hour ride of excitement</p>
<p>Choose your preferred time slot:</p>
<p>8AM-9AM</p>
<p>10AM-11AM</p>
<p>4PM-5PM</p>

                        
                    </Col>


                
                </Col>
            </Container>
        </>
    )
}

export default KumarkomDiningSlider