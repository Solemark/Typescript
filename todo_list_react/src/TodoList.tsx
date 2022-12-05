import Todo from './Todo'

export default function TodoList({ todos, toggleTodo }: any) {
    return todos.map((todo: any) => {
        return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
    })
}
