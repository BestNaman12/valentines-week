import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import chocolateImage from "./assets/chocolate.jpg";  

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #8e44ad, #c0392b);
`;

const Chocolate = styled(motion.img)`
  width: 150px;
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
  color: #8e44ad;
`;

const FloatingChocolates = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ChocoPiece = styled(motion.div)`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #6b3e26;
  border-radius: 50%;
`;

const ChocolateDay = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <Container>
      <FloatingChocolates>
        {Array.from({ length: 15 }).map((_, i) => (
          <ChocoPiece
            key={i}
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [-100, 1000] }}
            transition={{ repeat: Infinity, duration: Math.random() * 5 + 2 }}
          />
        ))}
      </FloatingChocolates>

      <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        🍫 Happy Chocolate Day 🍫
      </motion.h1>

      <Chocolate
        src={chocolateImage}
        alt="Chocolate"
        initial={{ scale: 0.8 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
        onClick={() => setShowMessage(true)}
      />

      {showMessage && (
        <Message initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Love is like chocolate, sweet and divine,  
          Melting in my heart, knowing you're mine.  
          Each moment with you, a treat so sweet,  
          Every glance, every hug, makes my heart skip a beat.  

          Just like cocoa blends to make something true,  
          My heart is whole when I am with you.  
          With every bite, my love grows deep,  
          In your warm embrace, my heart takes a leap.  

          You're my sugar, my sweetness, my favorite delight,  
          In your arms, the world feels just right.  
          Forever and always, my heart will stay,  
          With you, my love, beyond night and day.  
        </Message>
      )}
    </Container>
  );
};

export default ChocolateDay;