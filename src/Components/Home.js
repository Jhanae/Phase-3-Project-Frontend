import HomeCarousel from "./Carousel"
import Header from "./Header"
import HomeBody from "./HomeBody"

function Home ({difficulty, setDifficulty, country, setCountry}){
   return(
      <div>
         <Header/>
         <HomeBody difficulty={difficulty} setDifficulty={setDifficulty} country={country} setCountry={setCountry} />
         
      </div>
   )
}
export default Home

// AIzaSyAT0zwEI4EdImMKNzYXztXcTKusOK05adM