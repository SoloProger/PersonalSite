import React, { useEffect, useState } from "react";
import "../styles/ToDoPage.css";
import Button from "../components/UI/button/Button";
import Modal from "../components/UI/modal/Modal";
import Form from "../components/ToDoPage/Form";
import Todolist from "../components/ToDoPage/TodoList";

const Todopage = () => {
  const [modal, setModal] = useState(false);

  const arr = [
    { title: "Hello", body: "world" },
    { title: "Hello2", body: "world2" },
    { title: "Hello3", body: "world3" },
  ];

  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    setModal(false);
  };

  return (
    <div className="contact__wrapper">
      <div className="todo__header">
        <h2>Список задач</h2>
        <Button onClick={() => setModal(true)}>Добавить задачу</Button>
        <Modal visible={modal} setVisible={setModal}>
          <Form create={createTodo} />
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
