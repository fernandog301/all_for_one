import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { SumTwoNumbers } from '../Services/DataServices';

export default function SumOfTwoNumbersComponent() {

  const [Answer1, setNumOne] = useState('');
    const [Answer2, setNumTwo] = useState('');
    let [output, setOutput] = useState('The sum of [Input1] + [Input2] = sum');
    const getResult = async () => {
          const response = await SumTwoNumbers(Answer1, Answer2);
          setOutput(response);
      }

    return (
       <div className='background'>
        <Button>
        <Link to={"/"}>
          <p className="">Back</p>
        </Link>
        </Button>





        <input type="text" placeholder="Number 1" onChange={(e) => setNumOne(e.target.value)} value={Answer1} />
        <input type="text" placeholder="Number 2" onChange={(e) => setNumTwo(e.target.value)} value={Answer2} />
        <button type="submit" id="submit" value="0" onClick={() => {
                        getResult();
                        setNumOne("");
                        setNumTwo("");
                    }}></button>

                    <p>{output}</p>
       </div>
      )
}
