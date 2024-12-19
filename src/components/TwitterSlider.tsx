import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import axios from "axios";

// Define the structure of a Tweet
interface Tweet {
  id: string;
  text: string;
  user: {
    name: string;
  };
}

// Main TwitterSlider Component
const TwitterSlider: React.FC = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]); // State to store tweets
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  // Fetch tweets from API on component mount
  useEffect(() => {
    const fetchTweets = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<{ tweets: Tweet[] }>("/api/tweets"); // Adjust API response structure
        setTweets(response.data.tweets); // Set fetched tweets
        setError(null);
      } catch (error) {
        console.error("Error fetching tweets:", error);
        setError("Failed to load tweets. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTweets();
  }, []);

  // Display loading message
  if (isLoading) {
    return <div className="text-white text-center">Loading tweets...</div>;
  }

  // Display error message
  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="w-full px-4 py-4">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 6000, // Reduced to 6 seconds for smoother viewing
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="twitter-slider"
      >
        {tweets.map((tweet) => (
          <SwiperSlide key={tweet.id} className="flex justify-center">
            <div className="bg-blue-800 p-4 rounded-lg text-white max-w-sm shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <p className="text-sm mb-2">"{tweet.text}"</p>
              <p className="text-xs font-bold text-gray-200 text-right">
                - {tweet.user.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TwitterSlider;
