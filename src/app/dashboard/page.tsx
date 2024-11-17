import Image from "next/image";
import Link from "next/link"; // Импортируем Link для переходов

export default function Home() {
    const greetingsContent = "Привет! \n" +
        "Я - Литрус и вы попали в мою вселенную, посвященную изучению русского языка! \n" +
        "Здесь вас ждут увлекательные приключения и интересные задания,  которые помогут освоить язык легко и весело. \n" +
        "Я - ваш верный спутник в этом путешествии. Буду делиться с вами секретами грамматики, рассказывать увлекательные истории и помогать решать задачи. Вместе мы будем открывать удивительный мир русского языка и культуры! \n" +
        "Приготовьтесь к увлекательным урокам, играм и интересным материалам.  Учиться — это здорово, а со мной — ещё веселее!\n" +
        "Начнем наше приключение прямо сейчас!";

    return (
        <div className="min-w-screen flex flex-col justify-between">
            <div className="flex flex-col items-center mt-12">
                {/* Заголовок "Галактический квест" */}
                <h1 className="font-monRegular text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                    Галактический квест
                </h1>
            </div>

            {/* Блок с изображениями */}
            <div className="flex flex-row justify-center items-center gap-5 mt-4">
                {/* Первое изображение */}
                <div className="w-full sm:w-96 md:w-[700px] lg:w-[700px]">
                    <Image
                        src="/images/UnionOne.svg"
                        alt="Union one"
                        width={450}
                        height={450}
                        className="w-full"
                    />
                </div>

                <div className="w-full sm:w-96 md:w-[900px] lg:w-[900px]">
                    <Image
                        src="/images/TextWithIcon.svg"
                        alt='Icon'
                        width={450}
                        height={450}
                        className="w-full"
                    />
                </div>
            </div>
            <div className="flex flex-row justify-between items-center p-20"> {/* Контейнер для кнопки и текста */}
                <h1 className="text-white font-monBold text-3xl">
                    РАЗДЕЛ НАЧАЛО
                </h1>
                <Link href="../planet"
                      className="px-9 py-6 bg-blue-500 text-white rounded-lg text-3xl hover:bg-blue-600 transition-colors mb-4">
                    Перейти на следующую страницу
                </Link>
            </div>
        </div>
    );
}
