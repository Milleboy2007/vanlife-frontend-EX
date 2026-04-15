import "./Vans.css"
import { useSearchParams } from "react-router-dom"
import VansList from "/src/components/VansList"


export default function Vans({ vans }) {
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <VansList
        vans={vans}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </div>
  )
}