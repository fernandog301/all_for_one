import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function HomePageComponent() {
  return (
    <div className="background">

      <p className="font-[Rubik-Bold] text-[3.125rem] lg:text-[12.5rem] text-white text-center pt-[3.8125rem] lg:pt-[6.25rem]">
        All For One
      </p>

      <div className="mt-[4rem] lg:mt-[8.9375rem]">
        <div className="grid grid-cols-5 justify-between mx-[2.5rem]">
          <div className="col-span-5 lg:col-span-1 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]">
            <Button className="bg-white rounded-[20px] border-[0.3125rem] border-black  w-[22rem] min-h-[11.25rem]">
              <Link to={"SayHello"}>
                <p >
                  Say Hello
                </p>
              </Link>
            </Button>
          </div>
          <div className="col-span-5 lg:col-span-1 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]">
            <Button className=" bg-white rounded-[20px] border-[0.3125rem] border-black  w-[22rem] min-h-[11.25rem]">
              <Link to={"SumOfTwoNumbers"}>
                <p >
                  Add 2 Numbers
                </p>
              </Link>
            </Button>
          </div>
          <div className="col-span-5 lg:col-span-1 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]">
            <Button className="bg-white rounded-[20px] border-[0.3125rem] border-black  w-[22rem] min-h-[11.25rem]">
              <Link to={"AskingQuestions"}>
                <p >
                  Asking Questions
                </p>
              </Link>
            </Button>
          </div>
          <div className="col-span-5 lg:col-span-1 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]">
            <Button className="bg-white rounded-[20px] border-[0.3125rem] border-black  w-[22rem] min-h-[11.25rem]">
              <Link to={"GreaterOrLess"}>
                <p >
                  Greater Than Or Less Than
                </p>
              </Link>
            </Button>
          </div>
          <div className="col-span-5 lg:col-span-1 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]">
            <Button className="bg-white rounded-[20px] border-[0.3125rem] border-black w-[22rem] min-h-[11.25rem]">
              <Link to={"MadLib"}>
                <p >
                  Mad Lib
                </p>
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-10 justify-between px-[2.5rem]">
          <div className="col-span-10 lg:col-span-2 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]">
            <Button className=" bg-white rounded-[20px] border-[0.3125rem] border-black  w-[22rem] min-h-[11.25rem]">
              <Link to={"ReverseItNumbers"}>
                <p >
                  Reverse It (Number)
                </p>
              </Link>
            </Button>
          </div>
          <div className="col-span-10 lg:col-span-2 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]">
            <Button className="bg-white rounded-[20px] border-[0.3125rem] border-black  w-[22rem] min-h-[11.25rem]">
              <Link to={"ReverseIt"}>
                <p >
                  Reverse It(Word)
                </p>
              </Link>
            </Button>
          </div>
          <div className="col-span-10 lg:col-span-2 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]">
            <Button className=" bg-white rounded-[20px] border-[0.3125rem] border-black  w-[22rem] min-h-[11.25rem]">
              <Link to={"RestaurantPicker"}>
                <p >
                  Restaurant Picker
                </p>
              </Link>
            </Button>
          </div>
          <div className="col-span-10 lg:col-span-2 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]">
            <Button className="bg-white rounded-[20px] border-[0.3125rem] border-black  w-[22rem] min-h-[11.25rem]">
              <Link to={"Magic8Ball"}>
                <p >
                  Magic 8 Ball
                </p>
              </Link>
            </Button>
          </div>
          <div className="col-span-10 lg:col-span-2 flex justify-center mb-[1.875rem] lg:mb-[6.25rem]">
            <Button className="bg-white rounded-[20px] border-[0.3125rem] border-black w-[22rem] min-h-[11.25rem]">
              <Link to={"OddOrEven"}>
                <p >
                  Odd Or Even
                </p>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
