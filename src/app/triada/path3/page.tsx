import React from 'react';
import Questions from "@/app/components/Questions";

const questionData = [
    {
        question: "1.\tПо морфологическим признакам порядковые числительные изменяются …",
        answers: [
            "o\tтолько по падежам",
            "o\tпо родам, числам и падежам",
            "o\tтолько по числам",
        ],
        correctAnswers: [1], // Правильные ответы - первый и второй вариант
    },
    {
        question: "2.\tПорядковые числительные согласуются с существительным в роде, числе и падеже, как …",
        answers: [
            "o\tприлагательные",
            "o\tне согласуются",
            "o\tместоимение",
        ],
        correctAnswers: [0], // Правильные ответы - первый и третий вариант
    },
    {
        question: "3.\tПорядковые числительные в предложении являются …",
        answers: [
            "o\tопределением или обстоятельством",
            "o\tдополнением",
            "o\tсказуемым",
        ],
        correctAnswers: [1], // Правильные ответы - первый и второй вариант
    },
    {
        question: "4.\tПорядковые числительные делятся на …",
        answers: [
            "o\tпростые и сложные",
            "o\tсложные и составные",
            "o\tпростые и составные",
        ],
        correctAnswers: [1], // Правильные ответы - первый и второй вариант
    },
    {
        question: "5.\tПри склонении сложных порядковых числительных первая часть числительного всегда имеет форму …",
        answers: [
            "o\tдательного падежа",
            "o\tродительного падежа",
            "o\tименительного падежа",
        ],
        correctAnswers: [1], // Правильные ответы - первый и второй вариант
    },
    {
        question: "6.\tПри склонении сложных порядковых числительных вторая часть числительного имеет окончание …",
        answers: [
            "o\tкоторое зависит от формы существительного",
            "o\tкоторое зависит от формы прилагательного",
            "o\tкоторое зависит от формы глагола",
        ],
        correctAnswers: [0], // Правильные ответы - первый и второй вариант
    },
    {
        question: "7.\tВ составных порядковых числительных склоняется …",
        answers: [
            "o\tтолько первое слово",
            "o\tне изменяется",
            "o\tтолько последнее слово ",
        ],
        correctAnswers: [2], // Правильные ответы - первый и второй вариант
    },
    {
        question: "8.\tУкажите сложное порядковое числительное",
        answers: [
            "o\tдвухтысячный (год)",
            "o\tсемеро (козлят)",
            "o\tдве тысячи восьмой (год)",
        ],
        correctAnswers: [0], // Правильные ответы - первый и второй вариант
    },
    {
        question: "9.\tУкажите составное порядковое числительное",
        answers: [
            "o\tдвухтысячный (год)",
            "o\tсемеро (козлят)",
            "o\tдве тысячи восьмой (год)",
        ],
        correctAnswers: [2], // Правильные ответы - первый и второй вариант
    },
    {
        question: "10.\tНе является сложным порядковым числительным",
        answers: [
            "o\tдвухтысячный (год)",
            "o\tсемеро (козлят)",
            "o\tдве тысячи восьмой (год)",
        ],
        correctAnswers: [2], // Правильные ответы - первый и второй вариант
    },
    {
        question: "Задание",
        answers: [
            "\"В саду бабушки Гали было три грядки с овощами. На первой грядке росли пять редисок, на второй — десять морковок, а на третьей — двенадцать помидоров. Однажды бабушка решила собрать урожай. Она собрала половину редисок, три четверти морковок и все помидоры. Когда она закончила, у неё в корзине оказалось восемнадцать овощей. Бабушка улыбнулась и сказала: «Вот так, у меня целая корзина вкусняшек для ужина!»\","
        ]
    },
    {
        question: "11. Сколько числительных вы видите в тексте?",
        answers: [
            "6",
            "7",
            "8",
            "3",
            "Нет числительных",
        ],
        correctAnswers: [2], // Правильные ответы - первый и второй вариант
    },
    {
        question: "12. В каком предложении присутствует дробное числительное?",
        answers: [
            "1",
            "2",
            "3",
            "4",
            "7",
        ],
        correctAnswers: [3], // Правильные ответы - первый и второй вариант
    },
    {
        question: "13. Сколько в тексте количественных числительных?",
        answers: [
            "7",
            "6",
            "5",
            "2",
            "Нет количественных числительных",
        ],
        correctAnswers: [2], // Правильные ответы - первый и второй вариант
    },
    {
        question: "14.Сколько в тексте порядковых числительных?",
        answers: [
            "3",
            "5",
            "6",
            "1",
            "Нет количественных числительных",
        ],
        correctAnswers: [0], // Правильные ответы - первый и второй вариант
    },
];
const Page = () => {
    return (
        <div>
            <Questions num={'третьего'} questions={questionData} link={'/triada'}/>

        </div>
    );
};

export default Page;
