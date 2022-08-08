import React from 'react'
import {Services, Flex, Get, Wrapper, Small} from './Styled'
import whatsapp from '../steve-img/whatsapp.png'
import mail from '../steve-img/getMail.png'
import gps from '../steve-img/location.png'

const Touch = () => {

  return (
    <Wrapper>
      <Services className='serve' id='get'>
      <h3>Get in touch</h3>
      <Small className='Small'>Lets get started! Give your business the professional touch it deserves now!</Small>
      </Services>

      <Flex>
        <Get>
        <img src={whatsapp} alt="" /><br />
        <small>09067467232</small>
        </Get>
        <Get>
        <img src={mail} alt="" /><br />
        <small>stephenopatola@gmail.com</small>
        </Get>

        <Get>
        <img src={gps} alt="" /><br />
        <small>FUTA, Ondo State</small>
        </Get>
      </Flex>
    </Wrapper>
  )
}

export default Touch