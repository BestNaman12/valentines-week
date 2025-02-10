import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import heartImage from "../assets/heart.jpg";  

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #ff758c, #ff7eb3);
`;

const Heart = styled(motion.img)`
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
  color: #d63384;
`;

const PromiseDay = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <Container>
      <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        ❤️ Happy Promise Day ❤️
      </motion.h1>

      <Heart
        src={heartImage}
        alt="Heart"
        initial={{ scale: 0.8 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
        onClick={() => setShowMessage(true)}
      />

      {showMessage && (
        <Message initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          I promise to stand by your side each day,
          Through every laugh, through every fray.
          In your happiest moments, in times you feel low,
          I'll be the one who won’t let go.

          I promise to listen, to understand,
          To walk with you, hand in hand.
          Through late-night talks and silly fights,
          I'll hold you close, make things right.

          With you, love feels so pure, so true,
          Every moment, an adventure new.
          No matter what life sends our way,
          I’ll cherish you more with each new day. ❤️ 
        </Message>
      )}
    </Container>
  );
};

export default PromiseDay;