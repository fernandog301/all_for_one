import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { ReverseItNumbersOnly } from '../Services/DataServices';


export default function ReverseIt() {

    const [string, getInput] = useState('');
    const [result, setResult] = useState('');

    const getResult = async () => {
      const promise = await ReverseItNumbersOnly(string)
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
                <Form.Control onChange={(e) => getInput(e.target.value)} id='name'  type="text" />
                <Button onClick={() => getResult()} variant="primary">Submit</Button>{' '}
            </div>
                <p className='d-flex justify-content-center pt-5'>{result}</p>
                    </div>
  )
}
