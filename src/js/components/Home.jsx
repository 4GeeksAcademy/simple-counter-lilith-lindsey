import React, { useEffect, useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev + 1) % 100000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const paddedCount = String(count).padStart(5, "0").split("");

  return (
    <div style={styles.container}>
      {paddedCount.map((digit, i) => (
        <div key={i} style={styles.digitBox}>
          {digit}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "5px",
    padding: "10px",
    backgroundColor: "black",
    borderRadius: "8px",
    width: "fit-content",
  },
  digitBox: {
    width: "150px",
    height: "120px",
    backgroundColor: "#222",
    color: "White",
    fontSize: "8rem",
    fontFamily: "default",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
  },
};

export default Home;
