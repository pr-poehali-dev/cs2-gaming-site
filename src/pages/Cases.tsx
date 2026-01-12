import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Cases = () => {
  const [isOpening, setIsOpening] = useState(false);
  const [openedPrize, setOpenedPrize] = useState<any>(null);

  const cases = [
    {
      id: 'starter',
      name: 'Стартовый кейс',
      price: 99,
      color: 'from-blue-500 to-blue-700',
      icon: 'Package',
      description: 'Отличный старт для новичков',
    },
    {
      id: 'silver',
      name: 'Серебряный кейс',
      price: 199,
      color: 'from-gray-400 to-gray-600',
      icon: 'Gift',
      description: 'Солидные награды',
      popular: true,
    },
    {
      id: 'gold',
      name: 'Золотой кейс',
      price: 399,
      color: 'from-yellow-400 to-yellow-600',
      icon: 'Star',
      description: 'Лучшие призы',
    },
    {
      id: 'diamond',
      name: 'Алмазный кейс',
      price: 799,
      color: 'from-cyan-400 to-blue-600',
      icon: 'Gem',
      description: 'Эксклюзивные награды',
    },
  ];

  const prizes = [
    { type: 'credits', amount: 5000, rarity: 'common', chance: 35, icon: 'Coins' },
    { type: 'credits', amount: 10000, rarity: 'uncommon', chance: 25, icon: 'Coins' },
    { type: 'credits', amount: 15000, rarity: 'rare', chance: 15, icon: 'Coins' },
    { type: 'credits', amount: 20000, rarity: 'epic', chance: 10, icon: 'Coins' },
    { type: 'vip', duration: '1 час', rarity: 'uncommon', chance: 8, icon: 'Clock' },
    { type: 'vip', duration: '3 часа', rarity: 'rare', chance: 4, icon: 'Clock' },
    { type: 'vip', duration: '5 часов', rarity: 'epic', chance: 2, icon: 'Clock' },
    { type: 'special', name: 'Эксклюзивный скин', rarity: 'legendary', chance: 1, icon: 'Sparkles' },
  ];

  const rarityColors = {
    common: 'bg-gray-500',
    uncommon: 'bg-green-500',
    rare: 'bg-blue-500',
    epic: 'bg-purple-500',
    legendary: 'bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600',
  };

  const rarityLabels = {
    common: 'Обычный',
    uncommon: 'Необычный',
    rare: 'Редкий',
    epic: 'Эпический',
    legendary: 'Легендарный',
  };

  const handleOpenCase = () => {
    setIsOpening(true);
    
    setTimeout(() => {
      const random = Math.random() * 100;
      let cumulative = 0;
      let selectedPrize = prizes[0];
      
      for (const prize of prizes) {
        cumulative += prize.chance;
        if (random <= cumulative) {
          selectedPrize = prize;
          break;
        }
      }
      
      setOpenedPrize(selectedPrize);
      setIsOpening(false);
    }, 3000);
  };

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
              <Link to="/vip" className="text-gray-300 hover:text-[#FFB800] transition-colors">VIP</Link>
              <Link to="/cases" className="text-[#FFB800] font-semibold">Кейсы</Link>
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
            <Badge className="mb-4 bg-purple-500/20 text-purple-400 border-purple-500/30 text-sm px-4 py-1">
              <Icon name="Gift" size={14} className="mr-1 inline" />
              Донат Кейсы
            </Badge>
            <h1 className="text-5xl font-bold mb-4">
              Открой свой <span className="text-gradient-gold">приз</span>
            </h1>
            <p className="text-gray-400 text-lg">Получи кредиты или временные VIP-привилегии</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {cases.map((caseItem) => (
              <Card
                key={caseItem.id}
                className={`relative bg-[#1A1F2C] border-[#2A2F3C] hover-glow cursor-pointer group ${
                  caseItem.popular ? 'scale-105' : ''
                }`}
              >
                {caseItem.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-[#0A0E1A] font-bold z-10">
                    Хит продаж
                  </Badge>
                )}
                <CardHeader>
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${caseItem.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}
                  >
                    <Icon name={caseItem.icon as any} size={40} className="text-white" />
                  </div>
                  <CardTitle className="text-xl text-center">{caseItem.name}</CardTitle>
                  <CardDescription className="text-center">{caseItem.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-gradient-gold mb-4">{caseItem.price}₽</div>
                  <Button className="w-full bg-gradient-gold text-[#0A0E1A] font-bold hover-glow">
                    <Icon name="ShoppingBag" size={18} className="mr-2" />
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-[#1A1F2C] border-[#2A2F3C] mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Демо-открытие кейса</CardTitle>
              <CardDescription className="text-center">
                Попробуй свою удачу! (демо-режим, реальные призы после покупки)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <div className="relative">
                  <div
                    className={`w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center ${
                      isOpening ? 'animate-pulse' : ''
                    }`}
                  >
                    <Icon name="Gift" size={64} className="text-white" />
                  </div>
                  {isOpening && (
                    <div className="absolute -inset-4">
                      <div className="w-full h-full border-4 border-[#FFB800] rounded-3xl animate-ping"></div>
                    </div>
                  )}
                </div>
              </div>

              {isOpening && (
                <div className="space-y-2">
                  <Progress value={66} className="h-2" />
                  <p className="text-center text-gray-400 text-sm">Открываем кейс...</p>
                </div>
              )}

              {openedPrize && !isOpening && (
                <Card className={`${rarityColors[openedPrize.rarity as keyof typeof rarityColors]} border-0`}>
                  <CardContent className="p-6 text-center text-white">
                    <Icon name={openedPrize.icon} size={48} className="mx-auto mb-3" />
                    <Badge className="mb-3 bg-black/30 text-white border-0">
                      {rarityLabels[openedPrize.rarity as keyof typeof rarityLabels]}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-2">
                      {openedPrize.type === 'credits' && `${openedPrize.amount.toLocaleString()} кредитов`}
                      {openedPrize.type === 'vip' && `VIP на ${openedPrize.duration}`}
                      {openedPrize.type === 'special' && openedPrize.name}
                    </h3>
                    <p className="text-sm opacity-90">Поздравляем с выигрышем!</p>
                  </CardContent>
                </Card>
              )}

              <Button
                onClick={handleOpenCase}
                disabled={isOpening}
                size="lg"
                className="w-full bg-gradient-gold text-[#0A0E1A] font-bold text-lg hover-glow disabled:opacity-50"
              >
                {isOpening ? (
                  <>
                    <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                    Открываем...
                  </>
                ) : (
                  <>
                    <Icon name="Gift" size={20} className="mr-2" />
                    Открыть демо-кейс
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#1A1F2C] border-[#2A2F3C]">
            <CardHeader>
              <CardTitle className="text-2xl">Возможные награды</CardTitle>
              <CardDescription>Что можно получить из кейсов</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {prizes.map((prize, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-[#0A0E1A] rounded-lg border border-[#2A2F3C]"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${rarityColors[prize.rarity as keyof typeof rarityColors]} rounded-lg flex items-center justify-center`}>
                        <Icon name={prize.icon as any} size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">
                          {prize.type === 'credits' && `${prize.amount.toLocaleString()} кредитов`}
                          {prize.type === 'vip' && `VIP ${prize.duration}`}
                          {prize.type === 'special' && prize.name}
                        </div>
                        <div className="text-xs text-gray-400">
                          {rarityLabels[prize.rarity as keyof typeof rarityLabels]}
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-[#2A2F3C]">
                      {prize.chance}%
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="bg-[#1A1F2C] border-[#2A2F3C] text-center">
              <CardContent className="p-6">
                <Icon name="TrendingUp" size={40} className="text-[#FFB800] mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Честные шансы</h3>
                <p className="text-sm text-gray-400">Все вероятности публичны и проверяемы</p>
              </CardContent>
            </Card>
            <Card className="bg-[#1A1F2C] border-[#2A2F3C] text-center">
              <CardContent className="p-6">
                <Icon name="Zap" size={40} className="text-[#FFB800] mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Мгновенная выдача</h3>
                <p className="text-sm text-gray-400">Призы зачисляются сразу после открытия</p>
              </CardContent>
            </Card>
            <Card className="bg-[#1A1F2C] border-[#2A2F3C] text-center">
              <CardContent className="p-6">
                <Icon name="Gift" size={40} className="text-[#FFB800] mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Крутые призы</h3>
                <p className="text-sm text-gray-400">От кредитов до эксклюзивных скинов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
