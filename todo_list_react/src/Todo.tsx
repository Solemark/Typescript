export default function Todo({ todo, toggleTodo }: any) {
    const handleTodoClick = () => {
        toggleTodo(todo.id)
    }
    return (
        <div>
            <label>
                <input type='checkbox' checked={todo.complete} onChange={handleTodoClick} />
                {todo.name}
            </label>
        </div>
    )
}
