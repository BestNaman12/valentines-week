import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import letterImage from "C:/Users/Naman Mittal/valentines-week/src/assets/love_letter.png";  

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #ff758c, #ff7eb3);
`;

const Letter = styled(motion.img)`
  width: 120px;
  cursor: pointer;
  margin-top: 20px;
`;

const Message = styled(motion.div)`
  background: white;
  padding: 20px;
  font-size: 20px;
  text-align: center;
  width: 80%;
  max-width: 500px;
  border-radius: 10px;
  color: #d63384;
`;

const ValentineDay = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <Container>
      <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        ❤️ Happy Valentine's Day ❤️
      </motion.h1>

      <Letter
        src={letterImage}
        alt="Love Letter"
        initial={{ scale: 0.8 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
        onClick={() => setShowMessage(true)}
      />

      {showMessage && (
        <Message initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Happy Valentines Day Diksha , our first valentines together , and main tumhe khush karne ke liye can do anything .
          I know exams hai , you are stressed out and hum mil bhi nhi paa rhe h .
          But remember I am always there with you , chahe kuch bhi ho , I was , am , will be there for ya .
          I hope we meet soon and celebrate this beautiful day together .

          I Love You A Lot ❤️
        </Message>
      )}
    </Container>
  );
};

export default ValentineDay;