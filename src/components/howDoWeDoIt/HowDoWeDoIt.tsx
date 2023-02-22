import React from 'react';
import Wrapper from "@/components/common/wrapper";
import SmallTitle from "@/components/common/Titles/SmallTitle";
import {HowDoWeDoItData} from "@/components/howDoWeDoIt/MocData";

const HowDoWeDoIt = () => {
    return (
        <Wrapper>
            <div>
                <img src="" alt=""/>
            </div>
            <div>
                <SmallTitle/>
                <div>
                    {HowDoWeDoItData.map(el =>
                        <div key={el.id}>
                            <h5>{el.title}</h5>
                            <p>{el.description}</p>
                        </div>
                    )}
                </div>
            </div>
        </Wrapper>
    );
};

export default HowDoWeDoIt;