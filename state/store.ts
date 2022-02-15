import React, { Context, createContext, useReducer } from "react";
import { EXERCISES, IChoice, IExercise, IQuiz } from "../models/exercise";
export const ActionType = {
  NEXT_EXERCISE: "NEXT_EXERCISE",
  ADD_SCORE: "ADD_SCORE",
  CHECK_ANSWER: "CHECK_ANSWER",
  SET_CHOICE: "SET_CHOICE",
};
interface IAppState {
  quizzes: IExercise[];
  currentQuizNumber: number;
  currentScore: number;
  currentQuiz: {
    selectedChoice?: IChoice;
    isFinished: boolean;
  };
}
export const initialState = {
  quizzes: EXERCISES,
  currentQuizNumber: 0,
  currentScore: 0,
  currentQuiz: {
    isFinished: false,
  },
};
export interface IAppStateDispatch {
  state: IAppState;
  dispatch: React.Dispatch<any>;
}
export const store: Context<any> = createContext<any>(initialState);
console.log("Init Context Provider", store.Provider);
export const AppReducer = (_state: IAppState, action: any): IAppState => {
  switch (action.type) {
    case ActionType.NEXT_EXERCISE: {
      return { ..._state, currentQuizNumber: _state.currentQuizNumber + 1 };
    }
    case ActionType.ADD_SCORE: {
      return { ..._state, currentScore: _state.currentScore + action.score };
    }
    case ActionType.SET_CHOICE: {
      return {
        ..._state,
        currentQuiz: {
          selectedChoice: action.choice,
          isFinished: false,
        },
      };
    }
    default:
      throw new Error();
  }
};
