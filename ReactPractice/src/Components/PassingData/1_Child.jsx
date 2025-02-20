function Child1({ displayName, name, getUser, onClick }) {
  return (
    <div>
      CHILD :
      <div style={{ border: "2px solid purple", padding: "3px" }}>
        Child is getting displayName function and getuser function :
        <button onClick={() => displayName(name)}>Display user </button>
        <button onClick={() => getUser()}>Get user</button>
      </div>
    </div>
  );
}

export default Child1;
