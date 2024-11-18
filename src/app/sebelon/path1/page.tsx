import React from 'react';
import Questions from "@/app/components/Questions";

const questionData = [
    {
        question: "1. Какое правило верно дает определение местоимениям?",
        answers: [
            "это часть речи, которая указывает на предметы, признаки и количество, но не называет их",
            "часть речи, которая обозначает число, количество предметов при счете, а также порядок предметов при счете",
            "это часть речи, которая обозначает действие предмета",
        ],
        correctAnswers: [0], // Правильные ответы - первый и второй вариант
    },
    {
        question: "2. Какой раздел лингвистики занимается изучением местоимений?",
        answers: [
            "лексика",
            "морфология",
            "фонетика",
        ],
        correctAnswers: [1], // Правильные ответы - первый и третий вариант
    },
    {
        question: "3. Выберите правильный ответ",
        answers: [
            "в предложении местоимения обычно бывают подлежащими, дополнениями, определениями",
            "местоимение изменяется по падежам, а некоторые местоимения - по родам",
            "все ответы верны",
        ],
        correctAnswers: [2], // Правильные ответы - первый и второй вариант
    },
    {
        question: "4.\tКакое из следующих слов является личным местоимением?",
        answers: [
            "он",
            "чей",
            "который",
        ],
        correctAnswers: [0], // Только первый вариант правильный
    },
    {
        question: "5.\tКакое из следующих местоимений является указательным?",
        answers: [
            "некоторые",
            "этот",
            "их",
        ],
        correctAnswers: [1], // Только первый вариант правильный
    },
    {
        question: "6. _____ пришёл на праздник вчера.",
        answers: [
            "Они",
            "Он",
            "Ты",
        ],
        correctAnswers: [1], // Только первый вариант правильный
    },
    {
        question: "7. Это _____ книга, которую я читала.",
        answers: [
            "та",
            "кто",
            "этот",
        ],
        correctAnswers: [0], // Только первый вариант правильный
    },
    {
        question: "8. Какое местоимение в предложении \"Это — мой брат\" указывает на предмет?",
        answers: [
            "мой",
            "это",
            "брат",
        ],
        correctAnswers: [1], // Только первый вариант правильный
    },
    {
        question: "9. Выдели местоимения в тексте.?",
        answers: [
            "В парке играли дети. Они бегали, смеялись и катались на качелях. Каждый из них был занят своей игрой. Маша решила построить замок из песка на пляже, а Саша пригласил всех помочь ему найти мяч, который потерялся где-то в траве. Вскоре все собрались вокруг и начали играть вместе, строя огромные песочницы и придумывая разные истории. Это был замечательный день! Солнце светило ярко, а ветер приносил свежий запах цветов. Друзья обещали встретиться здесь снова на следующей неделе.",
        ],
    }
];
const Page = () => {
    return (
        <div>
            <Questions num={'первый'} questions={questionData} link={'/sebelon'}/>

        </div>
    );
};

export default Page;
