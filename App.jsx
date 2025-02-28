import React from "react";
import NFTCard from "./Components/NFTCard";

const App = () => {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <NFTCard
        owner="5811EX"
        creator="4STY87"
        price="5.65"
        priceInUSD="10,344"
        imageUrl="https://cdn.prod.website-files.com/627a5f477d5ec9079c88f0e2/64dccffa6728f2a276286964_can-ai-generated-content-rank-on-google.jpg"
        ownerAvatar="https://www.zmo.ai/wp-content/uploads/2023/11/64eda19f8e921f2d41659426-min.webp"
        creatorAvatar="https://leonardo.ai/wp-content/uploads/2024/07/ai-graphic-design-vector-art.webp"
        buyNowColor="black"
      />
      <NFTCard
        owner="23WCFV"
        creator="ST5664"
        price="4.65"
        priceInUSD="8709.64"
        imageUrl="https://ats.net/wp-content/uploads/Fokus-AI-Phonlamai-Shutterstock.jpg"
        ownerAvatar="https://cdn.lucidpic.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c445a35f781.png"
        creatorAvatar="https://file.aitubo.ai/assets/doc/2024/11/9939200302.jpg!w1280"
        buyNowColor="blue"
      />
    </div>
  );
};

export default App;
