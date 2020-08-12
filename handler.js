function handleChange(event) {
  if (event.target.value < 0) {
    event.target.value = "";
  }
  const radius = event.target.value ? event.target.value + "px" : "";
  let radiusPosition;
  switch (event.target.name) {
    case "tl":
      radiusPosition = "border-top-left-radius";
      break;
    case "tr":
      radiusPosition = "border-top-right-radius";
      break;
    case "bl":
      radiusPosition = "border-bottom-left-radius";
      break;
    case "br":
      radiusPosition = "border-bottom-right-radius";
      break;
    default:
      break;
  }
  document.querySelector("#border-radius").style[radiusPosition] = radius;
  let style = document.querySelector("#border-radius").style["cssText"];
  style = style ? style.split("; ").join(";\n") : style;
  document.querySelector("#border-radius").innerHTML = style;
}
