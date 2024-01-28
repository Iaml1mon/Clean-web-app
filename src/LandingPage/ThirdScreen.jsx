import styles from "./ThirdScreen.module.css";
import postCard01Image from "./landingResources/thirdScreen-post01-illustration.png";
import postCard02Image from "./landingResources/thirdScreen-post02-illustration.png";
import postCard03Image from "./landingResources/thirdScreen-post03-illustration.png";

import postCard01Profile from "./landingResources/thirdScreen-post01-profilePic.png";
import postCard02Profile from "./landingResources/thirdScreen-post02-profilePic.png";
import postCard03Profile from "./landingResources/thirdScreen-post03-profilePic.png";

function Post({ image, title, explanation, profileImage, author, date }) {
  return (
    <div className={styles.post}>
      <img src={image} alt="post-pic" />
      <div className={styles.postContent}>
        <h3>{title}</h3>
        <p>{explanation}</p>
        <div className={styles.postProfile}>
          <img src={profileImage} />
          <span>{author}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}

function ThirdScreen() {
  return (
    <section className={styles.thirdScreenSection}>
      <h2>The Shield Raport</h2>
      <div className={styles.postsContainer}>
        <Post
          image={postCard01Image}
          title="How to Efficiently Clean & Organize Living Areas:"
          explanation="November is here, and with it comes a fresh opportunity to tackle the clutter and dust that may have acc..."
          profileImage={postCard01Profile}
          author="Laura Pelitia"
          date="December 18, 2023"
        />
        <Post
          image={postCard02Image}
          title="How to Create a Self-Cleaning Home."
          explanation="Creating a home that practically cleans itself may sound like a dream, but with a little know-how and some..."
          profileImage={postCard02Profile}
          author="Sebrina Ludowski"
          date="December 24, 2023"
        />
        <Post
          image={postCard03Image}
          title="10 Easy Ways to Turn Homekeeping, Happy!"
          explanation="Homekeeping can sometimes feel like a never-ending to-do list that zaps the joy right out of your day. But wh..."
          profileImage={postCard03Profile}
          author="Katrina Gomez"
          date="January 2, 2024"
        />
      </div>
    </section>
  );
}

export default ThirdScreen;
