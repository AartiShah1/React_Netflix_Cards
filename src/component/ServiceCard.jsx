import styles from "./Netflix.module.css";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

export const ServiceCard = ({ data }) => {
  const { name, img_url, rating, description, genre, cast, watch_url } = data;

  const { ref, inView } = useInView({
    threshold: 0.2, // 20% of the card is visible
    triggerOnce: true, // trigger only once
  });

  const Buttonstyle = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    font-size: 1.6rem;
    background-color: ${(props) =>
      props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    color: #000;
    font-weight: bold;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      background-color: ${(props) =>
        props.rating >= 8.5 ? "#58d68d" : "#f4d03f"};
      transform: scale(1.05);
    }
  `;

  const Rating = styled.h3`
    font-size: 1.6rem;
    color: #fff;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    gap: 1rem;
  `;

  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

  return (
    <li
      ref={ref}
      className={`${styles.card} ${
        inView ? "animate__animated animate__fadeInUp" : "opacity-0"
      }`}
    >
      <div className={styles.imageWrapper}>
        <img src={img_url} alt={name} />
      </div>

      <div className={`${styles.cardContent}`}>
        <h1 className="text-xl font-bold text-white">Name: {name}</h1>

        <Rating>
          Rating:
          <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
        </Rating>

        <p className="text-gray-300">
          <span className="font-semibold text-white underline">Summary:</span>{" "}
          {description}
        </p>

        <p className="text-gray-300">
          <span className="font-semibold text-white">Genre:</span> {genre}
        </p>

        <h3 className="text-gray-300">
          <span className="font-semibold text-white">Cast:</span> {cast}
        </h3>

        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          <Buttonstyle rating={rating}>Watch Now</Buttonstyle>
        </a>
      </div>
    </li>
  );
};
