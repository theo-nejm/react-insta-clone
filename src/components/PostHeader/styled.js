import styled from "styled-components";

export const Container = styled.div`
  height: 4rem;
  width: 100%;
  border-bottom: 1px solid rgb(219, 219, 219);
  border-radius: .2rem .2rem 0 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  .left {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      border-radius: 50%;
      height: 35px;
      width: 35px;
    }

    span {
      font-weight: bold;
      font-size: .9rem;
      color: rgb(32, 32, 32);
      margin-left: .75rem;
    }
  }

  span:hover {
    text-decoration: underline;
  }
`