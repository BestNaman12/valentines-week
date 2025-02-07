import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import heartImage from "C:/Users/Naman Mittal/valentines-week/src/assets/heart.jpg";  

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
          I promise to love you, through thick and thin,  
          In every battle, we’ll always win.  
          Through sunny days and stormy skies,  
          I promise to be your guiding light.  

          I promise to hold your hand so tight,  
          In laughter, in sorrow, in darkest night.  
          I promise to wipe away your tears,  
          To stand beside you for endless years.  

          My love is strong, my heart is true,  
          This is my promise, forever to you.  
          No matter where life takes us, come what may,  
          I’ll love you more with each passing day. ❤️  
        </Message>
      )}
    </Container>
  );
};

export default PromiseDay;