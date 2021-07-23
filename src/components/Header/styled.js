import styled from "styled-components"

const Container = styled.div`
  background: #FFF;
  height: 3.375rem;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 min(calc(1.25rem + 13.75vw), 5vw);

  border-bottom: 1px solid rgb(219, 219, 219);
  position: fixed;
  top: 0;

  img {
    margin-top: .5rem;
    height: 1.8rem;
    width: 6.45rem;
    cursor: pointer;
  }

  input {
    height: 1.75rem;
    width: 13.45rem;

    border: 1px solid rgb(219, 219, 219);
    outline: none;

    padding: .5rem;

    color: rgb(142, 142, 142);
    font-stretch: 100%;
    font-size: .875rem;
    font-weight: 300;
    line-height: 1.125rem;
    letter-spacing: .5px;
    
    border-radius: .2rem;
    margin-left: 4rem;

    background: #FAFAFA;
  }

  .icons {
    display: flex;
    gap: 1.35rem;

    svg {
      cursor: pointer;
    }
  }

  .profile-image {
    height: 22px;
    width: 22px;
    background: lightgray;
    border-radius: 50%;
    cursor: pointer;
  }

  @media screen and (max-width: 650px) {
    input {
      display: none;
    }
  }
`

export default Container