import React from 'react';

import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';
import pong from '../projectIMG/pong.png'
import Netforce from '../projectIMG/Netforce.png'
import RM from '../projectIMG/rickandmorty.png'
import charts from '../projectIMG/Charts.png'
import HelpingHand from '../projectIMG/helpinghand.png'

import {Link} from 'react-router-dom'

import { FaGithubAlt, FaSignInAlt } from "react-icons/fa";

const width = '1000px', height='650px';

const Container = styled.div`
  color: white;
  overflow: hidden;
  width: ${width};
`;

const Children  = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`;

const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;

const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`;

const Dots = styled.span`
  text-align: center;
  width: ${width};
  z-index: 100;
`;

const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <Children>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
    </Children>
    <Dots>
      {Array(...Array(total)).map( (val, index) =>
        <Dot key={index} onClick={handleClick} data-position={index}>
          {index === position ? '● ' : '○ ' }
        </Dot>
      )}
    </Dots>
  </Container>
);

const Carousel = makeCarousel(CarouselUI);
export default function thisFunc() {

  return (
    <div className="thirdContainer">
      <Carousel defaultWait={null} /*wait for 1000 milliseconds*/ >
        <Slide right>
        <div>
          <div className="carouselText">
            <h1>Netforce</h1>
              <p>An application to help you find a movie to watch using an API for Netflix and Stan. Made with HTML, Javascript</p>
          </div>
            <div className="gitInt">
              <a href="https://elegant-agnesi-5a943c.netlify.com/shityaknickers.html">
                <FaSignInAlt className="signin"/>
              </a>
              <a href="https://github.com/TridKay99/RandomHorrorFilm">
                  <FaGithubAlt className="gitLeave"/>
              </a>
              </div>
            <img src={Netforce} width = '1000px' height='540px'/>
        </div>
        </Slide>
        <Slide right>
        <div>
          <div className="carouselText">
            <h1>HelpingHand</h1>
            <p>An application that connects workers with jobs that anyone can post. Created with Ruby on Rails</p>
          </div>
          <div className="gitInt">
            <a href="https://damp-forest-41444.herokuapp.com/">
              <FaSignInAlt className="signin"/>
            </a>
            <a href="https://github.com/TridKay99/helpingrails">
              <FaGithubAlt className="gitLeave"/>
            </a>
          </div>
          <img src={HelpingHand} width = '1000px' height='540px'/>
          </div>
        </Slide>
        <Slide right>
          <div className="carouselText">
            <h1>Pong</h1>
            <p>Fully functional Pong game vs AI. Made with Javascript.</p>
            <div className="gitInt">
              <a href="https://github.com/TridKay99/JS-Pong">
                <FaGithubAlt className="gitLeave"/>
              </a>
            </div>
            <img src={pong} width = '1000px' height='540px'/>
          </div>
        </Slide>
        <Slide right>
          <div className="carouselText">
            <h1>Rick and Morty Website & Quiz</h1>
            <p>Using a Rick and Morty API I created a quiz that tells you which of the 495 Rick and Morty characters you are. Created with Javascript</p>
            <div className="gitInt">
              <a href="https://distracted-lichterman-b05c7e.netlify.com/">
                <FaSignInAlt className="signin"/>
              </a>
              <a href="https://github.com/TridKay99/JS-rickandmorty">
                <FaGithubAlt className="gitLeave"/>
              </a>
            </div>
            <img src={RM} width = '1000px' height='540px'/>
          </div>
        </Slide>
        <Slide right>
          <div className="carouselText">
            <h1>Top 10 Pop Charts</h1>
            <p>Using an API to keep up to date with the top 10 pop charts. Updates with the API. Created with React & Express.</p>
            <div className="gitInt">
              <a href="https://github.com/TridKay99/musicAPI-React">
                <FaGithubAlt className="gitLeave"/>
              </a>
            </div>
            <img src={charts} width = '1000px' height='540px'/>
          </div>
        </Slide>
      </Carousel>
      <div className="carouselLinks">
          <Link  to="/">
            <li>Home</li>
          </Link>
          <Link  to="/skills">
            <li>Skills</li>
          </Link>
      </div>
    </div>
  );
}
