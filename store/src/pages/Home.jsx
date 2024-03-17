import { Navbar } from "../component/Navbar";
import axios from 'axios';
import Slider from "react-slick";
import "./Home.css";
import bal from "./images/bal.webp";
import bal2 from "./images/bal2.jpg";
import bal3 from "./images/bal3.jpg";
import bal4 from "./images/bal.webp";
import bal5 from "./images/bal2.jpg";
import bal6 from "./images/bal3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


export const Home = () => {
  const [games, setGames] = useState([]);
  const [gamesToShow, setGamesToShow] = useState(10);
  const [search , setSearch] = useState('');

  const handleShowMore = () => {
    setGamesToShow(prevCount => prevCount + 10);
  };

  const sliderImages = [bal, bal2, bal3, bal4, bal5, bal6];
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/');
        setGames(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  const change=(e)=> {
    setSearch(e.target.value)
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  
  return (
    <>
    <Navbar isHomePage={true} change={change} handleSearch={handleSearch} handleKeyPress={handleKeyPress} />
      
      <div className="store">
        <div className="types">
          <div className="type" >PLAY Exclusives</div>
          <div className="type" >Jeux</div>
          <div className="type" >Numérique</div>
          <div className="type" >Jouets</div>
          <div className="type" >Mode de vie</div>
          <div className="type" >Films</div>
          <div className="type" >Musique</div>
          <div className="type" >Livres</div>
          <div className="type" >Vente</div>                                
          <div className="type" >Blog</div>
        </div>
        <div className="all">
          <div className="categ">
            <div className="hh">
              <h2 className="categ-title">Games Categorise</h2>
              <div className="link">
                <a href="#">Action game</a>
              </div>
              <div className="link">
                <a href="#">Sports</a>
              </div>
              <div className="link">
                <a href="#">RPGs</a>
              </div>
              <div className="link">
                  <a href="#">Platform game</a>
              </div>
              <div className="link">
                <a href="#">Simulation video game</a>
              </div>
              <div className="link">
                <a href="#">Fighting</a>
              </div>
              <div className="link">
                <a href="#">Puzzle</a>
              </div>
              <div className="link">
                <a href="#">Survival game</a>
              </div>
              <div className="link">
                <a href="#">Real-time strategy</a>
              </div>
              <div className="link">
                <a href="#">Stealth game</a>
              </div>
              <div className="link">
                <a href="#">Interactive movie</a>
              </div>
              <div className="link">
                <a href="#">Vehicle simulation game</a>
              </div>
              <div className="link">
                <a href="#">Survival horror</a>
              </div>
              <div className="link">
                <a href="#">Life simulation</a>
              </div>
              <div className="link">
                <a href="#">Rhythm game</a>
              </div>
              <div className="link">
                <a href="#">4X</a>
              </div>
            </div>
          </div>
          <div className="games">
            <div className="news">
              <div className="title-news">
                <p>
                  NEWS GAMES
                </p>
              </div>
              <div className="news-games">
              </div>
            </div>
            <div className="slider-wrapper">
                <Slider {...sliderSettings}>
                  {sliderImages.map((image, index) => (
                    <div key={index}>
                      <img src={image} alt={`Slide ${index}`} className="photo"/>
                    </div>
                  ))}
                </Slider>
            </div>
            <div className="liste">
              <div className="title-liste-ex">
                <h1 className="title-liste-in">Game List</h1>
              </div>
              <div className="games-liste">
                {games.filter((game) => {
                  return search === '' ? game : game.name.includes(search)
                  }).slice(0, gamesToShow).map((game) => (
                  <div key={game.id} className="game">
                    <Link to={`/gamedetails/${game.id}`} className="link-detail">
                      <img src={game.poster} alt="poster" className="game-photo" />
                      <h3 className="game-title">{game.name}</h3>
                      <h4 className="price">${game.price}</h4>
                    </Link>
                  </div>
                ))}
              </div>
              {gamesToShow < games.length && (
                <button onClick={handleShowMore} className="show-more">
                  Affiche more
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}




