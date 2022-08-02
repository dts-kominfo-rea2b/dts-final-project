import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import {
  GiNoodles,
  GiChopsticks,
  GiSushis,
  GiAfrica,
  GiFrenchFries,
  GiIndianPalace,
} from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import React from "react";

function Category() {
  return (
    <div className="bg-white">
      <div className="max-w 2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <SLink className={'hover:bg-orange-600'} to={"/cuisine/Italian"}>
            <FaPizzaSlice />
            <h4>Italian</h4>
          </SLink>
          <SLink className={'hover:bg-orange-600'} to={"/cuisine/American"}>
            <FaHamburger />
            <h4>American</h4>
          </SLink>
          <SLink className={'hover:bg-orange-600'} to={"/cuisine/Thai"}>
            <GiNoodles />
            <h4>Thai</h4>
          </SLink>
          <SLink className={'hover:bg-orange-600'} to={"/cuisine/Chinese"}>
            <GiChopsticks />
            <h4>Chinese</h4>
          </SLink>
          <SLink className={'hover:bg-orange-600'} to={"/cuisine/African"}>
            <GiAfrica />
            <h4>African</h4>
          </SLink>
          <SLink className={'hover:bg-orange-600'} to={"/cuisine/French"}>
            <GiFrenchFries />
            <h4>French</h4>
          </SLink>
          <SLink className={'hover:bg-orange-600'} to={"/cuisine/Korean"}>
            <GiSushis />
            <h4>Korean</h4>
          </SLink>
          <SLink className={'hover:bg-orange-600'} to={"/cuisine/Indian"}>
            <GiIndianPalace />
            <h4>Indian</h4>
          </SLink>
        </div>
      </div>
    </div>
  );
}



const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: #df7e00;
  width: 15rem;
  height: 15rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 2.2rem;
  }
  svg {
    color: white;
    font-size: 4.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default Category;
