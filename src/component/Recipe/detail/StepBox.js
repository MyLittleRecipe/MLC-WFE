import React from 'react';

const Step = ({ number, image, content }) => {
    return (
        <div className="detail-recipe__step__box">
            <div className="detail-recipe__step__box__title">
                <h3>{`Step ${number}`}</h3>
            </div>
            <div className="detail-recipe__step__box__wrapper">
                <div className="detail-recipe__step__box__wrapper__img">
                    <img src={image}/>
                </div>
                <div className="detail-recipe__step__box__wrapper__text">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default Step;