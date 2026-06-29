import Icon from '@/components/ui/icon';

const HERO = 'https://cdn.poehali.dev/projects/132af4a1-1d35-496f-aa2c-896dd04613bb/files/56abf8ec-2679-4ec6-96db-2a0e50773261.jpg';

const days = [
  {
    d: '01',
    title: 'Гуанчжоу — старт путешествия',
    text: [
      'По прибытии в аэропорт вас встретит наша команда и организует комфортный трансфер до отеля. После размещения в отеле у вас будет свободное время, чтобы отдохнуть и восстановить силы перед вечерней программой.',
      'Ближе к вечеру мы отправимся навстречу атмосфере современного Гуанчжоу — города небоскрёбов, ярких огней и впечатляющей архитектуры. Во время прогулки вы почувствуете ритм одного из самых динамичных мегаполисов Азии и увидите, как город оживает после заката.',
      'Также у вас будет возможность подняться на знаменитую Кантонскую башню — один из главных символов города и одну из самых высоких телебашен в мире. С её смотровых площадок открываются впечатляющие панорамные виды на сияющий ночной мегаполис.',
      'Завершим этот день совместным ужином, знакомством участников и первым погружением в атмосферу Китая. Гуанчжоу по праву считается гастрономической столицей южного Китая, поэтому уже в первый вечер вы познакомитесь с традиционной кантонской кухней: димсамы, утка по-кантонски, свежие морепродукты и настоящий китайский чай.',
      'Тем, кто прилетает заранее, мы рекомендуем посетить знаменитый Зоопарк Гуанчжоу — один из крупнейших в Китае, где можно увидеть панд, тигров, слонов и множество редких животных со всего мира.',
    ],
  },
  {
    d: '02',
    title: 'Яншо и река Ли',
    text: [
      'Вкусно завтракаем в отеле и на современном скоростном поезде отправляемся в красочный Яншо — одно из самых красивых мест Китая, известное фантастическими карстовыми пейзажами, реками и рисовыми полями. Яншо часто называют «живой китайской открыткой».',
      'Дорога займёт около двух часов и станет прекрасной возможностью увидеть красивейшие пейзажи южного Китая и его уютные деревушки. По прибытии нас ждёт прогулка по колоритным улочкам Яншо, где царит особая атмосфера.',
      'Настоящей магией дня станет сплав на традиционных бамбуковых плотах по легендарной реке Ли. Вокруг возвышаются карстовые горы, отражающиеся в спокойной глади воды, — это возможность на несколько часов оказаться в настоящей китайской сказке.',
      'Вечером мы отправимся на старинную улицу West Street — самое знаменитое туристическое место в Яншо: яркие огни, уютные кафе, сувенирные лавки, живая музыка. Вы попробуете знаменитую китайскую уличную еду, местные деликатесы и свежие фрукты — идеальное завершение дня.',
    ],
  },
  {
    d: '03',
    title: 'Река Юйлун и горы Жуифэн',
    text: [
      'Вкусно завтракаем и отправляемся навстречу одним из самых живописных пейзажей Китая — вдоль чарующей реки Юйлун. Вас ждёт калейдоскоп природной красоты: бескрайние рисовые поля, карстовые горы в лёгкой дымке и уютные деревушки.',
      'Во время экскурсии вы сможете прокатиться на электроскутере или велосипеде по живописным дорогам вдоль реки — один из самых ярких моментов путешествия.',
      'После прогулки нас ждёт захватывающий подъём по канатной дороге Жуифэн. Перед глазами открываются фантастические панорамы: бесконечные горные хребты, густые леса и изумрудные склоны. На вершине мы пройдёмся по подвесному мосту над пропастью и загадаем желание.',
      'Затем — прогулка по прозрачному стеклянному мосту. Под ногами головокружительная высота, вокруг бескрайние горы и долины невероятной красоты.',
      'Вечером по желанию вы сможете отправиться на знаменитое шоу Impression Liu Sanjie — одно из самых красивых культурных представлений Китая. Сценой становится сама река Ли, а декорациями — карстовые горы, подсвеченные огнями. Шоу создано режиссёром церемонии открытия Олимпийских игр в Пекине.',
    ],
  },
];

const hotels = [
  { name: 'Lago Vista Resort', stars: 5, nights: 2, desc: 'Панорамные номера с видом на озеро, спа и бассейн с подогревом.' },
  { name: 'Mountain Lodge', stars: 4, nights: 2, desc: 'Уютные шале в окружении сосен, камин и горный воздух.' },
];

const meals = [
  { time: 'Завтрак', desc: 'Шведский стол, свежая выпечка и фрукты', icon: 'Coffee' },
  { time: 'Обед', desc: 'Локальные рестораны по маршруту дня', icon: 'UtensilsCrossed' },
  { time: 'Ужин', desc: 'Авторская кухня от шефа отеля', icon: 'Wine' },
];

const tariffs = [
  { name: 'Комфорт', price: '89 000', per: '₽ / чел', items: ['Отели 4★', 'Групповые экскурсии', 'Завтраки'], hot: false },
  { name: 'Премиум', price: '139 000', per: '₽ / чел', items: ['Отели 5★', 'Все экскурсии', 'Полный пансион', 'Личный гид'], hot: true },
  { name: 'Люкс', price: '219 000', per: '₽ / чел', items: ['Сьюты 5★', 'Индивидуальный маршрут', 'Полный пансион', 'Трансфер на лимузине'], hot: false },
];

const included = ['Проживание 4 ночи', 'Питание по программе', 'Все экскурсии', 'Трансферы', 'Страховка', 'Услуги гида'];
const excluded = ['Авиабилеты', 'Личные расходы', 'Доп. экскурсии', 'Чаевые'];

const gallery = [
  'Sunlit turquoise mountain lake, alpine landscape, golden hour',
  'Cozy wooden lodge among pine forest, warm lights, evening',
  'Old european town cobblestone street, vibrant flowers, sunny',
  'Boat on calm lake, dramatic clouds, coral sunset reflection',
  'Vineyard hills at sunset, warm tones, wine tasting terrace',
  'Mountain viewpoint, hiker silhouette, panoramic vista, teal sky',
];

const reviews = [
  { name: 'Анна Соколова', text: 'Лучшее путешествие в моей жизни! Виды на озеро невозможно забыть, а гид знал каждую тропинку.', rate: 5, place: 'о туре в целом' },
  { name: 'Дмитрий Орлов', text: 'Старый город — это сказка. Мастер-класс по кухне превзошёл все ожидания.', rate: 5, place: 'о Старом городе' },
  { name: 'Мария Власова', text: 'Прогулка на катере и закат — самый романтичный момент. Спасибо за организацию!', rate: 5, place: 'об озёрной одиссее' },
];

const dates = [
  { range: '12 – 16 июля', seats: 'Осталось 4 места', open: true },
  { range: '02 – 06 августа', seats: 'Осталось 9 мест', open: true },
  { range: '23 – 27 августа', seats: 'Мест нет', open: false },
  { range: '13 – 17 сентября', seats: 'Открыта запись', open: true },
];

const Stars = ({ n }: { n: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: n }).map((_, i) => (
      <Icon key={i} name="Star" size={15} className="text-sunset fill-sunset" />
    ))}
  </div>
);

const SectionTitle = ({ kicker, title }: { kicker: string; title: string }) => (
  <div className="mb-10">
    <span className="text-coral font-sans font-semibold uppercase tracking-[0.25em] text-xs">{kicker}</span>
    <h2 className="font-display text-4xl md:text-6xl font-semibold text-ink mt-2">{title}</h2>
  </div>
);

const Index = () => {
  const onPrint = () => window.print();

  return (
    <div className="min-h-screen bg-background text-ink overflow-x-hidden">
      <button
        onClick={onPrint}
        className="no-print fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-ink text-background px-6 py-4 rounded-full shadow-2xl hover:bg-coral transition-colors duration-300 font-semibold"
      >
        <Icon name="Download" size={20} />
        Скачать PDF
      </button>

      <header className="relative h-screen min-h-[640px] flex items-end">
        <img src={HERO} alt="Тур" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/40" />
        <div className="absolute top-8 left-0 right-0 px-6 md:px-16 flex justify-between items-center text-background/90 no-print">
          <span className="font-display text-2xl font-semibold tracking-wide">Wanderlust Travel</span>
          <span className="text-sm tracking-widest uppercase">Программа тура · 2026</span>
        </div>
        <div className="relative px-6 md:px-16 pb-20 max-w-4xl">
          <span className="inline-block text-sunset font-sans font-semibold uppercase tracking-[0.3em] text-sm animate-fade-up">Альпийские озёра · 5 дней</span>
          <h1 className="font-display text-5xl md:text-8xl font-semibold text-background leading-[0.95] mt-4 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            Туда, где небо<br />встречает воду
          </h1>
          <p className="text-background/80 text-lg md:text-xl mt-6 max-w-xl animate-fade-up" style={{ animationDelay: '0.25s', opacity: 0 }}>
            Незабываемое путешествие сквозь горные перевалы, бирюзовые озёра и старинные деревни.
          </p>
          <div className="flex flex-wrap gap-6 mt-8 text-background animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
            {[['MapPin', '4 локации'], ['Calendar', '5 дней / 4 ночи'], ['Users', 'до 12 человек']].map(([ic, t]) => (
              <div key={t} className="flex items-center gap-2">
                <Icon name={ic} size={20} className="text-sunset" />
                <span className="font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="px-6 md:px-16 py-24 max-w-5xl mx-auto print-page">
        <SectionTitle kicker="О путешествии" title="Маршрут мечты" />
        <p className="text-xl md:text-2xl leading-relaxed text-ink/80 font-display italic">
          Этот тур создан для тех, кто ищет вдохновение в дороге. Вы пройдёте по живописным тропам,
          прокатитесь на катере по зеркальной глади озера, попробуете локальную кухню и встретите
          закаты, которые останутся с вами навсегда.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[['Route', '38 км', 'пеших троп'], ['Mountain', '2 400 м', 'высшая точка'], ['Ship', '2 ч', 'на катере'], ['Camera', '6+', 'фотолокаций']].map(([ic, big, small]) => (
            <div key={small} className="bg-card rounded-2xl p-6 shadow-sm border border-sand">
              <Icon name={ic} size={28} className="text-ocean" />
              <div className="font-display text-3xl font-semibold mt-3">{big}</div>
              <div className="text-muted-foreground text-sm">{small}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-16 py-24 bg-sand/40 print-page">
        <div className="max-w-5xl mx-auto">
          <SectionTitle kicker="День за днём" title="Подробный маршрут" />
          <div className="space-y-4">
            {days.map((day) => (
              <div key={day.d} className="bg-card rounded-3xl p-8 shadow-sm border border-sand flex flex-col md:flex-row gap-6">
                <div className="font-display text-6xl font-semibold text-coral/30 leading-none shrink-0">{day.d}</div>
                <div className="flex-1">
                  <h3 className="font-display text-3xl font-semibold mb-4 flex items-center gap-3">
                    <Icon name="MapPin" size={22} className="text-ocean shrink-0" />
                    {day.title}
                  </h3>
                  <div className="space-y-4">
                    {day.text.map((p, i) => (
                      <p key={i} className="text-ink/75 leading-relaxed">{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-24 max-w-5xl mx-auto print-page">
        <SectionTitle kicker="Где вы остановитесь" title="Отели и размещение" />
        <div className="grid md:grid-cols-2 gap-6">
          {hotels.map((h) => (
            <div key={h.name} className="bg-card rounded-3xl p-8 shadow-sm border border-sand">
              <div className="flex justify-between items-start mb-3">
                <Icon name="BedDouble" size={32} className="text-coral" />
                <Stars n={h.stars} />
              </div>
              <h3 className="font-display text-2xl font-semibold">{h.name}</h3>
              <p className="text-muted-foreground mt-2">{h.desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-ocean font-semibold text-sm">
                <Icon name="Moon" size={16} /> {h.nights} ночи
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-16 py-24 bg-ocean text-background print-page">
        <div className="max-w-5xl mx-auto">
          <span className="text-sunset font-semibold uppercase tracking-[0.25em] text-xs">Гастрономия</span>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-2 mb-10">Питание в туре</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {meals.map((m) => (
              <div key={m.time} className="bg-background/10 backdrop-blur rounded-3xl p-8 border border-background/15">
                <Icon name={m.icon} size={32} className="text-sunset" />
                <h3 className="font-display text-2xl font-semibold mt-4">{m.time}</h3>
                <p className="text-background/80 mt-2">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-24 max-w-6xl mx-auto print-page">
        <SectionTitle kicker="Вдохновение" title="Галерея" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((g, i) => (
            <div key={i} className={`rounded-2xl overflow-hidden bg-sand aspect-square ${i === 0 ? 'md:col-span-2 md:row-span-2 md:aspect-auto' : ''}`}>
              <img
                src={`https://image.pollinations.ai/prompt/${encodeURIComponent(g)}?width=600&height=600&nologo=true`}
                alt={g}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-16 py-24 bg-sand/40 print-page">
        <div className="max-w-6xl mx-auto">
          <SectionTitle kicker="Стоимость" title="Тарифы тура" />
          <div className="grid md:grid-cols-3 gap-6">
            {tariffs.map((t) => (
              <div
                key={t.name}
                className={`rounded-3xl p-8 border shadow-sm ${t.hot ? 'bg-ink text-background border-ink scale-105' : 'bg-card border-sand'}`}
              >
                {t.hot && <span className="inline-block bg-sunset text-ink text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Хит продаж</span>}
                <h3 className="font-display text-3xl font-semibold">{t.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="font-display text-5xl font-semibold">{t.price}</span>
                  <span className={`ml-2 ${t.hot ? 'text-background/70' : 'text-muted-foreground'}`}>{t.per}</span>
                </div>
                <div className="space-y-3">
                  {t.items.map((it) => (
                    <div key={it} className="flex items-center gap-3">
                      <Icon name="Check" size={18} className={t.hot ? 'text-sunset' : 'text-ocean'} />
                      <span className={t.hot ? 'text-background/90' : 'text-ink/80'}>{it}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="bg-card rounded-3xl p-8 border border-sand">
              <h3 className="font-display text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="CircleCheck" size={24} className="text-ocean" /> В стоимость входит
              </h3>
              <div className="space-y-2">
                {included.map((i) => (
                  <div key={i} className="flex items-center gap-3 text-ink/80">
                    <Icon name="Plus" size={16} className="text-ocean" /> {i}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-3xl p-8 border border-sand">
              <h3 className="font-display text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="CircleX" size={24} className="text-coral" /> Не входит
              </h3>
              <div className="space-y-2">
                {excluded.map((i) => (
                  <div key={i} className="flex items-center gap-3 text-ink/80">
                    <Icon name="Minus" size={16} className="text-coral" /> {i}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-24 max-w-6xl mx-auto print-page">
        <SectionTitle kicker="Впечатления" title="Отзывы туристов" />
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-card rounded-3xl p-8 shadow-sm border border-sand">
              <Icon name="Quote" size={32} className="text-coral/30" />
              <p className="text-ink/85 mt-4 leading-relaxed font-display text-lg italic">«{r.text}»</p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-muted-foreground text-sm">{r.place}</div>
                </div>
                <Stars n={r.rate} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-16 py-24 bg-sand/40 print-page">
        <div className="max-w-4xl mx-auto">
          <SectionTitle kicker="Расписание" title="Ближайшие даты" />
          <div className="space-y-3">
            {dates.map((d) => (
              <div
                key={d.range}
                className={`bg-card rounded-2xl p-6 flex items-center justify-between border border-sand ${d.open ? '' : 'opacity-60'}`}
              >
                <div className="flex items-center gap-4">
                  <Icon name="CalendarDays" size={24} className="text-coral" />
                  <span className="font-display text-2xl font-semibold">{d.range}</span>
                </div>
                <span className={`text-sm font-semibold ${d.open ? 'text-ocean' : 'text-muted-foreground'}`}>{d.seats}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-16 py-20 bg-ink text-background print-page">
        <div className="max-w-5xl mx-auto">
          <span className="text-sunset font-semibold uppercase tracking-[0.25em] text-xs">Свяжитесь с нами</span>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-2 mb-10">Wanderlust Travel</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              ['Phone', 'Телефон', '+7 (495) 123-45-67'],
              ['Mail', 'Почта', 'hello@wanderlust.ru'],
              ['MapPin', 'Офис', 'Москва, ул. Тверская, 12'],
            ].map(([ic, label, val]) => (
              <div key={label}>
                <Icon name={ic} size={26} className="text-sunset mb-3" />
                <div className="text-background/60 text-sm">{label}</div>
                <div className="text-xl font-semibold">{val}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-background/15 text-background/50 text-sm">
            © 2026 Wanderlust Travel · Программа тура «Альпийские озёра»
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;