// Components
import Header from '/src/components/Header.jsx'
import Slider from '/src/components/Slider.jsx'
import ProductionHouse from '/src/components/ProductionHouse.jsx'
import GenreMovieList from '/src/components/GenreMovieList.jsx'
import Footer from '/src/components/Footer.jsx'

function Home() {
  return (
    <div>
      
      {/* Header */}
      <Header />
      {/* Slider */}
      <Slider />
      {/* Production House */}
      <ProductionHouse />
      {/* Movies sorted by genre */}
      <GenreMovieList />
      {/* Footer */}
      <Footer />
      
    </div>
  )
}

export default Home