import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./GameDetails.css";
import { Navbar } from "../component/Navbar";

function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  let cart = [];

  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
  }

  const add = (game) => {
    game.qtn = 1
    const check = cart.filter((e) => e.id === id);
    if (check.length === 0) {
      const gobj = [...cart, { id: id, game : game}];
      localStorage.setItem("cart", JSON.stringify(gobj));
    } else {
      const filtered = cart.filter((e) => e.id !== id);
      const gobj = [...filtered, { id: id, game : game}];
      localStorage.setItem("cart", JSON.stringify(gobj));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/gamedetails/${id}`);
        setGame(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);



  return (
    <div>
      <Navbar isHomePage={false}/>
      {game ? (
        <div key={game.id} className="details">
          <div className="image">
            <img src={game.poster} alt="poster" className="poster"/>
          </div>
          <div className="info">
            <h1 className="game-name">{game.name}</h1>
            <div className="buy">
              <h4 className="game-price">${game.price}</h4>
              <button className="buy-now" onClick={() => add(game)}>Add to cart</button>
            </div>
            <h2 className="desc">Description</h2>
            <p className="game-description">{game.description}</p>
            <div className="images">
              {game.images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`} className="game-image" />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default GameDetails;
