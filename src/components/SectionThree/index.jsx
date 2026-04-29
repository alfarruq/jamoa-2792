import './style.css'
import icon from './assets/Icon.svg'

function SectionThree() {
    return (
        <div className=' max-w-300 m-auto'>
            <div>
                <div className=' flex justify-between pt-15.75'>
                    <h1 className=' text-[#2C2B35] text-[28px]'>Популярные продукты</h1>
                    <button className=' text-[#F7F8F8] text-[16px] w-41.25 bg-[#52E259] rounded-[70px] py-3'>Все продукты</button>
                </div>
                <div className=' flex gap-5 pt-10 pb-15 '>
                    <div style={{ boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.05)' }} className='rounded-[40px] py-10 px-10 w-106 bg-[#FFFFFF] '>
                        <div className=' flex justify-between' >
                            <p className=' text-[20px] text-[#2C2B35]'>1С-Товары 300</p>
                            <button className=' w-26.15 text-[#43A548] text-[16px] border border-[#43A548] rounded-[70px] px-2.5'>400 руб/мес</button>
                        </div>
                        <p className='text-[#838684] text-[14px] pt-5'>Прогноз спроса с использованием сервера прогнозирования (ограничение – 300 товаров)
                            Контроль товарных остатков и автоматический заказ товаров (ограничение – 300 товаров)
                            Анализ работы розничного магазина или сети магазинов
                            Рекомендации по управлению ассортиментом (1С-Ритейл Чекер)</p>
                        <div className=' flex gap-1 items-center justify-end pt-10'>
                            <p className=' text-[#43A548] text-[14px]'>Подробнее</p>
                            <img src={icon} alt="logo" />
                        </div>
                    </div>
                    <div style={{ boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.05)' }} className='rounded-[40px] py-10 px-10 w-106 bg-[#FFFFFF] '>
                        <div className=' flex justify-between' >
                            <p className=' text-[20px] text-[#2C2B35]'>1С-Товары 30000</p>
                            <button className=' w-26.15 text-[#43A548] text-[16px] border border-[#43A548] rounded-[70px] px-2.5'>1 700 руб/мес</button>
                        </div>
                        <p className='text-[#838684] text-[14px] pt-5'>Прогноз спроса с использованием сервера прогнозирования (ограничение – 30000 товаров)
                            Контроль товарных остатков и автоматический заказ товаров (ограничение – 30000 товаров)
                            Анализ работы розничного магазина или сети магазинов
                            Рекомендации по управлению ассортиментом (1С-Ритейл Чекер)
                        </p>
                        <div className=' flex gap-1 items-center justify-end pt-10'>
                            <p className=' text-[#43A548] text-[14px]'>Подробнее</p>
                            <img src={icon} alt="logo" />
                        </div>
                    </div>
                    <div style={{ boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.05)' }} className='rounded-[40px] py-10 px-10 w-106 bg-[#FFFFFF] '>
                        <div className=' flex justify-between' >
                            <p className=' text-[20px] text-[#2C2B35]'>1С-Товары</p>
                            <button className=' w-26.15 text-[#43A548] text-[16px] border border-[#43A548] rounded-[70px] px-2.5'>4 500 руб/мес</button>
                        </div>
                        <p className='text-[#838684] text-[14px] pt-5'>Прогноз спроса с использованием сервера прогнозирования
                            Контроль товарных остатков и автоматический заказ товаров
                            Анализ работы розничного магазина или сети магазинов
                            Рекомендации по управлению ассортиментом (1С-Ритейл Чекер)
                        </p>
                        <div className=' flex gap-1 items-center justify-end pt-10'>
                            <p className=' text-[#43A548] text-[14px]'>Подробнее</p>
                            <img src={icon} alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
            <div className=' flex gap-27.25'>
                <div>
                    <p className=' text-[#2C2B35] text-[26px]'>Предоставляем техподдержку для наших клиентов</p>
                    <p className='text-[#2C2B35] text-[16px] w-161.5 pt-10 pb-15.5'>
                        Если у вас возникнут сложности с использованием 1С-Товары, обращайтесь в нашу техподдержку. Техподдержка работает круглосуточно. Вы можете связаться с нами любыми удобными для Вас способами. При использовании техпомощи просим соблюдать
                        <span className=' text-[#327F36]'>правила обращения.</span>
                    </p>
                </div>
                <div className=' w-119.25 bg-[#EBF5EB] rounded-[40px] py-10  px-10'>
                    <p className=' text-[#2C2B35] text-[18px]'>Вы можете связаться с нами через <span className=' text-[#327F36]'>1С-Коннект</span> и <span className=' text-[#327F36]'>1С-Товары. Поддержка пользователей</span></p>
                   <div className=' flex gap-15'>
                    <div>
                        <p className='text-[#6F7973] text-[14px] pt-5'>Телефон техподдержки</p>
                        <p className=' text-[#327F36] text-[20px] pt-2.5'>+7-495-111-00-10</p>
                    </div>
                    <div>
                        <p className='text-[#6F7973] text-[14px] pt-5'>E-mail техподдержки</p>
                        <p className=' text-[#327F36] text-[20px] pt-2.5'>info@rozn.info</p>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default SectionThree;