import React, { useEffect, useState } from "react";
import "../styles/ToDoPage.css";
import Button from "../components/UI/button/Button";
import Modal from "../components/UI/modal/Modal";
import Form from "../components/ToDoPage/Form";
import Todolist from "../components/ToDoPage/TodoList";
import axios from "axios";

const Todopage = () => {
  const [modal, setModal] = useState(false);

  const [todos, setTodos] = useState([]);

  const sendTodo = async (newTodo) => {
    await axios
      .post("http://127.0.0.1:8000/api/todo/", newTodo, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(createTodo(newTodo));
    setModal(false);
  };

  const getTodo = async () => {
    const data = await axios.get("http://127.0.0.1:8000/api/todo/");
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
      .delete(`http://127.0.0.1:8000/api/todo/${todo.id}/`)
      .then(setTodos(todos.filter((td) => td.id !== todo.id)));
  };

  return (
    <div className="contact__wrapper">
      <div className="todo__header">
        <h2>Список задач</h2>
        <Button onClick={() => setModal(true)}>Добавить задачу</Button>
        <Modal visible={modal} setVisible={setModal}>
          <Form create={sendTodo} />
        </Modal>
      </div>
      <hr />
      <div>
        <Todolist todos={todos} remove={removeTodo}/>
      </div>
    </div>
  );
};

export default Todopage;
