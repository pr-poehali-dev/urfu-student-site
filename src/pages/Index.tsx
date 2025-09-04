import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-urfu-blue to-urfu-purple rounded-lg flex items-center justify-center">
              <Icon name="GraduationCap" className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-urfu-blue to-urfu-purple bg-clip-text text-transparent">
              УрФУ
            </span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#main" className="text-gray-600 hover:text-urfu-blue transition-colors">Главная</a>
            <a href="#admission" className="text-gray-600 hover:text-urfu-blue transition-colors">Поступление</a>
            <a href="#programs" className="text-gray-600 hover:text-urfu-blue transition-colors">Специальности</a>
            <a href="#dormitories" className="text-gray-600 hover:text-urfu-blue transition-colors">Общежития</a>
            <a href="#contacts" className="text-gray-600 hover:text-urfu-blue transition-colors">Контакты</a>
          </nav>
          <Button className="bg-urfu-blue hover:bg-urfu-blue/90">
            Подать заявление
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="main" className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-urfu-blue via-urfu-purple to-urfu-green bg-clip-text text-transparent">
            Добро пожаловать в УрФУ
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Один из ведущих университетов России. Здесь начинается твое будущее!
            Современное образование, передовые технологии и яркая студенческая жизнь.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-urfu-blue hover:bg-urfu-blue/90">
              <Icon name="FileText" className="w-5 h-5 mr-2" />
              Подать документы
            </Button>
            <Button variant="outline" size="lg" className="border-urfu-purple text-urfu-purple hover:bg-urfu-purple hover:text-white">
              <Icon name="Calendar" className="w-5 h-5 mr-2" />
              День открытых дверей
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-urfu-blue to-urfu-purple">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">35000+</div>
              <div className="text-sm opacity-90">Студентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Специальностей</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-sm opacity-90">Институтов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-sm opacity-90">Лет истории</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section id="programs" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Популярные направления
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-urfu-blue to-urfu-purple rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Code" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-urfu-blue">Информационные технологии</CardTitle>
                <CardDescription>Современные IT-специальности для цифрового будущего</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-urfu-blue/10 text-urfu-blue">Программирование</Badge>
                  <Badge className="bg-urfu-green/10 text-urfu-green">ИИ</Badge>
                  <Badge className="bg-urfu-purple/10 text-urfu-purple">Data Science</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Изучите самые востребованные технологии: Python, JavaScript, машинное обучение, 
                  разработка мобильных приложений.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Icon name="Users" className="w-4 h-4 mr-1" />
                  <span>1200+ студентов</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-urfu-green to-urfu-blue rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Cog" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-urfu-green">Инженерия</CardTitle>
                <CardDescription>Создавай будущее своими руками</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-urfu-green/10 text-urfu-green">Машиностроение</Badge>
                  <Badge className="bg-urfu-blue/10 text-urfu-blue">Энергетика</Badge>
                  <Badge className="bg-urfu-purple/10 text-urfu-purple">Робототехника</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Современное производство, инновационные материалы, 
                  автоматизация и промышленный дизайн.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Icon name="Users" className="w-4 h-4 mr-1" />
                  <span>800+ студентов</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-urfu-purple to-urfu-green rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Building" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-urfu-purple">Экономика и менеджмент</CardTitle>
                <CardDescription>Управляй бизнесом и финансами</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-urfu-purple/10 text-urfu-purple">MBA</Badge>
                  <Badge className="bg-urfu-green/10 text-urfu-green">Финансы</Badge>
                  <Badge className="bg-urfu-blue/10 text-urfu-blue">Маркетинг</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Стратегическое планирование, цифровая экономика, 
                  международный бизнес и стартапы.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Icon name="Users" className="w-4 h-4 mr-1" />
                  <span>900+ студентов</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Reviews */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Отзывы студентов
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-urfu-blue hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-urfu-blue/10 rounded-full flex items-center justify-center">
                    <span className="text-urfu-blue font-bold">АМ</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Анна Морозова</CardTitle>
                    <CardDescription>Информационные технологии, 3 курс</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-3">
                  {[1,2,3,4,5].map(star => (
                    <Icon key={star} name="Star" className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "Преподаватели на ИТ кафедре просто огонь! Актуальные технологии, 
                  стажировки в крупных компаниях. Уже работаю разработчиком на 3 курсе!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-urfu-green hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-urfu-green/10 rounded-full flex items-center justify-center">
                    <span className="text-urfu-green font-bold">МК</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Максим Козлов</CardTitle>
                    <CardDescription>Машиностроение, 4 курс</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-3">
                  {[1,2,3,4,5].map(star => (
                    <Icon key={star} name="Star" className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "Лаборатории оснащены современным оборудованием. Практики на реальных производствах. 
                  Диплом УрФУ открывает двери в лучшие компании!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-urfu-purple hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-urfu-purple/10 rounded-full flex items-center justify-center">
                    <span className="text-urfu-purple font-bold">ЕС</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Елена Степанова</CardTitle>
                    <CardDescription>Экономика, 2 курс</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-3">
                  {[1,2,3,4].map(star => (
                    <Icon key={star} name="Star" className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Icon name="Star" className="w-4 h-4 text-gray-300" />
                </div>
                <p className="text-gray-600 italic">
                  "Отличная программа обменов с европейскими вузами. 
                  Семестр в Германии стал незабываемым опытом. Много практики и реальных проектов."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section id="admission" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Как поступить
          </h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="step1">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-urfu-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">1</div>
                    Выбор специальности и подача документов
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-12 text-gray-600">
                    <p className="mb-4">
                      Изучите направления подготовки, проходные баллы прошлых лет и требования к ЕГЭ. 
                      Подать документы можно онлайн через наш портал или лично в приемной комиссии.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-urfu-blue">Необходимые документы:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Аттестат о среднем образовании</li>
                          <li>• Результаты ЕГЭ</li>
                          <li>• Паспорт</li>
                          <li>• Медицинская справка</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-urfu-green">Сроки подачи:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Бюджет: до 25 июля</li>
                          <li>• Договор: до 15 августа</li>
                          <li>• Магистратура: до 20 июля</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step2">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-urfu-green text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">2</div>
                    Участие в конкурсе и зачисление
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-12 text-gray-600">
                    <p className="mb-4">
                      Следите за рейтинговыми списками на сайте университета. Приоритет отдается абитуриентам 
                      с высокими баллами ЕГЭ и дополнительными достижениями.
                    </p>
                    <div className="bg-gradient-to-r from-urfu-blue/10 to-urfu-green/10 p-6 rounded-xl">
                      <h4 className="font-semibold mb-3 text-lg">Дополнительные баллы за:</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <Icon name="Trophy" className="w-8 h-8 text-urfu-blue mx-auto mb-2" />
                          <div className="font-medium">Олимпиады</div>
                          <div className="text-sm text-gray-600">до 10 баллов</div>
                        </div>
                        <div className="text-center">
                          <Icon name="Award" className="w-8 h-8 text-urfu-green mx-auto mb-2" />
                          <div className="font-medium">Золотая медаль</div>
                          <div className="text-sm text-gray-600">до 5 баллов</div>
                        </div>
                        <div className="text-center">
                          <Icon name="Heart" className="w-8 h-8 text-urfu-purple mx-auto mb-2" />
                          <div className="font-medium">Волонтерство</div>
                          <div className="text-sm text-gray-600">до 3 баллов</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="step3">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-urfu-purple text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">3</div>
                    Первые шаги студенческой жизни
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-12 text-gray-600">
                    <p className="mb-4">
                      После зачисления вас ждет увлекательная студенческая жизнь! 
                      Участвуйте в адаптационных программах и знакомьтесь с новыми друзьями.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-urfu-blue">Первая неделя:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <Icon name="Check" className="w-4 h-4 text-urfu-green mr-2" />
                            День первокурсника
                          </li>
                          <li className="flex items-center">
                            <Icon name="Check" className="w-4 h-4 text-urfu-green mr-2" />
                            Получение студенческого билета
                          </li>
                          <li className="flex items-center">
                            <Icon name="Check" className="w-4 h-4 text-urfu-green mr-2" />
                            Экскурсия по кампусу
                          </li>
                          <li className="flex items-center">
                            <Icon name="Check" className="w-4 h-4 text-urfu-green mr-2" />
                            Знакомство с куратором
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-urfu-purple">Возможности:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <Icon name="Users" className="w-4 h-4 text-urfu-blue mr-2" />
                            50+ студенческих организаций
                          </li>
                          <li className="flex items-center">
                            <Icon name="Music" className="w-4 h-4 text-urfu-blue mr-2" />
                            Творческие коллективы
                          </li>
                          <li className="flex items-center">
                            <Icon name="Dumbbell" className="w-4 h-4 text-urfu-blue mr-2" />
                            30+ спортивных секций
                          </li>
                          <li className="flex items-center">
                            <Icon name="Globe" className="w-4 h-4 text-urfu-blue mr-2" />
                            Программы обмена
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Dormitories */}
      <section id="dormitories" className="py-20 bg-gradient-to-r from-gray-50 to-white px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Общежития
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-urfu-blue">
                Комфортное проживание в студенческом городке
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-urfu-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Home" className="w-6 h-6 text-urfu-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Современные номера</h4>
                    <p className="text-gray-600 text-sm">
                      2-3 местные комнаты с мебелью, Wi-Fi, кухней и душевой на этаже. 
                      Постоянно проводится ремонт и обновление.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-urfu-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="w-6 h-6 text-urfu-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Безопасность 24/7</h4>
                    <p className="text-gray-600 text-sm">
                      Охрана, видеонаблюдение, пропускная система. 
                      Дежурные воспитатели всегда готовы помочь.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-urfu-purple/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="w-6 h-6 text-urfu-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Удобное расположение</h4>
                    <p className="text-gray-600 text-sm">
                      5-10 минут пешком до учебных корпусов. Рядом магазины, 
                      кафе, спортивные площадки и остановки транспорта.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-urfu-blue/5 to-urfu-green/5 rounded-xl">
                <h4 className="font-semibold mb-4 text-lg">Стоимость проживания:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-urfu-blue">от 2500₽</div>
                    <div className="text-sm text-gray-600">в месяц</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-urfu-green">90%</div>
                    <div className="text-sm text-gray-600">получают место</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="img/6de1980c-b950-4d2c-96eb-d5b64ed957f4.jpg" 
                alt="Комната в общежитии УрФУ" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Star" className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.8/5</span>
                  <span className="text-sm text-gray-600">рейтинг студентов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Контакты
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-urfu-blue">
                Приемная комиссия
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-urfu-blue/10 rounded-xl flex items-center justify-center">
                    <Icon name="MapPin" className="w-6 h-6 text-urfu-blue" />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-gray-600">г. Екатеринбург, ул. Мира, 19</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-urfu-green/10 rounded-xl flex items-center justify-center">
                    <Icon name="Phone" className="w-6 h-6 text-urfu-green" />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-gray-600">+7 (343) 375-44-44</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-urfu-purple/10 rounded-xl flex items-center justify-center">
                    <Icon name="Mail" className="w-6 h-6 text-urfu-purple" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">info@urfu.ru</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-urfu-red/10 rounded-xl flex items-center justify-center">
                    <Icon name="Clock" className="w-6 h-6 text-urfu-red" />
                  </div>
                  <div>
                    <div className="font-semibold">Время работы</div>
                    <div className="text-gray-600">Пн-Пт: 9:00-18:00</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="bg-urfu-blue hover:bg-urfu-blue/90 w-full">
                  <Icon name="Calendar" className="w-5 h-5 mr-2" />
                  Записаться на консультацию
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="img/d5b03e3c-b1d4-4ae6-b3fc-8bbf42c1f311.jpg" 
                alt="Здание УрФУ" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-urfu-blue mb-1">100+</div>
                  <div className="text-sm text-gray-600">лет истории</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-urfu-blue to-urfu-purple rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">УрФУ</span>
              </div>
              <p className="text-gray-400 text-sm">
                Уральский федеральный университет имени первого Президента России Б.Н. Ельцина
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Абитуриентам</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-urfu-blue transition-colors">Специальности</a></li>
                <li><a href="#" className="hover:text-urfu-blue transition-colors">Проходные баллы</a></li>
                <li><a href="#" className="hover:text-urfu-blue transition-colors">Олимпиады</a></li>
                <li><a href="#" className="hover:text-urfu-blue transition-colors">День открытых дверей</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Студентам</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-urfu-green transition-colors">Личный кабинет</a></li>
                <li><a href="#" className="hover:text-urfu-green transition-colors">Расписание</a></li>
                <li><a href="#" className="hover:text-urfu-green transition-colors">Общежития</a></li>
                <li><a href="#" className="hover:text-urfu-green transition-colors">Стипендии</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-urfu-blue/20 rounded-lg flex items-center justify-center hover:bg-urfu-blue/30 transition-colors">
                  <Icon name="MessageCircle" className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-urfu-green/20 rounded-lg flex items-center justify-center hover:bg-urfu-green/30 transition-colors">
                  <Icon name="Instagram" className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-urfu-purple/20 rounded-lg flex items-center justify-center hover:bg-urfu-purple/30 transition-colors">
                  <Icon name="Youtube" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 УрФУ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;