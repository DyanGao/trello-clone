import React, { useState } from 'react'
import { NewItemFormContainer, NewItemInput, NewItemButton } from './styles'
import { useFocus } from './utils/useFocus'

interface NewItemFormProps {
  onAdd(text: string): void
} 

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("")
  const inputRef = useFocus()

  const handleAddText = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault()
      onAdd(text)  
    }
  }

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyPress={handleAddText}
      />
      <NewItemButton onClick={()=> onAdd(text)}>
        create
      </NewItemButton>
    </NewItemFormContainer>
  )
}



