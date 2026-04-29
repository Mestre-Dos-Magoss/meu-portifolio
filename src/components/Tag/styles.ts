import styled from 'styled-components'

export const TagContainer = styled.div`
  display: block;
  background-color: ${(props) => props.color};
  border-radius: 16px;
  text-align: center;
  height: 24px;

  span {
    display: block;
    margin: 0 auto;
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    margin-left: 4px;
  }
`
