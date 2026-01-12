import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Clans = () => {
  const [clanName, setClanName] = useState('');
  const [clanTag, setClanTag] = useState('');
  const [clanDescription, setClanDescription] = useState('');

  const topClans = [
    {
      id: 1,
      name: 'Pro Gamers',
      tag: '[PRO]',
      members: 24,
      level: 15,
      rating: 2850,
      color: 'from-yellow-400 to-yellow-600',
      leader: 'ProPlayer_1',
    },
    {
      id: 2,
      name: 'Elite Squad',
      tag: '[ELITE]',
      members: 19,
      level: 12,
      rating: 2720,
      color: 'from-purple-400 to-purple-600',
      leader: 'CS2_Master',
    },
    {
      id: 3,
      name: 'Legends',
      tag: '[LEG]',
      members: 22,
      level: 14,
      rating: 2680,
      color: 'from-red-400 to-red-600',
      leader: 'HeadShot_King',
    },
    {
      id: 4,
      name: 'Dark Knights',
      tag: '[DK]',
      members: 18,
      level: 11,
      rating: 2590,
      color: 'from-gray-600 to-gray-800',
      leader: 'AimGod_777',
    },
    {
      id: 5,
      name: 'Fire Force',
      tag: '[FF]',
      members: 20,
      level: 13,
      rating: 2540,
      color: 'from-orange-400 to-red-600',
      leader: 'Sniper_Elite',
    },
  ];

  const clanBenefits = [
    {
      icon: 'Users',
      title: 'До 30 участников',
      description: 'Соберите команду единомышленников',
    },
    {
      icon: 'Trophy',
      title: 'Клановые турниры',
      description: 'Участвуйте в эксклюзивных соревнованиях',
    },
    {
      icon: 'Target',
      title: 'Общая статистика',
      description: 'Отслеживайте прогресс команды',
    },
    {
      icon: 'MessageCircle',
      title: 'Приватный чат',
      description: 'Общайтесь с членами клана',
    },
    {
      icon: 'Star',
      title: 'Уникальные награды',
      description: 'Получайте клановые достижения',
    },
    {
      icon: 'Shield',
      title: 'Клановый тег',
      description: 'Выделяйтесь среди других игроков',
    },
  ];

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
              <Link to="/cases" className="text-gray-300 hover:text-[#FFB800] transition-colors">Кейсы</Link>
              <Link to="/tickets" className="text-gray-300 hover:text-[#FFB800] transition-colors">Тикеты</Link>
              <Link to="/clans" className="text-[#FFB800] font-semibold">Кланы</Link>
              <Link to="/rules" className="text-gray-300 hover:text-[#FFB800] transition-colors">Правила</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-500/20 text-purple-400 border-purple-500/30 text-sm px-4 py-1">
              <Icon name="Users" size={14} className="mr-1 inline" />
              Кланы
            </Badge>
            <h1 className="text-5xl font-bold mb-4">
              Создай свой <span className="text-gradient-gold">клан</span>
            </h1>
            <p className="text-gray-400 text-lg mb-6">Объединяйтесь с друзьями и доминируйте на сервере</p>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-gradient-gold text-[#0A0E1A] font-bold text-lg px-8 hover-glow">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Создать клан за 200₽
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-[#1A1F2C] border-[#2A2F3C] max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Создание клана</DialogTitle>
                  <DialogDescription>
                    Заполните информацию о вашем клане. Стоимость создания: 200₽
                  </DialogDescription>
                </DialogHeader>
                <form className="space-y-6 mt-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="clanName">Название клана</Label>
                      <Input
                        id="clanName"
                        placeholder="Введите название"
                        value={clanName}
                        onChange={(e) => setClanName(e.target.value)}
                        className="bg-[#0A0E1A] border-[#2A2F3C]"
                        maxLength={20}
                      />
                      <p className="text-xs text-gray-400">{clanName.length}/20 символов</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="clanTag">Тег клана</Label>
                      <Input
                        id="clanTag"
                        placeholder="[TAG]"
                        value={clanTag}
                        onChange={(e) => setClanTag(e.target.value)}
                        className="bg-[#0A0E1A] border-[#2A2F3C]"
                        maxLength={6}
                      />
                      <p className="text-xs text-gray-400">{clanTag.length}/6 символов</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="clanDescription">Описание клана</Label>
                    <Textarea
                      id="clanDescription"
                      placeholder="Расскажите о вашем клане..."
                      value={clanDescription}
                      onChange={(e) => setClanDescription(e.target.value)}
                      className="bg-[#0A0E1A] border-[#2A2F3C] min-h-24"
                      maxLength={200}
                    />
                    <p className="text-xs text-gray-400">{clanDescription.length}/200 символов</p>
                  </div>

                  <div className="bg-[#0A0E1A] p-4 rounded-lg border border-[#2A2F3C]">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Info" size={18} className="text-[#FFB800]" />
                      Что входит в создание клана:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-[#FFB800]" />
                        Уникальный тег перед ником
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-[#FFB800]" />
                        Приватный чат для участников
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-[#FFB800]" />
                        До 30 участников в клане
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-[#FFB800]" />
                        Общая статистика клана
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-[#FFB800]" />
                        Участие в клановых турнирах
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#2A2F3C]">
                    <div>
                      <p className="text-sm text-gray-400">Стоимость создания</p>
                      <p className="text-3xl font-bold text-gradient-gold">200₽</p>
                    </div>
                    <Button size="lg" className="bg-gradient-gold text-[#0A0E1A] font-bold hover-glow">
                      <Icon name="ShoppingCart" size={20} className="mr-2" />
                      Создать клан
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {clanBenefits.map((benefit, idx) => (
              <Card key={idx} className="bg-[#1A1F2C] border-[#2A2F3C] hover-glow">
                <CardContent className="p-6">
                  <Icon name={benefit.icon as any} size={40} className="text-[#FFB800] mb-3" />
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-400">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-[#1A1F2C] border-[#2A2F3C] mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Топ кланов</CardTitle>
              <CardDescription>Лучшие кланы на сервере по рейтингу</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {topClans.map((clan) => (
                <Card key={clan.id} className="bg-[#0A0E1A] border-[#2A2F3C] hover-glow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${clan.color} rounded-xl flex items-center justify-center font-bold text-2xl text-white`}
                        >
                          #{clan.id}
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-white">{clan.name}</h3>
                            <Badge variant="outline" className="border-[#2A2F3C] font-mono">
                              {clan.tag}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                              <Icon name="User" size={14} />
                              Лидер: {clan.leader}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Users" size={14} />
                              {clan.members} участников
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="TrendingUp" size={14} />
                              Уровень {clan.level}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-gradient-gold mb-1">{clan.rating}</div>
                        <div className="text-sm text-gray-400">рейтинг</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#1A1F2C] to-[#0D1420] border-[#2A2F3C]">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Готовы создать свой клан?</h2>
                  <p className="text-gray-400 mb-6">
                    Объединяйтесь с друзьями, участвуйте в турнирах и поднимайтесь в рейтинге вместе!
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Icon name="CheckCircle2" size={18} className="text-[#FFB800]" />
                      <span>Мгновенное создание после оплаты</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="CheckCircle2" size={18} className="text-[#FFB800]" />
                      <span>Возможность изменения названия и тега</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="CheckCircle2" size={18} className="text-[#FFB800]" />
                      <span>Полный контроль над составом клана</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-baseline gap-2 mb-6">
                    <span className="text-gray-400 text-lg">Всего</span>
                    <span className="text-6xl font-bold text-gradient-gold">200₽</span>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="lg" className="w-full bg-gradient-gold text-[#0A0E1A] font-bold text-lg hover-glow">
                        <Icon name="Rocket" size={20} className="mr-2" />
                        Создать клан прямо сейчас
                      </Button>
                    </DialogTrigger>
                  </Dialog>
                  <p className="text-xs text-gray-500 mt-4">
                    Безопасная оплата через проверенные платежные системы
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Clans;
