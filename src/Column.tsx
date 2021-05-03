import React from 'react';
import { ColumnContainer, ColumnTitle } from './styles'
import { AddNewItem } from './AddNewItem'
import { useAppState } from './AppStateContext'
import { Card } from './Card'
interface ColumnProps {
  text: string,
  index: number,
  id: string
}

// type PropsWithChildren <P> = P & {
//   children?: React.ReactNode
// }


export const Column = ({
  text,
  index,
  id
}: ColumnProps) => {
  const { state, dispatch } = useAppState()
  return (
    <ColumnContainer>
      <ColumnTitle>
        {text}
      </ColumnTitle>
      {state.lists[index].tasks.map((task, idx) => (
        <Card text={task.text} key= {task.id} index={idx} />
     ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={text => dispatch({type: "ADD_TASK", payload: {text, listId: id}})}
        dark
      />
    </ColumnContainer>
  )
}
