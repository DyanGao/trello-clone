import React from 'react';
import { Column } from './Column'
//import { Card } from './Card'
import { AppContainer } from './styles'
import { AddNewItem } from './AddNewItem'
import { useAppState } from './AppStateContext'
import CustomDragLayer from './CustomDragLayer'

const App = () => {
  const { state, dispatch } = useAppState()

  return (
    <AppContainer>
      <CustomDragLayer />
      {state.lists.map((list, idx) => (
        <Column id={list.id} text={list.text} key={list.id} index={idx}/>
      ))}
     
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={text => dispatch({type: "ADD_LIST", payload: text.toUpperCase()})}
      />
    </AppContainer>
  );
}

export default App;
