import React from 'react';
import { ColumnContainer, ColumnTitle } from './styles'

interface ColumnProps {
  text?: string | undefined
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
    </ColumnContainer>
  )
}
