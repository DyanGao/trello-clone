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
  margin-bottom: 0.5rem´;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`