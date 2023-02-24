import React, {ReactNode, useEffect, useState} from 'react';
import {useFormik} from 'formik';
import Wrapper from "@/components/common/wrapper";
import SmallTitle from "@/components/common/Titles/SmallTitle";
import FullButton from "@/components/common/buttons/FullButton";
import SelectorItem from "@/components/05_Questionnaire/SelectorItem";
import {selectorItemsData} from "@/components/05_Questionnaire/SelectorItemsData";
import style from "@/styles/components/questionnaireForm.module.scss"

const QuestionnaireForm = () => {
    const [isMessageActive, setIsMessageActive] = useState<boolean>(false)

    const [interest, setInterest] = useState<Array<{ checked: boolean, title: ReactNode }>>([])

    const onMessageActiveHandler = () => {
        setIsMessageActive(true)
    }

    const addClickedButton = (checkedButton: Array<{ checked: boolean, title: ReactNode }>) => {
        const indexOfCheckedButton = interest.findIndex(el => el.title === checkedButton[0].title)
        let newInterest = interest
        if (checkedButton[0] && indexOfCheckedButton >= 0) {
            newInterest.splice(indexOfCheckedButton, 1, ...checkedButton)
        } else {
            newInterest.push(...checkedButton)
        }
        setInterest(newInterest)
    }


    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            companyOrProject: '',
            site: '',
            ageOfCompany: '',
            message: '',
            interest: interest
        },
        onSubmit: (values, {resetForm}) => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
        },
    });

    useEffect(() => {

    })

    return (
        <Wrapper className={style.wrapper}>
            <form className={style.formBlock} onSubmit={formik.handleSubmit}>

                <div className={style.commonInfo}>
                    <SmallTitle className={style.titles}>Общая информация</SmallTitle>
                    <div className={style.commonInfoForm}>
                        <div className={style.formName}>
                            <label className={style.label}>Имя</label>
                            <input type="text" name="name" placeholder={"Иванов Иван Иванович"}
                                   onChange={formik.handleChange}
                                   value={formik.values.name}/>
                            <span className={style.fakePlaceholder}>Фамилия Имя Отчество</span>
                        </div>
                        <div className={style.formPhone}>
                            <label className={style.label}>Номер телефона</label>
                            <input type="tel" name="phone" placeholder={"+7(___) ___ __ __"}
                                   onChange={formik.handleChange}
                                   value={formik.values.phone}/>
                            <span className={style.fakePlaceholder}>+7(___) ___ __ __</span>
                        </div>
                        <div className={style.formEmail}>
                            <label className={style.label}>E-mail</label>
                            <input type="email" name="email" placeholder={"Ivan@mail.ru"}
                                   onChange={formik.handleChange}
                                   value={formik.values.email}/>
                            <span className={style.fakePlaceholder}>E-mail</span>
                        </div>
                        <div className={style.formCompanyName}>
                            <label className={style.label}>Компания/проект</label>
                            <input type="text" name="companyOrProject"
                                   placeholder={"OOO Ivanovka"}
                                   onChange={formik.handleChange}
                                   value={formik.values.companyOrProject}/>
                            <span className={style.fakePlaceholder}>Компания/проект</span>
                        </div>
                    </div>
                </div>

                <div className={style.interest}>
                    <SmallTitle className={style.titles}>Вас интересует</SmallTitle>
                    <div className={style.selectorsBlock}>
                        <div className={style.container}>
                            {selectorItemsData.map((i) => <SelectorItem key={i.id} title={i.title} buttons={i.buttons}
                                                                        background={i.style}
                                                                        onMessageActiveHandler={onMessageActiveHandler}
                                                                        addClickedButton={addClickedButton}/>)}
                        </div>
                    </div>
                </div>

                <div className={style.projectInfo}>
                    <SmallTitle className={style.titles}>Информация о проекте</SmallTitle>
                    <div className={style.projectInputForm}>
                        <div className={style.row1}>
                            <div className={style.formSite}>
                                <label className={style.label}>Веб-сайт</label>
                                <input type="text" placeholder={"www.ivanovka.com"} name="site"
                                       onChange={formik.handleChange}
                                       value={formik.values.site}/>
                                <span className={style.fakePlaceholder}>Ссылка на сайт</span>
                            </div>
                            <div className={style.formAge}>
                                <label className={style.label}>Возраст компании (в годах)</label>
                                <input type="text" placeholder={"21 год"} name="ageOfCompany"
                                       onChange={formik.handleChange}
                                       value={formik.values.ageOfCompany}/>
                                <span className={style.fakePlaceholder}>Возраст компании (в годах)</span>
                            </div>
                        </div>

                        <div className={style.row2}>
                            <div className={style.formMessage}>
                                <label className={style.label}>Сообщение</label>
                                <textarea disabled={!isMessageActive} name="message" onChange={formik.handleChange}
                                          value={formik.values.message}/>
                                <span className={style.fakePlaceholder}>Сообщение</span>
                            </div>
                        </div>

                        <div className={style.buttonBlock}>
                            <FullButton className={style.button} type="submit">Отправить</FullButton>
                        </div>

                    </div>

                </div>


            </form>

        </Wrapper>
    );
};

export default QuestionnaireForm;