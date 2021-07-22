export type Choice = {
  index: string;
  body: string;
};

export type Quiz = {
  id: string;
  title: string;
  quizNumber: string;
  srcExam: string;
  answer: string;
  choices: Choice[];
};
