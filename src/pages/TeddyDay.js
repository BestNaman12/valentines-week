import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import teddyImage from "./assets/teddy.jpg";  

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #f7cac9, #ffdde1);
`;

const Teddy = styled(motion.img)`
  width: 180px;
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

const TeddyDay = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <Container>
      <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        🧸 Happy Teddy Day 🧸
      </motion.h1>

      <Teddy
        src={teddyImage}
        alt="Teddy"
        initial={{ y: [0, -10, 0] }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        onClick={() => setShowMessage(true)}
      />

      {showMessage && (
        <Message initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Soft and fluffy, just like you,  
          My teddy bear, my love so true.  
          Hugs so warm, love so deep,  
          You are the reason I smile in sleep.  

          Holding you close, cuddles so tight,  
          You make my world shine so bright.  
          A teddy bear gift, a hug that stays,  
          You are my joy, in all my days.  

          I may not always be there to hold you near,  
          But this teddy reminds, I’m always here.  
          Forever and ever, my teddy you'll be,  
          Wrapped in love, just you and me.  
        </Message>
      )}
    </Container>
  );
};

export default TeddyDay;