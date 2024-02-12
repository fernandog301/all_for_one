import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { madLibs } from '../Services/DataServices'

export default function MadLibComponent() {
  const [gender, getGender] = useState("");
  const [name, getName] = useState("");
  const [age, getAge] = useState("");
  const [color, getColor] = useState("");
  const [pronoun, getPronoun] = useState("");
  const [food, getFood] = useState("");
  const [job, getJob] = useState("");
  const [adjective1, getAdjective1] = useState("");
  const [adjective2, getAdjective2] = useState("");
  const [noun, getNoun] = useState("");
  let [output, getOutput] = useState("A young [gender], aged [age] named [name] sat down at a restaurant to enjoy a (n) [adjective1] [food] which was for some reason colored [color]. [pronoun] works at a [adjective2] [job] that made the workers eat a (n) [adjective1] [noun] ON THE JOB.");

  const getResult = async () => {
    if (gender === "" || name === "" || age === "" || color === "" || pronoun === "" || food === "" || job === "" || adjective1 === "" || adjective2 === "" || noun === "") {
      getOutput("Please Enter Something");
    } else if (gender.toLowerCase() === "something" || name.toLowerCase() === "something" || age.toLowerCase() === "something" || color.toLowerCase() === "something" || pronoun.toLowerCase() === "something" || food.toLowerCase() === "something" || job.toLowerCase() === "something" || adjective1.toLowerCase() === "something" || adjective2.toLowerCase() === "something" || noun.toLowerCase() === "something") {
      getOutput("Don't actually put something... idiot")
    } else {
      const response = await madLibs(gender, name, age, color, pronoun, food, job, adjective1, adjective2, noun);
      getOutput(response);
    }


  }
  return (

    <div className="background">
      <div>
        <div className="grid grid-cols-12">
          <div className="col-span-2">
            <button
              className="hidden lg:block rounded-[20px] border-[0.3125rem] border-black bg-white w-[17.5rem] h-[6.25rem] ml-[3.75rem] mt-[3.75rem] mb-[3.125rem]">
              <Link to={"/"}>
                <p className="text-black font-[Rubik-Bold] text-[3.125rem]">Home</p>
              </Link>
            </button>
          </div>
          <div className="col-span-8 text-center mt-[3.8125rem] mb-[3.4376rem]">
            <p className="font-[Rubik-Bold] text-[3.125rem] lg:text-[5rem] text-white">Mad Lib</p>
          </div>
        </div>
        <div>

        </div>
        <div className="flex justify-center px-[1.9375rem]">
          <div
            className="bg-white w-[77.5rem] min-h-[24.25rem] border-black rounded-[20px] border-[0.3125rem] flex justify-center items-center">
            <p className="font-[Rubik-Bold] text-[1.875rem] lg:text-[4.375rem] text-center p-5 lg:p-20">{output}</p>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="text-[1.875rem] lg:text-[3.125rem] font-[Rubik-Bold] mt-[1.25rem] lg:mt-[5.25rem] px-[4.6875rem] text-center">Enter Placeholder Category!</p>
        </div>

        <div className="grid grid-cols-5 lg:mx-[6.5625rem]">
          <div className="flex justify-center lg:justify-end col-span-5 lg:col-span-1 px-[2.125rem] lg:px-[0.625rem]">
            <input
              className="text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold] bg-white rounded-[20px] border-black border-[0.3125rem] text-center mt-[1.8125rem] lg:mt-[3.125rem] min-h-[4.8125rem] lg:min-h-[6.25rem] w-full "
              type="text" placeholder="Gender" onChange={(e) => getGender(e.target.value)} value={gender} />
          </div>
          <div className="flex justify-center lg:justify-end col-span-5 lg:col-span-1 px-[2.125rem] lg:px-[0.625rem]">
            <input
              className="text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold] bg-white rounded-[20px] border-black border-[0.3125rem] text-center mt-[1.8125rem] lg:mt-[3.125rem] min-h-[4.8125rem] lg:min-h-[6.25rem] w-full "
              type="text" placeholder="Name" onChange={(e) => getName(e.target.value)} value={name} />
          </div>
          <div className="flex justify-center lg:justify-end col-span-5 lg:col-span-1 px-[2.125rem] lg:px-[0.625rem]">
            <input
              className="text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold] bg-white rounded-[20px] border-black border-[0.3125rem] text-center mt-[1.8125rem] lg:mt-[3.125rem] min-h-[4.8125rem] lg:min-h-[6.25rem] w-full "
              type="text" placeholder="Age" onChange={(e) => getAge(e.target.value)} value={age} />
          </div>
          <div className="flex justify-center lg:justify-end col-span-5 lg:col-span-1 px-[2.125rem] lg:px-[0.625rem]">
            <input
              className="text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold] bg-white rounded-[20px] border-black border-[0.3125rem] text-center mt-[1.8125rem] lg:mt-[3.125rem] min-h-[4.8125rem] lg:min-h-[6.25rem] w-full "
              type="text" placeholder="Color" onChange={(e) => getColor(e.target.value)} value={color} />
          </div>
          <div className="flex justify-center lg:justify-end col-span-5 lg:col-span-1 px-[2.125rem] lg:px-[0.625rem]">
            <input
              className="text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold] bg-white rounded-[20px] border-black border-[0.3125rem] text-center mt-[1.8125rem] lg:mt-[3.125rem] min-h-[4.8125rem] lg:min-h-[6.25rem] w-full "
              type="text" placeholder="Pronoun" onChange={(e) => getPronoun(e.target.value)} value={pronoun} />
          </div>
        </div>

        <div className="grid grid-cols-5 lg:mx-[6.5625rem]">
          <div className="flex justify-center lg:justify-end col-span-5 lg:col-span-1 px-[2.125rem] lg:px-[0.625rem]">
            <input
              className="text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold] bg-white rounded-[20px] border-black border-[0.3125rem] text-center mt-[1.8125rem] lg:mt-[3.125rem] min-h-[4.8125rem] lg:min-h-[6.25rem] w-full "
              type="text" placeholder="Food" onChange={(e) => getFood(e.target.value)} value={food} />
          </div>
          <div className="flex justify-center lg:justify-end col-span-5 lg:col-span-1 px-[2.125rem] lg:px-[0.625rem]">
            <input
              className="text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold] bg-white rounded-[20px] border-black border-[0.3125rem] text-center mt-[1.8125rem] lg:mt-[3.125rem] min-h-[4.8125rem] lg:min-h-[6.25rem] w-full "
              type="text" placeholder="Job" onChange={(e) => getJob(e.target.value)} value={job} />
          </div>
          <div className="flex justify-center lg:justify-end col-span-5 lg:col-span-1 px-[2.125rem] lg:px-[0.625rem]">
            <input
              className="text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold] bg-white rounded-[20px] border-black border-[0.3125rem] text-center mt-[1.8125rem] lg:mt-[3.125rem] min-h-[4.8125rem] lg:min-h-[6.25rem] w-full "
              type="text" placeholder="Adjective 1" onChange={(e) => getAdjective1(e.target.value)} value={adjective1} />
          </div>
          <div className="flex justify-center lg:justify-end col-span-5 lg:col-span-1 px-[2.125rem] lg:px-[0.625rem]">
            <input
              className="text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold] bg-white rounded-[20px] border-black border-[0.3125rem] text-center mt-[1.8125rem] lg:mt-[3.125rem] min-h-[4.8125rem] lg:min-h-[6.25rem] w-full "
              type="text" placeholder="Adjective 2" onChange={(e) => getAdjective2(e.target.value)} value={adjective2} />
          </div>
          <div className="flex justify-center lg:justify-end col-span-5 lg:col-span-1 px-[2.125rem] lg:px-[0.625rem]">
            <input
              className="text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold] bg-white rounded-[20px] border-black border-[0.3125rem] text-center mt-[1.8125rem] lg:mt-[3.125rem] min-h-[4.8125rem] lg:min-h-[6.25rem] w-full "
              type="text" placeholder="Noun" onChange={(e) => getNoun(e.target.value)} value={noun} />
          </div>
        </div>


        <div className="flex justify-center">
          <button type="submit" value="0" onClick={() => {
            getResult();
            getGender("");
            getName("");
            getAge("");
            getColor("");
            getPronoun("");
            getFood("");
            getAdjective1("");
            getAdjective2("");
            getJob("");
            getNoun("");
          }}
            className=" bg-[#00FF75] rounded-[20px] border-black border-[0.3125rem] text-center w-[17.1875rem] min-h-[4.75rem] lg:w-[28.4375rem] lg:min-h-[6.25rem] mt-[1.25rem] lg:mt-[1.9375rem] lg:mb-[3.125rem]">
            <p className="text-black text-[1.875rem] lg:text-[2.5rem] font-[Rubik-Bold]">Submit</p>
          </button>
        </div>

        <div className="block lg:hidden">
          <div className="flex justify-center">
            <button
              className="rounded-[20px] border-[0.3125rem] border-black bg-white w-[17.1875rem] h-[4.75rem] mt-[3.75rem] mb-[3.125rem]">
              <Link to={"/"}>
                <p className="text-black font-[Rubik-Bold] text-[1.875rem] lg:text-[3.125rem]">Home</p>
              </Link>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
