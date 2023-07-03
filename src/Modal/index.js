import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>, 
        document.getElementById("modal")
    );
}

// const modalRoot = document.getElementById('modal');

// const Modal = ({ children }) => {
//   const modalElement = document.createElement('div');

//   // appends the modal to portal once modal's children are mounted and 
//   // removes it once we don't need it in the DOM anymore:
//   React.useEffect(() => {
//     modalRoot.appendChild(modalElement);
//     return () => {
//       modalRoot.removeChild(modalElement);
//     };
//   }, [modalElement]);

//   return ReactDOM.createPortal(
//     <div className="Modal">
//         {children}
//     </div>, modalRoot);
// };

export { Modal };