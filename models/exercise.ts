export interface IClue {
  // Each clue represents one word in a full Clue, following the order. Hint can be shown on hover.
  text: string;
  hint: string;
  // Set true to mark this as keyword. Keyword could be the missing space to indicate to user.
  isKeyword: boolean;
}

export interface ISample {
  // Each sample represents one word in a full sample, following the order. Keyword will have focused.
  text: string;
  isFocus: boolean;
}

export interface IChoice {
  text: string;
  // Indicate whether this is correct answer
  isCorrect: boolean;
  // Indicate whether user select this as answer, but not the final yet.
  isSelected: boolean;
  // Final result revealed.
  isRevealed: boolean;
}

export interface IQuiz {
  // Action requirement: "Fill missing", "Find synonyms/antonyms",  etc...
  requirements: string;
  // Sample sentence, in English (or primary language).
  samples: ISample[];
  clues: IClue[];
}
export interface IExercise {
  quiz: IQuiz;
  // Choices should be separated with quiz, as we're capable to diversify the choices within same quiz.
  choices: IChoice[];
  result: "unfinished" | "correct" | "wrong";
}
export const SAMPLE_EXERCISE: IExercise = {
  quiz: {
    requirements: "Fill the missing word",
    samples: [
      {
        text: "The",
        isFocus: false,
      },
      {
        text: "house",
        isFocus: true,
      },
      {
        text: "is",
        isFocus: false,
      },
      {
        text: "small",
        isFocus: false,
      },
    ],
    clues: [
      {
        text: "Das",
        hint: "The",
        isKeyword: false,
      },
      {
        text: "",
        hint: "",
        isKeyword: true,
      },
      {
        text: "ist",
        hint: "is",
        isKeyword: false,
      },
      {
        text: "klein",
        hint: "small",
        isKeyword: false,
      },
    ],
  },
  choices: [
    {
      text: "folgen",
      isCorrect: false,
      isRevealed: false,
      isSelected: false,
    },
    {
      text: "Schaf",
      isCorrect: false,
      isRevealed: false,
      isSelected: false,
    },
    {
      text: "Bereiden",
      isCorrect: false,
      isRevealed: false,
      isSelected: false,
    },
    {
      text: "Hause",
      isCorrect: true,
      isRevealed: false,
      isSelected: false,
    },
  ],
  result: "unfinished",
};
export const EXERCISES: IExercise[] = [SAMPLE_EXERCISE];
