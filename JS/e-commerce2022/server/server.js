import express from "express";
import cors from "cors";
import mercadopago from "mercadopago";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
  access_token: "TEST-6899935826358655-100518-e50ef562a2bea23cbee14a59c22040f6-327271410",
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "../client")));

app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "..", "client/media", "index.html"));
});

app.post("/create_preference", (req, res) => {
  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity),
      },
    ],
    back_urls: {
      success: "http://localhost:8080",
      failure: "http://localhost:8080",
      pending: "",
    },
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/feedback", function (req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
});

app.listen(8080, () => {
  console.log("The server is now running on Port 8080");
});






























// const express = require("express");
// const app = express();
// const cors = require("cors");
// const mercadopago = require("mercadopago");
// const path = require("path");

// // REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
// mercadopago.configure({
// 	access_token: "<ACCESS_TOKEN>",
// });


// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.use(express.static(path.join(__dirname, "../client/js")));
// app.use(cors());

// // app.get("/", function (req, res) {
// // 	res.status(200).sendFile("index.html");
// // });
// app.get("/", function () {
// 	path.resolve(__dirname,"..", "client", "index.html");
// });

// app.post("/create_preference", (req, res) => {

// 	let preference = {
// 		items: [
// 			{
// 				title: req.body.description,
// 				unit_price: Number(req.body.price),
// 				quantity: Number(req.body.quantity),
// 			}
// 		],
// 		back_urls: {
// 			"success": "http://localhost:8080",
// 			"failure": "http://localhost:8080",
// 			"pending": ""
// 		},
// 		auto_return: "approved",
// 	};

// 	mercadopago.preferences.create(preference)
// 		.then(function (response) {
// 			res.json({
// 				id: response.body.id
// 			});
// 		}).catch(function (error) {
// 			console.log(error);
// 		});
// });

// app.get('/feedback', function (req, res) {
// 	res.json({
// 		Payment: req.query.payment_id,
// 		Status: req.query.status,
// 		MerchantOrder: req.query.merchant_order_id
// 	});
// });

// app.listen(8080, () => {
// 	console.log("The server is now running on Port 8080");
// });