import React from "react";
import Layout from "../layout/Layout";
import { Carousel } from "react-carousel-minimal";

export default function Home() {
  const data = [
    {
      image:
        "https://wallpapercave.com/wp/wp2544022.jpg",
      caption: "Clinica de diagnostico veterinario",
    },
    {
      image:
        "https://wallpapercave.com/wp/wp2544122.jpg",
      caption: "Clinica de diagnostico veterinario",
    },
    {
      image:
        "https://wallpapercave.com/wp/wp2544043.jpg",
      caption: "Clinica de diagnostico veterinario",
    },
    {
      image:
        "https://wallpapercave.com/wp/wp2544051.jpg",
      caption: "Clinica de diagnostico veterinario",
    },
    {
      image:
        "https://wallpapercave.com/wp/wp2544086.jpg",
      caption: "Clinica de diagnostico veterinario",
    },
    {
      image:
        "https://wallpapercave.com/wp/wp2544107.jpg",
      caption: "Clinica de diagnostico veterinario",
    },
    {
      image:
        "https://wallpapercave.com/wp/wp2507512.jpg",
      caption: "Clinica de diagnostico veterinario",
    },
    {
      image:
        "https://wallpapercave.com/wp/wp2544148.jpg",
      caption: "Clinica de diagnostico veterinario",
    },
    {
      image:
        "https://wallpapercave.com/wp/wp2446992.jpg",
      caption: "Clinica de diagnostico veterinario",
    },
  ];

  const captionStyle = {
    fontSize: "0",
    fontWeight: "bold",
  };
  return (
    <Layout>
      <div className="App">
        <p className="font-thin text-3xl">SIEMPRE MEJORANDO LA CALIDAD DE VIDA DE SUS MASCOTAS</p>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "10px 10px",
            }}
          >
            <Carousel
              data={data}
              time={10000}
              width="100%"
              height="475px"
              captionStyle={captionStyle}
              radius="10px"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={false}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "100%",
                maxHeight: "450px",
                margin: "40px auto",
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
