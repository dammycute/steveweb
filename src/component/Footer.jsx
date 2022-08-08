import React from 'react'
import styled from 'styled-components'
import {foot} from './footList'


const Foot = styled.div`
  background-color: #353535;
  padding: 3rem;
  text-align: center;

  p{
    background-color: #353535;
  }
`

const ImgFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  background-color: #353535;
  margin: 2rem 0;

  img{
    width: 30px;
  }

`

const Footer = () => {
  return (
    <div>
      <Foot>
        <p>&copy; 2022. All right reserved.</p>
        <ImgFlex>
          {foot.map(item =>(
            <a href={item.link}><img src={item.img} alt='Social'/></a>
          ))}
        </ImgFlex>
      </Foot>
    </div>
  )
}

export default Footer