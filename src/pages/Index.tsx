import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [donationAmount, setDonationAmount] = useState('');

  const topPlayers = [
    { rank: 1, name: 'ProPlayer_1', rating: 2850, games: 342, winRate: 68 },
    { rank: 2, name: 'CS2_Master', rating: 2720, games: 289, winRate: 65 },
    { rank: 3, name: 'HeadShot_King', rating: 2680, games: 412, winRate: 63 },
    { rank: 4, name: 'AimGod_777', rating: 2590, games: 298, winRate: 62 },
    { rank: 5, name: 'Sniper_Elite', rating: 2540, games: 356, winRate: 60 },
  ];

  const vipPlans = [
    {
      name: 'Silver',
      price: '299₽',
      period: 'месяц',
      features: ['Приоритет в очереди', 'Уникальный значок', 'Доступ к VIP-серверам', '10% скидка в магазине'],
      color: 'bg-gradient-to-br from-gray-400 to-gray-600',
    },
    {
      name: 'Gold',
      price: '599₽',
      period: 'месяц',
      features: ['Все из Silver', 'Эксклюзивные скины', 'Приоритетная поддержка', '20% скидка в магазине', 'Ранний доступ к обновлениям'],
      color: 'bg-gradient-gold',
      popular: true,
    },
    {
      name: 'Diamond',
      price: '999₽',
      period: 'месяц',
      features: ['Все из Gold', 'Личный тренер 1 час', 'Эксклюзивные турниры', '30% скидка в магазине', 'Персональная статистика', 'Кастомный ник'],
      color: 'bg-gradient-blue',
    },
  ];

  const quickDonations = [100, 300, 500, 1000, 2000];

  const socialLinks = [
    { name: 'Discord', icon: 'MessageCircle', url: '#', color: 'hover:text-[#5865F2]' },
    { name: 'VK', icon: 'Share2', url: '#', color: 'hover:text-[#0077FF]' },
    { name: 'Telegram', icon: 'Send', url: '#', color: 'hover:text-[#0088cc]' },
    { name: 'YouTube', icon: 'Youtube', url: '#', color: 'hover:text-[#FF0000]' },
  ];

  return (
    <div className="min-h-screen bg-[#0A0E1A]">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0A0E1A]/90 border-b border-[#2A2F3C]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <Icon name="Crosshair" size={24} className="text-[#0A0E1A]" />
              </div>
              <h1 className="text-2xl font-bold text-gradient-gold">CS2 Project</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#hero" className="text-gray-300 hover:text-[#FFB800] transition-colors">Главная</a>
              <a href="#donate" className="text-gray-300 hover:text-[#FFB800] transition-colors">Донат</a>
              <a href="#vip" className="text-gray-300 hover:text-[#FFB800] transition-colors">VIP</a>
              <a href="#ratings" className="text-gray-300 hover:text-[#FFB800] transition-colors">Рейтинг</a>
              <a href="#social" className="text-gray-300 hover:text-[#FFB800] transition-colors">Сообщество</a>
            </nav>
            <Button className="bg-gradient-gold text-[#0A0E1A] font-semibold hover:opacity-90">
              Играть сейчас
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D7EFF]/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-[#0D7EFF]/20 text-[#0D7EFF] border-[#0D7EFF]/30 text-sm px-4 py-1">
              <Icon name="Zap" size={14} className="mr-1 inline" />
              Сервер онлайн • 247 игроков
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Лучший <span className="text-gradient-gold">CS2</span> сервер<br />для настоящих про
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Уникальные режимы игры, честная статистика и активное сообщество. Присоединяйся к тысячам игроков!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-gold text-[#0A0E1A] font-bold text-lg px-8 hover-glow">
                <Icon name="Play" size={20} className="mr-2" />
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="border-[#2A2F3C] text-white hover:bg-[#1A1F2C] text-lg px-8">
                <Icon name="Info" size={20} className="mr-2" />
                Подробнее
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { icon: 'Users', label: 'Игроков онлайн', value: '247' },
              { icon: 'Trophy', label: 'Турниров', value: '15' },
              { icon: 'Star', label: 'Средний рейтинг', value: '2.4k' },
              { icon: 'Clock', label: 'Аптайм', value: '99.9%' },
            ].map((stat) => (
              <Card key={stat.label} className="bg-[#1A1F2C] border-[#2A2F3C] hover-glow">
                <CardContent className="p-6 text-center">
                  <Icon name={stat.icon as any} size={32} className="text-[#FFB800] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-20 bg-[#0A0E1A]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Поддержать <span className="text-gradient-gold">проект</span>
              </h2>
              <p className="text-gray-400 text-lg">Ваши донаты помогают развивать сервер и добавлять новый контент</p>
            </div>

            <Card className="bg-[#1A1F2C] border-[#2A2F3C]">
              <CardHeader>
                <CardTitle className="text-2xl">Сделать донат</CardTitle>
                <CardDescription>Выберите сумму или введите свою</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {quickDonations.map((amount) => (
                    <Button
                      key={amount}
                      variant="outline"
                      className="h-14 text-lg font-semibold border-[#2A2F3C] hover:border-[#FFB800] hover:text-[#FFB800]"
                      onClick={() => setDonationAmount(amount.toString())}
                    >
                      {amount}₽
                    </Button>
                  ))}
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Или введите свою сумму</label>
                  <Input
                    type="number"
                    placeholder="Сумма в рублях"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    className="h-14 text-lg bg-[#0A0E1A] border-[#2A2F3C] focus:border-[#FFB800]"
                  />
                </div>

                <Button className="w-full h-14 text-lg bg-gradient-gold text-[#0A0E1A] font-bold hover-glow">
                  <Icon name="Heart" size={20} className="mr-2" />
                  Отправить донат
                </Button>

                <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Icon name="Shield" size={16} />
                    <span>Безопасная оплата</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Check" size={16} />
                    <span>Мгновенное зачисление</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* VIP Section */}
      <section id="vip" className="py-20 bg-gradient-to-b from-[#0A0E1A] to-[#0D1420]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              VIP <span className="text-gradient-gold">привилегии</span>
            </h2>
            <p className="text-gray-400 text-lg">Получи максимум удовольствия от игры</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {vipPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative bg-[#1A1F2C] border-[#2A2F3C] hover-glow ${plan.popular ? 'scale-105 border-[#FFB800]' : ''}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-[#0A0E1A] font-bold">
                    Популярный
                  </Badge>
                )}
                <CardHeader>
                  <div className={`w-16 h-16 ${plan.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon name="Crown" size={32} className={plan.name === 'Gold' || plan.name === 'Silver' ? 'text-[#0A0E1A]' : 'text-white'} />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={20} className="text-[#FFB800] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full h-12 font-bold ${
                      plan.popular
                        ? 'bg-gradient-gold text-[#0A0E1A] hover-glow'
                        : 'bg-[#2A2F3C] text-white hover:bg-[#3A3F4C]'
                    }`}
                  >
                    Купить {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ratings Section */}
      <section id="ratings" className="py-20 bg-[#0A0E1A]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Топ <span className="text-gradient-gold">игроков</span>
              </h2>
              <p className="text-gray-400 text-lg">Лучшие из лучших на нашем сервере</p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8 bg-[#1A1F2C]">
                <TabsTrigger value="all">Все время</TabsTrigger>
                <TabsTrigger value="month">Месяц</TabsTrigger>
                <TabsTrigger value="week">Неделя</TabsTrigger>
                <TabsTrigger value="day">День</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {topPlayers.map((player) => (
                  <Card
                    key={player.rank}
                    className="bg-[#1A1F2C] border-[#2A2F3C] hover:border-[#FFB800]/50 transition-all hover-glow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl ${
                              player.rank === 1
                                ? 'bg-gradient-gold text-[#0A0E1A]'
                                : player.rank === 2
                                ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-[#0A0E1A]'
                                : player.rank === 3
                                ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white'
                                : 'bg-[#2A2F3C] text-white'
                            }`}
                          >
                            {player.rank}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{player.name}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                              <span className="flex items-center gap-1">
                                <Icon name="Target" size={14} />
                                {player.games} игр
                              </span>
                              <span className="flex items-center gap-1">
                                <Icon name="TrendingUp" size={14} />
                                {player.winRate}% побед
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-gradient-gold">{player.rating}</div>
                          <div className="text-sm text-gray-400">рейтинг</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {['month', 'week', 'day'].map((period) => (
                <TabsContent key={period} value={period} className="text-center py-12">
                  <Icon name="Trophy" size={48} className="text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">Статистика за этот период обновляется...</p>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section id="social" className="py-20 bg-gradient-to-b from-[#0A0E1A] to-[#0D1420]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Присоединяйся к <span className="text-gradient-gold">сообществу</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12">Следи за новостями, участвуй в турнирах и общайся с игроками</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="group"
                >
                  <Card className="bg-[#1A1F2C] border-[#2A2F3C] hover-glow">
                    <CardContent className="p-8 text-center">
                      <Icon
                        name={social.icon as any}
                        size={48}
                        className={`mx-auto mb-4 text-gray-400 transition-colors ${social.color}`}
                      />
                      <div className="font-semibold text-white">{social.name}</div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>

            <Card className="bg-[#1A1F2C] border-[#2A2F3C]">
              <CardHeader>
                <CardTitle className="text-2xl">Нужна помощь?</CardTitle>
                <CardDescription>Наша поддержка всегда на связи</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-[#0A0E1A] rounded-lg">
                    <Icon name="Mail" size={24} className="text-[#FFB800]" />
                    <div className="text-left">
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="font-semibold">support@cs2project.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-[#0A0E1A] rounded-lg">
                    <Icon name="MessageCircle" size={24} className="text-[#FFB800]" />
                    <div className="text-left">
                      <div className="text-sm text-gray-400">Discord</div>
                      <div className="font-semibold">CS2 Project Official</div>
                    </div>
                  </div>
                </div>
                <Button className="w-full h-12 bg-gradient-gold text-[#0A0E1A] font-bold hover-glow">
                  <Icon name="Headphones" size={20} className="mr-2" />
                  Связаться с поддержкой
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#2A2F3C] bg-[#0A0E1A]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center">
                <Icon name="Crosshair" size={18} className="text-[#0A0E1A]" />
              </div>
              <span className="text-gray-400">© 2026 CS2 Project. Все права защищены.</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#FFB800] transition-colors">Правила сервера</a>
              <a href="#" className="hover:text-[#FFB800] transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-[#FFB800] transition-colors">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
