import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  width: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: .3rem;
  cursor: pointer;

  span {
    font-size: .75rem;
    font-weight: 400;
    color: rgb(38, 38, 38);
  }
`

export const Avatar = styled.img`
  background: #e2e2e2;
  height: 3.75rem;
  width: 3.75rem;
  border-radius: 50%;
  border: 2px solid white;
`

export const AvatarBG = styled.div`
  height: 4.125rem;
  width: 4.125rem;
  background: #f09433; 
  background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
  background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: .2rem;
`