import "./App.css";
import { ImageCard } from "./components/ImageCard";
import { useGetAllContent } from "./hooks/useGetAllContent";
import { useGetImagePosts } from "./hooks/useGetImagePosts";

function App() {
  const { data: allData } = useGetAllContent();
  const { data: images } = useGetImagePosts();

  console.log(images);

  return (
    <>
      <div>
        {images?.items?.map((item) => {
          return (
            <ImageCard
              url={item.fields.image.fields.file.url}
              alt={item.fields.titel}
              titel={item.fields.titel}
            ></ImageCard>
          );
        })}
      </div>
    </>
  );
}

export default App;
