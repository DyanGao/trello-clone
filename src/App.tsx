import React from 'react';
import { Column } from './Column'
//import { Card } from './Card'
import { AppContainer } from './styles'
import { AddNewItem } from './AddNewItem'
import { useAppState } from './AppStateContext'

const App = () => {
  const { state } = useAppState()
  return (
    <AppContainer>
      {state.lists.map((list, idx) => (
        <Column text={list.text} key={list.id} index={idx}/>
      ))}
     
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={console.log}
      />
    </AppContainer>
  );
}

export default App;
