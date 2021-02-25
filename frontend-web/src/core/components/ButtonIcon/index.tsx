import React from 'react';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg'
import './styles.scss';

type Props = {
    text: String;
}

const ButtonIcon = ({text}: Props) => (
    <div className="default-button">
        <button className="btn btn-icon">
            <h5 className="btn-icon-text">
                {text}
            </h5>
        </button>
        <div className="btn-icon-content">
            <ArrowIcon />
        </div>
    </div>
)

export default ButtonIcon;