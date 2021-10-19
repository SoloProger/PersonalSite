import React, { useEffect, useState } from "react";
import "../styles/ToDoPage.css";
import Button from "../components/UI/button/Button";
import Modal from "../components/UI/modal/Modal";
import Form from "../components/ToDoPage/Form";
import Todolist from "../components/ToDoPage/TodoList";
import axios from "axios";

const Todopage = () => {
  const [modal, setModal] = useState(false);

  const arr = [
    { title: "Hello", body: "world" },
    { title: "Hello2", body: "world2" },
    { title: "Hello3", body: "world3" },
  ];

  const [todos, setTodos] = useState([]);

  const sendTodo = async (newTodo) => {
    await axios
      .post("http://localhost:5000/data", newTodo, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(addToLocalStorage(newTodo));
    setModal(false);
  };

  const getTodo = async () => {
    const data = await axios.get("http://localhost:5000/todos");
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

  const addToLocalStorage = (newTodo) => {
    const all = getToDoFromLocalStorage();
    all.push(newTodo);
    localStorage.setItem("todo", JSON.stringify(all));
  };

  const getToDoFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("todo") || "[]");
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
        <Todolist todos={todos} />
      </div>
    </div>
  );
};

export default Todopage;
