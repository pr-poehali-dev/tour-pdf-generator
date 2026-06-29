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
  {
    d: '04',
    title: 'Синпин и переезд в Чжанцзяцзе',
    text: [
      'После завтрака нас ждёт поездка к знаменитой горе Сянгун — одной из самых впечатляющих смотровых площадок в окрестностях Яншо. Именно отсюда открывается панорамный вид на реку Ли, извивающуюся среди величественных карстовых вершин.',
      'Поднявшись на вершину, перед вами откроются бескрайние горные хребты, утренний туман, плавно окутывающий скалы, и абсолютное ощущение гармонии с природой. Это место по праву считается одним из самых красивых во всей провинции Гуанси.',
      'Далее мы отправимся в древний город Синпин — уютный и колоритный уголок с узкими улочками, старинными домами и красными фонарями. Именно здесь находится знаменитый пейзаж, изображённый на купюре в 20 юаней — одно из самых узнаваемых мест страны.',
      'После прогулки и обеда нас ждёт переезд на скоростном поезде в Чжанцзяцзе. Дорога займёт около 6–7 часов — можно отдохнуть, пересмотреть фотографии и насладиться меняющимися пейзажами за окном. Поздним вечером прибытие в отель.',
    ],
  },
  {
    d: '05',
    title: 'Горы Аватара — Национальный парк Чжанцзяцзе',
    text: [
      'Сегодня нас ждёт настоящее путешествие в мир фантастических пейзажей — посещение Национального лесного парка Чжанцзяцзе, более известного как «горы Аватара».',
      'Среди густых лесов здесь возвышаются тысячи гигантских каменных скал, окутанных облаками и туманом. Пейзажи выглядят настолько необычно, что кажется, будто вы оказались на другой планете. Именно эти горы стали вдохновением для знаменитых летающих островов в фильме «Аватар».',
      'В этот день мы: поднимемся на лучшие смотровые площадки с невероятными панорамными видами; увидим знаменитые каменные столбы — символ региона; прокатимся по канатным дорогам над ущельями и горными вершинами; поднимемся на легендарном стеклянном лифте Bailong Elevator — самом высоком внешнем лифте в мире; прогуляемся по живописным маршрутам среди облаков и посетим самые атмосферные фотолокации парка.',
    ],
  },
  {
    d: '06',
    title: 'Стеклянный мост и Пещера Жёлтого Дракона',
    text: [
      'Есть места, ради которых люди летят через полмира. Стеклянный мост Чжанцзяцзе — именно такое место. Вы идёте по абсолютно прозрачному мосту на высоте почти 300 метров над каньоном, между скалами, вдохновившими создателей «Аватара». Под ногами — бездна. Вокруг — облака, водопады и бесконечные зелёные горы.',
      'Каждый шаг по мосту — это восторг и адреналин одновременно, ощущение полёта между небом и землёй, фотографии уровня National Geographic и впечатление, которое невозможно повторить нигде в мире. Стеклянный мост — тот момент тура, о котором потом рассказывают годами.',
      'После прогулки над каньоном нас ждёт Пещера Жёлтого Дракона — одна из крупнейших карстовых пещер Азии. Это настоящий подземный лабиринт: 13 огромных залов, 96 галерей, подземная река с прогулкой на лодке, впечатляющие сталактиты и сталагмиты, подземные водопады высотой до 50 метров.',
      'Пещера поражает масштабами и разнообразием природных структур. Мягкая художественная подсветка усиливает ощущение сказочного подземного мира. Этот день подарит сразу два совершенно разных впечатления: сначала — чувство полёта над бездной, затем — путешествие в таинственный магический подземный мир.',
    ],
  },
  {
    d: '07',
    title: 'Гора Тяньмэньшань и древний Фуронг',
    text: [
      'Сегодня нас ждёт путешествие к легендарной горе Тяньмэньшань и знаменитым «Небесным вратам». Подъём начинается на одной из самых длинных канатных дорог в мире — уже само это путешествие становится настоящим приключением. Кабины медленно поднимаются над лесами и отвесными скалами, открывая фантастические панорамы.',
      'Главная цель маршрута — величественная природная арка «Небесные врата». Огромный проём в скале выглядит так, будто сама гора распахнула двери в небо. Поднимаясь по знаменитой лестнице из 999 ступеней, ощущаешь особую атмосферу — неслучайно китайцы считают это место одним из самых мистических в стране.',
      'Вас ждут прогулки по стеклянным тропам вдоль отвесных скал и панорамные виды, входящие в число самых впечатляющих в Китае.',
      'Вечером отправимся в удивительный древний городок Фуронг — место, словно сошедшее со страниц восточной сказки. Старый город расположен прямо у большого водопада, а вечером превращается в настоящее волшебство. Заключительный ужин с видом на водопад станет красивым завершением путешествия.',
    ],
  },
  {
    d: '08',
    title: 'Возвращение домой',
    text: [
      'Наше удивительное путешествие по Китаю подходит к завершению. Сегодня после завтрака вас ждёт трансфер в аэропорт Чжанцзяцзе и вылет домой.',
      'Позади остаются древние деревушки, фантастические горы Аватара, романтичный Фуронг и живописные пейзажи Гуйлиня и Яншо. За эти дни вы увидели Китай во всём его разнообразии — от тысячелетней истории до природных чудес.',
      'По желанию вы можете также полететь в Пекин, Шанхай или Гуанчжоу на шопинг. Мы не прощаемся, а говорим: до новых встреч!',
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
  { name: 'Стоимость тура', price: '14 900', per: '¥ / чел', items: ['Проживание в отелях', 'Завтраки (шведский стол)', 'Все экскурсии по программе', 'Групповой трансфер', 'Гид и организатор'], hot: true },
];

const included = [
  'Проживание в комфортных проверенных отелях (двухместное размещение, завтраки)',
  'Завтраки по системе «шведский стол»',
  'Групповой трансфер аэропорт–отель–аэропорт',
  'Все экскурсии по программе',
  'Гид и организатор',
];
const excluded = [
  'Авиабилеты из Москвы в Гуанчжоу и обратно',
  'Страховка для выезда за рубеж',
  'Обеды и ужины (средняя стоимость ~10–20 $ за приём пищи)',
  'Любые изменения программы или расходы, не описанные в разделе «Включено»',
];

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

const dateGroups = [
  {
    month: 'Сентябрь',
    dates: ['6 – 13', '13 – 20', '20 – 27'],
  },
  {
    month: 'Октябрь',
    dates: ['4 – 11', '11 – 18', '18 – 25', '25 – 1¹'],
  },
  {
    month: 'Ноябрь',
    dates: ['1 – 8¹'],
  },
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
          <SectionTitle kicker="Стоимость" title="Цена тура" />
          <div className="flex justify-center">
            {tariffs.map((t) => (
              <div key={t.name} className="rounded-3xl p-10 border shadow-sm bg-ink text-background border-ink max-w-lg w-full">
                <h3 className="font-display text-3xl font-semibold">{t.name}</h3>
                <div className="mt-4 mb-6 flex items-end gap-3">
                  <span className="font-display text-6xl font-semibold">{t.price}</span>
                  <span className="text-background/70 text-xl mb-1">{t.per}</span>
                </div>
                <div className="space-y-3">
                  {t.items.map((it) => (
                    <div key={it} className="flex items-center gap-3">
                      <Icon name="Check" size={18} className="text-sunset" />
                      <span className="text-background/90">{it}</span>
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
          <SectionTitle kicker="Расписание" title="Даты путешествий 2026" />
          <div className="space-y-8">
            {dateGroups.map((group) => (
              <div key={group.month}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-coral font-semibold uppercase tracking-[0.2em] text-sm">{group.month}</span>
                  <div className="flex-1 h-px bg-coral/30" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {group.dates.map((d) => (
                    <div key={d} className="bg-card rounded-2xl p-4 border border-sand flex items-center gap-3">
                      <Icon name="CalendarDays" size={18} className="text-coral shrink-0" />
                      <span className="font-display text-xl font-semibold">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm mt-6">¹ Праздничные дни. Стоимость программы в эти даты может отличаться.</p>
        </div>
      </section>

      <footer className="px-6 md:px-16 py-20 bg-ink text-background print-page">
        <div className="max-w-5xl mx-auto">
          <span className="text-sunset font-semibold uppercase tracking-[0.25em] text-xs">Свяжитесь с нами</span>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-2 mb-10">Моя Сибирь</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              ['Phone', 'Телефон / WhatsApp', '+7 917 831 61 06'],
              ['Globe', 'Сайт', 'mysiberiatour.ru'],
            ].map(([ic, label, val]) => (
              <div key={label}>
                <Icon name={ic} size={26} className="text-sunset mb-3" />
                <div className="text-background/60 text-sm">{label}</div>
                <div className="text-xl font-semibold">{val}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-background/15 text-background/50 text-sm">
            © 2026 Моя Сибирь · Программа тура «Жемчужины Китая»
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;