
import seriesData from "../api/seriesData.json";
import { ServiceCard } from "./ServiceCard";

const NetflixSeries = () => {

    return (
        <ul className="grid grid-three-cols">
            {seriesData.map((curElem) => 
             <ServiceCard key={curElem.id} data={curElem} />

            )}




        </ul>

    )
}
export default NetflixSeries;