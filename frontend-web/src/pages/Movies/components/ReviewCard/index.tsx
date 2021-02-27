import React from 'react';
import { Review } from 'core/types/Movie';
import './styles.scss'

type Props = {
    review: Review;
}

const ReviewCard = ({ review }: Props) => {

    return (
        <div className='card-base review-card-admin'>
            <div className='card-content'>
                <h3 className="review-card-username">
                    {review.userName}
                </h3>
                <h3 className="review-card-text">
                    {review.text}
                </h3>
            </div>
        </div>
    );
};

export default ReviewCard;