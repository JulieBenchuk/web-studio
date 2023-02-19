import vk from "../../assets/svg/vk.svg"
import application from "../../assets/svg/application.svg"
import www from "../../assets/svg/www.svg"
import socialGroup from "../../assets/svg/socialGroup.svg"


export const PromoData: PromoItemType[] = [
    {
        id: '1',
        img: socialGroup,
        title: 'Сообщество',
        description: 'Рекламные инструменты, которые мы используем, привлекают в Вашу группу новых подписчиков.'
    },
    {
        id: '2',
        img: www,
        title: 'Сайт',
        description: 'Обеспечиваем прирост трафика на сайте, оптимизируем рекламные кампании, анализируя их поведение.'
    },
    {
        id: '3',
        img: application,
        title: 'Приложение',
        description: 'Для того, чтобы приложение продвигалось и держалось в топе, мы обеспечиваем ему трафик.'
    },
    {
        id: '4',
        img: vk,
        title: 'Рассылка во «ВКонтакте»',
        description: 'Снижаем затраты на рекламу за счёт подогрева интереса ЦА и её подведения к совершению покупки.'
    },

]


type PromoItemType = {
    id: string,
    img: string
    title: string,
    description: string
}