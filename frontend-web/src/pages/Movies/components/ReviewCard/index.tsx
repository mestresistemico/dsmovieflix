import React from 'react';
import { Review } from 'core/types/Movie';
import { ReactComponent as Star } from 'core/assets/images/star.svg'
import './styles.scss'

type Props = {
    review: Review;
}

const ReviewCard = ({ review }: Props) => {

    return (
        <div className='card-content'>
            <div className="review-card-star-name">
                <Star className='review-card-star' />
                <div className="review-card-username">
                    {review.userName}
                </div>
            </div>
            <div className="card-base review-card-text">
                {review.text}
            </div>
        </div>
    );
};

export default ReviewCard;