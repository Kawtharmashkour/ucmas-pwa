import React from 'react';
import './Event.css';

const Event = () => {
  return (
    <>
      <div className="banner">
        <img src="../assets/event.jpg" alt="Event Banner" className="banner-image" />
      </div>
      <div className="event-container">
        <div className="event-section mt-5">
          <h2 className="text-center">Opportunities to Compete, Perform & Excel!</h2>
          <p>To elevate the academic standard and affirm one’s capabilities, UCMAS believes in the competitive spirit and instills that in the students.</p>
          <div className="event-details mb-3">
            <h2>International Grading Exam</h2>
            <p>The International Grading Exam (IGE) is a standardized testing system set by the UCMAS Global Principal Office in Malaysia in accreditation with the Chinese Zhushuan/Abacus Association (CZA).</p>
            <p>An International Certificate is awarded to each participant and they are given the freedom to select Abacus and/or Mental category based on the child’s capability/preference.</p>
          </div>

        <section className="event-section">
        <h2>International Grading Exam</h2>
        <p>The International Grading Exam (IGE) is a standardized testing system set by the UCMAS Global Principal Office in Malaysia in accreditation with the Chinese Zhushan/Abacus Association (CZA).</p>
        <p>An International Certificate is awarded to each participant and they are given the freedom to select Abacus and/or Mental category based on the child's capability/preference.</p>
      </section>
      
      <section className="event-section">
        <h2>UCMAS Competitions</h2>
        <p>The UCMAS Competitions are one of its kind events with children attempting 100-200 math problems in just 8 minutes!</p>
        <p>Annual Competitions are held for UCMAS students at Provincial/State, National & International Level which act as an arena to face the competitive spirit & challenges. These Competitions are divided in various categories & age groups and students are provided with certificates, medals & trophies for their achievements.</p>
      </section>
      
      <section className="event-section">
        <h2>Graduation Ceremony</h2>
        <p>UCMAS Graduation Ceremony is the most awaited annual event. It is organized to recognize the achievements of UCMAS students who successfully complete the program.</p>
        <p>Graduation is awarded to every UCMAS students who clear level assessment test for Advance level and passed the (IGE) Grade 3 (Mental). Each graduate receives an individualized plaque and certificate for themselves.</p>
        <p>It's our way of a sincere appreciation, recognizing the years of hard work put in by our students.</p>
      </section>
          
        </div>
      </div>
    </>
  );
};

export default Event;