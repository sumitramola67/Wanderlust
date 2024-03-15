const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: String,
    image: {
        type: String,
        default: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1702311178078-1edf877d3afe%3Fixid%3DM3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzA4MzExNjQ2fA%26ixlib%3Drb-4.0.3&tbnid=2TsvdXHLC8-NSM&vet=12ahUKEwiIjp_ut7iEAxVxVKQEHapUARsQMygFegUIARCCAQ..i&imgrefurl=https%3A%2F%2Funsplash.com%2F&docid=SMN6Hku9gAj4aM&w=5285&h=2973&q=unsplash&ved=2ahUKEwiIjp_ut7iEAxVxVKQEHapUARsQMygFegUIARCCAQ",
        set: (v) => v === "" ? "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1702311178078-1edf877d3afe%3Fixid%3DM3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzA4MzExNjQ2fA%26ixlib%3Drb-4.0.3&tbnid=2TsvdXHLC8-NSM&vet=12ahUKEwiIjp_ut7iEAxVxVKQEHapUARsQMygFegUIARCCAQ..i&imgrefurl=https%3A%2F%2Funsplash.com%2F&docid=SMN6Hku9gAj4aM&w=5285&h=2973&q=unsplash&ved=2ahUKEwiIjp_ut7iEAxVxVKQEHapUARsQMygFegUIARCCAQ" : v,
    },
    price: Number,
    location: String,
    country: String,

});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;