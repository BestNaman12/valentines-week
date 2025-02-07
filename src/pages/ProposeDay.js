import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ringImage from "C:/Users/Naman Mittal/valentines-week/src/assets/ring.jpg";  

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #ff758c, #ff7eb3);
`;

const Ring = styled(motion.img)`
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

const ProposeDay = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <Container>
      <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        💍 Happy Propose Day 💍
      </motion.h1>

      <Ring
        src={ringImage}
        alt="Ring"
        initial={{ scale: 0.8 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
        onClick={() => setShowMessage(true)}
      />

      {showMessage && (
        <Message initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          From the moment I met you,  
          I knew you were the one.  
          My heart raced, my soul felt home,  
          Our love story had just begun.  

          Through every smile, every glance,  
          You make my heart beat slow dance.  
          Will you take my hand today,  
          And walk with me in love’s way?  

          No poetry, no fancy lines,  
          Just a heart that's yours, forever shines.  
          
          Diksha Mehta , will you be my valentine ? ❤️ 
        </Message>
      )}
    </Container>
  );
};

export default ProposeDay;