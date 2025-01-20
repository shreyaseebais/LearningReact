import { Link } from "react-router";

export default function UserList() {
  const userData = [
    { id: 1, name: "Motu" },
    { id: 2, name: "Patlu" },
    { id: 3, name: "Tom" },
    { id: 4, name: "Jerry" },
    { id: 5, name: "Mickey" },
    { id: 6, name: "Mini" },
    { id: 7, name: "Donald" },
    { id: 8, name: "Tony" },
    { id: 9, name: "Stark" },
    { id: 10, name: "Tommy" },
    { id: 11, name: "Jini" },
    { id: 12, name: "Hini" },
    { id: 13, name: "Ginni" },
  ];
  return (
    <div style={{ marginLeft: "3%" }}>
      <h1>Users list page</h1>
      <ul>
        {userData.map((el) => (
          <li key={el.id}>
            <div>
              <h4>
                <Link to={"/users/" + el.id}>{el.name}</Link>
              </h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
