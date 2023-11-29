"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./styles.css";
import FeaturedCards from "./FeaturedCards";
import LikedCards from "./LikedCards";

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
];

function FrontScroller(props) {
  const [id, setId] = useState(1);

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
        src={`https://picsum.photos/1366/699?random=${id}`}
        width={1366}
        height={699}
        style={{
          position: "absolute",
          top: -181,
          left: 0,
          zIndex: -1,
        }}
      />

      <FeaturedCards data={mockup} active={id} setId={setId} />
      <LikedCards data={mockup} />
    </div>
  );
}

export default FrontScroller;
