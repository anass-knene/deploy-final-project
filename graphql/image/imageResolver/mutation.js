const handleFileUploadMongoDB = require("../storeImageInMongoDB");

const singleUpload = async (_, { file }) => {
  const res = await handleFileUploadMongoDB(file);
  return { filename: res.filename, imageUrl: res.imageUrl };
};
module.exports = { singleUpload };
