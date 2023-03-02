export type PortfolioType<T = { title: string, description: string }> = {
    id: string,
    title: string,
    request: T,
    deadlines: T,
    services: T,
    frontEnd: T,
    backEnd: T,
    design: T,
    link: string
}


export const portfolioData: PortfolioType[] = [{
    id: '1',
    title: 'Sela',
    request: {title: 'просьба', description: 'Нас попросили добавить страницу "Новинки'},
    deadlines: {title: 'сроки исполнения', description: '14 дней разработки и дизайна'},
    services: {title: 'услуги', description: 'Интернет-магазин'},
    frontEnd: {title: 'фронтенд', description: 'Html, Scss, React'},
    backEnd: {title: 'бэкенд', description: 'Node.js'},
    design: {title: 'Дизайн', description: 'Figma'},
    link: 'https://www.sela.ru'
}, {
    id: '2',
    title: 'Skysmart Pro',
    request: {title: 'просьба', description: 'Разработать сайт для школы программирования'},
    deadlines: {title: 'сроки исполнения', description: '23 дня разработки и дизайна'},
    services: {title: 'услуги', description: 'Корпоративный сайт'},
    frontEnd: {title: 'фронтенд', description: 'Html, Scss, React'},
    backEnd: {title: 'бэкенд', description: 'Node.js'},
    design: {title: 'Дизайн', description: 'Figma'},
    link: 'https://skysmart.ru'
}, {
    id: '3',
    title: 'Living Corporate',
    request: {title: 'просьба', description: 'Разработать сайт подкастов'},
    deadlines: {title: 'сроки исполнения', description: '25 дней разработки и дизайна'},
    services: {title: 'услуги', description: 'Корпоративный сайт'},
    frontEnd: {title: 'фронтенд', description: 'Html, Scss, React'},
    backEnd: {title: 'бэкенд', description: 'Java'},
    design: {title: 'Дизайн', description: 'Figma'},
    link: 'https://livingcorporate.workshopbuilt.com'
}, {
    id: '4',
    title: 'Air company',
    request: {title: 'просьба', description: 'Оптимизировать сайт компании'},
    deadlines: {title: 'сроки исполнения', description: '17 дней опитимазиции бэкенда'},
    services: {title: 'услуги', description: 'Корпоративный сайт'},
    frontEnd: {title: 'фронтенд', description: 'Nuxt, Scss, Vue Js'},
    backEnd: {title: 'бэкенд', description: 'Java'},
    design: {title: 'Дизайн', description: 'Figma'},
    link: 'https://www.aircompany.com'
}, {
    id: '5',
    title: 'RBT.ru',
    request: {title: 'просьба', description: 'Добавить страницу "Товары для детей"'},
    deadlines: {title: 'сроки исполнения', description: '10 дней разработки и дизайна'},
    services: {title: 'услуги', description: 'Интернет-магазин'},
    frontEnd: {title: 'фронтенд', description: 'Html, Scss, React'},
    backEnd: {title: 'бэкенд', description: 'Node js'},
    design: {title: 'Дизайн', description: 'Figma'},
    link: 'https://www.rbt.ru'
}, {
    id: '6',
    title: 'megamarketbu',
    request: {title: 'просьба', description: 'Разработать интернет-магазин Б/У техники'},
    deadlines: {title: 'сроки исполнения', description: '26 дней разработки и дизайна'},
    services: {title: 'услуги', description: 'Интернет-магазин'},
    frontEnd: {title: 'фронтенд', description: 'Html, Scss, React'},
    backEnd: {title: 'бэкенд', description: 'Node js'},
    design: {title: 'Дизайн', description: 'Figma'},
    link: 'http://megamarketbu.ru'
}, {
    id: '7',
    title: '1VIP',
    request: {title: 'просьба', description: 'Разработать сайт компании 1VIP'},
    deadlines: {title: 'сроки исполнения', description: '23 дня разработки и дизайна'},
    services: {title: 'услуги', description: 'Корпоративный сайт'},
    frontEnd: {title: 'фронтенд', description: 'Html, Scss, React'},
    backEnd: {title: 'бэкенд', description: 'Java'},
    design: {title: 'Дизайн', description: 'Figma'},
    link: 'http://1vip.ru'
}, {
    id: '8',
    title: 'Marcoicecream',
    request: {title: 'просьба', description: 'Cайт компании по созданию мороженого в США'},
    deadlines: {title: 'сроки исполнения', description: '31 день разработки и дизайна'},
    services: {title: 'услуги', description: 'Корпоративный сайт'},
    frontEnd: {title: 'фронтенд', description: 'Html, Scss, React'},
    backEnd: {title: 'бэкенд', description: 'Node js'},
    design: {title: 'Дизайн', description: 'Figma'},
    link: 'https://www.marcoicecream.com'
}, {
    id: '9',
    title: 'Counter-Print',
    request: {title: 'просьба', description: 'Разработать эксклюзив-книжный интернет-магазин'},
    deadlines: {title: 'сроки исполнения', description: '8 дней разработки и дизайна'},
    services: {title: 'услуги', description: 'Интернет-магазин'},
    frontEnd: {title: 'фронтенд', description: 'Html, Scss, React'},
    backEnd: {title: 'бэкенд', description: 'Node js'},
    design: {title: 'Дизайн', description: 'Figma'},
    link: 'https://www.counter-print.co.uk'
}, {
    id: '10',
    title: 'Ventriloc',
    request: {title: 'просьба', description: 'Дизайн сайта французкой компании по работе с данными'},
    deadlines: {title: 'сроки исполнения', description: '16 дней дизайна'},
    services: {title: 'услуги', description: 'Дизайн'},
    frontEnd: {title: 'фронтенд', description: ''},
    backEnd: {title: 'бэкенд', description: ''},
    design: {title: 'Дизайн', description: 'Figma'},
    link: 'https://ventriloc.ca/en'
}, {
    id: '11',
    title: 'Ha-labo',
    request: {title: 'просьба', description: 'Сайт для японской компании по созданию продуктов по уходу'},
    deadlines: {title: 'сроки исполнения', description: '27 дней разработки и дизайна'},
    services: {title: 'услуги', description: 'Корпоративный сайт'},
    frontEnd: {title: 'фронтенд', description: 'Html, Scss, React'},
    backEnd: {title: 'бэкенд', description: 'Java'},
    design: {title: 'Дизайн', description: 'Figma'},
    link: 'https://ha-labo.co.jp/?ref=httpster.net'
},
]