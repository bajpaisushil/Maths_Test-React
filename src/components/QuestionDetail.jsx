import React, { useEffect, useState } from "react";
import axios from "axios";
import { MathJaxContext, MathJax } from "better-react-mathjax";


function QuestionDetail({ questionID }) {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${questionID}`
      )
      .then((response) => {
        console.log('response', response);
        const questionData = response.data[0];
        console.log('questiondata', questionData.Question);
        setQuestion(questionData.Question);
        console.log('question', question);
      })
      .catch((error) => {
        console.error("Error fetching question details:", error);
      });
  }, [questionID]);

  return (
    <div className="my-4">
      <h2 className="text-xl font-semibold mb-2">Question:</h2>
      {question && (
      <MathJaxContext>
        <MathJax>{question}</MathJax>
      </MathJaxContext>
      )}
    </div>
  );
};

export default QuestionDetail;
