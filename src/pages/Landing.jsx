import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDetails } from "../redux/detailSlice";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [name, setName] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const dispatch=useDispatch();
  const nav=useNavigate();

  const handleCheckboxChange = (event) => {
    const id = event.target.id;
    setSelectedIds((prevSelectedIds) => {
      if (prevSelectedIds.includes(id)) {
        return prevSelectedIds.filter((selectedId) => selectedId !== id);
      } else {
        return [...prevSelectedIds, id];
      }
    });
  };

  const handleStartTest=(e)=>{
    e.preventDefault();
    if(selectedIds?.length===0){
      return (
        alert("Select atleast one of the Topics to Proceed!")
      )
    }
    dispatch(setDetails({name, selectedIds}));
    nav("/test");
  }

  return (
    <div className="flex flex-col justify-center items-center p-[3rem] w-[100%] bg-blue-100 h-fit py-[4rem] mx-auto">
      <h1 className="text-[2rem] mb-[1rem] font-bold text-center">
        Welcome to NioClass
      </h1>
      <form className="w-fit px-[4rem] m-auto text-[1.3rem] font-semibold p-[2rem]">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <p className="my-auto text-[1.4rem] font-bold">Name:{" "}</p>
            <input
              type="text"
              name="name"
              className="w-fit bg-blue-100 ml-[1rem] h-[2.5rem] my-[1rem] border-[2px] rounded-md border-gray-800 px-[0.3rem]"
              placeholder="Enter Your Name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="my-[1rem]">
            <h1 className="text-[1.4rem] font-bold mb-[0.5rem]">
              Select the question types:
            </h1>
            <div className="text-[1.2rem] font-medium">
            <div>
              <input
                type="checkbox"
                className="my-[0.6rem]"
                id="AreaUnderTheCurve_21"
                name="AreaUnderTheCurve_21"
                onChange={handleCheckboxChange}
                checked={selectedIds.includes("AreaUnderTheCurve_21")}
              />
              <label htmlFor="AreaUnderTheCurve_21" className="mx-[0.5rem]">
                AreaUnderTheCurve_21
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="my-[0.6rem]"
                id="BinomialTheorem_13"
                name="BinomialTheorem_13"
                onChange={handleCheckboxChange}
                checked={selectedIds.includes("BinomialTheorem_13")}
              />
              <label htmlFor="BinomialTheorem_13" className="mx-[0.5rem]">
                BinomialTheorem_13
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="my-[0.6rem]"
                id="BinomialTheorem_24"
                name="BinomialTheorem_24"
                onChange={handleCheckboxChange}
                checked={selectedIds.includes("BinomialTheorem_24")}
              />
              <label htmlFor="BinomialTheorem_24" className="mx-[0.5rem]">
                BinomialTheorem_24
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="my-[0.6rem]"
                id="AreaUnderTheCurve_15"
                name="AreaUnderTheCurve_15"
                onChange={handleCheckboxChange}
                checked={selectedIds.includes("AreaUnderTheCurve_15")}
              />
              <label htmlFor="AreaUnderTheCurve_15" className="mx-[0.5rem]">
                AreaUnderTheCurve_15
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="my-[0.6rem]"
                id="AreaUnderTheCurve_2"
                name="AreaUnderTheCurve_2"
                onChange={handleCheckboxChange}
                checked={selectedIds.includes("AreaUnderTheCurve_2")}
              />
              <label htmlFor="AreaUnderTheCurve_2" className="mx-[0.5rem]">
                AreaUnderTheCurve_2
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="my-[0.6rem]"
                id="BinomialTheorem_3"
                name="BinomialTheorem_3"
                onChange={handleCheckboxChange}
                checked={selectedIds.includes("BinomialTheorem_3")}
              />
              <label htmlFor="BinomialTheorem_3" className="mx-[0.5rem]">
                BinomialTheorem_3
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="my-[0.6rem]"
                id="BinomialTheorem_4"
                name="BinomialTheorem_4"
                onChange={handleCheckboxChange}
                checked={selectedIds.includes("BinomialTheorem_4")}
              />
              <label htmlFor="BinomialTheorem_4" className="mx-[0.5rem]">
                BinomialTheorem_4
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="my-[0.6rem]"
                id="AreaUnderTheCurve_5"
                name="AreaUnderTheCurve_5"
                onChange={handleCheckboxChange}
                checked={selectedIds.includes("AreaUnderTheCurve_5")}
              />
              <label htmlFor="AreaUnderTheCurve_5" className="mx-[0.5rem]">
                AreaUnderTheCurve_5
              </label>
            </div>
            </div>
          </div>
          <br />
        </div>
        <button onClick={handleStartTest} className="text-[1.5rem] font-semibold text-white p-[0.3rem] bg-blue-700 rounded-md lg:absolute top-[90vh] left-[80%]">Start Test</button>
      </form>
    </div>
  );
};

export default Landing;
