import React from "react";

const TryCountButton = () => {
  const [count, setCount] = React.useState<number>(0);

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p className="flex items-center justify-center">Count: {count}</p>
      <button onClick={updateCount}>Click me</button>
    </>
  );
};

export default TryCountButton;
