export class QuestionClass {
    "id" ?: number;
    "question": string;
    "a": string;
    "b": string;
    "c": string;
    "d": string;
    "answer": string;
    "selected" ?: string;
}

export class MultipleChoice {
    "id" ?: number;
    "question": string;
    "a": AnswerForMult;
    "b": AnswerForMult;
    "c": AnswerForMult;
    "d": AnswerForMult;
    "answers": AnswerForMult[];
    "selected" ?: string;
}

export class AnswerForMult {
    "answer": string
    "checked": boolean = false;
}
