import React from 'react'
import { useDragLayer, XYCoord } from 'react-dnd'
import { Column } from './Column'
import { CustomDragLayerContainer } from './styles'

function getItemStyles(currentOffset: XYCoord | null): React.CSSProperties {
  if (!currentOffset) {
    return {
      display: "none"
    }
  }
  const { x, y } = currentOffset
  const transform = `translate(${x}px, ${y}px)`
  return {
    transform,
    WebkitTransform: transform
  }
}

const CustomDragLayer: React.FC = () => {
  const { isDragging, item, currenOffset } = useDragLayer(monitor => ({
    item: monitor.getItem(),
    currenOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  }))

  return isDragging ? (
    <CustomDragLayerContainer>
      <div style={getItemStyles(currenOffset)}>
      <Column
        id={item.id}
        text={item.text}
        index={item.index}
        />
        </div>
    </CustomDragLayerContainer>
  ) : null
}

export default CustomDragLayer