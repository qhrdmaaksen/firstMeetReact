import React from "react";

const students = [
  {
    id: 1,
    name: "홍길동",
  },
  {
    id: 2,
    name: "김철수",
  },
  {
    id: 3,
    name: "이영희",
  },
  {
    id: 4,
    name: "박영수",
  },
  {
    id: 5,
    name: "최영희",
  },
];

const AttendanceBook = () => {
  return (
    <ul>
      {students.map((student) => {
        return <li key={students.id}>{student.name}</li>;
      })}
    </ul>
  );
};
export default AttendanceBook;
