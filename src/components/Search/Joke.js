import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  CardTitle,
} from "reactstrap";

export default function Joke({ queryString }) {
  const [searchRes, setSearchRes] = useState([]);
  useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/search?query=${queryString}`)
      .then((res) => res.json())
      .then((data) => setSearchRes(data.result));
  }, [queryString]);
  return (
    <Row className="mt-4">
      <Col md={{ size: 8, offset: 2 }}>
        <Card>
          <CardHeader>
            <span>
              Search: <strong>{queryString}</strong>
            </span>
            <span> - </span>
            <span>
              <strong>{searchRes.length} </strong>
              result
            </span>
          </CardHeader>
          <CardBody>
            <ListGroup flush>
              {searchRes &&
                searchRes.map((item) => (
                  <ListGroupItem key={item.id}>{item.value}</ListGroupItem>
                ))}
            </ListGroup>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}
