import Image from "next/image";
import Link from "next/link";
import Triada from '../triada/page';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            {/* Заголовок по центру сверху */}
            <div className="mt-10">
                <h1 className="text-white text-4xl md:text-6xl font-bold uppercase text-center">
                    Для нашего приключения выберите планету
                </h1>
            </div>

            {/* Блок с изображениями планет по центру страницы */}
            <div className="flex flex-row justify-center items-center gap-10">
                <Link href="../triada" className="flex flex-col items-center ">
                    <Image
                        src="/images/Triada.svg"
                        alt="Triada"
                        width={350}
                        height={350}
                        className="cursor-pointer hover:scale-110 transition-transform"
                    />
                    <span className="text-white text-6xl mt-4">Триада</span>
                </Link>

                {/* Планета 2: Фразелогус */}
                <Link href="../frazelogus" className="flex flex-col items-center mt-60">
                    <Image
                        src="/images/Frazelogus.svg"
                        alt="Frazelogus"
                        width={620}
                        height={620}
                        className="cursor-pointer hover:scale-110 transition-transform"
                    />
                    <span className="text-white text-6xl mt-4">Фразелогус</span>
                </Link>

                {/* Планета 3: Себелон */}
                <Link href="../sebelon" className="flex flex-col items-center mt-60">
                    <Image
                        src="/images/Sebelon.svg"
                        alt="Sebelon"
                        width={350}
                        height={350}
                        className="cursor-pointer hover:scale-110 transition-transform"
                    />
                    <span className="text-white text-6xl mt-4">Себелон</span>
                </Link>
            </div>
            <div
                className="flex flex-row justify-center items-center p-20 mt-10">
                <h1 className="text-white font-monBold text-3xl uppercase text-center">
                    За каждый пройденный уровень вы будете получать звездочку,   которая приравнивается к одному баллу.
                    Удачи!
                </h1>
            </div>

        </div>
    );
}
