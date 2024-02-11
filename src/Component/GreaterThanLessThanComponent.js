import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { GreaterOrLess } from '../Services/DataServices';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function GreaterThanLessThanComponent() {

    const [num1, setNumOne] = useState('');
    const [num2, setNumTwo] = useState('');
    const [result, setResult] = useState("");

    const getResult = async () => {
      const promise = await GreaterOrLess(num1, num2);
      setResult(promise);
    };

  return (
    <div className='background'>
      <Button>
        <Link to={"/"}>
          <p className="">Back</p>
        </Link>
        </Button>




        <h1 className='d-flex justify-content-center pt-5'>Say Hello</h1>
            <p className='d-flex justify-content-center pt-5'>Enter your name below</p>


            <div className='d-inline-flex flex-col justify-content-center pt-5'>
                <Form.Label htmlFor="name">Number</Form.Label>
                <Form.Control onChange={(e) => setNumOne(e.target.value)} id='name'  type="text" />
                <Form.Label htmlFor="name">Number</Form.Label>
                <Form.Control onChange={(e) => setNumTwo(e.target.value)} id='name'  type="text" />
                <Button onClick={() => getResult()} variant="primary">Submit</Button>{' '}
            </div>
                <p className='d-flex justify-content-center pt-5'>{result}</p>

    </div>
  )
}
