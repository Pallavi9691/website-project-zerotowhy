import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  text-align: center;
  padding: 60px 2rem;
  max-width: 1700px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  color: #111;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2.5rem;
`;

const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    gap: 0.3rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.6rem;
  }
`;

const SideColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const CenterImage = styled.img`
  width: 520px;
  height: 560px;
  object-fit: cover;
  border-radius: 14px;

  @media (max-width: 1200px) {
    width: 430px;
    height: 470px;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

const SmallImage = styled.img`
  width: 250px;
  height: 270px;
  object-fit: cover;
  border-radius: 12px;

  @media (max-width: 1200px) {
    width: 220px;
    height: 240px;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`${process.env.GATSBY_STRAPI_API_URL}/api/galleries?populate=image`)
      .then((res) => res.json())
      .then((data) => {
        const imgArray = data.data
          .flatMap((item) => item.image)
          .map((img) => `${process.env.GATSBY_STRAPI_API_URL}${img.url}`);
        setImages(imgArray.slice(0, 5));
      })
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  if (images.length < 5) return <p>Loading gallery...</p>;

  return (
    <Section>
      <Title>Gallery</Title>
      <Subtitle>Explore the world of mathematics and physics</Subtitle>

      <GalleryContainer>
        {/* Left column */}
        <SideColumn>
          <SmallImage src={images[0]} alt="Gallery left top" />
          <SmallImage src={images[1]} alt="Gallery left bottom" />
        </SideColumn>

        {/* Center image */}
        <CenterImage src={images[2]} alt="Gallery center" />

        {/* Right column */}
        <SideColumn>
          <SmallImage src={images[3]} alt="Gallery right top" />
          <SmallImage src={images[4]} alt="Gallery right bottom" />
        </SideColumn>
      </GalleryContainer>
    </Section>
  );
};

export default Gallery;
