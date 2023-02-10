import React, { useState, useEffect } from "react";
// // import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import ExplorePage from "./Pages/ExplorePage";
// import ProfilePage from "./Pages/ProfilePage";
import LoginForm from "./Forms/LoginForm";
import Header from "./Components/Header.js";
// import CommentForm from "./Forms/CommentForm";
// import CommentList from "./Components/CommentList";
// import MusicPost from "./Components/MusicPost.js";
// import Song from "./Components/Song.js";
import HomePage from "./Pages/HomePage";
import { Register } from "./Forms/Register.jsx";
import axios from "axios"; 


const baseUrl = "https://songiefest-be.herokuapp.com";

function App() {

// store data of music posts API call in state
const [musicPosts, setMusicPosts] = useState({});

// get all music posts/Explore Page
useEffect(() => {
  const getMusicPosts = async() => {
  const cookieValue = document.cookie
  .split('; ')
  .find((row) => row.startsWith('token='))
  ?.split('=')[1];
  const token = 'Token ' + cookieValue;
  // const token = document.cookie
  try{
  const response = await axios.get(`${baseUrl}/explore/`, 
    {headers: { 'Content-Type': 'application/json', 
                      'Authorization': `${token}`,
                      }
                    }
                    )
    setMusicPosts(response.data);
      // console.log("explore page data from API", response.data);
      ;
    } catch (error) {
      console.error(error);
    }
  };
  getMusicPosts();
}, []);



return (
  <div>
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/explore" element={<ExplorePage musicPosts={musicPosts} />} exact />
            <Route path="/login" element={<LoginForm />} exact />
            <Route path="/register" element={<Register />} exact />
            {/* <Route path="/:username" element={<ProfilePage />} /> */}
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  </div>
);
}

export default App;

      
    


            

      
      // renders data returned from API call & stored in musicPosts state
    //   <div className="music-posts-container">
    //     {console.log("musicPosts:", musicPosts)}
    //     {Object.entries(musicPosts).map(([username, post]) => {
    //       console.log("username:", username);
    //       console.log("post:", post);
    //       return (
    //         <MusicPost
    //           key={username}
    //           username={username}
    //           date={post[0].date}
    //           likes_count={post[0].likes_count}
    //           songs={post[0].songs}
    //         />
    //       );
    //     })}
    //   </div>
    // );
    //   }




        
        //* takes `musicPosts` object (state in app, holds response data) & converts
       // it's properties into an array of arrays */}
        ///* each inner array is key=username, value=post. map loops thru each username/post, 
       // creates MusicPost component for each, passing in 
       // username, date, likes_count, songs as props to MusicPost component */}
        // {Object.entries(musicPosts).map(([username, post]) => (
          
      // each MusicPost is passed props as values to key, username, etc
          // <MusicPost
            // key={username}
            // `username` is the key
            // passing `username` variable as value of `username` 
            // prop to `MusicPost`
            // username={username}
            // `post` is value (array of objects w/ date/likes/songs properties)
            // date={post[0].date}
            // likes_count={post[0].likes_count}
            // songs={post[0].songs}
          // />
        // ))}
      // </div>
    // );
  // }






    // const [exploreData, setExploreData] = useState([]);

  
    // const getExplorePosts = async () => {
    //   const explorePosts = await explorePostsApi();
    //   setExploreData(explorePosts);
    // };

  

//     return response.data.map(API);

  /////////// comments stuff           ///////////////////

  // const [comments, setComments] = useState([]);

  // function addComment(inputText) {
  //   setComments((prevComments) => {
  //     return [...prevComments, inputText];
  //   });
  // }

  // function deleteComment(id) {
  //   setComments((prevComments) => {
  //     return prevComments.filter((comment, index) => {
  //       return index !== id;
  //     });
  //   });
  // }

  // return (
    // <div>
    
     //   <CommentForm onAdd={addComment} />
    //   <div>
    //     <ul>
    //       {comments.map((commentList, index) => ( */}
    //         <CommentList */}
     //           key={index}
    //           id={index}
    //           text={commentList}
    //           onChecked={deleteComment} */}
     //         /> */}
      //     ))} */}
       //   </ul> */}
      // </div> */}
