function StudentItem({ student, onAdd, onDelete }) {
  return (
    <div style={styles.card}>
      <span>{student.name}</span>

      <div>
        <button style={styles.favBtn} onClick={() => onAdd(student)}>
          Favourite
        </button>

        <button style={styles.delBtn} onClick={() => onDelete(student.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    background: "#f3f4f6",
    borderRadius: "8px",
    marginBottom: "10px",
    alignItems: "center"
  },
  favBtn: {
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "4px 10px",
    borderRadius: "6px",
    marginRight: "6px",
    cursor: "pointer"
  },
  delBtn: {
    background: "#dc2626",
    color: "white",
    border: "none",
    padding: "4px 10px",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default StudentItem;