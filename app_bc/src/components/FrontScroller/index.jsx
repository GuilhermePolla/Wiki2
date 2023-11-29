"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./styles.css";
import FeaturedCards from "./FeaturedCards";
import LikedCards from "./LikedCards";
import FeaturedCaller from "./FeaturedCaller";

const mockup = [
  {
    id: "1",
    title: "title 1",
    content: "content 1",
    date: "date 1",
    likes: "1",
    img: "https://picsum.photos/",
  },
  {
    id: "2",
    title: "title 2",
    content: "content 2",
    date: "date 2",
    likes: "2",
    img: "https://picsum.photos/",
  },
  {
    id: "3",
    title: "title 3",
    content: "content 3",
    date: "date 3",
    likes: "3",
    img: "https://picsum.photos/",
  },
  {
    id: "4",
    title: "title 4",
    content: "content 4",
    date: "date 4",
    likes: "4",
    img: "https://picsum.photos/",
  },
  {
    id: "5",
    title: "title 5",
    content: "content 5",
    date: "date 5",
    likes: "5",
    img: "https://picsum.photos/",
  },
  {
    id: "6",
    title: "title 6",
    content: "content 6",
    date: "date 6",
    likes: "6",
    img: "https://picsum.photos/",
  },
  {
    id: "7",
    title: "title 7",
    content: "content 7",
    date: "date 7",
    likes: "7",
    img: "https://picsum.photos/",
  },
  {
    id: "8",
    title: "title 8",
    content: "content 8",
    date: "date 8",
    likes: "8",
    img: "https://picsum.photos/",
  },
  {
    id: "9",
    title: "title 9",
    content: "content 9",
    date: "date 9",
    likes: "9",
    img: "https://picsum.photos/",
  },
  {
    id: "10",
    title: "title 10",
    content: "content 10",
    date: "date 10",
    likes: "10",
    img: "https://picsum.photos/",
  },
];

function FrontScroller(props) {
  const [id, setId] = useState(1);
  const [data, setData] = useState(mockup[0]);

  useEffect(() => {
    setData(mockup[id - 1]);
  }, [id]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setId((current) => {
        if (current === mockup.length) {
          return 1;
        }
        return current + 1;
      });
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div className="frontScrollerWrapper">
      <Image
        alt="Document image"
        src={`https://picsum.photos/1366/659?grayscale&random=${id}`}
        width={1366}
        height={659}
        style={{
          position: "absolute",
          top: -181,
          left: 0,
          zIndex: -1,
          width: "100%",
          height: "calc(100vh + 65px)",
        }}
      />

      <FeaturedCards data={mockup} active={id} setId={setId} />
      <FeaturedCaller data={data} />
      <LikedCards data={mockup} />
    </div>
  );
}

export default FrontScroller;
