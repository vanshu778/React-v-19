export const Practices = () => {
    const students = [1,2];
    return(
        <>
            {/* <p>{students.length && "No students found"}</p> */}

            {/* 1st */}
            {/* <p>{students.length === 0 && "No students found"}</p> */}

            {/* 2 */}
            {/* <p>{!students.length && "No students found"}</p> */}
            
            {/* 3 */}
            {/* <p>{Boolean(!students.length) && "No students found"}</p> */}

            <p>Number of students: {students.length}</p>
        </>
    );
};