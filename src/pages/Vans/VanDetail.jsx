import { Link, useParams } from "react-router-dom"
import { getVan } from "../../assets/mock-data"
import Van from "/src/components/Van"
import "./VanDetail.css"

export default function VanDetail() {
  const vanId = useParams().id
  const van = getVan(vanId)
  return (
    <div className="van-detail-container">
      <Link
        to="../"
        relative="path"
        className="back-button"
      >&larr; <span>Back to vans</span></Link>
      <Van van={van} />
    </div>

  )
}

