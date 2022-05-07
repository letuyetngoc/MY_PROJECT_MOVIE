
export default function CardFilm() {
    return (
        <section className=" body-font mx-2 my-2 md:w-auto sm:w-4/5 ">
            <div className="group">
                <div className=" flex flex-wrap justify-center border-gray-200 rounded-xl shadow-md ">
                    <div className=" relative h-full border-2 border-gray-200 border-opacity-60 rounded-xl overflow-hidden">
                        <img className=" relative lg:h-80 md:h-80 w-full object-cover object-center rounded-t-xl " src="https://picsum.photos/300" alt="film_card" />
                        <div className="absolute top-0 left-0 w-full h-full bg-dark opacity-0 group-hover:opacity-30 transform transition duration-500 rounded-t-xl"></div>
                        <div className='opacity-0 group-hover:opacity-100 cursor-pointer transform transition duration-500'>
                            <img className="absolute " src="./img/download.png" width={50} height={50} />
                        </div>

                        <div className="p-3 relative bg-gray-200">
                            <h1 className="title-font text-lg font-medium text-gray-900 hover:text-indigo-600 text-center">Tên Phim</h1>
                            <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 h-full w-full rounded-b-xl bg-gray-200 transform transition duration-500">
                                <button className="absolute bottom-2.5 left-2.5 text-center rounded-lg px-2 py-1 bg-indigo-600  text-white font-medium text-base hover:bg-indigo-700">Xem chi tiết</button>
                                <button className="absolute bottom-2.5 right-2.5 text-center rounded-lg px-2 py-1 bg-indigo-600 text-white font-medium text-base hover:bg-indigo-700">Đặt vé</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

