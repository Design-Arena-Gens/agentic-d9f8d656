## Design Arena — руководство по внедрению

Веб-приложение предоставляет структурированное руководство на русском языке, которое показывает, как выстроить процессы в платформе **Design Arena**: от настройки рабочих пространств до аналитики и регламентов команды.

### Стек

- [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- Tailwind CSS через плагин `@tailwindcss/postcss`
- Шрифты Geist от Vercel

### Локальный запуск

```bash
npm install
npm run dev
```

После запуска переходите в браузере на [http://localhost:3000](http://localhost:3000), чтобы изучить руководство.

### Сборка и проверка

```bash
npm run lint
npm run build
```

### Структура

```
src/app
├── layout.tsx      # Метаданные и базовый макет
├── page.tsx        # Основной контент «Как пользоваться Design Arena»
└── globals.css     # Глобальные стили и токены темы
```

### Деплой

Для публикации на Vercel используйте команду:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-d9f8d656
```

После деплоя подождите несколько секунд и проверьте доступность сайта по адресу [https://agentic-d9f8d656.vercel.app](https://agentic-d9f8d656.vercel.app).
