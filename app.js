const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listening.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");


// const MONGO_url ="mongodb://127.0.0.1:27017/test";

main().then(() => {
    console.log("connected to DB");
})
    .catch(() => {
        console.log(err);
    })

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}
app.set("view engine", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")))


app.get("/", (req, res) => {
    res.send("hiii i m listenin");
})

app.get("/Listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", { allListings });
});

//create new rout
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});


// Show Roout
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing })
})

// Creat rout
app.post("/listings", async (req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
})

//edit rout
app.get("/listings/:id/edit", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing })
})

// Update Route 
app.put("/listings/:id", async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing })
    res.redirect(`/listings/${id}`);
})

//Delete rout
app.delete("/listings/:id", async (req, res) => {
    let { id } = req.params;
    let deletedlisting = await Listing.findByIdAndDelete(id)
    console.log(deletedlisting);
    res.redirect("/listings");
})


// app.get("/test", async (req, res) => {
//     let sampleListing = new Listing({
//         title: "My New beech",
//         discription: "By the beech",
//         price: 1200,
//         location: "Goa",
//         country: "India",
//     })

//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("Successful test");
// });

app.listen(8080, () => {
    console.log("server is listening to port 8080");
})