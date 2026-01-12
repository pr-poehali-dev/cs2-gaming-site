import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const VIP = () => {
  const [selectedPlan, setSelectedPlan] = useState('gold');
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const vipPlans = [
    {
      id: 'silver',
      name: 'Silver',
      basePrice: 299,
      features: [
        'Приоритет в очереди',
        'Уникальный значок Silver',
        'Доступ к VIP-серверам',
        '10% скидка в магазине',
        'Цветной ник в чате',
        'Доступ к команде /vip',
      ],
      color: 'bg-gradient-to-br from-gray-400 to-gray-600',
      icon: 'Shield',
    },
    {
      id: 'gold',
      name: 'Gold',
      basePrice: 599,
      features: [
        'Все из Silver',
        'Эксклюзивные скины оружия',
        'Приоритетная поддержка 24/7',
        '20% скидка в магазине',
        'Ранний доступ к обновлениям',
        'Бессмертие после смерти 3 сек',
        'Возможность выбора карты',
        'Уникальные эффекты убийств',
      ],
      color: 'bg-gradient-gold',
      popular: true,
      icon: 'Crown',
    },
    {
      id: 'diamond',
      name: 'Diamond',
      basePrice: 999,
      features: [
        'Все из Gold',
        'Личный тренер 1 час в неделю',
        'Эксклюзивные турниры',
        '30% скидка в магазине',
        'Персональная статистика',
        'Кастомный ник с градиентом',
        'Эксклюзивные модели игроков',
        'Приоритетное место в команде',
        'Доступ к бета-тестам',
        'Личный чат с администрацией',
      ],
      color: 'bg-gradient-blue',
      icon: 'Gem',
    },
  ];

  const periods = [
    { id: 'day', label: '1 день', multiplier: 0.05 },
    { id: '3days', label: '3 дня', multiplier: 0.12 },
    { id: 'week', label: '1 неделя', multiplier: 0.2 },
    { id: '2weeks', label: '2 недели', multiplier: 0.35 },
    { id: 'month', label: '1 месяц', multiplier: 1 },
    { id: '3months', label: '3 месяца', multiplier: 2.5, discount: 15 },
    { id: '6months', label: '6 месяцев', multiplier: 4.5, discount: 25 },
    { id: 'year', label: '1 год', multiplier: 8, discount: 35 },
  ];

  const currentPlan = vipPlans.find(p => p.id === selectedPlan);
  const currentPeriod = periods.find(p => p.id === selectedPeriod);
  const finalPrice = currentPlan && currentPeriod 
    ? Math.round(currentPlan.basePrice * currentPeriod.multiplier)
    : 0;

  return (
    <div className="min-h-screen bg-[#0A0E1A]">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0A0E1A]/90 border-b border-[#2A2F3C]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <Icon name="Crosshair" size={24} className="text-[#0A0E1A]" />
              </div>
              <h1 className="text-2xl font-bold text-gradient-gold">CS2 Project</h1>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-gray-300 hover:text-[#FFB800] transition-colors">Главная</Link>
              <Link to="/vip" className="text-[#FFB800] font-semibold">VIP</Link>
              <Link to="/cases" className="text-gray-300 hover:text-[#FFB800] transition-colors">Кейсы</Link>
              <Link to="/tickets" className="text-gray-300 hover:text-[#FFB800] transition-colors">Тикеты</Link>
              <Link to="/clans" className="text-gray-300 hover:text-[#FFB800] transition-colors">Кланы</Link>
              <Link to="/rules" className="text-gray-300 hover:text-[#FFB800] transition-colors">Правила</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#0D7EFF]/20 text-[#0D7EFF] border-[#0D7EFF]/30 text-sm px-4 py-1">
              <Icon name="Sparkles" size={14} className="mr-1 inline" />
              VIP Привилегии
            </Badge>
            <h1 className="text-5xl font-bold mb-4">
              Премиум <span className="text-gradient-gold">доступ</span>
            </h1>
            <p className="text-gray-400 text-lg">Выберите статус и период для получения уникальных преимуществ</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {vipPlans.map((plan) => (
              <Card
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative cursor-pointer transition-all ${
                  selectedPlan === plan.id
                    ? 'border-[#FFB800] scale-105 shadow-xl'
                    : 'bg-[#1A1F2C] border-[#2A2F3C] hover:border-[#3A3F4C]'
                } ${plan.popular ? 'lg:scale-105' : ''}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-[#0A0E1A] font-bold">
                    Популярный выбор
                  </Badge>
                )}
                <CardHeader>
                  <div className={`w-16 h-16 ${plan.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon 
                      name={plan.icon as any} 
                      size={32} 
                      className={plan.name === 'Gold' || plan.name === 'Silver' ? 'text-[#0A0E1A]' : 'text-white'} 
                    />
                  </div>
                  <CardTitle className="text-2xl flex items-center justify-between">
                    {plan.name}
                    {selectedPlan === plan.id && (
                      <Icon name="CheckCircle2" size={24} className="text-[#FFB800]" />
                    )}
                  </CardTitle>
                  <CardDescription>
                    <span className="text-3xl font-bold text-white">от {Math.round(plan.basePrice * 0.05)}₽</span>
                    <span className="text-gray-400">/день</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-[#FFB800] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-[#1A1F2C] border-[#2A2F3C] mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Выберите период подписки</CardTitle>
              <CardDescription>Чем дольше период — тем выгоднее цена</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={selectedPeriod} onValueChange={setSelectedPeriod} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {periods.map((period) => (
                  <div key={period.id} className="relative">
                    <RadioGroupItem value={period.id} id={period.id} className="peer sr-only" />
                    <Label
                      htmlFor={period.id}
                      className="flex flex-col items-center justify-center p-4 bg-[#0A0E1A] border-2 border-[#2A2F3C] rounded-lg cursor-pointer peer-data-[state=checked]:border-[#FFB800] peer-data-[state=checked]:bg-[#FFB800]/10 hover:border-[#3A3F4C] transition-all"
                    >
                      <span className="font-semibold text-white mb-1">{period.label}</span>
                      <span className="text-sm text-gray-400">
                        {currentPlan ? `${Math.round(currentPlan.basePrice * period.multiplier)}₽` : '—'}
                      </span>
                      {period.discount && (
                        <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs">
                          -{period.discount}%
                        </Badge>
                      )}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#1A1F2C] to-[#0D1420] border-[#FFB800]/30">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Итого: <span className="text-gradient-gold">{currentPlan?.name}</span> на <span className="text-gradient-gold">{currentPeriod?.label}</span>
                  </h3>
                  <p className="text-gray-400">
                    Мгновенная активация после оплаты
                  </p>
                  {currentPeriod?.discount && (
                    <p className="text-green-400 text-sm mt-2 flex items-center gap-1">
                      <Icon name="TrendingDown" size={16} />
                      Вы экономите {currentPeriod.discount}%
                    </p>
                  )}
                </div>
                <div className="text-center md:text-right">
                  <div className="text-5xl font-bold text-gradient-gold mb-4">{finalPrice}₽</div>
                  <Button size="lg" className="bg-gradient-gold text-[#0A0E1A] font-bold text-lg px-12 hover-glow">
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Купить сейчас
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="bg-[#1A1F2C] border-[#2A2F3C] text-center">
              <CardContent className="p-6">
                <Icon name="Zap" size={40} className="text-[#FFB800] mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Мгновенная активация</h3>
                <p className="text-sm text-gray-400">VIP статус активируется автоматически после оплаты</p>
              </CardContent>
            </Card>
            <Card className="bg-[#1A1F2C] border-[#2A2F3C] text-center">
              <CardContent className="p-6">
                <Icon name="Shield" size={40} className="text-[#FFB800] mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Безопасная оплата</h3>
                <p className="text-sm text-gray-400">Все платежи защищены и проходят через проверенные системы</p>
              </CardContent>
            </Card>
            <Card className="bg-[#1A1F2C] border-[#2A2F3C] text-center">
              <CardContent className="p-6">
                <Icon name="Headphones" size={40} className="text-[#FFB800] mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Поддержка 24/7</h3>
                <p className="text-sm text-gray-400">Наша команда всегда готова помочь VIP игрокам</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VIP;
