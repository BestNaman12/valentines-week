// src/pages/RoseDay.js
import React from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f4f4f9;
  color: #333;
  font-family: "Georgia", serif;
  padding: 30px;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 40px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const Header = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 20px;
  color: #c0392b;  /* Rose Red */
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 30px;
`;

const MessageButton = styled.button`
  padding: 15px 30px;
  background-color: #c0392b;
  color: white;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e74c3c;
  }
`;

const RoseDay = () => {
  return (
    <PageWrapper>
      <ContentContainer>
        <Header>Happy Rose Day! 🌹</Header>
        <Paragraph>
        Meri Pyaari Diksha ,
        Its Rose Day 🌹, aur main chahta hoon ki tum har din khush raho, chahe kitni bhi mushkilein ho. Tumhare exams ka waqt hai, aur main samajhta hoon ki tum bahut busy ho 📚, par mujhe yeh batana tha ki tumhare saath hoon har step par 💖.
        Yeh gulab sirf ek phool nahi, balki meri taraf se ek chhoti si reminder hai ki tum meri zindagi mein kitni khaas ho 🌸. Tumhara hard work aur dedication dekhkar, mujhe hamesha tum par garv hota hai 🙌.
        Tum jo bhi kar rahi ho, main tumhare saath hoon, aur tumhe hamesha support karta hoon 💪. Tumhari har success mere liye bhi ek achievement hai, aur main tumhari safalta ka intezaar kar raha hoon.
        Mujhe pata hai ki exams ke dauran sab kuch thoda stressful hota hai 😓, par tum jo kar rahi ho, usme tum bahut aage jaoge 🌟. Main tumhara intezaar karunga, aur yeh waqt bhi guzar jayega 🕰.
        Happy Rose Day, baby 🌹. Tumhari zindagi mein har rose ki tarah khushiyan ho, aur har din naya motivation mile!
        </Paragraph>
      </ContentContainer>
    </PageWrapper>
  );
};

export default RoseDay;