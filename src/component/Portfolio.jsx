import React, {useState} from 'react'
import  List  from './PortList'
import { Services, PortBtn, Flex, Btn, PortImg, Wrapper } from './Styled'
import '../App.css'

const btns = [ 'All', 'Web Design', 'Mobile Design']



const Portfolio = () => {
  
  const [active, setActive] = useState(btns[0])

  const [images, setImages] = useState(List)

  const handleFilter = (btn) =>{
    setActive(btn)
    
    switch(btn){
      case 'All':
        setImages(List);
        break;
      case 'Web Design':
        setImages(List.filter(item => item.category === 'web'));
        break;
      case 'Mobile Design':
        setImages(List.filter(item => item.category === 'mobile'));
        break;
      default:
        return;
    }
  }
  return (
    <div>
      <Wrapper>
        <Services className='serve' id='portfolio'>
          <h3>Portfolio</h3>
          <small className='small'>Here are a few examples of the projects I have completed. They include a fintech mobile app. a coffee shop app, and a website landing page.</small>
          <Flex>
            {
              btns.map(btn =>(
                <PortBtn key={btn}
                  active={active === btn}
                  onClick={() => handleFilter(btn)}
                >{btn}</PortBtn>
              ))
            }
          </Flex>
        </Services>

        <Flex>
          {images.map((item)=> (
            <PortImg src={item.img}/>
          ))}
          
        </Flex>

        <div classNames="btn">
          <a target='_blank' rel="noopener noreferrer" href="http://www.behance.net/opatolastephen01"><Btn>View More</Btn></a>
        </div>
      </Wrapper>
    </div>
  )
}

export default Portfolio