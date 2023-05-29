// Register.js
import React, { useState } from 'react';

function Register() {
    // State variables for student names and grades
    const [students, setStudents] = useState([]);
    const [name, setName] = useState('');
    const [exam1Grade, setExam1Grade] = useState(0);
    const [exam2Grade, setExam2Grade] = useState(0);
    const [exam3Grade, setExam3Grade] = useState(0);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Create a new student object with name and grades
        const newStudent = {
            name,
            exam1Grade,
            exam2Grade,
            exam3Grade,
        };
        // Add the new student to the students array
        setStudents([...students, newStudent]);
        // Reset form fields
        setName('');
        setExam1Grade(0);
        setExam2Grade(0);
        setExam3Grade(0);
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Student Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="exam1">Exam 1 Grade:</label>
                <input
                    type="number"
                    id="exam1"
                    value={exam1Grade}
                    onChange={(e) => setExam1Grade(Number(e.target.value))}
                />

                <label htmlFor="exam2">Exam 2 Grade:</label>
                <input
                    type="number"
                    id="exam2"
                    value={exam2Grade}
                    onChange={(e) => setExam2Grade(Number(e.target.value))}
                />

                <label htmlFor="exam3">Exam 3 Grade:</label>
                <input
                    type="number"
                    id="exam3"
                    value={exam3Grade}
                    onChange={(e) => setExam3Grade(Number(e.target.value))}
                />

                <button type="submit">Submit</button>
            </form>

            {/* Display the registered students */}
            <div>
                <h2>Registered Students:</h2>
                <ul>
                    {students.map((student, index) => (
                        <li key={index}>
                            {student.name} - Exam 1: {student.exam1Grade}, Exam 2: {student.exam2Grade}, Exam 3: {student.exam3Grade}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Register;
