import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;

  margin: 0 auto;
  margin-top: 6rem;
  padding-bottom: 15rem;
  padding-top: 5rem;

  background-color: ${(props) => props.theme.white};
  position: relative;
`

export const Content = styled.div`
  width: 80%;
  max-width: 1400px;

  margin: 0 auto;

  display: flex;
  justify-content: space-around;
`

export const Title = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  gap: 1.125rem;

  h1 {
    font-size: 5.25rem;
  }

  p:nth-child(3) {
    font-family: 'Leelawadee UI';
    font-size: 2rem;
    font-weight: 350;
    line-height: 2.75rem;
  }

  p:nth-child(4) {
    width: 90%;
    font-family: 'Leelawadee UI';
    font-size: 0.875rem;

    line-height: 1.5rem;

    color: #9e9e9e;
  }

  a {
    width: 15rem;
    padding: 0.625rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.white};
    font-weight: 700;

    background: #eb184c;

    border-radius: 0.25rem;
  }
`

export const RedBar = styled.div`
  width: 6.3125rem;
  height: 1.375rem;

  background: #ec184c;
`

export const ImageOfPersonDancing = styled.img`
  width: 24.625rem;
  height: 30.75rem;

  border-radius: 0.5rem;
`
