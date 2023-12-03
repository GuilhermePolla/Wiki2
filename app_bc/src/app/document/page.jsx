"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import "./styles.css";
import { ThumbsUp } from "lucide-react";

async function handleLike(id, setArticle) {
  try {
    const res = await axios.post(`http://localhost:3001/article/like/${id}`);
    if (res.status === 200) {
      getArticle(id, setArticle);
      alert("Liked!");
    } else {
      alert("Error!");
    }
  } catch (err) {
    console.log(err);
  }
}

async function getArticle(id, setArticle) {
  try {
    const article = await axios.get(
      `http://localhost:3001/article/get-by-id/${id}`
    );
    // const author = await axios.get(
    //   `http://localhost:3001/user/get-by-id/${article.data.artigo.article_author_id}`
    // );
    setArticle(article.data.artigo);
  } catch (err) {
    console.log(err);
  }
}

export default function Document() {
  const [article, setArticle] = useState(undefined);

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    getArticle(id, setArticle);
  }, []);

  return (
    <div className="documentWrapper">
      <div className="articleWrapper">
        <div className="articleText">
          <div className="articleHeader">
            <h1>{article?.article_title}</h1>
            <div className="likeWrapper">
              <p>{article?.article_liked_count}</p>
              <ThumbsUp size={25} onClick={() => handleLike(id, setArticle)} />
            </div>
          </div>
          <hr />
          <div className="articleBody">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              vel vestibulum lacus, dignissim gravida ligula. Nam sollicitudin
              placerat augue, sed placerat arcu accumsan a. Fusce porta
              tincidunt gravida. Aliquam vitae dictum leo. Vivamus fermentum
              nisi in tempor mattis. Fusce faucibus dui ut sem imperdiet,
              rhoncus rutrum metus condimentum. Donec finibus sit amet enim sed
              blandit. Etiam blandit lacinia ante. Integer laoreet, purus et
              finibus rutrum, mauris ligula consequat nisi, eu interdum tortor
              metus quis velit. In hac habitasse platea dictumst. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae; Duis non libero erat. Donec nec rutrum ante, et
              aliquet libero. Nam convallis porttitor libero, id tincidunt
              sapien vehicula sit amet. Proin gravida orci sed tincidunt
              scelerisque. Sed eu posuere neque, vel pulvinar ante. Duis egestas
              venenatis quam eleifend euismod. Aenean aliquet luctus nisi non
              fringilla. Nulla quis ultrices purus. Donec id pellentesque odio.
              Cras pharetra tempor accumsan. Morbi id iaculis nisi. Quisque
              facilisis rutrum rhoncus. Pellentesque purus est, imperdiet non
              porttitor rhoncus, molestie vel sem. Proin commodo mi quis enim
              bibendum elementum. Fusce sit amet rhoncus elit. In gravida ac
              purus sodales viverra. Nullam nec enim nibh. Maecenas sed
              vestibulum dui. Vestibulum vehicula, nulla id elementum maximus,
              dui mauris consectetur sem, ac ultricies erat felis eget erat. Nam
              lacinia rhoncus felis at accumsan. Nam sagittis aliquet odio, ac
              faucibus turpis. Quisque facilisis varius vulputate. Cras
              tincidunt diam id mi dictum auctor. Vestibulum et purus pharetra,
              porta neque aliquam, vestibulum arcu. Vivamus tincidunt tortor
              arcu, ac porttitor orci gravida sed. Sed ut vulputate purus.
              Quisque in convallis turpis, eu euismod tortor. Mauris in nunc
              cursus, molestie nunc sed, sollicitudin nisi. Nam vitae aliquet
              nibh. Aliquam maximus tortor finibus, fermentum justo at, pharetra
              urna. Mauris pellentesque, purus quis sagittis varius, sem erat
              ornare mi, sed aliquet diam diam vitae neque. Nam dignissim tempus
              nunc, et ultricies justo tempor non. Nam at arcu sodales,
              tristique ex vitae, ornare mi. Nulla facilisi. Quisque nec rhoncus
              nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris vel vestibulum lacus, dignissim gravida ligula. Nam
              sollicitudin placerat augue, sed placerat arcu accumsan a. Fusce
              porta tincidunt gravida. Aliquam vitae dictum leo. Vivamus
              fermentum nisi in tempor mattis. Fusce faucibus dui ut sem
              imperdiet, rhoncus rutrum metus condimentum. Donec finibus sit
              amet enim sed blandit. Etiam blandit lacinia ante. Integer
              laoreet, purus et finibus rutrum, mauris ligula consequat nisi, eu
              interdum tortor metus quis velit. In hac habitasse platea
              dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia curae; Duis non libero erat. Donec nec
              rutrum ante, et aliquet libero. Nam convallis porttitor libero, id
              tincidunt sapien vehicula sit amet. Proin gravida orci sed
              tincidunt scelerisque. Sed eu posuere neque, vel pulvinar ante.
              Duis egestas venenatis quam eleifend euismod. Aenean aliquet
              luctus nisi non fringilla. Nulla quis ultrices purus. Donec id
              pellentesque odio. Cras pharetra tempor accumsan. Morbi id iaculis
              nisi. Quisque facilisis rutrum rhoncus. Pellentesque purus est,
              imperdiet non porttitor rhoncus, molestie vel sem. Proin commodo
              mi quis enim bibendum elementum. Fusce sit amet rhoncus elit. In
              gravida ac purus sodales viverra. Nullam nec enim nibh. Maecenas
              sed vestibulum dui. Vestibulum vehicula, nulla id elementum
              maximus, dui mauris consectetur sem, ac ultricies erat felis eget
              erat. Nam lacinia rhoncus felis at accumsan. Nam sagittis aliquet
              odio, ac faucibus turpis. Quisque facilisis varius vulputate. Cras
              tincidunt diam id mi dictum auctor. Vestibulum et purus pharetra,
              porta neque aliquam, vestibulum arcu. Vivamus tincidunt tortor
              arcu, ac porttitor orci gravida sed. Sed ut vulputate purus.
              Quisque in convallis turpis, eu euismod tortor. Mauris in nunc
              cursus, molestie nunc sed, sollicitudin nisi. Nam vitae aliquet
              nibh. Aliquam maximus tortor finibus, fermentum justo at, pharetra
              urna. Mauris pellentesque, purus quis sagittis varius, sem erat
              ornare mi, sed aliquet diam diam vitae neque. Nam dignissim tempus
              nunc, et ultricies justo tempor non. Nam at arcu sodales,
              tristique ex vitae, ornare mi. Nulla facilisi. Quisque nec rhoncus
              nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris vel vestibulum lacus, dignissim gravida ligula. Nam
              sollicitudin placerat augue, sed placerat arcu accumsan a. Fusce
              porta tincidunt gravida. Aliquam vitae dictum leo. Vivamus
              fermentum nisi in tempor mattis. Fusce faucibus dui ut sem
              imperdiet, rhoncus rutrum metus condimentum. Donec finibus sit
              amet enim sed blandit. Etiam blandit lacinia ante. Integer
              laoreet, purus et finibus rutrum, mauris ligula consequat nisi, eu
              interdum tortor metus quis velit. In hac habitasse platea
              dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia curae; Duis non libero erat. Donec nec
              rutrum ante, et aliquet libero. Nam convallis porttitor libero, id
              tincidunt sapien vehicula sit amet. Proin gravida orci sed
              tincidunt scelerisque. Sed eu posuere neque, vel pulvinar ante.
              Duis egestas venenatis quam eleifend euismod. Aenean aliquet
              luctus nisi non fringilla. Nulla quis ultrices purus. Donec id
              pellentesque odio. Cras pharetra tempor accumsan. Morbi id iaculis
              nisi. Quisque facilisis rutrum rhoncus. Pellentesque purus est,
              imperdiet non porttitor rhoncus, molestie vel sem. Proin commodo
              mi quis enim bibendum elementum. Fusce sit amet rhoncus elit. In
              gravida ac purus sodales viverra. Nullam nec enim nibh. Maecenas
              sed vestibulum dui. Vestibulum vehicula, nulla id elementum
              maximus, dui mauris consectetur sem, ac ultricies erat felis eget
              erat. Nam lacinia rhoncus felis at accumsan. Nam sagittis aliquet
              odio, ac faucibus turpis. Quisque facilisis varius vulputate. Cras
              tincidunt diam id mi dictum auctor. Vestibulum et purus pharetra,
              porta neque aliquam, vestibulum arcu. Vivamus tincidunt tortor
              arcu, ac porttitor orci gravida sed. Sed ut vulputate purus.
              Quisque in convallis turpis, eu euismod tortor. Mauris in nunc
              cursus, molestie nunc sed, sollicitudin nisi. Nam vitae aliquet
              nibh. Aliquam maximus tortor finibus, fermentum justo at, pharetra
              urna. Mauris pellentesque, purus quis sagittis varius, sem erat
              ornare mi, sed aliquet diam diam vitae neque. Nam dignissim tempus
              nunc, et ultricies justo tempor non. Nam at arcu sodales,
              tristique ex vitae, ornare mi. Nulla facilisi. Quisque nec rhoncus
              nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris vel vestibulum lacus, dignissim gravida ligula. Nam
              sollicitudin placerat augue, sed placerat arcu accumsan a. Fusce
              porta tincidunt gravida. Aliquam vitae dictum leo. Vivamus
              fermentum nisi in tempor mattis. Fusce faucibus dui ut sem
              imperdiet, rhoncus rutrum metus condimentum. Donec finibus sit
              amet enim sed blandit. Etiam blandit lacinia ante. Integer
              laoreet, purus et finibus rutrum, mauris ligula consequat nisi, eu
              interdum tortor metus quis velit. In hac habitasse platea
              dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia curae; Duis non libero erat. Donec nec
              rutrum ante, et aliquet libero. Nam convallis porttitor libero, id
              tincidunt sapien vehicula sit amet. Proin gravida orci sed
              tincidunt scelerisque. Sed eu posuere neque, vel pulvinar ante.
              Duis egestas venenatis quam eleifend euismod. Aenean aliquet
              luctus nisi non fringilla. Nulla quis ultrices purus. Donec id
              pellentesque odio. Cras pharetra tempor accumsan. Morbi id iaculis
              nisi. Quisque facilisis rutrum rhoncus. Pellentesque purus est,
              imperdiet non porttitor rhoncus, molestie vel sem. Proin commodo
              mi quis enim bibendum elementum. Fusce sit amet rhoncus elit. In
              gravida ac purus sodales viverra. Nullam nec enim nibh. Maecenas
              sed vestibulum dui. Vestibulum vehicula, nulla id elementum
              maximus, dui mauris consectetur sem, ac ultricies erat felis eget
              erat. Nam lacinia rhoncus felis at accumsan. Nam sagittis aliquet
              odio, ac faucibus turpis. Quisque facilisis varius vulputate. Cras
              tincidunt diam id mi dictum auctor. Vestibulum et purus pharetra,
              porta neque aliquam, vestibulum arcu. Vivamus tincidunt tortor
              arcu, ac porttitor orci gravida sed. Sed ut vulputate purus.
              Quisque in convallis turpis, eu euismod tortor. Mauris in nunc
              cursus, molestie nunc sed, sollicitudin nisi. Nam vitae aliquet
              nibh. Aliquam maximus tortor finibus, fermentum justo at, pharetra
              urna. Mauris pellentesque, purus quis sagittis varius, sem erat
              ornare mi, sed aliquet diam diam vitae neque. Nam dignissim tempus
              nunc, et ultricies justo tempor non. Nam at arcu sodales,
              tristique ex vitae, ornare mi. Nulla facilisi. Quisque nec rhoncus
              nibh.
            </p>
          </div>
        </div>
        <div className="articleInfo">
          <h2>Id:</h2>
          <p>{article?._id}</p>
          <h2>Publicação:</h2>
          <p>{article?.article_published_date}</p>
        </div>
      </div>
    </div>
  );
}
