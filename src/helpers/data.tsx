import { QuizType } from "../types/types";

export const mathQuiz: QuizType = {
  topic: "Math",
  level: "Intermediate",
  totalQuestions: 4,
  perQuestionScore: 5,
  questions: [
    {
      question: "What number follows: 4,8,16, ?",
      choices: ["20", "32", "1", "99"],
      correctAnswer: "32",
    },
    {
      question: "2 + 2 * 2= ?",
      choices: ["6", "4", "8", "2"],
      correctAnswer: "6",
    },
    {
      question: "4,11,18, ?",
      choices: ["19", "22", "25", "26"],
      correctAnswer: "25",
    },
    {
      question: "5 + 5 x 5 - 5 =?",
      choices: ["30", "20", "5", "25"],
      correctAnswer: "25",
    },
  ],
};

export const movieQuiz: QuizType = {
  topic: "Movie",
  level: "Beginner",
  totalQuestions: 4,
  perQuestionScore: 5,
  questions: [
    {
      question: "Which movie trilogy was based on books of J.R.R Tolkien?",
      choices: [
        "Lord of The Rings",
        "Twilight",
        "Harry Potter",
        "Fast & Furious",
      ],
      correctAnswer: "Lord of The Rings",
    },
    {
      question: "What movie does Joaquin Phoenix won oscar for?",
      choices: ["Shazam", "Gladiator", "Harley Quinn", "Joker"],
      correctAnswer: "Joker",
    },
    {
      question: "Who directed Kill Bill?",
      choices: [
        "Steven Spielberg",
        "Taika Waititi",
        "Quentin Tarantino",
        "Carlo Ancelotti",
      ],
      correctAnswer: "Quentin Tarantino",
    },
    {
      question: "How many Avatar movies are out to this day?",
      choices: ["9", "2", "1", "0"],
      correctAnswer: "2",
    },
  ],
};

export const sportQuiz: QuizType = {
  topic: "Sport",
  level: "Beginner",
  totalQuestions: 4,
  perQuestionScore: 5,
  questions: [
    {
      question: "Which football team has won Champions League most times?",
      choices: ["Real Madrid", "PSG", "Bayern Munich", "Manchester United"],
      correctAnswer: "Real Madrid",
    },
    {
      question: "How many Grand Slams does Rafael Nadal won?",
      choices: ["22", "1", "7", "85"],
      correctAnswer: "22",
    },
    {
      question: "Which ice hockey player made most points in NHL?",
      choices: [
        "Jaromir Jagr",
        "Marian Hossa",
        "Wayne Gretzky",
        "Sidney Crosby",
      ],
      correctAnswer: "Wayne Gretzky",
    },
    {
      question: "Which sportsman has most olympic medals?",
      choices: ["Joe Doe", "Michael Phelps", "Yoko Ono", "Usain Bolt"],
      correctAnswer: "Michael Phelps",
    },
  ],
};
