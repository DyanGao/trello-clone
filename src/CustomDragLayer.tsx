
import { useDragLayer } from 'react-dnd'
import { Column } from './Column'
import { Card } from './Card'
import { CustomDragLayerContainer, DragPreviewWrapper } from './styles'
import { useAppState } from './state/AppStateContext'


export const CustomDragLayer = () => {
  const { draggedItem } = useAppState()
  
  const { currenOffset } = useDragLayer(monitor => ({
    currenOffset: monitor.getSourceClientOffset()
  }))

  return draggedItem && currenOffset ? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currenOffset}>
        {draggedItem.type === 'COLUMN' ? (
          <Column
            id={draggedItem.id}
            text={draggedItem.text}
            isPreview
          />
        ) : (
          <Card
            columnId={draggedItem.columnId}
            isPreview
            id={draggedItem.id}
            text={draggedItem.text}
          />
        )
    }
    </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null
}     




