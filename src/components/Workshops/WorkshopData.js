// how can we deal with images beter? create standalone script like:
// import Time from ....../1.png
//    import Study from ....../2.png
//      export {Time, Study}import Strong from "../images/3.png";
import Strong from "../../images/3.png";
import Time from "../../images/14.png";
import Stress from "../../images/11.png";
import Motiv from "../../images/15.png";
import Prez from "../../images/19.jpg";

// useEffect axios fetch

// can also do api call and data struct will look the same
const cardsArr = [
    {
      image: Strong,
      alt: "Woman smirks with drawn arms flex",
      title: "Empowerment",
      // description: "card without description probably works best",
    },
    {
      image: Time,
      alt: "Picture of clocks",
      title: "Time Management",
      description: `add ratings here`,
    },
    {
      image: Strong,
      alt: "Woman smile with strong arms drawn behind here",
      title: "Self-Confidence",
      description: `add ratings here`,
    },
    {
      image: Stress,
      alt: "Image of notebook, flowers and crayons on table",
      title: "Stress Management",
      description: `add ratings here`,
    },
    {
      image: Motiv,
      alt: "Note book with now ticked and later left unchecked",
      title: "Motivation",
      description: `add ratings here`,
    },
    {
      image: Prez,
      alt: "Picture of woman drawing on board",
      title: "Presentation Skills",
      description: `add ratings here`,
    },
  ];

export default cardsArr;
