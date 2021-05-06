import React, { FC, createContext, useContext } from 'react'
import { DragItem } from '../DragItem'
import {
  appStateReducer,
  AppState, 
  List,
  Task
} from './appStateReducer'
import { useImmerReducer } from 'use-immer'

const appData: AppState = {
  draggedItem: null,
  lists: [
    {
      id: "0",
      text: "TO DO",
      tasks: [{id: "a0", text: "Generate app scaffold"}]
    },
    {
      id: "1",
      text: "IN PROGRESS",
      tasks: [{id: "a1", text: "Learn Typescript"}]
    },
    {
      id: "2",
      text: "DONE",
      tasks: [{id: "a2", text: "Begin to use static typing"}]
    }
  ]
}


type AppStateContextProps = {
  draggedItem: DragItem | null
  lists: List[];
  getTasksByListId(id: string): Task[]
  dispatch: React.Dispatch<Action>
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

export const AppStateProvider:FC = (
  { children }
) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData)
  const { draggedItem, lists } = state
  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || []
  }
  
  return (
    <AppStateContext.Provider value={{ draggedItem, lists, getTasksByListId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  return useContext(AppStateContext)
}

export type Action =
  | {
    type: "ADD_LIST"
    payload: string
  }
  | {
    type: "ADD_TASK"
    payload: { text: string; listId: string}
  }
  | {
    type: "MOVE_LIST"
    payload: {
      draggedId: string
      hoverId: string
    }
  }
  | {
    type: "SET_DRAGGED_ITEM"
    payload: DragItem | null
  }
  | {
    type: "MOVE_TASK"
    payload: {
      draggedItemId: string
      hoveredItemId: string | null
      sourceColumnId: string
      targetColumnId: string
    }
  }

