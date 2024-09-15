import React from "react";

const TriangleSquare = ({ trianglePosition = "top-left", color = "black" }) => {
  // Function to get the appropriate CSS styles for the triangle based on the position
  const getTriangleStyle = (position) => {
    if (position === "none") return {}; // No triangle case

    switch (position) {
      case "top-left":
        return {
          borderBottom: `100px solid ${color}`,
          borderRight: "100px solid transparent",
        };
      case "top-right":
        return {
          borderBottom: `100px solid ${color}`,
          borderLeft: "100px solid transparent",
        };
      case "bottom-left":
        return {
          borderTop: `100px solid ${color}`,
          borderRight: "100px solid transparent",
        };
      case "bottom-right":
        return {
          borderTop: `100px solid ${color}`,
          borderLeft: "100px solid transparent",
        };
      default:
        return {};
    }
  };

  // If the position is "none", return an empty div
  if (trianglePosition === "none") {
    return <div style={{ width: "100px", height: "100px" }} />;
  }

  return (
    <div style={{ width: "100px", height: "100px", position: "relative" }}>
      <div
        style={{
          width: 0,
          height: 0,
          ...getTriangleStyle(trianglePosition),
        }}
      />
    </div>
  );
};

export default TriangleSquare;
