import {FaHamburger,FaPizzaSlice} from 'react-icons/fa';
import {GiNoodles,GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

function category() {
  return (
    <List>
        <SLink to='/cuisine/Italian'>
        <FaPizzaSlice/>
        <h4>Italian</h4>
        </SLink>
        <SLink to='/cuisine/American'>
        <FaHamburger/>
        <h4>American</h4>
        </SLink>
        <SLink to='/cuisine/Thai'>
        <GiNoodles/>
        <h4>Thai</h4>
        </SLink>
        <SLink to='/cuisine/Chinese'>
        <GiChopsticks/>
        <h4>Chinese</h4>
        </SLink>
    </List>
  )
}

const List=styled.div`
    display:flex;
    justify-content:center ;
    margin: 1rem 0rem;
`
const SLink=styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content:center ;
    align-items:center ;
    border-radius: 50%;
    height:3.1rem ;
    width:3.1rem ;
    text-decoration:none ;
    background:linear-gradient(35deg ,#494949,#313131);
    margin-right: 2rem;
    transform:scale(0.8rem) ;
    cursor: pointer;
    h4{
        color:white ;
        font-size:0.5rem ;
    }
    svg{
        color:white ;
        font-size:1rem ;
    }
    &.active{
        background:linear-gradient(to right , #f27121, #e94057) ;
    }
`
export default category