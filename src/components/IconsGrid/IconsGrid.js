import React from "react";
import Workshops from "../Workshops/Workshops";
import"./icons.css"

const IconsGrid = ({courses,setCourses}) => {

  return (
    <div className="iconsGrid" margin="500" color="red">
          <Workshops 
          courses={courses}
          />
            <h1>Icon Grid</h1>
      {}
    </div>
  );
};

export default IconsGrid;
