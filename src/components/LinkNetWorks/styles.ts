import styled from 'styled-components'

type Props = {
  color: 'principal' | 'secundaria';
}

export const LinkContacts = styled.a<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  padding: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 50%;
  background-color: ${props => props.color === 'principal' ? '#fff' : '#f1f5f9'};
  transition: all ease 0.3s;

  img{
    width: 20px;
    height: 20px;
  }

  &:hover {
    width: 50px;
    height: 50px;
    background-color: #e2e8f0;
    transition: all ease 0.3s;
  }
`
