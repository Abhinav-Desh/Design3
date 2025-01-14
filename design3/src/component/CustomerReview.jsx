import { pointer } from "@testing-library/user-event/dist/cjs/pointer/index.js";
import { useState, useEffect } from "react";

const CustomerReview = () => {
  const cards = [
    [
      {
        content:
          "This is very good site healthians named give you good quality of testing of blood and it also depends good hygiene. I will definitely recommend everyone to join this revolution ",
        name: "Suraj",
      },
      {
        content:
          "This is very good site healthians named give you good quality of testing of blood and it also depends good hygiene. I will definitely recommend everyone to join this revolution ",
        name: "Nikhil",
      },
      {
        content:
          "This is very good site healthians named give you good quality of testing of blood and it also depends good hygiene. I will definitely recommend everyone to join this revolution ",
        name: "Ramesh",
      },
      {
        content:
          "This is very good site healthians named give you good quality of testing of blood and it also depends good hygiene. I will definitely recommend everyone to join this revolution ",
        name: "Suresh",
      },
    ],
    [
      {
        content:
          "This is very good site healthians named give you good quality of testing of blood and it also depends good hygiene. I will definitely recommend everyone to join this revolution ",
        name: "Narayan",
      },
      {
        content:
          "This is very good site healthians named give you good quality of testing of blood and it also depends good hygiene. I will definitely recommend everyone to join this revolution ",
        name: "Rajesh",
      },
      {
        content:
          "This is very good site healthians named give you good quality of testing of blood and it also depends good hygiene. I will definitely recommend everyone to join this revolution ",
        name: "Random",
      },
      {
        content:
          "This is very good site healthians named give you good quality of testing of blood and it also depends good hygiene. I will definitely recommend everyone to join this revolution ",
        name: "Random1",
      },
    ],
    [
      {
        content:
          "This is very good site healthians named give you good quality of testing of blood and it also depends good hygiene. I will definitely recommend everyone to join this revolution ",
        name: "Random2",
      },
      {
        content:
          "This is very good site healthians named give you good quality of testing of blood and it also depends good hygiene. I will definitely recommend everyone to join this revolution ",
        name: "Random3",
      },
      {
        content:
          "This is very good site healthians named give you good quality of testing of blood and it also depends good hygiene. I will definitely recommend everyone to join this revolution ",
        name: "Random4",
      },
      {
        content:
          "This is very good site healthians named give you good quality of testing of blood and it also depends good hygiene. I will definitely recommend everyone to join this revolution ",
        name: "Random5",
      },
    ],
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearTimeout(interval);
  }, [currentIndex]);

  const gotonext = (index)=>{
    setCurrentIndex(index)
  }
  return (
    <div
      className="customer-container"
      style={{
        width: "80%",
        margin: "10px auto",
        border: "1px solid rgb(211, 211, 211)",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <div
        className="customer-content"
        style={{
          width: "100%",
          height: "350px",
          background: "rgb(244, 242, 242)",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <div className="customer-header" style={{ marginBottom: "20px" }}>
          Customer Review on Healthians
        </div>
        <div
          className="cards"
          style={{
            display: "flex",
            
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
        >
          {cards[currentIndex].map((element, index) => (
            <div key={index} style={{ marginRight: "10px" }}>
              <div
                className="cards-item"
                style={{
                  width: "300px",
                  height: "250px",
                  borderRadius: "10px",
                  border: "1px solid rgb(211, 211, 211)",
                  padding: "10px",
                  background: "rgb(234, 234, 234)",
                }}
              >
                <hr style={{ marginTop: "20px" }} />
                <div style={{ marginTop: "30px", marginBottom: "30px" }}>
                  {element.content}
                </div>
                <hr style={{ marginTop: "10px" }} />
                <div>{element.name}</div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="dots"
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            display: "flex",
            gap: "5px",
          }}
        >
         
          {cards.map((item, index) => (
            <div
              key={index}
              style={{
                width: "10px",
                height: "10px",
                cursor:'pointer',
                borderRadius: "50%",
                backgroundColor: currentIndex === index ? "black" : "gray",
              }}
              onClick={()=>gotonext(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
