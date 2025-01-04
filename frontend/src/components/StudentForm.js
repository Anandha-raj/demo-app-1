import { useState } from "react";
import "./StudentForm.css";

function StudentForm(){
    const[name, setName] = useState("");
    const[age, setAge] = useState("");
    const[course, setCourse] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        const student = {name, age, course};

        try{
            const res = await fetch("https://demo-app-1-7p8r.onrender.com/api/students", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(student)
            })
            if(res.ok){
                const data = await res.json();
                console.log(data);

                setName('');
                setAge('');
                setCourse('');
            }else{
                console.log("failed to submit");
            }
        }catch(error){
            console.log(error.message);
        }
    }

    return(
        <form onSubmit={handleSubmit} className="student-form">
            <h2>Add the student to the DB</h2>
            <input
                type="text"
                placeholder="Enter the student name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Enter the student Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Enter the student Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default StudentForm;