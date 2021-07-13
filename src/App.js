import React, { useState, useEffect } from "react";
import FlashcardList from "./FlashcardList";
import "./app.css";
import axios from "axios";

export default function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=10").then((res) => {
      setFlashcards(
        res.data.results.map((questionItem, index) => {
          const answer = questionItem.correct_answer;
          const options = [...questionItem.incorrect_answers, answer];
          return {
            id: `${index} - ${Date.now()}`,
            questions: questionItem.question,
            answer: answer,
            options: options.sort(() => Math.random() - 5),
          };
        })
      );
      console.log(res.data);
    });
  });

  return <FlashcardList flashcards={flashcards} />;
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "what is 2 + 2?",
    answer: 4,
    options: ["2", "3", "4", "5"],
  },

  {
    id: 2,
    question: "what is 5 + 2?",
    answer: 7,
    options: ["7", "3", "4", "5"],
  },
];
