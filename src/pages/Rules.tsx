import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Rules = () => {
  const rules = [
    {
      category: 'Общие правила',
      icon: 'Book',
      color: 'bg-blue-500',
      items: [
        {
          rule: 'Уважение к игрокам',
          description: 'Запрещены оскорбления, дискриминация, угрозы в адрес других игроков',
          punishment: 'Мут 1-7 дней / Бан при повторных нарушениях',
        },
        {
          rule: 'Адекватное поведение',
          description: 'Флуд, спам в чате, капс, реклама сторонних ресурсов запрещены',
          punishment: 'Мут 30 мин - 3 дня',
        },
        {
          rule: 'Русский язык в чате',
          description: 'Основной язык общения - русский. Другие языки допустимы в личных сообщениях',
          punishment: 'Предупреждение → Мут 1 час',
        },
        {
          rule: 'Запрещен обман администрации',
          description: 'Ложные жалобы, попытки ввести в заблуждение администрацию',
          punishment: 'Бан 7-30 дней',
        },
      ],
    },
    {
      category: 'Игровой процесс',
      icon: 'Gamepad2',
      color: 'bg-green-500',
      items: [
        {
          rule: 'Запрещены читы и макросы',
          description: 'Использование WH, AIM, скрипты отдачи, любое ПО дающее преимущество',
          punishment: 'Перманентный бан',
        },
        {
          rule: 'Запрещен тимкилл',
          description: 'Намеренное убийство союзников, саботаж команды',
          punishment: 'Кик → Бан 1-7 дней',
        },
        {
          rule: 'Запрещен AFK',
          description: 'Бездействие более 2 раундов подряд без уважительной причины',
          punishment: 'Автокик → Бан 30 мин при повторе',
        },
        {
          rule: 'Играть за команду',
          description: 'Запрещено мешать своей команде, блокировать проходы, сливать раунды',
          punishment: 'Кик → Бан 3 дня',
        },
        {
          rule: 'Багоюз запрещен',
          description: 'Использование багов карт, оружия для получения преимущества',
          punishment: 'Бан 7-30 дней',
        },
      ],
    },
    {
      category: 'Голосовой чат',
      icon: 'Mic',
      color: 'bg-purple-500',
      items: [
        {
          rule: 'Адекватное использование',
          description: 'Запрещены крики, музыка, шум, звуковой спам в войсе',
          punishment: 'Мут 1-24 часа',
        },
        {
          rule: 'Только игровая информация',
          description: 'В войсе разрешена только полезная для команды информация',
          punishment: 'Предупреждение → Мут',
        },
        {
          rule: 'Запрещено оскорбление',
          description: 'Оскорбления, мат, токсичность в голосовом чате',
          punishment: 'Мут 3 дня → Бан',
        },
      ],
    },
    {
      category: 'Ники и клановые теги',
      icon: 'User',
      color: 'bg-orange-500',
      items: [
        {
          rule: 'Адекватный никнейм',
          description: 'Запрещены оскорбительные, матерные, рекламные ники',
          punishment: 'Принудительная смена → Кик',
        },
        {
          rule: 'Подделка под администрацию',
          description: 'Ники содержащие Admin, Moder, Helper и т.п. без соответствующих прав',
          punishment: 'Бан 7 дней',
        },
        {
          rule: 'Использование клановых тегов',
          description: 'Разрешены только теги официально созданных на сервере кланов',
          punishment: 'Предупреждение → Смена ника',
        },
      ],
    },
    {
      category: 'Донат и VIP',
      icon: 'Star',
      color: 'bg-yellow-500',
      items: [
        {
          rule: 'VIP не даёт права нарушать',
          description: 'Наличие привилегий не освобождает от соблюдения правил',
          punishment: 'Стандартные наказания + возможная блокировка VIP',
        },
        {
          rule: 'Запрещен возврат средств',
          description: 'Возврат доната возможен только в случае технической ошибки',
          punishment: 'Отказ в возврате',
        },
        {
          rule: 'Передача привилегий запрещена',
          description: 'VIP статус, кланы и прочее привязаны к аккаунту навсегда',
          punishment: 'Блокировка обоих аккаунтов',
        },
      ],
    },
  ];

  const importantNotes = [
    {
      icon: 'AlertTriangle',
      title: 'Незнание правил не освобождает от ответственности',
      description: 'Все игроки обязаны ознакомиться с правилами перед началом игры',
    },
    {
      icon: 'Shield',
      title: 'Решение администрации окончательно',
      description: 'Админы имеют право выдавать наказания по своему усмотрению',
    },
    {
      icon: 'Clock',
      title: 'Сроки наказаний могут меняться',
      description: 'В зависимости от тяжести и количества нарушений',
    },
    {
      icon: 'MessageCircle',
      title: 'Апелляции через тикеты',
      description: 'Обжаловать бан/мут можно только через систему тикетов',
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
              <Link to="/clans" className="text-gray-300 hover:text-[#FFB800] transition-colors">Кланы</Link>
              <Link to="/rules" className="text-[#FFB800] font-semibold">Правила</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-500/20 text-red-400 border-red-500/30 text-sm px-4 py-1">
              <Icon name="FileText" size={14} className="mr-1 inline" />
              Правила сервера
            </Badge>
            <h1 className="text-5xl font-bold mb-4">
              Правила <span className="text-gradient-gold">сервера</span>
            </h1>
            <p className="text-gray-400 text-lg">Соблюдайте правила для комфортной игры всех участников</p>
          </div>

          <Card className="bg-gradient-to-br from-red-500/20 to-orange-500/20 border-red-500/30 mb-12">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Icon name="AlertCircle" size={48} className="text-red-400 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">Важно!</h2>
                  <p className="text-gray-200 mb-4">
                    Все игроки на сервере обязаны соблюдать данные правила. Незнание правил не освобождает от ответственности.
                    При нарушении правил администрация имеет право применить наказание без предупреждения.
                  </p>
                  <p className="text-gray-300">
                    Если вы не согласны с наказанием, создайте тикет в разделе "Поддержка" и дождитесь ответа администрации.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8 mb-12">
            {rules.map((category, idx) => (
              <Card key={idx} className="bg-[#1A1F2C] border-[#2A2F3C]">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center`}>
                      <Icon name={category.icon as any} size={24} className="text-white" />
                    </div>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="p-4 bg-[#0A0E1A] rounded-lg border border-[#2A2F3C] hover:border-[#3A3F4C] transition-colors"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-white flex items-center gap-2">
                          <Badge variant="outline" className="border-[#2A2F3C]">
                            {itemIdx + 1}
                          </Badge>
                          {item.rule}
                        </h3>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Gavel" size={16} className="text-red-400" />
                        <span className="text-red-400 font-semibold">Наказание:</span>
                        <span className="text-gray-300">{item.punishment}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-[#1A1F2C] border-[#2A2F3C] mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Важные примечания</CardTitle>
              <CardDescription>Дополнительная информация о правилах</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {importantNotes.map((note, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-[#0A0E1A] rounded-lg border border-[#2A2F3C]">
                    <Icon name={note.icon as any} size={24} className="text-[#FFB800] flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">{note.title}</h4>
                      <p className="text-sm text-gray-400">{note.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#1A1F2C] to-[#0D1420] border-[#2A2F3C]">
            <CardContent className="p-8 text-center">
              <Icon name="HeartHandshake" size={56} className="text-[#FFB800] mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Соблюдайте правила!</h2>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Правила созданы для комфортной игры всех участников. Уважайте других игроков,
                играйте честно и наслаждайтесь игрой на нашем сервере.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/tickets">
                  <button className="px-6 py-3 bg-[#2A2F3C] hover:bg-[#3A3F4C] text-white rounded-lg font-semibold transition-colors flex items-center gap-2">
                    <Icon name="MessageSquare" size={20} />
                    Задать вопрос
                  </button>
                </Link>
                <Link to="/">
                  <button className="px-6 py-3 bg-gradient-gold text-[#0A0E1A] rounded-lg font-bold hover-glow flex items-center gap-2">
                    <Icon name="Home" size={20} />
                    На главную
                  </button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Rules;
