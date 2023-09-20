import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Finish = () => {
  const questionTimes = useSelector((state) => state.timesOfQuestions);
  const { name } = useSelector((state) => state.details);
  console.log("questiontimes", questionTimes);

  const totalTimesPerQuestion = {};
  let overallTotalTime = 0;

  questionTimes.forEach((entry) => {
    if (!totalTimesPerQuestion[entry.questionId]) {
      totalTimesPerQuestion[entry.questionId] = 0;
    }
    totalTimesPerQuestion[entry.questionId] += entry.time;
    overallTotalTime += entry.time;
  });

  return (
    <div className="bg-orange-100 py-[2rem] h-[100vh]">
      <h2 className="text-[2rem] font-bold my-[2rem] w-fit m-auto text-center border-b-2 border-amber-700">
        Finish Page
      </h2>
      <h1 className="text-[1.6rem] font-semibold w-fit m-auto text-center border-b-2 my-[2rem]">
        Name: {name}
      </h1>
      <ul className="text-center text-[1.5rem] font-semibold">
        {Object.entries(totalTimesPerQuestion).map(
          ([questionId, totalTime]) => (
            <li key={questionId}>
              Question ID: {questionId}, Total Time Spent:{" "}
              {totalTime.toFixed(2)} seconds
            </li>
          )
        )}
      </ul>
      <h1 className="text-[1.7rem] text-center font-bold mt-[4rem] text-amber-700">
        Total Time Spent: {overallTotalTime.toFixed(2)} seconds
      </h1>

      <div className="flex flex-col">
        <h1 className="text-[1.5rem] font-bold text-center border-2 border-yellow-800 p-[0.5rem] w-fit m-auto rounded-md my-[2rem] hover:bg-amber-700">
          <Link to="/">Try Again</Link>
        </h1>
      </div>
    </div>
  );
};

export default Finish;
