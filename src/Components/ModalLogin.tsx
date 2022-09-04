import { useState } from "react";

const ModalLogin = () => {
  const [visible, setVible] = useState(false);
  const handleChange = (event: event) => {
    console.log("value is :", event.target.value);
  };
  const handleClick = () => {};
  return (
    <div className="modal-background">
      {visible && (
        <div className="modal-content">
          <input id="username" type="text" placeholder="نام کاربری" />
          <input id="pass" type="password" placeholder="رمز عبور" />
          <button id="btnLogin" onClick={handleClick}>
            ورود
          </button>
        </div>
      )}
    </div>
  );
};

export default ModalLogin;
