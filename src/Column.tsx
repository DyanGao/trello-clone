import React from 'react';
import { ColumnContainer, ColumnTitle } from './styles'
import { AddNewItem } from './AddNewItem'

interface ColumnProps {
  text: string
}

type PropsWithChildren <P> = P & {
  children?: React.ReactNode
}


export const Column = ({
  text,
  children
}: PropsWithChildren <ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>
        {text}
      </ColumnTitle>
      {children}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  )
}
