import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import React from 'react';

function Category() {
  return (
    <div className='mx-auto bg-white rounded-xl shadow-md overflow-hidden flex items-center justify-center p-8'>
            <SLink to={'/cuisine/Italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>        
            </SLink>
            <SLink to={'/cuisine/American'}>
                <FaHamburger />
                <h4>American</h4>        
            </SLink>
            <SLink to={'/cuisine/Thai'}>
                <GiNoodles />
                <h4>Thai</h4>        
            </SLink>
            <SLink to={'/cuisine/Chinese'}>
                <GiChopsticks />
                <h4>Chinese</h4>        
            </SLink>
    </div>
  );
}

// const List = styled.div`
//     display: flex;
//     justify-content: center;
//     margin: 2rem 0rem;
// `;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: #df7e00;
    width: 10rem;
    height: 10rem;
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        color: white;
        font-size: 1rem;
    }
    svg {
        color: white;
        font-size: 2.5rem;
    }
    .active {
        background: linear-gradient (to right, #f27121, #e94057);

        svg {
            color: white;
        }
        h4 {
            color: white;
        }
    }
`

export default Category