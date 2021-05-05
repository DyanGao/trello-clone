import React, { useRef } from 'react';
import { ColumnContainer, ColumnTitle } from './styles'
import { AddNewItem } from './AddNewItem'
import { useAppState } from './AppStateContext'
import { Card } from './Card'
import { useItemDrag } from './useItemDrag';
import { useDrop } from 'react-dnd'
import { DragItem } from './DragItem';
import { isHidden } from './utils/isHidden';
interface ColumnProps {
  text: string
  index: number
  id: string
  isPreview?: boolean
}

// type PropsWithChildren <P> = P & {
//   children?: React.ReactNode
// }


export const Column = ({
  text,
  index,
  id,
  isPreview
}: ColumnProps) => {
  const { state, dispatch } = useAppState()
  const ref = useRef<HTMLDivElement>(null)
  const { drag } = useItemDrag({ type: 'COLUMN', id, index, text})

  const [, drop] = useDrop({
    accept: 'COLUMN',
    hover(item: DragItem) {
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return 
      }
      dispatch({ type: 'MOVE_LIST', payload: { dragIndex, hoverIndex } })
      item.index = hoverIndex
    }
  })

  drag(drop(ref))


  return (
    <ColumnContainer
      isPreview={isPreview}
      ref={ref}
      isHidden={isHidden(isPreview, state.draggedItem, "COLUMN", id)}
    >
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
