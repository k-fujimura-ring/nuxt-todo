export interface newTodoModels {
  text:     string,
  category: string
}

export interface todo {
  text:     string,
  disabled: boolean,
  color:    string,
  category: string,
}

export interface Props {
  todoList: object[]
}