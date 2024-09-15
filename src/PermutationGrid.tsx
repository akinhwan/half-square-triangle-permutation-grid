import React from "react";
import TriangleSquare from "./TriangleSquare"; // Assuming you already have the TriangleSquare component

// Add 'none' as one of the possible positions
const positions = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
  "none",
];

// Fisher-Yates shuffle algorithm to randomize array order
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const PermutationGrid = ({ gridsPerRow = 3 }) => {
  // Helper function to generate all permutations of positions
  const generatePermutations = () => {
    const permutations = [];
    positions.forEach((topLeft) => {
      positions.forEach((topRight) => {
        positions.forEach((bottomLeft) => {
          positions.forEach((bottomRight) => {
            permutations.push({ topLeft, topRight, bottomLeft, bottomRight });
          });
        });
      });
    });
    return shuffleArray(permutations); // Shuffle the permutations
  };

  const permutations = generatePermutations();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${gridsPerRow}, auto)`,
        // gap: "20px",
        justifyContent: "center",
        // transform: "scale(0.3)",
      }}
    >
      {permutations.map((perm, index) => (
        <div
          key={index}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 100px)",
            gridTemplateRows: "repeat(2, 100px)",
            gap: "0px",
          }}
        >
          <TriangleSquare trianglePosition={perm.topLeft} color="black" />
          <TriangleSquare trianglePosition={perm.topRight} color="black" />
          <TriangleSquare trianglePosition={perm.bottomLeft} color="black" />
          <TriangleSquare trianglePosition={perm.bottomRight} color="black" />
        </div>
      ))}
    </div>
  );
};

export default PermutationGrid;
