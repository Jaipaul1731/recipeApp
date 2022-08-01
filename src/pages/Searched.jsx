import React,{useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components'

function Searched() {
    const [searchedRecipes,setSearchedRecipes]=useState()
    let params=useParams();

    const getSearched = async (name) => {
      const api = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch?apiKey=51f5ecdf355444f3a4ee5d8a95cb45a6",
        {
          params: {
            query:`${name}`
          },
        }
      );
      console.log(`searched  data of ${name}`,api.data.results)
      setSearchedRecipes(api.data.results)
    };
    useEffect(()=>{
      getSearched(params.search)
    },[params.search])
  
  return (
   <Grid>
    {
       searchedRecipes && searchedRecipes.map((recipe)=>{
            return(
                <Card key={recipe.title}>
                <Link to={'/recipe/'+recipe.id}>
                    <img src={recipe.image} alt={recipe.title}/>
                    <h4>{recipe.title}</h4>
                  </Link>
                </Card>
                
            )
        })
    }
   </Grid>
    
  )
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

export default Searched