// models/nftMetadata.js

const mongoose = require("mongoose");

const nftMetadataSchema = new mongoose.Schema({
  tokenId: {
    type: String,
    required: true,
    unique: true,
  },
  metadata: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("NftMetadata", nftMetadataSchema);
