import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoAction,
  allTodoAction,
  removeTodoAction
} from "../store/actions/todoAction";
import Button from "../components/UI/button/Button";
import Modal from "../components/UI/modal/Modal";
import Form from "../components/Forms/Form";
import TodoList from "../components/Lists/TodoList";
import TodoForm from "../components/Forms/TodoForm";
import TodoCard from "../components/Cards/TodoCard";
import { fetchTodos } from "../store/api/todo";

const TodoPage = () => {
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const todos = useSelector(state => state.todo.todo);

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

  // useEffect(() => {
  //   dispatch(allTodoAction(todos))
  // }, [])

  // const createTodo = (newTodo) => {
  //   dispatch(addTodoAction(newTodo));
  //   setModal(false);
  // };

  // const removeTodo = (todo) => {
  // await axios
  //   .delete(`http://localhost:5000/todo/${todo.id}/`)
  //   .then(setTodos(todos.filter((td) => td._id !== todo._id)));
  // dispatch(removeTodoAction(todo))
  // };

  return (
    <section>
      <div className="todo-wrapper">
        <div className="todo-header">
          <h2>Список задач</h2>
          <Button onClick={() => setModal(true)}>Добавить задачу</Button>
          <Modal visible={modal} setVisible={setModal}>
            {/* <TodoForm create={createTodo} /> */}
          </Modal>
        </div>
        <hr />
        <div>
          {/* remove={removeTodo} */}
          <div className="todo-card">
            <div className="todo-card-title">
              <h2>Заголовок</h2>
              <h2>Описание</h2>
              <h2>Статус</h2>
              <h2>Действие</h2>
            </div>
            {todos.map((todo) => (
              <TodoCard
                todo={todo}
                title={todo.title}
                description={todo.description}
                completed={todo.completed}
                key={todo.id}
                // remove={remove}
              />
            ))}
          </div>
          {/* <TodoList todos={todos}  /> */}
        </div>
      </div>
      <Form />
    </section>
  );
};

export default TodoPage;
