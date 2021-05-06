
import { Column } from './Column'
import { AppContainer } from './styles'
import { AddNewItem } from './AddNewItem'
import { useAppState } from './state/AppStateContext'
import { CustomDragLayer } from './CustomDragLayer'
import { addList } from './state/actions'

const App = () => {
  const { dispatch, lists } = useAppState()

  return (
    <AppContainer>
      <CustomDragLayer />
      {lists.map((list) => (
        <Column id={list.id} text={list.text} key={list.id} />
      ))}
     
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={text => dispatch(addList(text))}
      />
    </AppContainer>
  );
}

export default App;
