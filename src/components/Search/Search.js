import React, { useState, useEffect } from "react";
import { Button, Col, Input, Row } from "reactstrap";

export default function Search({ queryString, setQueryString }) {
  const [parameter, setParameter] = useState("");
  useEffect(() => {}, [queryString]);
  const handleChange = (e) => {
    setParameter(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setQueryString(parameter);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col md="9">
            <Input
              type="search"
              name="search"
              value={parameter}
              onChange={handleChange}
            />
          </Col>
          <Col md="3">
            <Button type="submit" color="primary">
              Search
            </Button>
          </Col>
        </Row>
      </form>
    </div>
  );
}
