import "./Modal.css";
import Button from "../button/Button";
import { useId, useState } from "react";

function Modal({ isOpen, onClose, onRegister }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isConfirmEmailValid, setIsConfirmEmailValid] = useState(true);

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const id = useId();

  function checkIfUsernameIsValid(toCheck) {
    return toCheck.trim().length > 3;
  }

  function checkIfEmailIsValid(toCheck) {
    return toCheck.includes("@");
  }

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <dialog open className="modal">
            <form
              className="register"
              onSubmit={(e) => {
                e.preventDefault();
                const isUsernameValid = checkIfUsernameIsValid(username);
                const isEmailValid = checkIfEmailIsValid(email);
                const isConfirmEmailValid = email === confirmEmail;

                setIsUsernameValid(isUsernameValid);
                setIsEmailValid(isEmailValid);
                setIsConfirmEmailValid(isConfirmEmailValid);

                setIsFormSubmitted(true);
                if (isUsernameValid && isEmailValid && isConfirmEmailValid) {
                  onRegister(username, email, confirmEmail);
                  onClose();
                }
              }}
            >
              <div className="modal__content">
                <h1>Register</h1>
                <div className="form__control">
                  <label htmlFor={`${id}-username`}>
                    Username<span className="required">*</span>
                  </label>

                  <input
                    id={`${id}-username`}
                    value={username}
                    onInput={(e) => {
                      setUsername(e.target.value);
                      setIsUsernameValid(
                        checkIfUsernameIsValid(e.target.value)
                      );
                    }}
                  />
                  {isFormSubmitted && !isUsernameValid && (
                    <p className="error__message">
                      Username must be more than 3 characters
                    </p>
                  )}
                </div>
                <div className="form__control">
                  <label htmlFor={`${id}-email`}>
                    Email<span className="required">*</span>
                  </label>
                  <input
                    id={`${id}-email`}
                    value={email}
                    onInput={(e) => {
                      setEmail(e.target.value);
                      setIsEmailValid(checkIfEmailIsValid(e.target.value));
                    }}
                  />
                  {isFormSubmitted && !isEmailValid && (
                    <p className="error__message">Email must contain "@"</p>
                  )}
                </div>
                <div className="form__control">
                  <label htmlFor={`${id}-confirm-email`}>
                    Confirm Email<span className="required">*</span>
                  </label>
                  <input
                    id={`${id}-confirm-email`}
                    value={confirmEmail}
                    onInput={(e) => setConfirmEmail(e.target.value)}
                  />
                  {isFormSubmitted && !isConfirmEmailValid && (
                    <p className="error__message">Emails do not match</p>
                  )}
                </div>
              </div>
              <div className="modal__buttons">
                <Button onClick={onClose}>Close Modal</Button>
                <Button className="register__submit" type="submit">
                  Submit
                </Button>
              </div>
              <p className="form__note">
                <span className="required">*</span>{" "}
                <i>Indiactes required fields</i>
              </p>
            </form>
          </dialog>
        </div>
      )}
    </>
  );
}

export default Modal;
