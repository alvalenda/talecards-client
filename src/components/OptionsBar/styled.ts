import styled from 'styled-components'

export const OptionsBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
`

export const OptionButton = styled.button`
  background-color: #fff;
  color: #333;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    background-color: #ff5733;
    color: #fff;
  }
`
