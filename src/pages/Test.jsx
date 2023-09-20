import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import QuestionDetail from "../components/QuestionDetail";
import { setTimesOfQuestions } from "../redux/questionTimesSlice";

const TestPage = () => {
  const questions = useSelector((state) => state.details.selectedIds);
  const [questionTimes, setQuestionTimes] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(3000);
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    let timer; // Variable to store the timer

    // Start the timer when the question changes
    if (currentQuestionIndex >= 0 && currentQuestionIndex < questions?.length) {
      const startTime = new Date(); // Record the start time

      // Create a timer that runs every second
      timer = setInterval(() => {
        if (timeRemaining > 0) {
          setTimeRemaining((prevTime) => prevTime - 1);
        } else {
          clearInterval(timer);
          // Handle end of the test here
          nav("/finish");
        }
      }, 1000);

      // Cleanup function to record the time spent when the component unmounts
      return () => {
        const endTime = new Date(); // Record the end time
        const timeSpentInSeconds = (endTime - startTime) / 1000; // Calculate time spent in seconds
        setQuestionTimes((prevQuestionTimes) => [
          ...prevQuestionTimes,
          {
            questionId: questions[currentQuestionIndex],
            time: timeSpentInSeconds,
          },
        ]);
        dispatch(setTimesOfQuestions(questionTimes));
        clearInterval(timer);
      };
    }
  }, [currentQuestionIndex, questions, timeRemaining, nav]);

  const formatTime = (seconds) => {
    const minutes=Math.floor(seconds/60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleNextQuestion = () => {
    if (questions && currentQuestionIndex < questions?.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (questions && currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleFinishTest = (e) => {
    e.preventDefault();
    setTimeRemaining(0);
  };

  // Ensure questions is defined before accessing its elements
  const currentQuestion =
    questions && questions?.length > 0 ? questions[currentQuestionIndex] : "";

  return (
    <div className="flex flex-col justify-center items-center p-4 outline outline-blue-600 w-full bg-blue-100 h-[100vh] mx-auto">
      <h1 className="text-[2rem] font-bold text-center">Test Page</h1>
      <div className="my-4">
        <p className="text-lg font-bold mb-2 text-red-500">
          Time Remaining: {formatTime(timeRemaining)}
        </p>
        {/* Display the question using QuestionDetail component */}
        {console.log("currentQ", currentQuestion)}
        <QuestionDetail questionID={currentQuestion} />
      </div>
      <div className="flex justify-between w-full mt-4 relative top-[16vh]">
        <button
          onClick={handlePreviousQuestion}
          className="text-lg font-semibold text-white p-2 bg-blue-500 rounded-md"
          disabled={currentQuestionIndex === 0}
        >
          Previous Question
        </button>
        <button
          onClick={handleNextQuestion}
          className="text-lg font-semibold text-white p-2 bg-blue-500 rounded-md"
          disabled={
            currentQuestionIndex === (questions ? questions?.length - 1 : 0)
          }
        >
          Next Question
        </button>
      </div>
      <button
        className="text-[1.3rem] p-[0.3rem] text-white bg-red-600 rounded-md absolute bottom-10 right-10"
        onClick={handleFinishTest}
      >
        Submit Test
      </button>
      {/* Navigation bar/panel and Submit Test button can be added here */}
    </div>
  );
};

export default TestPage;
