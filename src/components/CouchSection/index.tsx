import { useState } from "react"
import couchImg from "../../assets/couch.webp"
import couchGif from "../../assets/couchGif.gif"
import buttonRotateIcon from "../../assets/360-icon.svg"
import closeIcon from "../../assets/close-icon.svg"

export const CouchSection = () => {
  const [IsRotatingCouch, setIsRotatingCouch] = useState(false)

  return (
    <div className="relative">
      <img
        className="object-cover"
        width={449}
        height={253}
        src={IsRotatingCouch ? couchGif : couchImg}
        alt=""
      />
      <button
        className="absolute top-0 right-[1.5rem]"
        onClick={() => setIsRotatingCouch((prevState) => !prevState)}
      >
        <img
          width={33}
          height={22}
          src={IsRotatingCouch ? closeIcon : buttonRotateIcon}
          alt=""
        />
      </button>
    </div>
  )
}
