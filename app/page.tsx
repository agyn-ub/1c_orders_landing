export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Навигационная панель */}
      <nav className="bg-white shadow-md dark:bg-gray-900 sticky top-0 z-50 animate-slideDown">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              <span className="text-gray-900">1C</span>Мобайл
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-900 font-medium hover:text-gray-700 transition-colors dark:text-gray-300">Возможности</a>
            <a href="#how-it-works" className="text-gray-900 font-medium hover:text-gray-700 transition-colors dark:text-gray-300">Как это работает</a>
            <a href="#benefits" className="text-gray-900 font-medium hover:text-gray-700 transition-colors dark:text-gray-300">Преимущества</a>
            <a href="#contact" className="text-gray-900 font-medium hover:text-gray-700 transition-colors dark:text-gray-300">Связаться</a>
            <div className="flex items-center text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+77077592655" className="font-medium text-gray-900 hover:text-gray-700 transition-colors">+7 (707) 759-26-55</a>
            </div>
          </div>
        </div>
      </nav>
      {/* Главный баннер */}
        <section className="bg-gradient-to-br from-accent via-accent to-accent/90 py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 animate-fadeIn">
          <div className="absolute inset-0 bg-pattern-grid"></div>
        </div>
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 animate-slideInLeft">
            <div className="bg-white/20 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/30">
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-gray-900">
                Управляйте заказами в{" "}
                <span className="text-gray-900 bg-white px-3 py-1 rounded-lg animate-pulse inline-block shadow-lg">
                  1C
                </span>{" "}
                прямо с телефона
              </h1>
              <p className="text-lg md:text-xl mb-10 text-gray-900 leading-relaxed">
                Позвольте клиентам делать заказы напрямую через мобильное приложение. Заказы мгновенно попадают в вашу базу данных 1C, ускоряя работу предприятия на{" "}
                <span className="font-bold text-gray-900">30%</span> и более.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-medium hover:bg-opacity-95 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Начать сейчас
                </button>
                <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Узнать больше
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-slideInRight">
            <div className="relative w-[320px] h-[640px] md:w-[380px] md:h-[760px] animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[3rem] blur-2xl animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative bg-black rounded-[3rem] shadow-2xl w-[300px] h-[600px] md:w-[360px] md:h-[720px] overflow-hidden">
                  {/* Phone frame details */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-10 flex items-center justify-center">
                    <div className="w-16 h-4 bg-gray-900 rounded-full"></div>
                  </div>
                  {/* Screen content */}
                  <div className="absolute inset-[2px] rounded-[2.9rem] overflow-hidden bg-white dark:bg-gray-800">
                    <div className="bg-gradient-to-r from-primary to-secondary h-28 flex items-center justify-center shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-900">Мобильный заказ</h3>
                    </div>
                    <div className="p-6 space-y-4">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-600">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium text-lg text-gray-900 dark:text-gray-100">Товар #{item}</h4>
                            <span className="text-gray-900 font-medium">₸ 2,500</span>
                          </div>
                          <div className="flex justify-between items-center text-sm text-gray-900 dark:text-gray-300">
                            <p>Количество: {6 - item} шт.</p>
                            <p className="text-emerald-600 font-medium">В наличии</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Volume and power buttons */}
                  <div className="absolute -left-1 top-24 w-1 h-12 bg-gray-700 rounded-l-lg"></div>
                  <div className="absolute -left-1 top-40 w-1 h-12 bg-gray-700 rounded-l-lg"></div>
                  <div className="absolute -right-1 top-32 w-1 h-8 bg-gray-700 rounded-r-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Возможности */}
      <section id="features" className="section bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fadeInUp">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900 animate-scale">
              Возможности приложения
            </h2>
            <p className="text-base text-gray-900 dark:text-gray-400">
              Современное решение для автоматизации процесса заказов и управления бизнесом
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-fadeInUp animation-delay-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg animate-spin-slow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Интеграция каталога</h3>
              <p className="text-gray-900 dark:text-gray-300 mb-4">
                Наши специалисты помогут интегрировать ваш каталог товаров из 1С в мобильное приложение. Автоматическая синхронизация:
              </p>
              <ul className="text-gray-900 dark:text-gray-400 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Цены и скидки
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Остатки на складе
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Характеристики товаров
                </li>
              </ul>
            </div>
            <div className="bg-gray-light dark:bg-gray-800 p-6 rounded-xl shadow-sm animate-fadeInUp animation-delay-200">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Оформление заказа</h3>
              <p className="text-gray-900 dark:text-gray-300">
                Удобное оформление заказа с возможностью выбора способа доставки и оплаты.
              </p>
            </div>
            <div className="bg-gray-light dark:bg-gray-800 p-6 rounded-xl shadow-sm animate-fadeInUp animation-delay-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">История заказов</h3>
              <p className="text-gray-900 dark:text-gray-300">
                Отслеживание статуса заказов и просмотр истории покупок в личном кабинете.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Как это работает */}
      <section id="how-it-works" className="section bg-gradient-to-r from-accent via-primary/10 to-accent overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-200 animate-scale">
            Как это работает
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-fadeInUp animation-delay-100 hover:scale-110 transition-transform duration-300">
              <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md animate-bounce">
                <span className="text-2xl font-bold text-gray-900">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Скачайте приложение</h3>
              <p className="text-gray-900 dark:text-gray-300">
                Доступно для iOS и Android устройств
              </p>
            </div>
            <div className="text-center animate-fadeInUp animation-delay-100 hover:scale-110 transition-transform duration-300">
              <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md animate-bounce">
                <span className="text-2xl font-bold text-gray-900">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Зарегистрируйтесь</h3>
              <p className="text-gray-900 dark:text-gray-300">
                Создайте учетную запись или войдите в существующую
              </p>
            </div>
            <div className="text-center animate-fadeInUp animation-delay-100 hover:scale-110 transition-transform duration-300">
              <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md animate-bounce">
                <span className="text-2xl font-bold text-gray-900">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Выберите товары</h3>
              <p className="text-gray-900 dark:text-gray-300">
                Просмотрите каталог и добавьте товары в корзину
              </p>
            </div>
            <div className="text-center animate-fadeInUp animation-delay-100 hover:scale-110 transition-transform duration-300">
              <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md animate-bounce">
                <span className="text-2xl font-bold text-gray-900">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Оформите заказ</h3>
              <p className="text-gray-900 dark:text-gray-300">
                Заказ автоматически попадет в базу 1C
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section id="benefits" className="section bg-gradient-to-br from-white via-accent/10 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fadeInUp">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900 animate-scale">
              Преимущества
            </h2>
            <p className="text-base text-gray-900 dark:text-gray-400">
              Оптимизируйте работу вашего бизнеса с помощью нашего решения
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-fadeInUp animation-delay-100">
              <div className="flex items-start">
                <div className="mr-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 text-gray-900">Прямое оформление заказов</h3>
                  <p className="text-base text-gray-900 dark:text-gray-300 mb-4">
                    Клиенты делают заказы напрямую без использования WhatsApp, Telegram и других мессенджеров. Никаких посредников и торговых представителей.
                  </p>
                  <ul className="text-gray-900 dark:text-gray-400 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Мгновенная отправка заказа
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Без ошибок коммуникации
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-fadeInUp animation-delay-100">
              <div className="flex items-start">
                <div className="mr-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Автоматизация процессов</h3>
                  <p className="text-gray-900 dark:text-gray-300 mb-4">
                    Операторам 1С больше не нужно вручную вводить заказы - все данные поступают автоматически, что исключает ошибки при вводе.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-fadeInUp animation-delay-100">
              <div className="flex items-start">
                <div className="mr-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Эффективная логистика</h3>
                  <p className="text-gray-900 dark:text-gray-300 mb-4">
                    Логисты получают все заказы с утра, что позволяет оптимально планировать маршруты и ускорять доставку товаров.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-fadeInUp animation-delay-100">
              <div className="flex items-start">
                <div className="mr-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Ускорение бизнес-процессов</h3>
                  <p className="text-gray-900 dark:text-gray-300 mb-4">
                    Автоматизация процессов и исключение посредников ускоряет работу предприятия минимум на 30%, повышая эффективность всех отделов.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="section bg-gradient-to-br from-white via-primary/5 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-200 animate-scale">
            Связаться с нами
          </h2>
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-lg animate-fadeInUp animation-delay-200 hover:shadow-2xl transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-200 animate-fadeInUp animation-delay-300">Контактная информация</h3>
                <div className="flex items-center mb-4 text-gray-900 dark:text-gray-300 hover:scale-105 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">+7 (707) 759-26-55</span>
                </div>
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Dastanashimkhan@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">г. Астана, ул. Пушкина, д. 2</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-200">Оставьте заявку</h3>
                <form>
                  <div className="mb-4">
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400" 
                    />
                  </div>
                  <div className="mb-4">
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400" 
                    />
                  </div>
                  <div className="mb-4">
                    <textarea 
                      placeholder="Сообщение" 
                      rows={4} 
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                    ></textarea>
                  </div>
                  <button type="submit" className="bg-primary hover:bg-primary-dark text-gray-100 rounded-lg px-6 py-2 w-full transition-all duration-300 hover:scale-105 hover:shadow-lg animate-pulse">Отправить</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-8 animate-fadeIn">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">1CМобайл</h3>
              <p className="text-gray-300">
                Мобильное приложение для отправки заказов напрямую в базу данных 1C.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Навигация</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Главная</a></li>
                <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Возможности</a></li>
                <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">Как это работает</a></li>
                <li><a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Преимущества</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Правовая информация</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Условия использования</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Лицензионное соглашение</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} 1CМобайл. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
