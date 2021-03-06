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
  tags?: string[];
};

export type Exam = {
  id: string;
  title: string;
  slug: string;
  sort: number;
};
