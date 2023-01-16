import router from "next/router";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const getServerSideProps = (ctx) => {
  console.log("getServerSideProps", ctx.query);
  return {
    props: {
      page: ctx.query.slug[0],
    },
  };
};

const Post = (props) => {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex(index + 1);

    router.replace(`/post/${props.page}/clicks/${index + 1}`, undefined, {
      shallow: true,
    });
  };

  useEffect(() => {
    setIndex(0);
  }, [props.page]);

  return (
    <div>
      <h1>This is post {props.page}</h1>

      <h3>Clicks {index}</h3>

      <button onClick={handleClick}>bump</button>

      <Link href="/post/1" passHref>
        Post 1
      </Link>

      <Link href="/post/2" passHref>
        Post 2
      </Link>

      <Link href="/post/3" passHref>
        Post 3
      </Link>
    </div>
  );
};

export default Post;
