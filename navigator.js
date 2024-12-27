import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Basit Sayaç</h1>
      <p>Şu anki sayı: {count}</p>
      <button onClick={increment} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Artır
      </button>
    </div>
  );
}

export default Counter;

