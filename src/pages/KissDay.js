import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import lipsImage from "../assets/lips.jpg";  

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #ff9a9e, #fad0c4);
`;

const Lips = styled(motion.img)`
  width: 100px;
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
  color: #ff6b81;
`;

const FloatingLips = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const LipMark = styled(motion.div)`
  position: absolute;
  width: 30px;
  height: 30px;
  background: url(".../assets/lipmark.png") no-repeat center/cover;
`;

const KissDay = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <Container>
      <FloatingLips>
        {Array.from({ length: 10 }).map((_, i) => (
          <LipMark
            key={i}
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [-100, 1000] }}
            transition={{ repeat: Infinity, duration: Math.random() * 5 + 2 }}
          />
        ))}
      </FloatingLips>

      <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        💋 Happy Kiss Day 💋
      </motion.h1>

      <Lips
        src={lipsImage}
        alt="Lips"
        initial={{ scale: 0.8 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
        onClick={() => setShowMessage(true)}
      />

      {showMessage && (
        <Message initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          In just these seven months, we've shared so much – laughter, quiet moments, and a bond that feels deeper with each passing day. 
          Today, on Kiss Day, I’m reminded that a kiss isn’t just a gesture; it’s a connection, a reflection of everything we’ve built together. 
          Each time we kiss, I feel more certain of the love we’re creating, steady and true. 
          Here’s to the quiet moments and the shared kisses that make everything feel right. 
          Happy Kiss Day, my love – I’m so grateful for you. ❤️
        </Message>
      )}
    </Container>
  );
};

export default KissDay;