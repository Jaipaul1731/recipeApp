import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function Cuisine() {
  const [cuisine,setCuisine]=useState([])
  
  let params=useParams();

  const getCuisine = async (name) => {
    const api = await axios.get(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=51f5ecdf355444f3a4ee5d8a95cb45a6",
      {
        params: {
          cuisine:`${name}`
        },
      }
    );
    console.log(`cuisine  data of ${name}`,api.data.results)
    setCuisine(api.data.results)
  };
  useEffect(()=>{
    getCuisine(params.type)
  },[params.type])

  return <Grid>
    {
      cuisine.map((item)=>{
        return(
          <Card key={item.id}>
            <Link to={'/recipe/'+item.id}>
            <img src={item.image} alt={item.title}/>
            <h4>{item.title}</h4>
            </Link>
          </Card>
        )
      })
    }
  </Grid>;
}
const Grid =styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(15rem,1fr));
  grid-gap:3rem;
`
const Card =styled.div`
  img{
    width:100%;
    border-radius:2rem;

  }
  a{
    text-decoration:none;
  }
  h4{
    text-align:center;
    padding:0.5rem;
  }
`
export default Cuisine;
