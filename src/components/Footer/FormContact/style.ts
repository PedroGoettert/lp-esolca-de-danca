import styled from 'styled-components'
import backgroundImage from '../../../assets/backgrounds/smooth-white-stucco-wall.jpg'

export const ContainerForm = styled.section`
  margin-top: -13rem;
  max-width: 1366px;
`

export const ContetnForm = styled.div`
  width: 85vw;
  max-width: 1366px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 4.5rem;
  padding: 5rem 0;

  background: url(${backgroundImage}) lightgray 50% / cover no-repeat;
  border-radius: 1rem;

  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 8.125rem;
    height: 10.75rem;
    background-color: ${(props) => props.theme.pink};

    border-radius: 50%;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  &::before {
    content: '';
    position: absolute;
    width: 8.125rem;
    height: 10.75rem;
    background-color: ${(props) => props.theme.pink};
    border-radius: 50%;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
  }
`

export const Title = styled.div`
  width: 60%;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  h2 {
    color: ${(props) => props.theme.black};
  }

  h3 {
    color: ${(props) => props.theme.pink};
    font-family: 'Leelawadee UI';
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.25rem;
  }

  p {
    width: 90%;
    margin-top: 1rem;
    color: #6d6d6d;
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;

  label {
    color: ${(props) => props.theme.pink};
    font-family: 'Leelawadee UI';
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.25rem;
    margin-bottom: 0.75rem;
  }

  input {
    width: 52.75rem;
    height: 3.5rem;

    padding-left: 1rem;

    font-size: 1.2rem;

    background-color: ${(props) => props.theme.pink};
    box-shadow: 15px 12px 21.4px 0px rgba(0, 0, 0, 0.25) inset;

    border: none;
    border-radius: 0.5rem;

    color: ${(props) => props.theme.white};

    &:focus {
      outline-color: ${(props) => props.theme.white};
    }
  }

  button {
    width: 14.9375rem;
    padding: 0.625rem;

    margin-top: 3rem;

    font-size: 1rem;
    font-weight: 700;
    line-height: 1.625rem;
    color: ${(props) => props.theme.white};

    background-color: ${(props) => props.theme.pink};
    border-radius: 0.25rem;

    margin-left: 50%;
    transform: translateX(-50%);
  }
`
