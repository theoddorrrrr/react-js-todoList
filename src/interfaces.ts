export interface ITodo {
    title: string
    id: number
    completed: boolean
}   

export interface ITodoListProps {
  todos: ITodo[];
  onToggle(id: number): void
  onRemove(id: number): void
}