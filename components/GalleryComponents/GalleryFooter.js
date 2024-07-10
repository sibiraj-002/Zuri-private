"use client";
import React, { useState } from "react";
import { Button, Col, Container, Image, Modal, Row } from "react-bootstrap";
import footergallery from "../../components/ImageComponents/FooterGalleryImages/FooterGallery"

const GalleryFooter = () => {
  const [mediaData, setMediaData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const nextImage = () => { 
    setCurrentIndex((prevIndex) =>
      prevIndex === mediaData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaData.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      {/* <LoadGalleryData onDataLoaded={setMediaData} /> */}
      <Container className="custom-kumarkom-menu-container">
        <h3 className="text-center py-md-4 text-custom-grey">GALLERY</h3>
      </Container>
      <Container>
        <Row className="d-flex flex-lg-row flex-column align-items-stretch">
          {footergallery.map((footergallery, index) => (
            <div key={index} className="p-1 col-lg-3">
              <div
                className="card p-0"
                style={{ width: "100%", height: "200px" }}
              >
                <Image
                  src={footergallery.image}
                  alt={footergallery.title}
                  className="img-fluid cursor-pointer"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onClick={() => {
                    setCurrentIndex(index);
                    setShowModal(true);
                  }}
                />
              </div>
            </div>
          ))}
        </Row>
      </Container>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        className="bg-black bg-opacity-75"
      >
        <Modal.Body className="bg-black border-0 p-0">
          <Image
            src={footergallery[currentIndex]?.image}
            alt={footergallery[currentIndex]?.title}
            className="img-fluid"
          />
        </Modal.Body>
        <Modal.Footer className="border-0 position-absolute w-100 top-50 p-0">
          <Col className="d-flex justify-content-between">
            <Button className="bg-black border-0" onClick={prevImage}>
              <i className="bi bi-arrow-left-square"></i>
            </Button>
            <Button className="bg-black border-0" onClick={nextImage}>
              <i className="bi bi-arrow-right-square"></i>
            </Button>
          </Col>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GalleryFooter;
