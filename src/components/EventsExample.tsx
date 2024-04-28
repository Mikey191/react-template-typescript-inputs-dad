import { eventNames } from "process";
import React, { FC, useRef, useState } from "react";

const EventsExample: FC = () => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Управляемый инпут: ", value);
    console.log("Неуправляемый инпут: ", inputRef.current?.value);
  };
  const dragHandler = (event: React.DragEvent<HTMLDivElement>) => {
    console.log("DRAG");
  };
  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDrag(false);
    console.log("DROP");
  };
  const leaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDrag(false);
  };
  const dragWithPreventHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDrag(true);
  };
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="">
      <div className="inputs">
        <input
          type="text"
          value={value}
          onChange={changeHandler}
          placeholder="Управляемый"
          style={{ minWidth: "20vw" }}
        />
        <input
          ref={inputRef}
          type="text"
          placeholder="Неуправляемый"
          style={{ minWidth: "20vw" }}
        />
      </div>
      <button onClick={clickHandler}>КНОПКА</button>
      <div className="cards">
        <div
          className="card"
          style={{ width: "20vw", height: "20vw", background: "#171717" }}
          draggable
          onDrag={dragHandler}
        >
          &#61;&gt;
        </div>
        <div
          className="card"
          style={{
            width: "20vw",
            height: "20vw",
            background: isDrag ? "#0077be" : "#171717",
            // marginTop: 15,
          }}
          onDrop={dropHandler}
          onDragLeave={leaveHandler}
          onDragOver={dragWithPreventHandler}
        ></div>
      </div>
    </div>
  );
};

export default EventsExample;
