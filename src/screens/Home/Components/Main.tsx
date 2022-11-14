import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Tweet } from "./Tweets";
import { WriteTwitter } from "./WriteTwitter";
import { IconStars } from "../../../Icons";
import { debounce } from "lodash";
import PulseLoader from "react-spinners/PulseLoader";
import { SkeletonTwitters } from "../../../components/Skeleton/Twiters";

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
  };
  date: string;
  description: string;
}

export function Main() {
  const [tweets, setTweets] = useState<TweetsResponse[]>([]);
  const jumpRef = useRef(0);
  const [loadingMoreTweets, setLoadingMoreTweets] = useState(false);
  const [quantitySkeleton, setQuantitySkeleton] = useState(1);
  console.log({ quantitySkeleton });

  const getNewTweets = debounce(async () => {
    const qntSkeletonTimer = setInterval(() => {
      if (quantitySkeleton > 3) return;

      setQuantitySkeleton((c) => c + 1);
    }, 1000);

    try {
      const result = await axios.get<TweetsResponse[]>("/api/tweets", {
        params: {
          skip: jumpRef.current,
        },
      });

      jumpRef.current = jumpRef.current + 1;
      setTweets((current) => [...current, ...result.data]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingMoreTweets(false);
      clearInterval(qntSkeletonTimer);
    }
  });

  useEffect(() => {
    const intersectionsObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting) && !loadingMoreTweets) {
        setLoadingMoreTweets(true);
        if (loadingMoreTweets) return;
        getNewTweets();
      }
    });

    intersectionsObserver.observe(document.querySelector("#observer")!);

    return () => intersectionsObserver.disconnect();
  });

  return (
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
        );
      })}

      {loadingMoreTweets && tweets.length === 0 && (
        <div className="flex w-full flex-col gap-4">
          {Array(quantitySkeleton)
            .fill(0)
            .map(() => (
              <SkeletonTwitters />
            ))}
        </div>
      )}

      <div className="flex justify-center my-10" id="observer">
        {loadingMoreTweets && tweets.length > 0 && (
          <PulseLoader color={"#1D9BF0"} />
        )}
      </div>
    </main>
  );
}
