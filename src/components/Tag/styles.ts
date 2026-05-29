import styled from 'styled-components'

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;
  height: 16px;

  span {
    display: inline-block;
    border-radius: 16px;
    padding: 0 16px;
    font-size: 12px;
    font-weight: 600;
    background-color: ${(props) => props.color};
    color: #fff;
    margin-left: 4px;
    white-space: nowrap;
  }
`
