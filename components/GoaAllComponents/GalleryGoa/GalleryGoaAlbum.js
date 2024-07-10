"use client";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Modal, Row } from "react-bootstrap";
import DomainUrl from "../../../config";
import gallerygoa from "../../ImageComponents/GoaGalleryImages/GoaGallery"

const GalleryGoaAlbum = () => {
  const [mediaData, setMediaData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const siteUrl = DomainUrl.wpApiUrl;

  useEffect(() => {
    const fetchMediaData = () => {
      const categoryMediaUrls = getCategoryMediaUrls(selectedCategory);
      setMediaData(categoryMediaUrls);
    };
    fetchMediaData();
  }, [selectedCategory]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (showModal) {
        if (event.key === "ArrowRight") {
          nextImage();
        } else if (event.key === "ArrowLeft") {
          prevImage();
        }
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentIndex, showModal]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

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

  const getCategoryMediaUrls = (category) => {
    const categoryData = gallerygoa.find((cat) => cat.category === category);
    return categoryData ? categoryData.images : [];
  };

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={2}>
            <Row className="d-flex flex-column gap-lg-2">
              {[
                "All",
                "Room & Suites",
                "Dining",
                "Maya spa",
                "Event and Wedding",
                "Lobby",
                "Banquets",
                "Beach Locations",
                "Property Locations",
              ].map((category) => (
                <Button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  variant=""
                  className="text-start"
                  style={{
                    color:
                      selectedCategory === category ? "#80027f" : "#6c6e71",
                  }}
                >
                  <h6 className="mb-0">{category}</h6>
                </Button>
              ))}
            </Row>
          </Col>
          <Col>
            <Row className="d-flex flex-lg-row flex-column align-items-stretch">
              {mediaData.map((url, index) => (
                <div key={index} className="p-1 col-lg-4">
                  <div
                    className="card p-0 overflow-hidden"
                    style={{ width: "100%", height: "200px" }}
                  >
                    <Image
                      src={url}
                      alt={`Image ${index}`}
                      className="img-fluid"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleImageClick(index)}
                    />
                  </div>
                </div>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Modal for displaying full-size image */}
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          centered
          className="bg-black bg-opacity-75"
        >
          <Modal.Body className="bg-black border-0 p-0">
            <Image
              src={mediaData[currentIndex]}
              alt={`Image ${currentIndex}`}
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
      </Container>
    </>
  );
};
export default GalleryGoaAlbum;
