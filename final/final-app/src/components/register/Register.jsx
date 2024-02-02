import Modal from "../modal/Modal";
import Button from "../button/Button";
import { useState } from "react";

import "./Register.css";

function Register() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    confirmEmail: "",
  });
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleClearFields = () => {
    setUserInfo({ username: "", email: "" });
  };

  function onRegister(username, email, confirmEmail) {
    setUserInfo({ username, email, confirmEmail });
  }
  return (
    <div className="register__content">
      <div className="register__btn">
        <Button onClick={handleOpenModal}>Register</Button>
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onRegister={onRegister}
          clearFields={handleClearFields}
        />
      </div>

      <div className="form__details">
        <p>Hello {userInfo.username}</p>
        <p>Your Email is {userInfo.email}</p>
        <p>Confirm Email is {userInfo.confirmEmail}</p>
        <Button onClick={handleClearFields}>Clear</Button>
      </div>
    </div>
  );
}

export default Register;
