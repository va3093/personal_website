import React, { ReactElement } from "react";
import { PageHead } from "components/PageHead/PageHead";
import styles from "./index.module.css";
import cn from "classnames";
import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const futuraFont = localFont({ src: "../../fonts/Futura.woff2", variable: "--futura" });

// interface Props {}

export default function Home(): ReactElement {
  return (
    <>
      <PageHead title="Wilhelm's site" />
      <div className={cn(styles.page, futuraFont.className)}>
        <h3 id="top-title">
          Hi my name is <span> Wilhelm</span>
        </h3>
        <h1>
          I am a professional <span>fullstack engineer</span> with 10 years experience turning <span>crazy ideas</span>{" "}
          into <span>exciting products</span>
        </h1>
        <div className="profile-img-video-wrapper">
          <div className="profile-img-video">
            <div className="outer-circle">
              <img></img>
              {/* play button */}
              <svg></svg>
            </div>
          </div>
          <div className="pointer">
            <svg></svg>
            <p>let me explain</p>
          </div>
        </div>
        <div className="about-me">
          <p>Or scroll to find out more</p>
          <svg></svg>
        </div>
        <div className="grey-slant-du"></div>
        <div className="grey-section">
          <div className="title-with-underline-light">
            <h2>What I can build</h2>
          </div>
        </div>
        <div className="grey-slant-up"></div>
      </div>
    </>
  );
}

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const blogs = getSortedPostsData();
//   return {
//     props: {},
//   };
// };
