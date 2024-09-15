import TriangleSquare from "./TriangleSquare"; // Assuming you already have the TriangleSquare component

const LargeSquare = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 100px)",
        gridTemplateRows: "repeat(2, 100px)",
        gap: "0px", // No gap to make them touch
      }}
    >
      {/* Top-left triangle */}
      <TriangleSquare trianglePosition="top-left" color="black" />

      {/* Top-right triangle */}
      <TriangleSquare trianglePosition="top-right" color="black" />

      {/* Bottom-left triangle */}
      <TriangleSquare trianglePosition="bottom-left" color="black" />

      {/* Bottom-right triangle */}
      <TriangleSquare trianglePosition="bottom-right" color="black" />
    </div>
  );
};

export default LargeSquare;
