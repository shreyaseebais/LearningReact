import User from "./User";

function Loops() {
  const userDetails = [
    {
      name: "John",
      age: 30,
      id: 1,
      email: "john@yoyo.com",
    },
    {
      name: "Peter",
      age: 27,
      id: 2,
      email: "peter@yoyo.com",
    },
    {
      name: "Marie",
      age: 32,
      id: 3,
      email: "marie@yoyo.com",
    },
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
  ];

  return (
    <div>
      <h3>Iterating over an array map </h3>
      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {userDetails.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Using another component </h3>
      <div>
        {userDetails.map((user, index) => (
          <div key={index}>
            <User props={user}></User>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Loops;