import React from "react";
import "./Modal.css";

export interface ModalProps {
  title: string;
  children: any;
  show: boolean;
}

const Button = (props: ModalProps) => {
  return (
    <>
      {props.show ? (
        <div id="Modal" className="modal">
          <div className="modal-content">
            <span className="close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height="32"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M368 368L144 144M368 144L144 368"
                />
              </svg>
            </span>
            <p>{props.title}</p>
            <div>{props.children}</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Button;
