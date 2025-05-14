import "./Features.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FeaturesItem from "./FeaturesItem";

function Features() {
    const features = [
      {
        id: 1,
        icon: "bi bi-eye",
        title: "Lorem Ipsum",
        color: "#ffbb2c",
      },
      {
        id: 2,
        icon: "bi bi-infinity",
        title: "Lorem Ipsum",
        color: "#5578ff",
      },
      {
        id: 3,
        icon: "bi bi-mortarboard",
        title: "Lorem Ipsum",
        color: "#e91e63",
      },
      {
        id: 4,
        icon: "bi bi-nut",
        title: "Lorem Ipsum",
        color: "#e361ff",
      },
      {
        id: 5,
        icon: "bi bi-shuffle",
        title: "Lorem Ipsum",
        color: "#47aeff",
      },
      {
        id: 6,
        icon: "bi bi-star",
        title: "Lorem Ipsum",
        color: "#ffa76e",
      },
      {
        id: 7,
        icon: "bi bi-x-diamond",
        title: "Lorem Ipsum",
        color: "#11dbcf",
      },
      {
        id: 8,
        icon: "bi bi-camera-video",
        title: "Lorem Ipsum",
        color: "#5578ff",
      },
      {
        id: 9,
        icon: "bi bi-command",
        title: "Lorem Ipsum",
        color: "#e91e63",
      },
      {
        id: 10,
        icon: "bi bi-dribbble",
        title: "Lorem Ipsum",
        color: "#b20969",
      },
      {
        id: 11,
        icon: "bi bi-activity",
        title: "Lorem Ipsum",
        color: "#ff5828",
      },
      {
        id: 12,
        icon: "bi bi-brightness-high",
        title: "Lorem Ipsum",
        color: "#29cc61",
      },
    ];
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);
    return (
      <section className="features">
        <div className="container">
          <div className="row gy-4">
            {features.map(feature => (
              <FeaturesItem key={feature.id} {...feature} />
            ))}
          </div>
        </div>
      </section>
    );
        
}

export default Features;