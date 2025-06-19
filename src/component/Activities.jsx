

const Activities = () => {
  const name = 'Aarti';
  const Rating = 10;
  const Summary = `Hi, I’m Aarti!
          Skydiving is one of the most thrilling experiences you can have — imagine jumping from thousands of feet in the air and free-falling before your parachute opens, giving you a peaceful glide down with stunning views all around. It’s an adventure that pushes your limits and leaves you feeling truly alive! 🌤️🪂`;

  const returnGenre = () => {
    const genre = 'Adventure';
    return genre;
  }

  let age= 25;
  const canDo=()=>{
    if (age >= 18) return "Yes, you can do skydiving!";
    return "No, you cannot do skydiving!";
  }

  return (

    <div>
      <h1>Name: Hello its me {name} </h1>
      <img src="sky.jpg" alt="" width='50%' height='50%' />
      <p>
        Summary: {Summary}
      </p>
      <h3>Rating: {Rating}</h3>
      <p>Genre: {returnGenre()}</p>
      <p>Age: {canDo()}</p>
    </div>

  )
}
export default Activities;