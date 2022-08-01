import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {Link} from 'react-router-dom'

function Veggie() {
  const [veggie, setVeggie] = useState([]);
  // console.log(`'environment variable',${process.env.REACT_APP_API_KEY}`)
  console.log("veggie value form state", veggie);
  useEffect(() => {
    console.log("useEffect run");
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check=localStorage.getItem('veggie');
   
    if (check) {
      setVeggie(JSON.parse(check))
      console.log('data successfully stored in local storage')
    } else {
      const api = await axios.get(
        "https://api.spoonacular.com/recipes/random?apiKey=51f5ecdf355444f3a4ee5d8a95cb45a6",
        {
          params: {
            number: 9,
            tags:'vegetarian'
          },
        }
      );
      localStorage.setItem("veggie",JSON.stringify(api.data.recipes))
      setVeggie(api.data.recipes);
      console.log('data is not stored')
    }
   
  };

  return (
    <Wrapper>
      <h3>Our Vegetarian Picks</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "4rem",
        }}
      >
        {veggie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card key={recipe.id}>
                <Link to={'/recipe/'+recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient/>
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 2rem 0rem;
`;
const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  img {
    border-radius: 2rem;
    object-fit: cover;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
  }
  p {
    position: absolute;
    z-index: 10;
    text-align: center;
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: 1rem;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    height: 40%;
    align-items: center;
    color: white;
    width: 100%;
  }
`;
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width:100% ;
  height:100% ;
  background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)) ;
`;

export default Veggie;
