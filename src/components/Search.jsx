import React ,{useState}from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Search() {
    const[input,setInput]=useState('')
    const navigate=useNavigate()
    const SubmitHandler =(e)=>{
        e.preventDefault()
        navigate('/searched/'+input)
        
    }
  return (
    <FormStyle onSubmit={SubmitHandler}>
        
      <div>
      <FaSearch></FaSearch>
        <input onChange={(e)=>setInput(e.target.value)} type="text" value={input} />
      </div>
      
    </FormStyle>
  );
}
const FormStyle = styled.form`
  margin: 0rem 20rem;
  div {
    width: 100%;
    position: relative;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    padding:1rem 1rem 1rem 2.5rem;
    border: none;
    outline: none;
    border-radius: 1rem;
    width: 100%;
       
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
    
  }
`;
