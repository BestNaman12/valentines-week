import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import hugImage from "C:/Users/Naman Mittal/valentines-week/src/assets/hug.png";  

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #ff9a9e, #fad0c4);
`;

const Hug = styled(motion.img)`
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
  color: #ff758c;
`;

const HugDay = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <Container>
      <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        🤗 Happy Hug Day 🤗
      </motion.h1>

      <Hug
        src={hugImage}
        alt="Hug"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
        onClick={() => setShowMessage(true)}
      />

      {showMessage && (
        <Message initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          In your arms, I find my peace,  
          A hug from you, my worries cease...  
        </Message>
      )}
    </Container>
  );
};

export default HugDay;