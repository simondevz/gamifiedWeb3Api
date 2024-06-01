// models/nftMetadata.js

const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000, // Increase the timeout limit to 30 seconds
});

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
