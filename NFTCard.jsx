import React from "react";

const NFTCard = ({
  owner,
  creator,
  price,
  priceInUSD,
  imageUrl,
  ownerAvatar,
  creatorAvatar,
  buyNowColor,
}) => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div style={styles.user}>
          <img src={ownerAvatar} alt="Owner" style={styles.avatar} />
          <span>Owned by {owner}</span>
        </div>
        <div style={styles.user}>
          <img src={creatorAvatar} alt="Creator" style={styles.avatar} />
          <span>Created by {creator}</span>
        </div>
      </div>
      <img src={imageUrl} alt="NFT" style={styles.image} />
      <div style={styles.details}>
        <p>
          <strong>Price:</strong> ETH {price} ≈ ${priceInUSD}
        </p>
        <div style={styles.actions}>
          <button style={styles.viewHistory}>View history</button>
          <button style={{ ...styles.buyNow, backgroundColor: buyNowColor }}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "2px solid #ddd",
    borderRadius: "12px",
    padding: "16px",
    width: "250px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    fontSize: "12px",
    color: "#555",
  },
  user: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    marginRight: "6px",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  details: {
    fontSize: "14px",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  viewHistory: {
    backgroundColor: "transparent",
    border: "none",
    color: "#555",
    cursor: "pointer",
  },
  buyNow: {
    padding: "6px 12px",
    borderRadius: "6px",
    border: "none",
    color: "#fff",
    cursor: "pointer",
  },
};

export default NFTCard;
