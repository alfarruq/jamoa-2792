const retailData = [
    {
        title: "Получайте рекомендации по управлению ассортиментом",
        text: "Для кого: владельцев бизнеса, менеджеров по закупкам. Решение подскажет, какие товары приносят прибыль, а какие только занимают место на складе.",
        link: "Подробнее с 1С-Товары"
    },
    {
        title: "Прогнозируйте спрос и управляйте запасами",
        text: "Используйте встроенные алгоритмы прогнозирования, чтобы всегда иметь нужный запас товара без излишков.",
        link: "Подробнее с 1С-Товары"
    },
    {
        title: "Планируйте ассортимент без ошибок",
        text: "Узнайте, какие товары принесут вам прибыль и должны быть в ассортименте, а какие стоит вывести из оборота.",
        link: "Подробнее с 1С-Товары"
    },
    {
        title: "Контролируйте бизнес и повышайте прибыль",
        text: "Отслеживайте ключевые показатели вашего бизнеса в режиме реального времени из любой точки мира.",
        link: "Подробнее с 1С-Товары"
    }
];

const wholesaleData = [
    {
        title: "Планируйте поставки товаров в собственные или арендованные торговые точки",
        text: "Управляйте логистикой и распределением товаров между складами и магазинами максимально эффективно.",
        link: "Подробнее с 1С-Товары"
    },
    {
        title: "Повышайте эффективность обработки полученных заказов",
        text: "Автоматизируйте процесс приема и обработки заказов, чтобы сократить время ожидания для ваших клиентов.",
        link: "Подробнее с 1С-Товары"
    }
];

function SectionFour() {
    return (
<<<<<<< HEAD
        <div>
=======
        <div className="max-w-7xl mx-auto px-4 py-16 font-sans bg-[#F8FAFC]">

            {/* 1-Bo'lim: Retail */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
                <div className="space-y-8">
                    <h2 className="text-2xl font-semibold text-gray-800">Для розничных магазинов и ресторанов</h2>
                    <div className="space-y-6">
                        <img src="https://www.rozn.info/wp-content/uploads/2024/02/market-525x525.png" alt="Retail shop" className="w-full max-w-md rounded-lg" />

                    </div>
                </div>

                <div className="space-y-6">
                    {retailData.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow border border-gray-50">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.text}</p>
                            <a href="#" className="text-green-500 font-medium flex items-center hover:underline">
                                {item.link} <span className="ml-2">→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full h-px bg-gray-200 my-20"></div>

            {/* 2-Bo'lim: Wholesale */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                    <h2 className="text-2xl font-semibold text-gray-800 p-1.5">Для оптовых поставщиков</h2>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/078/905/560/small_2x/cartoon-color-supermarket-store-interior-inside-shop-concept-3d-isometric-view-line-elements-vector.jpg" alt="Wholesale" className="w-full max-w-md rounded-lg" />
                </div>

                <div className="space-y-6">
                    {wholesaleData.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow border border-gray-50">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.text}</p>
                            <a href="#" className="text-green-500 font-medium flex items-center hover:underline">
                                {item.link} <span className="ml-2">→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

>>>>>>> 234ff5dc52e230755442157001f2c55177e57382
        </div>
    );
}

export default SectionFour;