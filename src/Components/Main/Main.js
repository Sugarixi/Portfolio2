import React from "react";
import Styles from "./Main.module.css";
import DarkCloud from "./MainDarkCloud.module.css";
import MediumCloud from "./MainMediumCloud.module.css";
import LightCloud from "./MainLightCloud.module.css";
import Star from "../Star/Star";

export default function Main() {
  const [stars, setStars] = React.useState(getStars());

  const darkCloudsToRender = [];
  const darkCloudsAmount = 13;
  for (let i = 0; i < darkCloudsAmount; i++) {
    const className = "cloud" + i.toString();
    darkCloudsToRender.push(
      <div
        key={"id" + i}
        className={[
          Styles.baseCloud,
          DarkCloud.darkBlue,
          DarkCloud[className],
        ].join(" ")}
      ></div>
    );
  }

  const mediumCloudsToRender = [];
  const mediumCloudsAmount = 13;
  for (let i = 0; i < mediumCloudsAmount; i++) {
    const className = "cloud" + i.toString();
    mediumCloudsToRender.push(
      <div
        key={"id" + i}
        className={[
          Styles.baseCloud,
          MediumCloud.mediumBlue,
          MediumCloud[className],
        ].join(" ")}
      ></div>
    );
  }

  const lightCloudsToRender = [];
  const lightCloudsAmount = 13;
  for (let i = 0; i < lightCloudsAmount; i++) {
    const className = "cloud" + i.toString();
    lightCloudsToRender.push(
      <div
        key={"id" + i}
        className={[
          Styles.baseCloud,
          LightCloud.lightBlue,
          LightCloud[className],
        ].join(" ")}
      ></div>
    );
  }

  function getStars() {
    const numOfStars = 80;
    const stars = [];
    for (var i = 0; i < numOfStars; i++) {
      const left = Math.random() * window.innerWidth;
      const top = Math.random() * window.innerHeight + 25;
      const delay = Math.random() * 1;
      const duration = Math.random() * 1 + 3;

      const star = (
        <Star
          top={top}
          left={left}
          key={"star" + i}
          delay={delay}
          duration={duration}
        />
      );
      stars.push(star);
    }
    return stars;
  }

  function generateStars() {
    setStars([]);
    const newStars = getStars();
    setStars(newStars);
  }

  React.useEffect(() => {
    window.addEventListener("resize", generateStars, false);
  }, []);

  return (
    <div className={Styles.main}>
      <svg
        className={Styles.svg}
        width="1728"
        height="628"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={Styles.fill}
          d="M34.277 188.376C81.679 142.489 158.01 70.615 200.72 20.476c4.7-5.518 18.69-20.854 11.96-18.162-29.833 11.933-47.286 56.873-61.351 82.613C128.061 127.513 113.765 163.662 93 207.5c-18.644 39.36-34.368 87.029-49 128-13.036 36.5-12.525 35-22.5 63.5-2.35 6.714-32.24 96.442-13.723 79.876 35.192-31.488 71.884-66.044 103-102C162.467 317.145 202.651 233.152 248 169c18.325-25.924 37.715-62.487 53-90 7.576-13.637-4.148-14.179-7.035 2.826C276.5 142.5 258.84 198.5 236.5 251c-8.563 20.123-89.551 243.1-48.404 241.454 11.389-.455 25.061-14.631 31.681-22.078 22.633-25.463 42.336-56.362 62.892-83.569 38.142-50.482 68.414-111.296 95.016-168.548C395.916 179.023 420.498 146.509 429 104c1.59-7.951-1.763-25.95-2-25-12 13.5-18.567 28.991-23 43.5-27.9 91.309-70.337 176.134-87.707 270.43-5.407 29.353 3.379 72.276 30.384 94.652C359.345 498.078 373.161 506.11 390.5 509c22.542 3.757 36.769-11.97 51.858-25.405 40.839-36.363 88.111-84.544 107.419-136.433 9.951-26.745 20.474-69.929-23.699-57.142-36.137 10.46-55.513 75.152-61.572 106.311-6.028 31-7.856 80.437 17.94 103.654 37.465 33.718 92.907 9.57 122.48-20.376 22.566-22.852 38.184-52.956 48.504-83.056 14.039-40.946 30.311-80.758 45.847-121.151 12.16-31.616 18.316-64.83 25.249-97.895 1.091-5.201 15.815-57.733.886-50.055-44.084 22.671-49.677 111.739-63.787 152.822-20.313 59.149-55.575 177.341 15.947 216.167 26.684 14.486 34.511 11.143 61.793-1.993 39.914-19.218 73.293-40.938 93.687-81.727C840.838 378.5 846.493 348.5 876.993 318c13-13 35.776-29.124 51.784-29.124 21.557 0 20.114 10 46.024 12.218 33.869 0-13.722-17.218-25.024-17.218-65.08 0-116.725 74.817-116.725 140.583 0 48.618 36.144 75.504 79.734 87.043 17.927 4.745 45.965-3.592 62.015-11.296 24.043-11.54 56.349-17.93 69.549-43.632 22.81-44.43 53.76-71.247 59.57-123.587.85-7.619 4.01-39.213-7.75-39.867-24.97-1.387-49.25 27.221-57.8 48.284-14.01 34.474-26.43 76.55-21.04 114.284 4.82 33.783 47.81 68.485 78.84 46.812 19.94-13.922 35.79-38.613 49.17-57.886 11.66-26.114 13.45-50.019 16.61-75.304 4.1-32.778-8.82-68.216-45.84-68.216-12.04 0-30.4-7.974-9.97-7.974 25.8 0 49.42-18.013 75.75-19.711 36.24-2.339 75.97 23.691 67.99 63.565-6.44 32.197-14.23 70.646-27.38 100.526-4.8 10.912-22.11 44.19-32.42 50.082-4.26 2.436 1.54-23.053 1.77-23.92 9.23-34.729 18.67-63.048 39.87-93.023 20.12-28.438 42.91-59.216 67.77-83.72 17.48-17.228 28.74-12.901 44.74 3.101 50.34 50.333-18.14 141.98-40.73 185.48-10.87 20.935-17.39 22.242-11.98-3.865 8.31-40.088 15.43-76.155 35.98-112.635 17.77-31.536 71.94-118.599 117.29-89.578 44.8 28.677.15 111.842-11.3 148.614-3.68 11.827-14.17 43.239 7.31 45.626 28.04 3.116 56.87-37.628 73.97-54.928 20.9-21.135 37.61-42.603 49.62-69.988 7.24-16.526 25.41-58.204 9.52-75.083-49.4-52.491-79.24 104.812-79.07 128.239.32 42.255 19.02 77.736 58.66 87.707 77.36 19.455 117.26-49.842 152.64-106.755"
          stroke="var(--LightPurple)"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>

      {stars}

      <div className={Styles.cloudsContainer}>
        {darkCloudsToRender}
        {mediumCloudsToRender}
        {lightCloudsToRender}
      </div>
    </div>
  );
}
