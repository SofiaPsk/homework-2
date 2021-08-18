import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const tags = ["tag1", "tag2", "tag3"];

  const formCount = () => {
    return count === 0 ? "ноль" : count;
  };
  const getBageClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  const renderTags = () => {
    if (tags.length === 0) return "Тегов не найдено";
    return tags.map((tag) => <li key={tag}>{tag}</li>);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  /*const handleDecrement = () => {
    if (count === 0) return "ноль";
    return setCount(count - 1);
  };*/

  const handleDecrement = () => {
    if (count === 0) return;
    return setCount(count - 1);
  };

  return (
    <>
      {renderTags()}
      <span className={getBageClasses()}>{formCount()}</span>
      <button onClick={handleIncrement} className="btn btn-secondary byn-sm">
        Increment
      </button>
      <button onClick={handleDecrement} className="btn btn-secondary byn-sm">
        Decrement
      </button>
    </>
  );
};

export default Counter;
