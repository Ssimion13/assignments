import React from "react"


function Title (props) {
  const styles = {
    background: `URL(${props.image})`,
    backgroundPosition: `${props.position}` || "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    opacity: `${props.opacity} || 1`,
    color: `${props.color}` || "white",
    width: "100%",
    height: "100%",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  }
  return (
    <div className="title">
    <div style={styles} className="titleImage">
      <h1 className="Name"> {props.title} </h1>
    </div>
    </div>
  )
}
export default Title;
