import React, { createContext, useContext, useReducer } from 'react'
import { nanoid } from 'nanoid'
import {
  overrideItemAtIndex,
  findItemIndexById,
  moveItem
} from './utils/arrayUtils'
import { DragItem } from './DragItem'

interface Task {
  id: string,
  text: string
}

interface List {
  id: string,
  text: string,
  tasks: Task[]
}

export interface AppState {
  lists: List[];
  draggedItem?: DragItem | undefined;
}

const appData: AppState = {
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

interface AppStateContextProps {
  state: AppState,
  dispatch: React.Dispatch<Action>
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

export const AppStateProvider = (
  { children }: React.PropsWithChildren<{}>
) => {
  const [state, dispatch] = useReducer(appStateReducer, appData)
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  return useContext(AppStateContext)
}

type Action =
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
      dragIndex: number
      hoverIndex: number
    }
  }
  | {
    type: "SET_DRAGGED_ITEM"
    payload: DragItem | undefined
  }

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_LIST": {
      return {
        ...state,
        lists: [
          ...state.lists,
          {id: nanoid(), text: action.payload, tasks:[]}
        ]
      }
    }
    case "ADD_TASK":
      const targetListIndex = findItemIndexById(
        state.lists,
        action.payload.listId
      )
      // state.lists[targetListIndex].tasks.push({
      //   id: nanoid(),
      //   text: action.payload.text
      // })
      const targetList = state.lists[targetListIndex]
      const updatedTargetList = {
        ...targetList,
        tasks: [
          ...targetList.tasks,
          {id: nanoid(), text: action.payload.text}
        ]
      }
      return {
        ...state,
        lists: overrideItemAtIndex(
          state.lists,
          updatedTargetList,
          targetListIndex
        )
      }
    case "MOVE_LIST": {
      const { dragIndex, hoverIndex } = action.payload
      return {
        ...state,
        lists: moveItem(state.lists, dragIndex, hoverIndex)
      }
    }
    case "SET_DRAGGED_ITEM": {
      return { ...state, draggedItem: action.payload}
    }
    default: {
      return state
    }
  }
  
  }