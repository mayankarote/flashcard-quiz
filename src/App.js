import React, { useState } from "react";
import FlashcardList from "./FlashcardList";
import "./app.css";

export default function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

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
