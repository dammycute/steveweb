import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Btn, HeaderText } from './Styled';
import hamburger from '../steve-img/list.svg'
import steveHeader from '../steve-img/steve.png'
import '../App.css'


// --> green  --> black

const HeroContainer = styled.header`
  
  margin-bottom: 3rem;
  padding: 1rem;

  ul{
    z-index: 3;
  }

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 500px) {
      align-items: baseline;

    .ham{
      z-index: 2;
    }
    }
  }

  h3{
    @media (max-width: 600px) {
      font-size: large;
      
    }
  }

  p{
    @media (max-width: 600px) {
      font-size: small;
    }
  }

  nav{
    background-color: transparent;
  }

  a{
    color: var(--white-color);
    font-size: 18px;
  }

  
  

`

const ListItem = styled.li`
  cursor: pointer;
${({ active }) =>
    active && `
  border-bottom: 2px solid var(--primary-color);
  color: var(--primary-color);
  cursor: pointer;
`
  }
`


const navlist = [
  {
    namy: 'Home',
    link: '#'
  },
  {
    namy: 'About',
    link: '#about'
  },
  {
    namy: 'Services',
    link: '#service'
  },
  {
    namy: 'Portfolio',
    link: '#portfolio'
  },
  {
    namy: 'Contact',
    link: '#get'
  }
]

const Hero = () => {
  const [active, setActive] = useState(navlist[0][0])

  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleLogo, setToggleLogo] = useState(true)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const Hamburger = () => {
    setToggleMenu(!toggleMenu)
    setToggleLogo(!toggleLogo)
  }

  const handleLink = (namy) =>{
    setActive(namy)
    setToggleMenu(!toggleMenu)
    setToggleLogo(!toggleLogo)
  }
  
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
    };
  }, []);

  return (

    <HeroContainer classNameName='hero'>
      <section classNameName='container'>

        <div>
          {toggleLogo && <h3 id='logo'>Opatola Stephen</h3>}
          {(toggleMenu || screenWidth > 500) && <ul classNameName=''>
            {navlist.map(list => {
              const {namy, link} = list;
              return(
              
                <ListItem
                  key={list}
                  active={active === namy}
                  
                  onClick={() => handleLink(namy)}
                ><a href={link}>{namy}</a></ListItem>
              )
            })}
          </ul>}
          <img onClick={Hamburger} className='ham' src={hamburger} alt="" />
        </div>
        <HeaderText>
          <div className="header-text">
            <h3>I am Opatola Stephen</h3>
            <p>I am a product designer</p>
            <a href="https://wa.link/thrzik"><Btn>Contact</Btn></a>
          </div>
          <img src={steveHeader} alt="" />
        </HeaderText>

      </section>

    </HeroContainer>

  )
}

export default Hero