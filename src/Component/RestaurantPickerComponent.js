import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { restaurantPicker } from "../Services/DataServices";

export default function RestaurantPickerComponent() {
  const [string, getInput] = useState("");
  const [result, setResult] = useState("");

  const getResult = async () => {
    const promise = await restaurantPicker(string);
    setResult(promise);
  };

  return (
    <div className="background">
      <div>
      <Link to={"/"}>
          <p>Home</p>
        </Link>

        <h1 className="d-flex justify-content-center pt-5 text-white">Restaurant Picker</h1>
        <p className="d-flex justify-content-center pt-5 text-white">
        Choose a restaurant to generate a random restaurant
a =  FastFood;
b = MexFood;
c = AsianFood;        </p>

        <div className="d-inline-flex flex-col justify-center pt-5">
          <Form.Label htmlFor="name" className="text-white d-flex justify-content-center">Response</Form.Label>
          <Form.Control
            onChange={(e) => getInput(e.target.value)}
            id="name"
            type="text"
          />
          <Button onClick={() => getResult()} variant="primary">
            Submit
          </Button>{" "}
        </div>
        <p className="d-flex justify-content-center pt-5">{result}</p>
      </div>
    </div>
  );
};
