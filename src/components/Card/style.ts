import styled from 'styled-components'
import texture from '../../assets/backgrounds/smooth-white-stucco-wall.jpg'

export const ContainerCard = styled.main`
  width: 100%;
  max-width: 1400px;

  margin: 0 auto;
`

export const ContentCard = styled.div`
  position: relative;
  z-index: 0;

  width: 90%;

  margin: 0 auto;
  margin-top: -6rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 1rem;

  background-image: url(${texture});

  &::after {
    content: '';
    position: absolute;
    width: 20.25rem;
    height: 20.25rem;
    background-color: ${(props) => props.theme.pink};
    border-radius: 999px;

    bottom: 0;
    transform: translateY(50%);
  }

  svg {
    width: 5rem;
    height: 5rem;

    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }
`

export const BackgroundNameDonz = styled.img`
  position: absolute;
  height: 100%;
  top: 50%;
  transform: translateY(-50%);

  margin: 0 auto;

  z-index: -1;
`

export const ContentTitle = styled.div`
  width: 55%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 2rem;

  p:first-child {
    font-family: 'Leelawadee UI';
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.25rem;
  }

  h1 {
    font-family: 'Leelawadee UI';
    line-height: 3.75rem;

    color: ${(props) => props.theme.pink};

    mix-blend-mode: multiply;
    margin-bottom: 0.75rem;
  }

  p:last-child {
    text-align: center;
    color: #6d6d6d;
    font-size: 1.125rem;
    padding: 0 0.5rem;
  }
`
