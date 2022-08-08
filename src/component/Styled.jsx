import styled from 'styled-components'

export const Btn = styled.button`
    background-color: var(--primary-color);
    color: var(--white-color);
    border-radius: 9px;
    padding: 10px 24px;
    margin-top: 10px;

    .btn{
      
    }
`

export const Small = styled.small`
  text-align: center;
`

export const Wrapper = styled.section`
  margin: 5rem 0;
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;

  
`

export const HeaderText = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    row-gap: 2rem;

    .header-text{
      display: block;
      width: 100%;
      max-width: 600px;
      
      @media screen and (max-width: 480px) {
        p{
          font-size: 18px;
        }
        h3{
          font-size: 1.7rem;
        }
      }

    }

    img{
      width: 100%;
      max-width: 500px;
      margin-top: -70px;
      @media screen and (max-width: 480px) {
        margin-top: -30px;
        max-height: 300px;
        max-width: 300px;
      }
    }
`



export const Services = styled.div`
  
  padding-bottom: 2rem;

  h3{
    text-align: center;
    width: 70%;
    margin: 0 auto;
  }
  
  .small{
    width: 70%;
    margin: 0 auto;
  }

  span{
    background-color: var(--white-color);
    height: 2px;
    width: 9rem;
    display: block;
    margin: 0 auto 1rem auto;
    // margin-bottom: 1rem;
  }
`

export const ServiceDiv = styled.div`
  padding: 2rem;
  background-color: var(--tertiary-color);
  max-width: 250px;
  width: 100%;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 3rem;

  small{
    width: 70%;
    margin: 0 auto;
  }

  img, small{
    background-color: var(--tertiary-color);
  }
`

export const PortImg = styled.img`
  width: 100%;
  max-width: 300px;
  height: 250px;
  margin-bottom: 3rem;
  border-radius: 5px;
`


export const Get = styled.div`
  text-align: center;
  margin: 2rem 0;

  small{
    color: #8E8787;
  }

  @media screen and (max-width: 480px) {
    small{
      font-size: 8px;
    }

    img{
      width: 20px;
    }
  }

`

export const PortBtn = styled.div`
  // background-color: var(--white-color);
  color: var(--white-color);
  border-radius: 9px;
  padding: 7px 18px;
  margin-top: 10px;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    padding: 7px 12px;
    margin-top: 10px;
    cursor: pointer;
    font-size: 12px;
  }

  ${({active})  => 
  active && `
    background-color: var(--primary-color);
  `
}
`

