import { createContext, useState } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [students, setStudents] = useState([
    { id: 1, name: "Kames" },
    { id: 2, name: "Ratthika" },
    { id: 3, name: "Aswini" }
  ]);

  const [favourites, setFavourites] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 
  function addStudent(name) {
    if (!name.trim()) return;

    const newStudent = {
      id: Date.now(),
      name
    };

    setStudents([...students, newStudent]);
  }

  
  function addToFavourite(student) {
    const exists = favourites.find((s) => s.id === student.id);
    if (!exists) {
      setFavourites([...favourites, student]);
    }
  }

  
  function deleteStudent(id) {
    setStudents(students.filter((student) => student.id !== id));
    setFavourites(favourites.filter((student) => student.id !== id));
  }

  
  function login(username, password) {
    if (username && password) {
      setIsLoggedIn(true);
    }
  }

  
  function logout() {
    setIsLoggedIn(false);
    setFavourites([]);
  }

  return (
    <StudentContext.Provider
      value={{
        students,
        favourites,
        addStudent,
        addToFavourite,
        deleteStudent,
        isLoggedIn,
        login,
        logout
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}