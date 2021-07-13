import React, { useState, useEffect, useRef } from "react";

export default function FlashCard({ flashcard }) {
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState("initial");
  const [width, setWidth] = useState("initial");

  const frontEl = useRef();
  const backEl = useRef();

  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height;
    const backHeight = backEl.current.getBoundingClientRect().height;
    setHeight(Math.max(frontHeight, backHeight, 100));
  }
  useEffect(setMaxHeight, [
    flashcard.question,
    flashcard.answer,
    flashcard.options,
  ]);
  useEffect(() => {
    window.addEventListener("resize", setMaxHeight);
    return () => window.removeEventListener("resize", setMaxHeight);
  }, []);

  function setMaxWidth() {
    const frontWidth = frontEl.current.getBoundingClientRect().Width;
    const backWidth = backEl.current.getBoundingClientRect().Width;
    setWidth(Math.max(frontWidth, backWidth, 100));
  }
  useEffect(setMaxWidth, [
    flashcard.question,
    flashcard.answer,
    flashcard.options,
  ]);
  useEffect(() => {
    window.addEventListener("resize", setMaxWidth);
    return () => window.removeEventListener("resize", setMaxWidth);
  }, []);

  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      style={{ height, width }}
      onClick={() => setFlip(!flip)}
    >
      <div className="front" ref={frontEl}>
        {flashcard.question}
        <div className="flashcard-options">
          {flashcard.options.map((option) => {
            return <div className="flashcard-option">{option}</div>;
          })}
        </div>
      </div>
      <div className="back" ref={backEl}>
        {flashcard.answer}
      </div>
      {/* {flip ? flashcard.answer : flashcard.question} */}
    </div>
  );
}
