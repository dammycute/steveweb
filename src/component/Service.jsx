import React from 'react'
import { Flex, ServiceDiv, Services, Wrapper } from './Styled'
import web from '../steve-img/web.png'
import phone from '../steve-img/Phone.png'
import creative from '../steve-img/creative.png'

const services = [
  {
    img: web,
    text: 'Web Design'
  },

  {
    img: phone,
    text: 'Mobile App Design'
  },

  {
    img: creative,
    text: 'Creative Design'
  }
]

const Service = () => {
  return (
    <Wrapper>
      <Services className='serve' id='service'>
        <h3>Services</h3>
        <span></span>
        <small className='small'>My services include website design, mobile app design and creative design. I create designs that give you the best user feel and experience ever!</small>
      </Services>
      <Flex>
        {services.map((item) => (
          <ServiceDiv key={item}>
            <img src={item.img} alt="" /><br />
            <small>{item.text}</small>
          </ServiceDiv>
        )

        )}

      </Flex>
    </Wrapper>
  )
}

export default Service