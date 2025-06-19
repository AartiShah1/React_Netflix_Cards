import Activities from "./component/Activities"
import NetflixSeries from "./component/NetflixSeries"
import "./component/Netflix.module.css"
import "animate.css";

// import ShoppingPage from "./component/ShoppingPage"

export const App = () => {
  return (
    <section className="container">

      {/* <Activities /> */}
      {/* <h1 className="card-header justify-center">Netflix series</h1> */}
      <h1 className="text-center text-2xl font-bold mb-15">Netflix Series</h1>

      <NetflixSeries />
      {/* <ShoppingPage /> */}
    </section>


  )

}




