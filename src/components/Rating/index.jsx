import { useState } from 'react';
import { Star } from '../Star';
import './style.css';

export const Rating = () => {
  const [rating, setRating] = useState(0);
  
  const handleRating = (value) => {
    (setRating(value))
  };

  return (
    <div className="rating">
      <div className="rating__value">{rating}</div>
      <div className="rating__stars">
        <Star value={1} glowing={rating >=1} onSelect={handleRating}/>
        <Star value={2} glowing={rating >=2} onSelect={handleRating}/>
        <Star value={3} glowing={rating >=3} onSelect={handleRating}/>
        <Star value={4} glowing={rating >=4} onSelect={handleRating}/>
        <Star value={5} glowing={rating >=5} onSelect={handleRating}/>
      </div>
    </div>
  );
};
