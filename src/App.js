import "./App.css";
import { Nav } from "./components/Nav";
import { Article } from "./components/Article";
// import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { News } from "./components/News";
import { useState } from "react";
import { Science } from "./components/Science";
import { Sports } from "./components/Sports";
import { Business } from "./components/Business";

// import about from "./About.txt"

function App() {

   const about = "This website serves as a user-friendly platform for accessing news headlines and accompanying images,desc,author,etc. It provides users with the convenience of browsing through a curated selection of articles and clicking on headlines to delve deeper into the stories. Utilizing the React framework, the website not only offers an immersive reading experience but also serves as a practical tool for individuals interested in learning React development techniques.\n\tBy leveraging the capabilities of the NEWS API, the website dynamically fetches the latest news updates, ensuring that users have access to up-to-date information. The intuitive interface allows for seamless navigation, enabling users to effortlessly explore various news categories and stay informed about current events.\n\t  With its emphasis on simplicity and functionality, this website serves as both a valuable educational resource for React enthusiasts and a practical news consumption platform for users seeking timely and reliable information."

  const [ImgUrl, setImgUrl] = useState();
  const [Title, setTitle] = useState();
  const [Desc, setDesc] = useState();
  const [Author, setAuthor] = useState();
  const [Date, setDate] = useState();
  const [Source, setSource] = useState();
  const [Url, setUrl] = useState("#");
  // const [ImgUrl, setImgUrl] = useState();
  // const [ImgUrl, setImgUrl] = useState();
  // const [ImgUrl, setImgUrl] = useState();

  function OpenArticle(title, desc, imgUrl, author, date, source,Url,content) {
    imgUrl?setImgUrl(imgUrl):setImgUrl("https://upload.wikimedia.org/wikipedia/commons/7/75/No_image_available.png");
    title?setTitle(title):setTitle("Not Available");
    desc?setDesc(desc):setDesc("Not Available");
    author?setAuthor(author):setAuthor("Not Available");
    date?setDate(date):setDate("Not Available");
    source?setSource(source):setSource("Not Available");
    setUrl(Url)
  }
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Nav />
          <Article ImageIUrl={ImgUrl} Title={Title} Desc={Desc} Author={Author} Date={Date} Source={Source} Url={Url} />
          <News OpenArticle={OpenArticle}  />

        </>
      ),
    },
    {
      path: "/science",
      element: (
        <>
          <Nav />
          <Article ImageIUrl={ImgUrl} Title={Title} Desc={Desc} Author={Author} Date={Date} Source={Source} Url={Url}/>

          <Science OpenArticle={OpenArticle} />
          
        </>
      ),
    },
    {
      path: "/sports",
      element: (
        <>
          <Nav />
          <Article ImageIUrl={ImgUrl} Title={Title} Desc={Desc} Author={Author} Date={Date} Source={Source} Url={Url}/>

          <Sports OpenArticle={OpenArticle} />
        </>
      ),
    },
    {
      path: "/business",
      element: (
        <>
          <Nav />
          <Article ImageIUrl={ImgUrl} Title={Title} Desc={Desc} Author={Author} Date={Date} Source={Source} Url={Url}/>

          <Business OpenArticle={OpenArticle} />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Nav />
          <Article Title={"About"} Desc={about} isArticle={true}/>
          {/* <News/> */}
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Nav />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
