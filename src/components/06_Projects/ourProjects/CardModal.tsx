import React from 'react';
import {PortfolioType} from "@/components/06_Projects/ourProjects/moc";


const CardModal: React.FC<{ el: PortfolioType }> = ({el}) => {
    return (
        <div>
            <button>x</button>
            <h4>{el.title}</h4>
            <div>
                <h6>{el.request.title}</h6>
                <p>{el.request.description}</p>
            </div>
            <div>
                <h6>{el.deadlines.title}</h6>
                <p>{el.deadlines.description}</p>
            </div>
            <div>
                <h6>{el.services.title}</h6>
                <p>{el.services.description}</p>
            </div>
            <div>
                <h6>{el.frontEnd.title}</h6>
                <p>{el.frontEnd.description}</p>
            </div>
            <div>
                <h6>{el.backEnd.title}</h6>
                <p>{el.backEnd.description}</p>
            </div>
            <div>
                <h6>{el.design.title}</h6>
                <p>{el.design.description}</p>
            </div>
            <button>Перейти на Сайт</button>
        </div>
    );
};

export default CardModal;