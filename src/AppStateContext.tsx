import React, { createContext, useContext } from 'react'

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
  lists: List[]
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
  state: AppState
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <AppStateContext.Provider value={{ state: appData }}>
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  return useContext(AppStateContext)
}