import { useParams } from "react-router";
import { Link } from "react-router";

export default function UserDetails() {
  const paramsData = useParams();
  return (
    <div style={{ marginLeft: "3%" }}>
      <h1>Users Detail page</h1>
      <h2>User ID is {paramsData.id}</h2>
      <h3>
        <Link to={"/users"}>Back</Link>
      </h3>
    </div>
  );
}
