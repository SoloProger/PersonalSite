import React, { useEffect, useState } from "react";
import "../styles/ToDoPage.css";
import Button from "../components/UI/button/Button";
import Modal from "../components/UI/modal/Modal";
import Form from "../components/ToDoPage/Form";
import Todolist from "../components/ToDoPage/TodoList";
import Updateform from "../components/ToDoPage/UpdateForm";
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
      .post("http://localhost:5000/todo/create", newTodo, {
        headers: {
          "Content-Type": "application/json",
        },
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
      .delete("http://localhost:5000/todo/delete/" + todo._id)
      .then(setTodos(todos.filter((td) => td._id !== todo._id)));
  };

  const getUpdateTodo = (todo) => {
    // await axios.put("http://localhost:5000/todo/update", todo);
    
  };

  return (
    <div className="contact__wrapper">
      <div className="todo__header">
        <h2>Список задач</h2>
        <Button onClick={() => setModal(true)}>Добавить задачу</Button>
        <Modal visible={modal} setVisible={setModal}>
          <Form create={sendTodo} />
        </Modal>
        {/* <Modal visible={modal} setVisible={setModal}>
          <Updateform update={updateTodo} />
        </Modal> */}
      </div>
      <hr />
      <div>
        <Todolist todos={todos} remove={removeTodo} update={getUpdateTodo}/>
      </div>
    </div>
  );
};

export default Todopage;
