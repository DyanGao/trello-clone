import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #1da1f2;
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 30px;
  width: 100%

`

export const ColumnContainer = styled.div`
  background-color: #d4d8db;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow:0;
`

export const ColumnTitle = styled.div`
  padding: 6px 6px 12px;
  font-weight: bold;
`

export const CardContainer = styled.div`
  background-color: #ffff;
  cursor: pointer;
  margin-bottem: 0.5rem´;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`
interface AddItemButtonProps {
  dark?: boolean
}

export const AddItemButton = styled.button<AddItemButtonProps> `
  background-color: #ffffff3d;
  border-radius: 3px;
  border:none;
  color: ${props => (props.dark ? "#000" : "#ffff")};
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  transition: backgound 85ms ease-in;
  width:100%;
  &:hover {
    background-color: #ffffff52;
  }

`

export const NewItemFormContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`

export const NewItemButton = styled.button`
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;

`

export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin: 0.5rem auto;
  padding: 0.5rem 1rem;
  width: 100%;
`
