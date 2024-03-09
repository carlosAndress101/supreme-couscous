import { useEffect, useRef, useState } from "react"
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { useMovieStore } from '../../store/movies';
const BASE_URL = "https://image.tmdb.org/t/p/original"
const screenWidth=window.innerWidth;


interface Movie {
  backdrop_path: string;
}

const Slider = () => {

  const { movies, error, fetchMovies } = useMovieStore();

  const [isLoading, setIsLoading] = useState(false);

  const elementRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      await fetchMovies();
      setIsLoading(false); // Set loading state to false after fetching
    };
    fetchData();
  }, []);


  const sliderRight=(element:HTMLElement )=>{
    element.scrollLeft += screenWidth - 110
  }
  const sliderLeft=(element: HTMLElement)=>{
    element.scrollLeft -= screenWidth -110
  }
  

  return (
    <div>
      {error && <p className="text-red-500">Error: {error}</p>}
      {isLoading ? (<p>Loading...</p>) :
       (<>
        <div>
        <HiChevronLeft className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer" onClick={() => sliderLeft(elementRef.current as HTMLElement)}/>
        
        <HiChevronRight className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer right-0" onClick={() => sliderRight(elementRef.current as HTMLElement)}/>

      </div>

      <div className="flex overflow-x-auto no-scrollbar w-full px-16 py-4 scroll-smooth" ref={elementRef}>
        {movies.map((item:Movie) => (
          <img
            src={BASE_URL + item.backdrop_path}
            alt="imagen"
            className="min-w-full  md:h-[310px] object-cover
            object-left-top mr-5 rounded-md hover:border-[4px]
            border-gray-400 transition-all duration-100 ease-in"
          />
        ))}
      </div>
       </>)}
      
    </div>
  )
}


export default Slider
