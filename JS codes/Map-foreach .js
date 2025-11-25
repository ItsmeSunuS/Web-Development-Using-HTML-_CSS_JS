function processStudents(students) {
  return students
    .filter(student => student.marks > 60)                    // 1. Filter
    .sort((a, b) => b.marks - a.marks)                        // 2. Sort (descending)
    .map(student => student.name);                            // 3. Extract names
}


const students = [
  { name: "Sudheesh", marks: 58 },
  { name: "Bob", marks: 85 },
  { name: "Sanjana", marks: 92 },
  { name: "Manjari", marks: 45 },
  { name: "Madhav", marks: 76 },
  { name: "Maheswar", marks: 63 },
  { name: "Lucky", marks: 89 },
  { name: "Adhani", marks: 95 },
  { name: "Mouria", marks: 54 },
  { name: "kaalika", marks: 79 },
  { name: "jeona", marks: 67 },
  { name: "Lessy", marks: 88 },
  { name: "Mithu", marks: 91 },
  { name: "Mithra", marks: 72 },
  { name: "Meghana", marks: 82 }
];

console.log(processStudents(students));





