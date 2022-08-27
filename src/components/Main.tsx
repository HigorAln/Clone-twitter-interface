import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Tweet } from "../components/Tweets";
import { WriteTwitter } from "../components/WriteTwitter";
import { IconStars } from "../Icons";
import { debounce } from 'lodash'
import PulseLoader from 'react-spinners/PulseLoader'

interface TweetsResponse {
  id: string;
  name: string;
  username: string;
  interactions: {
    comments: string;
    likes: string;
    reTwitters: string;
  };
  avatar_url: string;
  font?: {
    name: string;
    interaction: "HEALTH" | "COMMENT" | "FORWARD";
  },
  date: string;
  description: string;
}

export function Main(){
  const [tweets, setTweets] = useState<TweetsResponse[]>([]);
  const jumpRef = useRef(0)
  const [loadingMoreTweets, setLoadingMoreTweets] = useState(false);

  const getNewTweets = debounce(async () => {
    try {
      const result = await axios.get<TweetsResponse[]>("/api/tweets", {
        params: {
          skip: jumpRef.current
        }
      })

      jumpRef.current = jumpRef.current + 1
      setTweets(current => [...current, ...result.data]);
    }catch(err) {
      console.log(err);
    } finally {
      setLoadingMoreTweets(false);
    }
  })

  useEffect(() => {
    const intersectionsObserver = new IntersectionObserver((entries) => {
      if (entries.some(entry => entry.isIntersecting) && !loadingMoreTweets) {
        setLoadingMoreTweets(true);
        if (loadingMoreTweets) return;
        getNewTweets()
      }
    })

    intersectionsObserver.observe(document.querySelector("#observer")!);

    return () => intersectionsObserver.disconnect();
  })

  return(
    <main className="min-w-0 md:min-w-[600px] max-w-none md:max-w-[600px] flex-2 w-full border border-gray-100 relative">
      <span className="flex justify-between px-4 sticky z-10 top-0 bg-white">
        <h1 className="py-3 text-lg font-bold">Home</h1>
        <IconStars />
      </span>
      <WriteTwitter />

      {tweets.map((tweet) => {
        return (
          <Tweet
            key={tweet.id}
            avatar_url={tweet.avatar_url}
            description={tweet.description}
            date={tweet.date}
            font={tweet.font}
            interactions={tweet.interactions}
            name={tweet.name}
            username={tweet.username}
          />
        )
      })}

      <div className="flex justify-center my-10" id="observer">
        {(loadingMoreTweets || !tweets.length) && (<PulseLoader color={"#1D9BF0"} />)}
      </div>
    </main>
  )
}