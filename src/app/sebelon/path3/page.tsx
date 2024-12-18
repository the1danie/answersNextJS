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
        question: "4. Укажите ряд, в котором все местоимения относительные",
        answers: [
            "я,мы,ты, вы, он, она, оно, они",
            "кто, что, какой, который, чей, сколько, каков",
            "кто? что? какой? который? чей? сколько? каков?",
        ],
        correctAnswers: [1], // Только первый вариант правильный
    },
    {
        question: "5. Укажите ряд, в котором все местоимения отрицательные",
        answers: [
            "весь, сам, самый, иной, другой, всякий",
            "некто, нечто, некоторый, несколько, кто-то",
            "никто, ничто, никакой, ничей, некого, нечего",
        ],
        correctAnswers: [2], // Только первый вариант правильный
    },
    {
        question: "6. Укажите предложение, в котором местоимение написано с ошибкой.",
        answers: [
            "Кое-кто из моих одноклассников прошел мимо.",
            "Кто-то позвонил в дверь.",
            "Я решил, что кто нибудь из друзей обязательно придет.",
        ],
        correctAnswers: [2], // Только первый вариант правильный
    },
    {
        question: "7. Укажите начальную форму местоимения СОБОЙ.",
        answers: [
            "себе",
            "сам",
            "самый",
        ],
        correctAnswers: [0], // Только первый вариант правильный
    },
    {
        question: "8. Укажите ряд, в котором все местоимения притяжательные.",
        answers: [
            "некто, нечто, некоторый, несколько",
            "мой, твой, свой, наш, ваш, его, её, их",
            "тот, этот, такой, таков, столько",
        ],
        correctAnswers: [1], // Только первый вариант правильный
    },
    {
        question: "9. Сколько местоимений в предложении \"Одинокая собака бежала по дороге, и казалось, что у нее никогда не было хозяина, дома и вкусного корма по утрам; она была ничья\"?",
        answers: [
            "1",
            "2",
            "3",
        ],
        correctAnswers: [2], // Только первый вариант правильный
    },
    {
        question: "Выдели местоимения в тексте.",
        answers: [
            "На уроке истории учитель спросил: «Кто может рассказать о нашем проекте?». Аня подняла руку и уверенно сказала: «Мы изучили древние цивилизации и узнали, что каждая из них оставила свой след в культуре». Она начала рассказывать о египтянах и их пирамидах, а затем перешла к греческим мифам. Все ученики внимательно слушали и задавали вопросы, проявляя интерес к теме. Некоторые даже начали делать заметки, чтобы запомнить важные факты. Это было очень увлекательно! В конце урока учитель похвалил Аню за отличное выступление и сказал, что они все должны продолжать исследовать историю.",
        ],
    },
    {
        question: "10. Сколько местоимений в тексте?",
        answers: [
            "9",
            "11",
            "7",
            "8",
            "10"
        ],
        correctAnswers: [1], // Только первый вариант правильный

    },
    {
        question: "11. В каких предложениях встречаются личные местоимения?",
        answers: [
            "1,4,7,9",
            "2,4,5,6,8",
            "2,3,7",
            "3,4,7,9",
            "Нет личных местоимений"
        ],
        correctAnswers: [2], // Только первый вариант правильный

    },
    {
        question: "12. В каких предложениях встречаются притяжательные местоимения?",
        answers: [
            "3",
            "3,8",
            "1",
            "2,5",
            "Нет приятяжательных местоимений"
        ],
        correctAnswers: [2], // Только первый вариант правильный

    },
    {
        question: "13. К какому разряду относится местоимение «это»?",
        answers: [
            "Возвратное",
            "Определительное",
            "Относительное",
            "Указательное",
            "Неопределенное "
        ],
        correctAnswers: [3], // Только первый вариант правильный

    },
    {
        question: "14. К какому разряду относится местоимение «некоторые»?",
        answers: [
            "Возвратное",
            "Определительное",
            "Относительное",
            "Указательное",
            "Неопределенное "
        ],
        correctAnswers: [4], // Только первый вариант правильный

    },
    {
        question: "15. К какому разряду относится местоимение «каждая»?",
        answers: [
            "Возвратное",
            "Определительное",
            "Относительное",
            "Указательное",
            "Неопределенное "
        ],
        correctAnswers: [1], // Только первый вариант правильный

    }
];
const Page = () => {
    return (
        <div>
            <Questions num={'третий'} questions={questionData} link={'/sebelon'}/>

        </div>
    );
};

export default Page;
