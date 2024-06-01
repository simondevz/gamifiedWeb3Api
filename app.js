const app = require("express")();

// In-memory storage for NFT metadata (you can replace this with a database)
const nftMetadata = {};

// API endpoint to store NFT metadata
app.post("/nft-metadata", (req, res) => {
  const { tokenId, metadata } = req.body;
  nftMetadata[tokenId] = metadata;
  res.send(`NFT metadata stored for token ID ${tokenId}`);
});

// API endpoint to retrieve NFT metadata
app.get("/nft-metadata/:tokenId", (req, res) => {
  const tokenId = req.params.tokenId;
  const metadata = nftMetadata[tokenId];
  if (!metadata) {
    res.status(404).send(`NFT metadata not found for token ID ${tokenId}`);
  } else {
    res.send(metadata);
  }
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
