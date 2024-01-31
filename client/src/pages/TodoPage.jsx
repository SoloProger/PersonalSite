import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction, allTodoAction, removeTodoAction } from "../store/actions/todoAction";
import Button from "../components/UI/button/Button.js";
import Modal from "../components/UI/modal/Modal.js";
import Form from "../components/Forms/Form.js";
import TodoList from "../components/Lists/TodoList";
import TodoForm from "../components/Forms/TodoForm";

const TodoPage = () => {
  const [modal, setModal] = useState(false);

  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  // const sendTodo = async (newTodo) => {
  //   await axios
  //     .post("http://localhost:5000/api/todo/create", newTodo, {
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     })
  //     .then(createTodo(newTodo));
  //   setModal(false);
  // };

  // const getTodo = async () => {
  //   const data = await axios.get("http://localhost:5000/todo/all");
  //   const todosData = data.data;
  //   return setTodos([...todos, ...todosData]);
  // };

  useEffect(() => {
    dispatch(allTodoAction(todos))
  }, [])

  const createTodo = (newTodo) => {
    dispatch(addTodoAction(newTodo));
    setModal(false);
  };

  const removeTodo = (todo) => {
    // await axios
    //   .delete(`http://localhost:5000/todo/${todo.id}/`)
    //   .then(setTodos(todos.filter((td) => td._id !== todo._id)));
    dispatch(removeTodoAction(todo))
  };

  return (
    <section>
      <div className="todo-wrapper">
        <div className="todo-header">
          <h2>Список задач</h2>
          <Button onClick={() => setModal(true)}>Добавить задачу</Button>
          <Modal visible={modal} setVisible={setModal}>
            <TodoForm create={createTodo} />
          </Modal>
        </div>
        <hr />
        <div>
          <TodoList todos={todos} remove={removeTodo}/>
        </div>
      </div>
      <Form />
    </section>
  );
};

export default TodoPage;
