import React from "react"
import disney from "../../assets/images/disney.png"
import marvel from "../../assets/images/marvel.png"
import nationalG from "../../assets/images/nationalG.png"
import pixar from "../../assets/images/pixar.png"
import starwar from "../../assets/images/starwar.png"

import disneyV from "../../assets/video/disney.mp4"
import marvelV from "../../assets/video/marvel.mp4"
import nationalGV from "../../assets/video/national-geographic.mp4"
import pixarV from "../../assets/video/pixar.mp4"
import starwarV from "../../assets/video/star-wars.mp4"

import Header from "../../components/Navbar/Header"
import Slider from "../../components/slider/Slider"
import ContentCategory from "../../components/contentCategory/ContentCategory"

// Interface for Movie data
interface Movie {
  id: number
  image: string
  video: string
}

const PelisList: Movie[] = [
  {
    id: 1,
    image: disney,
    video: disneyV,
  },
  {
    id: 2,
    image: pixar,
    video: pixarV,
  },
  {
    id: 3,
    image: marvel,
    video: marvelV,
  },
  {
    id: 4,
    image: starwar,
    video: starwarV,
  },
  {
    id: 5,
    image: nationalG,
    video: nationalGV,
  },
]

const Home: React.FC = () => {
  return (
    <>
      <Header/>
      <Slider/>
      <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16 ">
        {PelisList.map((item) => (
          <div
            key={item.id}
            className="border-[2px] border-gray-600
        rounded-lg hover:scale-110 transition-all duration-300
        ease-in-out cursor-pointer relative shadow-xl 
        shadow-gray-800"
          >
            <video
              src={item.video}
              autoPlay
              loop
              playsInline
              muted
              className="absolute z-0  top-0 rounded-md opacity-0 hover:opacity-50"
            />
            <img src={item.image} className="w-full z-[1] opacity-100" />
          </div>
        ))}
      </div>
      <ContentCategory/>
    </>
  )
}

export default Home
