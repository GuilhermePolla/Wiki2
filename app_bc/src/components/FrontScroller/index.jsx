"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./styles.css";

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
    setTimeout(() => {
      setId((current) => {
        if (current === 5) {
          return 1;
        }
        return current + 1;
      });
    }, 5000);
  });

  return (
    <div style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}>
      <Image
        alt="Document image"
        src={`https://picsum.photos/1366/700?random=${id}`}
        width={1366}
        height={700}
      />
      <div style={{ position: "fixed", top: 141, right: 0, zIndex: 1 }}>
        {mockup.map((item) => {
          return (
            <h1
              key={item.id}
              style={{ color: item.id === id.toString() ? "red" : "initial" }}
            >
              {item.title}
            </h1>
          );
        })}
      </div>
    </div>
  );
}

export default FrontScroller;
