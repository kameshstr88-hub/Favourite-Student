import { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";
import StudentItem from "../components/StudentItem";

function Students() {
  const {
    students,
    addStudent,
    addToFavourite,
    deleteStudent   
  } = useContext(StudentContext);

  const [newName, setNewName] = useState("");

  function handleAdd() {
    addStudent(newName);
    setNewName("");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student List</h2>

      <input
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter student name"
      />
      <button onClick={handleAdd}>Add</button>

      {students.map((student) => (
        <StudentItem
          key={student.id}
          student={student}
          onAdd={addToFavourite}
          onDelete={deleteStudent}   
        />
      ))}
    </div>
  );
}

export default Students;