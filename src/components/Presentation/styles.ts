import styled from 'styled-components'

export const LinkContacts = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  padding: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 50%;
  background-color: #fff;
  transition: all ease 0.3s;

  svg {
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
