import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { SayHello } from '../Services/DataServices'

export default function SayHelloComponent() {
  const [string, getString] = useState("");
  let [output, getOutput] = useState("Hello [UserName]! You look great today!");
  const getResult = async () => {
    if (string === "") {
      getOutput("Please Enter Something");
    } else if (string.toLowerCase() === "something") {
      getOutput("Don't actually put something... idiot")
    } else {
      const response = await SayHello(string);
      getOutput(response);
    }

  }
  return (
    <div className="background">
      <div>
        <div className="grid grid-cols-12">
          <div className="col-span-2">
            <button
              className="hidden lg:block rounded-[20px] border-[0.3125rem] border-black  w-[17.5rem] h-[6.25rem] ml-[3.75rem] mt-[3.75rem] mb-[3.125rem]">
              <Link to={"/"}>
                <p className="text-black  text-[3.125rem]">Home</p>
              </Link>
            </button>
          </div>
          <div className="col-span-8 text-center mt-[3.8125rem] mb-[3.4376rem]">
            <p className=" text-[3.125rem] lg:text-[5rem] text-white">Say Hello</p>
          </div>
        </div>
        <div>

        </div>
        <div className="flex justify-center px-[1.9375rem]">
          <div
            className=" w-[77.5rem] min-h-[24.25rem] border-black rounded-[20px] border-[0.3125rem] flex justify-center items-center">
            <p className=" text-[1.875rem] lg:text-[4.375rem] text-center p-5 lg:p-20" id="returnOutput">{output}</p>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="text-[1.875rem] lg:text-[3.125rem] text-white  mt-[1.25rem] lg:mt-[5.25rem] text-center">
            What is your name</p>
        </div>

        <div className="flex justify-center items-center ">
          <input
            className="text-[1.875rem] lg:text-[2.5rem]   rounded-[20px] border-black border-[0.3125rem] text-center mt-[1.8125rem] lg:mt-[3.125rem] min-h-[4.8125rem] lg:min-h-[6.25rem] w-full lg:w-[37.0625rem]"
            type="text" placeholder="Name" onChange={(e) => getString(e.target.value)} value={string} />
        </div>

        <div className=" flex justify-center">
          <button type="submit" value="0" onClick={() => {
            getResult()
            getString("");
          }}
            className=" bg-[#00FF75] rounded-[20px] border-black border-[0.3125rem] text-center w-[17.1875rem]
                min-h-[4.75rem] lg:w-[28.4375rem] lg:min-h-[6.25rem] mt-[1.25rem] lg:mt-[1.9375rem] lg:mb-[3.125rem]">
            <p className="text-black text-[1.875rem] lg:text-[2.5rem] ">Submit</p>
          </button>
        </div>



      </div>
    </div>
  )
}
