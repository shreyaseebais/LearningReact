import styled from "styled-components";

const User = ({ props }) => {
  // Creating a Styled component <UserDiv>
  const UserDiv = styled.div`
    border: 1px solid orange;
    padding: 1%;
    margin: 1%;
    border-radius: 10px;
  `;
  //OR 
  // const UserDiv = styled.div({
  //   border: '1px solid orange',
  //   padding: '1%',
  //   margin: '1%',
  //   borderRadius:' 10px',
  // })

  return (
    <UserDiv>
      <div>Name: {props.name} </div>
      <div>Email: {props.email} </div>
      <div>Age: {props.age} </div>
    </UserDiv>
  );
};

export default User;
