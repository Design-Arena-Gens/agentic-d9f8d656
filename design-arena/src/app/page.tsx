const steps = [
  {
    id: "01",
    title: "Создайте рабочее пространство",
    description:
      "Начните с настройки профиля компании и структуры команд, чтобы каждый участник получил доступ к актуальным проектам.",
    checklist: [
      "Подтвердите домен и подключите SSO, чтобы ускорить онбординг команды.",
      "Создайте рабочие пространства под продуктовые направления или заказчиков.",
      "Назначьте роли: дизайнер, проджект, заказчик (читатель).",
    ],
  },
  {
    id: "02",
    title: "Организуйте дизайн-процессы",
    description:
      "Структурируйте проекты по стадиям: исследование, концепты, согласование, релиз. Это упростит контроль версий и задач.",
    checklist: [
      "Используйте шаблоны брифов Design Arena для быстрых стартов.",
      "Свяжите макеты с источниками данных (Figma, Miro, Notion).",
      "Настройте автоматические уведомления по статусам и дедлайнам.",
    ],
  },
  {
    id: "03",
    title: "Подключите коммуникации",
    description:
      "Соберите обсуждения в одном месте: комментарии по экранам, решения созвонов и историю правок.",
    checklist: [
      "Интегрируйте Slack или Teams, чтобы получать summary по активностям.",
      "Создайте каналы для синхронных и асинхронных ревью.",
      "Фиксируйте решения и бэклог в разделе " +
        "Ретроспектива" +
        " для будущих итераций.",
    ],
  },
  {
    id: "04",
    title: "Мерьте эффективность",
    description:
      "Отслеживайте метрики, чтобы сравнивать итерации, прогнозировать нагрузку и доказывать ценность дизайна бизнесу.",
    checklist: [
      "Подключите аналитические дашборды: время цикла, удовлетворённость заказчиков, скорость ревью.",
      "Экспортируйте отчёты в PDF/CSV для стейкхолдеров.",
      "Сверяйте фактические результаты с целями по OKR/ROI.",
    ],
  },
];

const roles = [
  {
    role: "Дизайнер",
    focus: "Ведение задач, загрузка артефактов, отслеживание ревью",
    actions: [
      "Импортируйте макеты из Figma и включите авто-синхронизацию слоёв.",
      "Используйте режим сравнения версий, чтобы подсветить изменения заказчику.",
      "Назначайте дедлайны и связывайте задачи с Jira или Linear.",
    ],
  },
  {
    role: "Проджект-менеджер",
    focus: "Планирование спринтов, управление ресурсами",
    actions: [
      "Создайте roadmap с чекпоинтами и контрольными вопросами.",
      "Настройте SLA на обратную связь и автоматические ремайндеры.",
      "Используйте модуль загрузки, чтобы распределять дизайнеров по проектам.",
    ],
  },
  {
    role: "Заказчик/стейкхолдер",
    focus: "Быстрое согласование и проверка гипотез",
    actions: [
      "Оставляйте комментарии точечно на слоях, а не в общих чатах.",
      "Сравнивайте концепты в режиме презентации, чтобы принимать решения на встрече.",
      "Отмечайте утверждённые экраны флагом, чтобы закрывать задачи без ручного дублирования.",
    ],
  },
];

const tips = [
  "Используйте теги приоритета (🔥 срочно, 💡 идея, ✅ готово), чтобы визуально управлять фокусом.",
  "Создавайте наборы проверок качества (UX, UI, контент), чтобы не выпускать мелкие дефекты.",
  "Публикуйте ежемесячный дайджест изменений прямо из Design Arena — отчёт подтягивается автоматически.",
];

const faq = [
  {
    question: "Где хранить готовые дизайн-системы?",
    answer:
      "Создайте отдельное пространство " +
      "Design System" +
      " и подключите библиотеку компонентов. Обновления синхронизируются с макетами через токены.",
  },
  {
    question: "Можно ли работать с внешними подрядчиками?",
    answer:
      "Добавьте их как гостей с ограниченным доступом: они видят нужные проекты и не попадают в корпоративную аналитику.",
  },
  {
    question: "Как быстрее собирать обратную связь?",
    answer:
      "Создайте интерактивный сценарий презентации и включите режим " +
      "Комментариев 360" +
      ", чтобы собирать ответы формой и автоматически превращать их в задачи.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(76,29,149,0.35),transparent_55%)]" />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-20 sm:px-10 lg:px-16">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-purple-200">
            Практическое руководство
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-snug sm:text-5xl">
            Как пользоваться Design Arena: соберите дизайн-процессы, аналитику и коммуникации в одном месте
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200/90">
            Эта инструкция поможет быстро развернуть инфраструктуру в Design Arena, выстроить прозрачную работу с заказчиками и контролировать прогресс команды без лишних митапов.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#steps"
              className="inline-flex items-center justify-center rounded-full bg-purple-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:bg-purple-400"
            >
              Перейти к шагам
            </a>
            <span className="text-sm text-slate-300/80">
              ⏱ Время внедрения: 3–5 рабочих дней с командой до 10 человек.
            </span>
          </div>
        </section>

        <section id="steps" className="space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">4 шага внедрения</h2>
            <p className="max-w-xl text-sm text-slate-300/90">
              Следуйте последовательности: каждая стадия фиксирует ключевые артефакты и снижает риск потерять контекст.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {steps.map((step) => (
              <article
                key={step.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-purple-400/60 hover:bg-purple-500/10"
              >
                <div className="flex items-baseline gap-4 text-sm text-purple-200/80">
                  <span className="text-2xl font-semibold text-purple-300">{step.id}</span>
                  {step.title}
                </div>
                <p className="mt-4 text-base text-slate-200/90">{step.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200/80">
                  {step.checklist.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/30 text-[11px] text-purple-100">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="absolute bottom-6 right-6 h-16 w-16 rounded-full border border-purple-400/40 bg-purple-500/20 blur-2xl transition group-hover:scale-110" />
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl border border-white/10 bg-black/40 p-10 backdrop-blur md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-semibold text-white">Роли и фокус</h2>
            <p className="mt-4 text-sm text-slate-300/80">
              Подсказки помогают синхронизировать ожидания: каждый участник знает, что делать и какие показатели важны.
            </p>
          </div>
          <div className="grid gap-6">
            {roles.map((role) => (
              <article key={role.role} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold text-white">{role.role}</h3>
                <p className="mt-2 text-sm text-purple-200/90">{role.focus}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-200/80">
                  {role.actions.map((action) => (
                    <li key={action} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/5 bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-transparent p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white">Экспресс-чеклист команды</h2>
              <p className="mt-3 max-w-xl text-sm text-slate-100/80">
                Забейте в календарь 30-минутный статус и пройдите чеклист — так вы убедитесь, что ничего не тормозит релизы.
              </p>
            </div>
            <a
              href="https://cal.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-purple-400/40 px-6 py-3 text-sm font-medium text-purple-100 transition hover:border-purple-300 hover:text-white"
            >
              Забронировать слот для статуса
            </a>
          </div>
          <ul className="mt-8 grid gap-4 text-sm text-slate-100/80 md:grid-cols-3">
            <li className="rounded-2xl bg-white/5 p-4">
              <span className="text-xs uppercase tracking-[0.3em] text-purple-200/80">Перед стартом</span>
              <p className="mt-2">Спроектирован бриф, есть каталог артефактов, заведены правила чеков качества.</p>
            </li>
            <li className="rounded-2xl bg-white/5 p-4">
              <span className="text-xs uppercase tracking-[0.3em] text-purple-200/80">Во время спринта</span>
              <p className="mt-2">Каждая задача имеет владельца, срок и статус, обратная связь фиксируется в контексте экранов.</p>
            </li>
            <li className="rounded-2xl bg-white/5 p-4">
              <span className="text-xs uppercase tracking-[0.3em] text-purple-200/80">После релиза</span>
              <p className="mt-2">Измерены метрики, подготовлен обзор по влиянию на продукт и рекомендации для следующей итерации.</p>
            </li>
          </ul>
        </section>

        <section className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-semibold text-white">Секреты продуктивности</h2>
            <ul className="mt-6 space-y-4 text-sm text-slate-200/85">
              {tips.map((tip) => (
                <li key={tip} className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-purple-300" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-semibold text-white">Популярные вопросы</h2>
            <div className="mt-6 space-y-5">
              {faq.map((item) => (
                <article key={item.question} className="rounded-2xl border border-white/5 bg-black/40 p-5">
                  <h3 className="text-lg font-medium text-purple-100">{item.question}</h3>
                  <p className="mt-2 text-sm text-slate-200/80">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-purple-400/40 bg-purple-500/20 p-10 text-center">
          <h2 className="text-3xl font-semibold text-white">Готовы вывести дизайн-команду на новый уровень?</h2>
          <p className="mt-4 text-sm text-purple-100/90">
            Синхронизируйте процессы, автоматизируйте отчёты и держите заказчиков в курсе без бесконечных встреч.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://designarena.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-purple-700 transition hover:bg-slate-100"
            >
              Перейти в Design Arena
            </a>
            <a
              href="mailto:support@designarena.com"
              className="text-sm font-medium text-white/80 hover:text-white"
            >
              Написать в поддержку
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
