import { createContext, useState } from "react";
import { ChildrenProps, ResultData } from "../types/types";


interface HistoryContextType {
    quizHistory: ResultData[];
    setQuizHistory: React.Dispatch<React.SetStateAction<ResultData[]>>;
  }
  
  export const HistoryContext = createContext<HistoryContextType>({
    quizHistory: [],
    setQuizHistory: () => [],
  });

export const HistoryContextProvider = ({ children }: ChildrenProps) => {
  const [quizHistory, setQuizHistory] = useState<ResultData[]>([]);

  return (
    <HistoryContext.Provider value={{ quizHistory, setQuizHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};