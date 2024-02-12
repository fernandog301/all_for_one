import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { reverseItWord } from '../Services/DataServices';

export default function ReverseItComponent() {

    const [string, getInput] = useState("");
    const [result, setResult] = useState("");

    const getResult = async () => {
      const promise = await reverseItWord(string)
      setResult(promise)
    }

  return (
    <div className='background'>
      <div>
      
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        


        <h1 className='d-flex justify-content-center text-white pt-5'>Word Reverse</h1>
            <p className='d-flex justify-content-center text-white pt-5'>Enter your Word below</p>


            <div className='d-inline-flex flex-col text-white text-white justify-content-center pt-5'>
                <Form.Label htmlFor="name">Number</Form.Label>
                <Form.Control onChange={(e) => getInput(e.target.value)} id='name'  type="text" />
                <Button onClick={() => getResult()} variant="primary">Submit</Button>{' '}
            </div>
                <Button><p className='d-flex justify-content-center pt-5'>{result}</p></Button>


                </div>
    </div>
  )
}
