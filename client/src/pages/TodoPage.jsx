import React, { useEffect, useState } from "react";
import Button from "../components/UI/button/Button";
import Modal from "../components/UI/modal/Modal";
import Form from "../components/Forms/Form";
import TodoList from "../components/Lists/TodoList";
import TodoForm from "../components/Forms/TodoForm";
import axios from "axios";

const TodoPage = () => {
  const [modal, setModal] = useState(false);

  const [todos, setTodos] = useState([
    { id: 1, title: "hello", description: "hello" }
  ]);

  const sendTodo = async (newTodo) => {
    await axios
      .post("http://localhost:5000/api/todo/create", newTodo, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(createTodo(newTodo));
    setModal(false);
  };

  const getTodo = async () => {
    const data = await axios.get("http://localhost:5000/todo/all");
    const todosData = data.data;
    return setTodos([...todos, ...todosData]);
  };

  useEffect(() => {
    getTodo();
  }, []);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    setModal(false);
  };

  const removeTodo = async (todo) => {
    await axios
      .delete(`http://localhost:5000/todo/${todo.id}/`)
      .then(setTodos(todos.filter((td) => td._id !== todo._id)));
  };

  return (
    <section>
      <div className="todo-wrapper">
        <div className="todo-header">
          <h2>Список задач</h2>
          <Button onClick={() => setModal(true)}>Добавить задачу</Button>
          <Modal visible={modal} setVisible={setModal}>
            <TodoForm create={sendTodo} />
          </Modal>
        </div>
        <hr />
        <div>
          <TodoList todos={todos} remove={removeTodo} />
        </div>
      </div>
      <Form />
    </section>
  );
};

export default TodoPage;
