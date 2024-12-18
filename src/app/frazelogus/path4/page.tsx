import React from 'react';
import Questions from "@/app/components/Questions_another";

const questionData = [
    {
        question: "1. Прочитайте текст. Вставьте пропущенные буквы. Подберите проверочные слова, В выделенном предложении расставьте знаки препинания. В данном тексте найдите фразеологизмы. Объясните их значение. Подберите синонимы к данным фразеологизмам. ",
        answers: [
            "1.Меня зовут Жансерик, а это моя семья! 2. Папа, мама, старший брат, мла…шая сестра и я. 3. Папу зовут Жаслан. 4. Он р…ботает стр…ителем. 5. Сейчас он строит пр...дорожный магазин. 6. Часто о нем говорят, что у него золотые руки. 7. Мама, Жазерке, домох…зяйка. 8. Она очень заботливая и нежная. 9. А как готовит… пальчики оближешь! 10. Мой брат, Султан, студент. 11. В колледже, так же, как и когда-то в школе, он учит…ся спустя рукава.12. Родители часто ругают его за пл…хое поведение. 13. Самая маленькая и пр…милая в нашей семье Айна. 14. Для своих трех лет она очень умная девочка. 15. Когда Айна р…дилась, я был на седьмом небе от счастья, так как мечтало сестре. 16. Сам я учусь в 6 кла…е. 17. Я так сильно хочу учиться, что каждое утро сломя голову бегу в школу. 18. И я не пр…увеличиваю! 19.Свободное время я люблю проводить со своей семьей. 20.  На выходных мы встаем ни свет ни заря и идем на прогулку. 21. А потом устраиваем семейные застолья игры конкурсы совмес…ные просмотры фильмов и различных телепередач. 22. Я очень ценю такие моменты, ведь моя семья-это самое лу…шее, что есть у меня в жизни.",
        ],
    },
];
const Page = () => {
    return (
        <div>
            <Questions num={'четвертый'} questions={questionData} link={'/end'}/>

        </div>
    );
};

export default Page;
