import React from "react";

// We will render heroNames from this component based on props.
// If props passed has heroName as Thanos, it will throw an error.
function Hero({ heroName }) {
  if (heroName === "Thanos") {
    throw new Error("Not a hero !");
  }
  return <h3>{heroName}</h3>;
}

export default Hero;
