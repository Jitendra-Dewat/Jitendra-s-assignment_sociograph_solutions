import React from 'react'
import './reviews.css';
import {useState} from 'react';

function Reviews({ data }) {

    const [flag, setflag] = useState(false)

    function onClickHandler(event)
    {
        event.preventDefault();
        if(flag == false)
            setflag(true);
        else
            setflag(false)
    }

    return (
        <div className="reviews">
            <h1 className="reviewsHeading"> Reviews of your Product {data.product_id}  </h1>
            <button type="button" class="showMore btn btn-dark" onClick={onClickHandler}>Show More</button>

            {
            data.length != 0 && 
            data.reviews.map(review => {
                return (
                <div className="review my-2  border border-secondary rounded-left">
                    { review.friend ? true : <p className="reviewerName"> <b>  {review.reviewer.name} </b> <br/> 
                    <p className="reviewTitle"> <b>{review.title} </b>
                    <span className='product__rating'>
                        {
                            Array(review.ratings.Overall)
                            .fill()
                            .map((_) => (
                                <p>⭐</p>
                            ))
                        }
                        {
                            Array(5 - review.ratings.Overall)
                            .fill()
                            .map((_) => (
                                <p>☆</p>
                            ))
                        }
                    </span>
                        <br/> {review.comment} <br/>
                        Usefullness :  {review.usefulness}</p>  
                    </p>} 
                                        { 
                        flag &&  <p className="reviewTitle"> Delevry Time {review.ratings.delivery_time}</p> 
                    
                    }
                </div>
                )
            })
            }
        </div>
    )
}

export default Reviews
