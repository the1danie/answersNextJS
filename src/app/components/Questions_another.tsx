"use client"; // Add this at the top of the file

import React, { useState } from 'react';
import Link from 'next/link';

interface Question {
    question: string;
    description?: string; // Сделаем поле необязательным
    answers: string[]; // Варианты ответов
    correctAnswers?: number[]; // Поле теперь необязательное
    size?: string,
}

interface QuestionsProps {
    num: string;
    questions: Question[];
    link: string
}

const Questions: React.FC<QuestionsProps> = ({ num, questions, link, size}) => {

    // Состояние для текущего вопроса
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<number[][]>(new Array(questions.length).fill([])); // для хранения выбранных ответов
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0); // Счетчик правильных ответов
    const [feedback, setFeedback] = useState<string | null>(null); // Отображение обратной связи

    const handleAnswerChange = (questionIndex: number, answerIndex: number) => {
        // Копируем массив с выбранными ответами
        const updatedAnswers = [...selectedAnswers];
        const currentAnswers = updatedAnswers[questionIndex];

        if (currentAnswers.includes(answerIndex)) {
            // Если ответ уже выбран, убираем его
            updatedAnswers[questionIndex] = currentAnswers.filter((index) => index !== answerIndex);
        } else {
            // Если ответ не выбран, добавляем его
            updatedAnswers[questionIndex] = [...currentAnswers, answerIndex];
        }

        setSelectedAnswers(updatedAnswers);
    };

    const checkAnswer = (questionIndex: number) => {
        const correctAnswers = questions[questionIndex].correctAnswers;
        const userAnswers = selectedAnswers[questionIndex];

        if (correctAnswers) { // Проверка на наличие correctAnswers
            const isCorrect = correctAnswers.every((ans) => userAnswers.includes(ans)) && userAnswers.length === correctAnswers.length;

            if (isCorrect) {
                setCorrectAnswersCount(prev => prev + 1);
                setFeedback('Правильный ответ!');
            } else {
                setFeedback('Неправильный ответ!');
            }
        } else {
            setFeedback('Правильный ответ не задан для этого вопроса.');
        }

        // Скрыть сообщение после 2 секунд
        setTimeout(() => setFeedback(null), 2000);
    };


    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            scrollToQuestion(currentQuestionIndex + 1);
        }
    };

    const prevQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            scrollToQuestion(currentQuestionIndex - 1);
        }
    };

    // Функция прокрутки к текущему вопросу
    const scrollToQuestion = (index: number) => {
        const questionElement = document.getElementById(`question-${index}`);
        if (questionElement) {
            questionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="flex flex-col justify-start items-center">
            <h1 className="mt-4 text-white text-5xl font-bold uppercase text-center">Путь {num} </h1>
            <div className="h-screen flex items-center justify-center">
                <div className="flex flex-col justify-start items-start bg-contain bg-center bg-no-repeat w-[1200px] h-[750px]" style={{ backgroundImage: "url('/images/image.svg')" }}>
                    {/* Отображение текущего вопроса */}
                    <div id={`question-${currentQuestionIndex}`} key={currentQuestionIndex} className="mt-28 ml-20">
                        <p     className={`text-black font-monSemiBold ${questions[currentQuestionIndex].size || 'text-3xl'}`}
                        >{questions[currentQuestionIndex].question}</p>

                        <div className="flex flex-col pr-12">
                            {questions[currentQuestionIndex].answers.map((answer, answerIndex) => (
                                <div key={answerIndex} className="flex items-center mt-4">
                                    <input
                                        type="checkbox"
                                        id={`question-${currentQuestionIndex}-answer-${answerIndex}`}
                                        checked={selectedAnswers[currentQuestionIndex].includes(answerIndex)}
                                        onChange={() => handleAnswerChange(currentQuestionIndex, answerIndex)}
                                    />
                                    <label
                                        htmlFor={`question-${currentQuestionIndex}-answer-${answerIndex}`}
                                        className="ml-2 text-lg text-black"
                                    >
                                        {answer}
                                    </label>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" onClick={() => checkAnswer(currentQuestionIndex)}>
                                Проверить ответ
                            </button>
                        </div>

                        {feedback && (
                            <div className="mt-4 text-lg font-bold text-black">
                                {feedback}
                            </div>
                        )}

                        <div className="flex gap-3 max-w-96 justify-between mt-6">
                            <button
                                className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
                                onClick={prevQuestion}
                                disabled={currentQuestionIndex === 0}
                            >
                                Предыдущий вопрос
                            </button>
                            {currentQuestionIndex === questions.length - 1 ? (
                                num === "четвертый" ? (
                                    <Link href={link}>
                                        <button className="bg-red-500 text-white py-4 px-8 rounded-md hover:bg-red-600">
                                            Завершить тест
                                        </button>
                                    </Link>
                                ) : (
                                    <Link href={link}>
                                        <button className="bg-green-500 text-white py-4 px-8 rounded-md hover:bg-green-600">
                                            Перейти к выбору пути
                                        </button>
                                    </Link>
                                )
                            ) : (
                                <button
                                    className="bg-gray-500 text-white py-4 px-8 rounded-md hover:bg-gray-600"
                                    onClick={nextQuestion}
                                    disabled={currentQuestionIndex === questions.length - 1}
                                >
                                    Следующий вопрос
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Показ звездочки на последнем правильном ответе */}
                    {currentQuestionIndex === questions.length - 1 && correctAnswersCount === questions.length && (
                        <div className="text-3xl text-yellow-500 mt-6 ml-20">
                            ⭐ Поздравляем, вы ответили правильно на все вопросы!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Questions;
