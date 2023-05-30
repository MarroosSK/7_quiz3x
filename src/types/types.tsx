import { ReactNode } from "react";

export interface QuestionsType {
  question: string;
  choices: string[];
  correctAnswer: string;
}

export interface QuizType {
  topic: string;
  level: string;
  totalQuestions: number;
  perQuestionScore: number;
  questions: QuestionsType[];
}

export interface ResultData {
  quizName: string;
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
}

//context children props
export interface ChildrenProps {
  children: ReactNode;
}
//context type
export interface HistoryContextType {
  quizHistory: ResultData[];
  setQuizHistory: React.Dispatch<React.SetStateAction<ResultData[]>>;
}
