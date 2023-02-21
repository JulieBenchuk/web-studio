import React from 'react';
import Wrapper from "@/components/common/wrapper";
import style from "@/styles/components/questionnaireForm.module.scss"
import SmallTitle from "@/components/common/Titles/SmallTitle";
import FullButton from "@/components/common/buttons/FullButton";

const QuestionnaireForm = () => {
    return (
        <Wrapper className={style.wrapper}>
            <form className={style.formBlock}>

                <div className={style.commonInfo}>
                    <SmallTitle className={style.titles}>Общая информация</SmallTitle>
                    <div className={style.commonInfoForm}>
                        <div className={style.formName}>
                            <label>Имя</label>
                            <input type="text" placeholder={"Иванов Иван Иванович"}/>
                        </div>
                        <div className={style.formPhone}>
                            <label>Номер телефона</label>
                            <input type="tel" placeholder={"+7(___) ___ __ __"}/>
                        </div>
                        <div className={style.formEmail}>
                            <label>E-mail</label>
                            <input type="email" placeholder={"Ivan@mail.ru"}/>
                        </div>
                        <div className={style.formCompanyName}>
                            <label>Компания/проект</label>
                            <input type="text" placeholder={"OOO Ivanovka"}/>
                        </div>
                    </div>
                </div>


                <div className={style.interest}>
                    <SmallTitle className={style.titles}>Вас интересует</SmallTitle>
                </div>

                <div className={style.projectInfo}>
                    <SmallTitle className={style.titles}>Информация о проекте</SmallTitle>
                    <div className={style.projectInputForm}>
                        <div className={style.row1}>
                            <div className={style.formSite}>
                                <label>Веб-сайт</label>
                                <input type="text" placeholder={"www.ivanovka.com"}/>
                            </div>
                            <div className={style.formAge}>
                                <label>Возраст компании (в годах)</label>
                                <input type="text" placeholder={"21 год"}/>
                            </div>
                        </div>
                        <div className={style.row2}>
                            <div className={style.formMessage}>
                                <label>Сообщение</label>
                                <textarea/>
                            </div>
                        </div>
                        <div className={style.buttonBlock}>
                            <FullButton className={style.button}>Отправить</FullButton>
                        </div>

                    </div>


                    {/*  <div className={style.projectInputForm}>
                        <div className={style.formSite}>
                            <label>Веб-сайт</label>
                            <input type="text" placeholder={"www.ivanovka.com"}/>
                        </div>
                        <div className={style.formAge}>
                            <label>Возраст компании (в годах)</label>
                            <input type="text" placeholder={"21 год"}/>
                        </div>
                    </div>

                    <div className={style.projectTextareaForm}>
                        <div className={style.formMessage}>
                            <label>Сообщение</label>
                            <textarea/>
                        </div>
                    </div>*/}
                </div>


            </form>

        </Wrapper>
    );
};

export default QuestionnaireForm;