import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          corrupti quos consectetur eligendi repudiandae expedita aliquam beatae
          non facere asperiores quisquam ad corporis quasi dolorum, quod in sed
          illum odit repellendus quas? Enim maiores, ex distinctio similique
          architecto laboriosam vel tempore ducimus quisquam aliquam ipsam.
          Temporibus animi consequuntur voluptate quia?
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
          sapiente maiores numquam, exercitationem ad excepturi nisi aperiam
          deleniti doloribus voluptates, architecto ullam! Incidunt illum, quos
          animi odio repellendus quas architecto adipisci qui quam, itaque
          nesciunt tenetur? Quia illum voluptatibus placeat fugiat ad aperiam
          repudiandae rem distinctio quasi quam. Sunt, dolor?
        </p>
      </div>
    </div>
  );
};

export default About;
