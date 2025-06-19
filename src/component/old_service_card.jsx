import styles from "./Netflix.module.css";
import styled from "styled-components";

export const ServiceCard = ({ data }) => {
  const { id, name, img_url, rating, description, genre, cast, watch_url } = data;

//   const btn_style = {
   
//   };

//   const Buttonstyle =styled.button({
//  padding: "1.2rem 2.4rem",
//     border: "none",
//     fontSize: "1.6rem",
//     backgroundColor: rating >= 8.5 ? "#7dcea0" : "#f7dc6f",
//   })

   const Buttonstyle = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    font-size: 1.6rem;
    background-color: ${(props) =>
      props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    color: var(--btn-color);
    font-weight: bold;
    cursor: pointer;
  `;
  const Rating = styled.h3`
    font-size: 1.6rem;
    color: #7dcea0;
    text-transform: capitalize;
  `;


  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

  return (
    
    <li className={styles.card}>
        
         {/* <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1> */}
      <div>
        <img src={img_url} alt={name} width="50%" height="50%" />
      </div>

      <div className="flex flex-col gap-4 p-6  bg-red-100 ">

        <h1>Name: {name}</h1>
        <Rating>
          Rating:
          <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
        </Rating>
        <p className="underline">Summary: {description}</p>
        <p>Genre: {genre}</p>
        <h3>Cast: {cast}</h3>
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          <Buttonstyle rating={rating} >Watch Now</Buttonstyle>
        </a>
      </div>
    </li>
  );
};


// .card {
//   box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
//     rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
// }

// img {
//   width: 100%;
// }

// /* .card-content {
//   padding: 3.2rem 1.2rem;
//   display: flex;
//   flex-direction: column;
//   gap: 1.2rem;
// } */

// .card-heading {
//   margin-bottom: 3.2rem;
// }

// .super_hit {
//   background-color: #7dcea0;
// }

// .average {
//   background-color: #f7dc6f;
// }

// .rating {
//   padding: 0.3rem 1.8rem;
//   color: #000;
//   margin-left: 1.2rem;
//   border-radius: 100rem;
//   -webkit-border-radius: 100rem;
//   -moz-border-radius: 100rem;
//   -ms-border-radius: 100rem;
//   -o-border-radius: 100rem;
// }
