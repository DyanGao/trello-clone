import React from 'react'
import { CardContainer } from './styles'

interface CardProps {
  text?: string | undefined,
  index: number
}

export const Card = ({text}: CardProps) => {
  return (
    <CardContainer>
      {text}
    </CardContainer>
  )
}