import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { askingQuestions } from '../Services/DataServices';

export default function AskingQuestions() {

  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState("");

    const getResult = async () => {
      const promise = await askingQuestions(name, time)
      setResult(promise)
    }


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
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control onChange={(e) => setName(e.target.value)} id='name'  type="text" />
                <Form.Label htmlFor="name">Time</Form.Label>
                <Form.Control onChange={(e) => setTime(e.target.value)} id='name'  type="text" />
                <Button onClick={() => getResult()} variant="primary">Submit</Button>{' '}
            </div>
                <p className='d-flex justify-content-center pt-5'>{result}</p>
        </div>
      )
}
