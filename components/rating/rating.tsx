import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { FC } from "react";

interface RatingProps {
  rating: number;
}

const makeRatingArray = (rating: number) => {
  const ratings = new Array(5).fill(0);

  for (let i = 0; i < rating; i++) {
    ratings[i] = 1;
  }

  return ratings;
};

export const Rating: FC<RatingProps> = ({ rating }) => {
  const ratings = makeRatingArray(rating);

  return (
    <div className="flex items-center justify-start gap-1 my-2">
      {ratings.map((v, idx) =>
        v ? (
          <StarFilledIcon key={idx + v} className="text-yellow-300" />
        ) : (
          <StarIcon key={idx + v} />
        )
      )}
    </div>
  );
};
