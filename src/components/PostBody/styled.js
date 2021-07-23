import styled from "styled-components";

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
    
    .left {
      display: flex;
      gap: .75rem;
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