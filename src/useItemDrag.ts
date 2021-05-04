import { DragItem } from './DragItem';
import { useAppState } from './AppStateContext';
import { useDrag } from 'react-dnd'

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState()
  const [, drag] = useDrag({
    item,
    begin: () => 
      dispatch({
        type: 'SET_DRAGGED_ITEM',
        payload: item
      }),
    end: () => dispatch({type: 'SET_DRAGGED_ITEM', payload:undefined})
  })
  return { drag}
 }


