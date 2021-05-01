import React, { useState } from 'react'
import {NewItemFormContainer, NewItemInput, NewItemButton} from './styles'

interface NewItemFormProps {
  onAdd(text:string): void
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("")

  return (
    <NewItemFormContainer>
      <NewItemInput
        value={text}
        onChange = {e=> setText(e.target.value)}
      />
      <NewItemButton onClick={()=> onAdd(text)}>
        create
      </NewItemButton>
    </NewItemFormContainer>
  )
}