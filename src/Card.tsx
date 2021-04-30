import React from 'react'
import { CardContainer } from './styles'

interface CardProps {
  text?: string | undefined
}

export const Card = ({text}: CardProps) => {
  return (
    <CardContainer>
      {text}
    </CardContainer>
  )
}