import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

function Recipes() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instruction");
  let param = useParams();
  let sum=1
  
  useEffect(() => {
    const fetchDetails = async () => {
      const api = await axios.get(
        `https://api.spoonacular.com/recipes/${param.name}/information?apiKey=51f5ecdf355444f3a4ee5d8a95cb45a6`
      );
      console.log("recipe detail", api.data);
      setDetails(api.data);
    };
    fetchDetails();
  }, [param.name]);
  console.log('sum',sum)
  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title}/>
      </div>
      <Info>
        <Button
          className={activeTab === "instruction" ? "active" : ""}
          onClick={() => setActiveTab("instruction")}
        >
          Instruction
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === 'instruction' && (
          <div>
        <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
        <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
        </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
          {details.extendedIngredients.map((ingredient)=>(
            <li key={ingredient.details}>
              {ingredient.original}
            </li>
          ))}
        </ul>
        )}
        
      </Info>
    </DetailWrapper>
  );
}
const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  h3{
    font-size:0.8rem ;
  }

  img {
    height:250px ;
    width:350px ;
    object-fit:cover ;
  }
  li {
    font-size: 0.8rem;
    line-height: 1.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 1rem;
  font-weight: 600;
`;
const Info = styled.div`
  margin-left: 10rem;
`;
export default Recipes;
