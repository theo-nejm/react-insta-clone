import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0% {
    transform: scale(1);
  }

  30% {
    transform: scale(1.15);
  }

  100% {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  height: max-content;
  width: 100%;
  border-radius: .2rem .2rem 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  color: rgb(32, 32, 32);
  font-size: .9rem;

  img {
    width: 100%;
  }

  .actions {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .75rem;
    
    svg {
      cursor: pointer;
      transition: .25s ease;
    }

    svg:hover {
      fill: gray;
    }

    .left {
      display: flex;
      gap: .75rem;

      button {
        background: none;
        cursor: pointer;
        border: none;
      }

      svg.unlike-btn {
        fill: #ed4956;
        animation: ${animation} .5s ease;
      }
    }
  }

  p.liked-by,
  p.owner-comment,
  p.see-all,
  p.user-comment {
    width: 90vw;
    max-width: 40rem;
    text-align: left;
    padding: 0 1rem .75rem;
  }

  p.see-all {
    color: #8e8e8e;
    margin-top: -.25rem;
    cursor: pointer;
  }

  p.user-comment {
    margin-top: -.35rem;
  }
`