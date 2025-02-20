function NestedLoops() {
  const collegeData = [
    {
      name: "IIT Mumbai",
      city: "Mumbai",
      website: "iitm.com",
      students: [
        {
          name: "Mickey",
          age: 31,
          id: 4,
          email: "mickey@yoyo.com",
        },
        {
          name: "Mini",
          age: 29,
          id: 5,
          email: "mini@yoyo.com",
        },
        {
          name: "Marie",
          age: 32,
          id: 3,
          email: "marie@yoyo.com",
        },
      ],
    },
    {
      name: "IIT Delhi",
      city: "Delhi",
      website: "iitd.com",
      students: [
        {
          name: "Ram",
          age: 31,
          id: 4,
          email: "ram@yoyo.com",
        },
        {
          name: "Shyam",
          age: 29,
          id: 5,
          email: "shyam@yoyo.com",
        },
      ],
    },
    {
      name: "IIT Kharagpur",
      city: "Mumbai",
      website: "iitkgp.com",
      students: [
        {
          name: "Kukku",
          age: 31,
          id: 4,
          email: "kukku@yoyo.com",
        },
        {
          name: "Pikku",
          age: 29,
          id: 5,
          email: "pikku@yoyo.com",
        },
        {
          name: "Nikku",
          age: 32,
          id: 3,
          email: "nikku@yoyo.com",
        },
      ],
    },
  ];
  return (
    <div>
      {collegeData.map((college, index) => (
        <div key={index}>
          <h2>{college.name}</h2>
          <h3>
            <span>{college.city}</span>
            <span>{college.website}</span>
          </h3>
          <div>
            {college.students.map((student, idx2) => (
              <div key={idx2}>
                <span>Name : {student.name}</span>
                <span>Age: {student.age}</span>
                <span>Email : {student.email}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default NestedLoops;
