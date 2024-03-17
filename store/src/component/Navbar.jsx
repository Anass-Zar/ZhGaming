import "./Navbar.css"
import gaming from "./images/zh-gaming.png"
import searchlogo from "./images/search.png"
import profile from "./images/user(1).png"
import profilebt from "./images/user(2).png"
import cartimage from "./images/shopping-cart.png"
import logoutbt from "./images/logout.png"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export const Navbar = ({ isHomePage , change , handleSearch , handleKeyPress }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password_cf, setPassword_cf] = useState();
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const [profil, setProfil] = useState(true);
  const [userUsername, setUserUsername] = useState("");
  const [isProVisible, setIsProVisible] = useState(false);
  const navigate = useNavigate();
  const [image , setImage] = useState("");
  const [userImage , setUserImage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setProfil(false);
      handleProfile();
    }
  }, []);

  const handleSignup = (e) => {
    e.preventDefault();
    axios
      .post(
        "/api/signup",
        { image, username, email, password, password_cf },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        console.log(response.data);
        setIsSignIn(!isSignIn);
      })
      .catch((err) => console.log(err));
  };

  const handleSignin = (e) => {
    e.preventDefault();
    axios
      .post(
        "/api/signin",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        const result = response.data;
        console.log(result);
        if (result.message === "Success") {
          localStorage.setItem("token", result.token);
          localStorage.setItem("username", result.user.username);
          localStorage.setItem("image", result.user.image);
          setIsDivVisible(!isDivVisible);
          setUserUsername(result.user.username);
          setUserImage(result.user.image);
          setProfil(false);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username"); 
    localStorage.removeItem("image"); 
    setProfil(true);
    setIsProVisible(false);
    navigate("/");
  };

  function covertToBase64 (e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result)
    };
    reader.onerror = error => {
      console.log("Error : " , error)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedImage = localStorage.getItem("image");
    const storedUsername = localStorage.getItem("username");

    if (token && storedUsername && storedImage) {
      setProfil(false);
      setUserUsername(storedUsername);
      setUserImage(storedImage);
      handleProfile();
    }
  }, []);

  const handleProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        console.log("Token exists");
        const response = await axios.post(
          "/api/home",
          {},
          {
            headers: {
              "Content-Type": "application/json",
              token: token,
            },
          }
        );
        console.log(response.data);
      } else {
        console.log("Token does not exist");
      }
    } catch (error) {
      console.error("Error in handleProfile:", error);
    }
  };

  const toggleDivVisibility = () => {
    setIsDivVisible(!isDivVisible);
  };

  const toggleSignInUp = () => {
    setIsSignIn(!isSignIn);
  };

  useEffect(() => {
    if (isDivVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDivVisible]);

  const toggleProVisibility = () => {
    setIsProVisible(!isProVisible);
  };

  useEffect(() => {
    const body = document.body;
    if (isProVisible) {
      body.classList.add("pro-overlay");
    } else {
      body.classList.remove("pro-overlay");
    }
    return () => {
      body.classList.remove("pro-overlay");
    };
  }, [isProVisible]);

  const cart = JSON.parse(localStorage.getItem("cart"));
  const numproduct = new Set( cart ?
    cart.filter((product) => product.game > 0).map((product) => product.id) : null
  );


  return (
    <div className="navbar">
      <Link to="/">
        <img src={gaming} alt="hh" className="gaming"/>
      </Link>
      <div className="links">
      {isHomePage && (
          <div className="div-search">
            <button className="button-search" onClick={handleSearch}>
              <img src={searchlogo} alt="hh" className="icon-search"/>
            </button>
            <input type="search" name="search" className="search" placeholder="Search" onChange={change} onKeyPress={handleKeyPress}/>
          </div>
        )}
        <div className="chariot">
          <Link to="/cart"><button className="signup"><img src={cartimage} alt="hh" className="lin"/>Chariot</button></Link>
          <span className="count">{numproduct.size === 0 ? "" : numproduct.size}</span>
        </div>
        {profil ? (
          <button className="signup" onClick={toggleDivVisibility}><img src={profilebt} alt="hh" className="lin"/>Sign In</button>
        ) : (
          <div className="pro">
            <button className="signup" onClick={toggleProVisibility}>
              {userImage == "" ? (
                <img src={profile} alt="hh" className="profile-image"/>
              ) : (
                <img src={userImage} alt="hh" className="profile-image"/>
              )}
            </button>
            {isProVisible && (
              <div className="profail">
                <button className="pro-button"><Link to="/profile" className="link-profile"><img src={profilebt} alt="hh" className="bt"/>Profile</Link></button>
                <button className="pro-button" onClick={handleLogout}><img src={logoutbt} alt="hh" className="bt"/>Log out</button>
              </div>
            )}
          </div>
        )}
        {isDivVisible && (
          <>
            <div className="overlay" onClick={toggleDivVisibility}></div>
            <div className="centeredDiv">
              <div className="signin">
                <div className="information">
                  <h1>{!isSignIn ? "Sign In" : "Sign Up"}</h1>
                  <p className='welcome'>{!isSignIn ? "Welcome Back" : "Create an Account"}</p>
                    {!isSignIn && (
                      <div className="inputs-ex">
                        <div className="inputs-in">
                          <input type="email" id="email" name="email" placeholder="Email" className="input" onChange={(e) => setEmail(e.target.value)}/>
                          <input type="password" id="password" name="password" placeholder="Password" className="input" onChange={(e) => setPassword(e.target.value)}/>
                          <a href="" className='forget'>Forget password</a>
                        </div>
                        <button className='login' onClick={handleSignin}>Sign In</button>
                        <p className="toggleText">Dont have an account?
                          <button className="toggleButton" onClick={toggleSignInUp}>Sign up</button>
                        </p>
                      </div>
                    )}
                    {isSignIn && (
                      <div className="inputs-ex">
                        <div className="inputs-in">
                          <div className="profile-image2">
                            <input accept="image/" type="file" onChange={covertToBase64} className="upload"/>
                            {image == "" || image == null ? (
                              <>
                                <img src={profile} alt="Upload image" className="user-image"/>
                              </>
                            ) : (
                              <>
                                <img src={image} alt="Upload image" className="user-image" />
                              </>
                            )}
                          </div>
                          <input type="text" id="email" name="email" placeholder="Email" className="input" onChange={(e) => setEmail(e.target.value)}/>
                          <input type="text" id="username" name="username" placeholder="Username" className="input" onChange={(e) => setUsername(e.target.value)}/>
                          <input type="password" id="password" name="password" placeholder="Password" className="input" onChange={(e) => setPassword(e.target.value)}/>
                          <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm password" className="input" onChange={(e) => setPassword_cf(e.target.value)}/>
                        </div>
                        <button className='login' onClick={handleSignup}>Sign Up</button>
                        <p className="toggleText">Already have an account?
                          <button className="toggleButton" onClick={toggleSignInUp}>Sign in</button>
                        </p>
                      </div>
                    )}
                </div>
              </div>
              <button onClick={toggleDivVisibility} className='button_x'>×</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
