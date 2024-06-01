const app = require("express")();
const NftMetadata = require("./model");

// API endpoint to store NFT metadata
app.post("/nft-metadata", async (req, res) => {
  const { tokenId, metadata } = req.body;
  const newNftMetadata = new NftMetadata({ tokenId, metadata });
  try {
    const savedNftMetadata = await newNftMetadata.save();
    res.status(201).json(savedNftMetadata);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// API endpoint to retrieve NFT metadata
app.get("/nft-metadata/:tokenId", async (req, res) => {
  const tokenId = req.params.tokenId;
  try {
    const nftMetadata = await NftMetadata.findOne({ tokenId });
    if (!nftMetadata) {
      return res.status(404).json({ message: "NFT metadata not found" });
    }
    res.json(nftMetadata.metadata);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
