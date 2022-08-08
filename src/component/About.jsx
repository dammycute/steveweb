import React from 'react'
import styled from 'styled-components'

import steveImg from '../steve-img/steveAbout.png'
import {Btn} from './Styled'

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;

  span{
    color: var(--primary-color)
  }
  
  img{
    width: 300px;
  }

  .about-text{
    width: 100%;
    max-width: 700px;
    line-height: 1.5;
}
`

const About = () => {
  return (
      <Flex id='about'>
          <img src={steveImg} alt="" />
          <div className="about-text">
            <h3>About Me</h3>
            <p>Hello There, I am <span>Opatola Stephen</span></p>
            <br />
            <small>I am a product designer who has keen interest in solving problems with my creative skills.This drives me to create mobile applications and websites that gives users exciting features and experience. </small>
            <br />
            <Btn>Download Resume</Btn>
          </div>
        </Flex>
  )
}

export default About