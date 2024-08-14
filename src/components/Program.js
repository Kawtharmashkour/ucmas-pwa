import React from 'react';
import './Program.css'; 

const Program = () => {
  return (

    <>
    <div className="banner">
        <img src="../assets/program.jpg" alt="Event Banner" className="banner-image" />
    </div>

    <div className="program-container">
      <h2 className="program-title">What is Mental Math?</h2>
      <p className="program-description">
        Mental Math is an ability to calculate and get a correct answer without using pencil & paper or any other electronic devices.
        This is an essential building block that replaces the physical Abacus in the child’s mind. As the children gradually learn to visualize
        the Abacus in their mind (virtual Abacus), they learn to calculate mathematical problems using the principles of the Abacus,
        without the use of the physical tool.
      </p>
      <p className="program-description">
        However, there is more to this because when children attend UCMAS <a href="/mental-math-classes">Mental Math classes</a>, they are actually also undergoing the process of developing other aspects of the mind. When the children have acquired an astonishing calculation speed, it is actually only the end result of having developed the following mental abilities:
      </p>
      <ul className="mental-skills">
        <li><strong>Concentration</strong></li>
        <li><strong>Observation</strong></li>
        <li><strong>Visualization</strong></li>
        <li><strong>Memory</strong></li>
      </ul>
      <p className="program-description">
        Starting with an Abacus and eventually progressing to Mental Math, these young “math magicians” learn to do all arithmetic
        calculations of up to 10 digits in their head, without relying on aids such as calculators or paper and pencil. At UCMAS mental
        math classes, we employ unique abacus techniques that not only make children intellectually sharper but also physically healthier.
      </p>
    </div>
    </>
  );
};

export default Program;