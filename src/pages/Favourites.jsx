import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function Favourites() {
  const { favourites } = useContext(StudentContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Favourite Students</h2>

      {favourites.length === 0 && <p>No favourites added yet.</p>}

      {favourites.map((student) => (
        <p key={student.id}>⭐ {student.name}</p>
      ))}
    </div>
  );
}

export default Favourites;