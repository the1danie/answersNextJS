import React from 'react';
import Questions from "@/app/components/Questions";

const questionData = [
    {
        question: "1. Какое правило верно даёт определение фразеологизмам?",
        answers: [
            "образные устойчивые сочетания слов, близкие по значению одному слову",
            "это соединение двух или более самостоятельных слов, связанных по смыслу и грамматически, служащее для отдельного обозначения понятийной единицы",
            "это слова, которые передают отношение говорящего к сообщаемому, указывают на последовательность положения мыслей, на источник сообщения."
        ],
        correctAnswers: [1], // Только первый вариант правильный

    },{
        question: "2. Какой раздел лингвистики занимается изучением фразеологизмов?",
        answers: [
            "морфология",
            "фразеология",
            "фонетика"
        ],
        correctAnswers: [1], // Только первый вариант правильный

    },{
        question: "3.Значение фразеологизма \"бить баклуши\"?",
        answers: [
            "хвастаться",
            "создавать музыку",
            "обманывать",
            "преувеличивать",
            "бездельничать"
        ],
        correctAnswers: [4], // Только первый вариант правильный

    },{
        question: "4.Значение фразеологизма \"зарубить на носу\"?",
        answers: [
            "хвастаться",
            "запомнить",
            "обманывать",
            "наказать",
            "бездельничать"
        ],
        correctAnswers: [1], // Только первый вариант правильный

    },{
        question: "5.Значение фразеологизма \"гол как сокол\"?",
        answers: [
            "бедный",
            "злобный",
            "щедрый",
            "человек без дела",
            "лентяй"
        ],
        correctAnswers: [0], // Только первый вариант правильный

    },{
        question: "6. Верно соедините фразеологизм и его значение",
        answers: [
            "1. Как в воду опущенные.             " +
            "2. Во всю прыть.                                 " +
            "3. Засучив рукава.                           " +
            "4. Мартышкин труд                         " +
            "5. Во все горло.                               " +
            "6. Белены объелся.                            " +
            "7. Диву даваться.                     " +
            "8. Собаку съел.                               ",
            "1. Приобрёл опыт\n" +
            "2. Грустный человек\n" +
            "3.   Удивляться\n" +
            "4.  Быстро\n" +
            "5.      Безумец\n" +
            "6. Усердно \n" +
            "7. Бесполезное дело\n" +
            "8. Громко\n",
        ],

    },{
        question: "7. Выделите фразеологизмы из предложений.",
        answers: [
            "1. Мы это ещё в третьем классе проходили. Ты что с луны свалился? (Н.Носов.) 2. Живёт тот богатырь за тридевять земель. 3. Виталий быстро понял, что попал впросак. 4. Каштанка бросилась вперёд, потом назад, ещё раз перебежала дорогу, но Столяров точно сквозь землю провалился (А.Чехов.) "
        ],

    }
];
const Page = () => {
    return (
        <div>
            <Questions num={'второй'} questions={questionData} link={'/frazelogus'}/>

        </div>
    );
};

export default Page;
