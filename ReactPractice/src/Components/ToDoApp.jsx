import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

function ToDoApp() {
  const [value, setValue] = useState("");
  //   const [list, setList] = useState([]);
  const list = ["item1 ", "item2 ", "item3 ", "item4"];

  const addItem = () => {
    console.log("add item ");
  };

  const deleteItem = () => {
    console.log("detele item ");
  };

  const editItem = () => {
    console.log("edit item ");
  };

  return (
    <div>
      TO DO Application
      <Container>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
            fontWeight: "bolder",
          }}
        >
          TODO LIST
        </Row>
        <hr />
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="add item . . . "
                size="lg"
                aria-label="add something"
                aria-describedby="basic-addon2"
                value={"abcdef"}
                onChange={() => setValue()}
              />
              <InputGroup>
                <Button
                  variant="dark"
                  className="mt-2"
                  onClick={() => addItem()}
                >
                  ADD
                </Button>
              </InputGroup>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <ListGroup>
              {list.map((el, index) => {
                return (
                  <div key={index}>
                    <ListGroup.Item
                      variant="dark"
                      action
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>{el}</span>
                      <span>
                        <Button
                          style={{ marginRight: "10px" }}
                          variant="light"
                          onClick={() => deleteItem()}
                        >
                          Delete
                        </Button>
                        <Button variant="light" onClick={() => editItem()}>
                          Edit
                        </Button>
                      </span>
                    </ListGroup.Item>
                  </div>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ToDoApp;
