import React from "react"
import Social from "./social-icons"

const Topbar = () => {
  return (
    <div>
      <a href="/contactus/index.html" className="topCont">
        CONTACT &nbsp; | &nbsp;{" "}
      </a>
      <small className="text-white topFont">
        <strong>QUESTIONS? 609 608 0429 X 102 &nbsp; | &nbsp;</strong>
      </small>
      {Social.map((item, index) => {
        return (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            {item.icon}
          </a>
        )
      })}
    </div>
  )
}

export default Topbar
