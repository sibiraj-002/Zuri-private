"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "next/link";

const OffersBesngaluruComponent = () => {
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch(
          "https://docs.thezurihotels.com/wp-json/wp/v2/bengaluru"
        );
        const data = await response.json();

        // Separate offers into left and right categories based on their position in the array
        const leftOffers = [];
        const rightOffers = [];
        data.forEach((offer, index) => {
          if (index % 2 === 0) {
            leftOffers.push(offer);
          } else {
            rightOffers.push(offer);
          }
        });

        // Merge the offers, alternating between left and right categories
        const mergedOffers = [];
        const maxLength = Math.max(leftOffers.length, rightOffers.length);
        for (let i = 0; i < maxLength; i++) {
          if (i < leftOffers.length)
            mergedOffers.push({ ...leftOffers[i], position: "left" });
          if (i < rightOffers.length)
            mergedOffers.push({ ...rightOffers[i], position: "right" });
        }

        setOffers(mergedOffers);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.error("Error fetching offers:", error);
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

      <Container className="p-0 pt-5 text-center">
        <Image src="/cl.png" alt="" fluid />
        <h6 className="py-2 pt-4 text-center">
          BENEFIT FROM OUR SPECIAL OFFERS IN GOA
        </h6>
        <h6 className="mt-4 d-inline-block border border-3 border-top-0 border-end-0 border-start-0 pb-2">
          STAY OFFERS
        </h6>

        {/* Desktop view */}
        <Row className="mt-5">
          {offers.map((offer, index) => (
            <Row key={index} className="d-flex align-items-center mb-4">
              {offer.position === "left" ? (
                <>
                  <Col md={4} className="d-flex justify-content-end p-3">
                    <Image
                      src={offer.acf.thumbnail_image}
                      alt={offer.title.rendered}
                      roundedCircle
                      width={180}
                      height={180}
                      className="rounded-circle kumarkom-image-overlay"
                    />
                  </Col>
                  <Col md={8} className="text-md-start text-center pe-md-4">
                    <div className="ms-lg-5 mb-3">
                      <Image src="/cl.png" alt="" fluid />
                    </div>
                    <h6 className="">{offer.title.rendered}</h6>
                    <p
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: offer.content.rendered,
                      }}
                    />
                    <Col className="d-flex align-items-center p-0 pe-2">
                      <Link
                        href={offer.link}
                        className="bg-black text-center text-decoration-none btn-circle"
                      >
                        <p className="mb-0 font11px lh-sm text-white">
                          KNOW
                          <br /> MORE
                        </p>
                      </Link>
                    </Col>
                  </Col>
                </>
              ) : (
                <>
                  <Col md={8} className="text-md-start text-center ps-md-4">
                    <div className="text-end me-lg-5 mb-3">
                      <Image src="/cl.png" alt="" fluid />
                    </div>
                    <h6 className="text-end">{offer.title.rendered}</h6>
                    <p
                      className="text-end"
                      dangerouslySetInnerHTML={{
                        __html: offer.content.rendered,
                      }}
                    />
                    <Col className="d-flex justify-content-end align-items-center p-0 pe-2">
                      <Link
                        href={offer.link}
                        className="bg-black text-center text-decoration-none btn-circle"
                      >
                        <p className="mb-0 font11px lh-sm text-white">
                          KNOW
                          <br /> MORE
                        </p>
                      </Link>
                    </Col>
                  </Col>
                  <Col md={4} className="d-flex justify-content-start p-3">
                    <Image
                      src={offer.acf.thumbnail_image}
                      alt={offer.title.rendered}
                      roundedCircle
                      width={180}
                      height={180}
                      className="rounded-circle kumarkom-image-overlay"
                    />
                  </Col>
                </>
              )}
            </Row>
          ))}
        </Row>
      </Container>

      {/* Mobile View */}
      <Container className="p-0 d-flex flex-column d-md-none">
        {offers.map((offer, index) => (
          <Col key={index} className="p-2">
            <Col className="d-flex flex-column justify-content-center align-items-center text-center">
              <Col className="d-flex flex-column align-items-center gap-4">
                <Image src="/cl.png" alt="" fluid />
                <h6 className="py-2 text-center">{offer.title.rendered}</h6>
              </Col>
              <Col className="d-flex flex-wrap align-content-center justify-content-end p-3">
                <Image
                  src={offer.image_url}
                  alt={offer.title.rendered}
                  roundedCircle
                  width={180}
                  height={180}
                  className="rounded-circle kumarkom-image-overlay"
                />
              </Col>
              <p
                className="text-end"
                dangerouslySetInnerHTML={{ __html: offer.content.rendered }}
              />
              <Link
                href={offer.link}
                className="bg-black text-center text-decoration-none btn-circle"
              >
                <p className="mb-0 font11px lh-sm text-white">
                  KNOW
                  <br /> MORE
                </p>
              </Link>
            </Col>
          </Col>
        ))}
      </Container>
    </>
  );
};

export default OffersBesngaluruComponent;
