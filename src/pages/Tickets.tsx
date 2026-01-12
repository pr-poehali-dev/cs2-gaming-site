import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Tickets = () => {
  const [ticketType, setTicketType] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [description, setDescription] = useState('');

  const ticketTypes = [
    {
      id: 'question',
      name: 'Вопрос',
      description: 'Задайте любой вопрос о сервере',
      icon: 'HelpCircle',
      color: 'bg-blue-500',
    },
    {
      id: 'helper',
      name: 'Заявка на хелпера',
      description: 'Хотите стать частью команды?',
      icon: 'UserPlus',
      color: 'bg-green-500',
    },
    {
      id: 'unban',
      name: 'Разбан',
      description: 'Запрос на снятие бана',
      icon: 'UserCheck',
      color: 'bg-orange-500',
    },
    {
      id: 'unmute',
      name: 'Размут',
      description: 'Запрос на снятие мута',
      icon: 'Volume2',
      color: 'bg-yellow-500',
    },
    {
      id: 'bug',
      name: 'Баг',
      description: 'Сообщите о найденной проблеме',
      icon: 'Bug',
      color: 'bg-red-500',
    },
    {
      id: 'suggestion',
      name: 'Предложение',
      description: 'Идея по улучшению сервера',
      icon: 'Lightbulb',
      color: 'bg-purple-500',
    },
  ];

  const myTickets = [
    {
      id: '#T1245',
      type: 'question',
      title: 'Как получить VIP статус?',
      status: 'answered',
      date: '15.01.2026',
      response: 'Перейдите в раздел VIP и выберите подходящий тариф.',
    },
    {
      id: '#T1189',
      type: 'bug',
      title: 'Не работает команда /shop',
      status: 'in_progress',
      date: '12.01.2026',
    },
    {
      id: '#T1023',
      type: 'helper',
      title: 'Заявка на должность хелпера',
      status: 'pending',
      date: '08.01.2026',
    },
  ];

  const statusColors = {
    pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    in_progress: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    answered: 'bg-green-500/20 text-green-400 border-green-500/30',
    closed: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
  };

  const statusLabels = {
    pending: 'Ожидает',
    in_progress: 'В работе',
    answered: 'Отвечен',
    closed: 'Закрыт',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
              <Link to="/cases" className="text-gray-300 hover:text-[#FFB800] transition-colors">Кейсы</Link>
              <Link to="/tickets" className="text-[#FFB800] font-semibold">Тикеты</Link>
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
              <Icon name="MessageSquare" size={14} className="mr-1 inline" />
              Система тикетов
            </Badge>
            <h1 className="text-5xl font-bold mb-4">
              Служба <span className="text-gradient-gold">поддержки</span>
            </h1>
            <p className="text-gray-400 text-lg">Мы всегда готовы помочь — задайте вопрос или оставьте заявку</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card className="bg-[#1A1F2C] border-[#2A2F3C]">
                <CardHeader>
                  <CardTitle className="text-2xl">Создать тикет</CardTitle>
                  <CardDescription>Заполните форму, и мы свяжемся с вами в ближайшее время</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label>Тип обращения</Label>
                      <Select value={ticketType} onValueChange={setTicketType}>
                        <SelectTrigger className="bg-[#0A0E1A] border-[#2A2F3C]">
                          <SelectValue placeholder="Выберите тип тикета" />
                        </SelectTrigger>
                        <SelectContent>
                          {ticketTypes.map((type) => (
                            <SelectItem key={type.id} value={type.id}>
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${type.color}`}></div>
                                {type.name}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="playerName">Ваш игровой ник</Label>
                      <Input
                        id="playerName"
                        placeholder="Введите ваш ник на сервере"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                        className="bg-[#0A0E1A] border-[#2A2F3C]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Описание</Label>
                      <Textarea
                        id="description"
                        placeholder="Подробно опишите вашу проблему или вопрос..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="bg-[#0A0E1A] border-[#2A2F3C] min-h-32"
                      />
                      <p className="text-xs text-gray-400">
                        Чем подробнее вы опишете проблему, тем быстрее мы сможем помочь
                      </p>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-gold text-[#0A0E1A] font-bold hover-glow"
                    >
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить тикет
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="bg-[#1A1F2C] border-[#2A2F3C]">
                <CardHeader>
                  <CardTitle className="text-2xl">Мои тикеты</CardTitle>
                  <CardDescription>История ваших обращений</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {myTickets.map((ticket) => (
                    <Card key={ticket.id} className="bg-[#0A0E1A] border-[#2A2F3C] hover-glow cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="border-[#2A2F3C] font-mono">
                              {ticket.id}
                            </Badge>
                            <Badge className={statusColors[ticket.status as keyof typeof statusColors]}>
                              {statusLabels[ticket.status as keyof typeof statusLabels]}
                            </Badge>
                          </div>
                          <span className="text-sm text-gray-400">{ticket.date}</span>
                        </div>
                        <h3 className="font-semibold text-white mb-2">{ticket.title}</h3>
                        {ticket.response && (
                          <div className="mt-3 p-3 bg-[#1A1F2C] rounded-lg border border-[#2A2F3C]">
                            <div className="flex items-start gap-2">
                              <Icon name="MessageCircle" size={16} className="text-[#FFB800] mt-0.5" />
                              <div>
                                <p className="text-sm text-gray-300">{ticket.response}</p>
                                <p className="text-xs text-gray-500 mt-1">Администратор • 14.01.2026</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-[#1A1F2C] border-[#2A2F3C]">
                <CardHeader>
                  <CardTitle>Типы тикетов</CardTitle>
                  <CardDescription>Выберите подходящую категорию</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {ticketTypes.map((type) => (
                    <div
                      key={type.id}
                      className="flex items-start gap-3 p-3 bg-[#0A0E1A] rounded-lg hover:bg-[#0D1420] transition-colors cursor-pointer"
                      onClick={() => setTicketType(type.id)}
                    >
                      <div className={`w-10 h-10 ${type.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon name={type.icon as any} size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">{type.name}</h4>
                        <p className="text-xs text-gray-400">{type.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#0D7EFF]/20 to-[#0D7EFF]/5 border-[#0D7EFF]/30">
                <CardContent className="p-6 text-center">
                  <Icon name="Clock" size={48} className="text-[#0D7EFF] mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">Время ответа</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Среднее время ответа на тикет — <span className="text-[#0D7EFF] font-bold">2-6 часов</span>
                  </p>
                  <p className="text-xs text-gray-400">
                    VIP игроки получают приоритет в обработке заявок
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#1A1F2C] border-[#2A2F3C]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="HelpCircle" size={20} />
                    FAQ
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-white mb-1">Как быстрее получить ответ?</h4>
                    <p className="text-gray-400">Подробно опишите проблему и укажите игровой ник</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Могу ли я отменить тикет?</h4>
                    <p className="text-gray-400">Да, нажмите на тикет и выберите "Закрыть"</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Где увидеть ответ?</h4>
                    <p className="text-gray-400">Ответ появится в разделе "Мои тикеты"</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
