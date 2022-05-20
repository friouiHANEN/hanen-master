import React from 'react'
import Hanen from "./Slices/10872.png";
import IImmgg from "./Slices/momo.jpg";
import Imgmeme from "./Slices/meme.jpg";
import Image from "./Slices/123456.png";

const Inter = () => {
  return (
    <div>
          <h1 className="acceuil">
        The First Comprehensive Website between head and entertainment and
        solving psychological problems .
      </h1>
      <p className="paragra">
        The web site "n7eb 9rayti" provides you with exams, exercises and
        research from 3 years to the baccalaureate, as well as manual skills for
        parents and students, as well as teachers and professors explaining
        lessons in all subjects and psychologists to solve the psychological
        problems of your children.
      </p>

      <img className="iimmgg" src={Image} alt="dddd" />
      <h1 className="dodo"></h1>
      <h1 className="ppaa">Participants</h1>
      <h1 className="pointt"></h1>
      <div className="divv">
        <img className="deshan" src={Hanen} alt="dddd" />
        <h1 className="divv"> Students</h1>
        <img className="desmomo" src={IImmgg} alt="dddd" />
        <h1 className="divv"> Teachers</h1>
        <img className="desmeme" src={Imgmeme} alt="dddd" />
        <h1 className="divv"> Psychologists</h1>
      </div>
    </div>
  )
}

export default Inter
