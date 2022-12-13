const router = require("express").Router();
const Blog = require("../models/Blog");
const signup = require("../models/Signup");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const secretKey = "secretKey";

// Your routing code goes here

router.post("/register", body("email").isEmail(), async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const newUser = await signup.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({
      status: "Success",
      newUser,
    });
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e.message,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const credits = await signup.find({
      email: req.body.email,
      password: req.body.password,
    });
    if (credits.length == 0) {
      res.json({ message: "Bad credential" });
    } else {
      jwt.sign({ credits }, secretKey, { expiresIn: "3000s" }, (err, token) => {
        res.json({
          message: "Login Sucessful",
          token,
        });
      });
    }
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e.message,
    });
  }
});

router.get("/post", verifyToken, (req, res) => {
  jwt.verify(req.token, secretKey, async (err, authData) => {
    if (err) {
      res.send({ message: "Invalid token" });
    } else {
      const result = await Blog.find();
      res.json({
        status: "Success",
        result,
      });
    }
  });
});

router.post("/post", verifyToken, (req, res) => {
  try {
    jwt.verify(req.token, secretKey, async (err, authData) => {
      if (err) {
        res.send({
          message: "Invalid token",
        });
      } else {
        const result = await Blog.create({
          title: req.body.title,
          body: req.body.body,
          image: req.body.image,
        });
        res.json({
          status: "Success",
          result,
        });
      }
    });
  } catch (e) {
    res.json({
      status: "Failed",
    });
  }
});

router.put("/post/:id", verifyToken, async (req, res) => {
  try {
    jwt.verify(req.token, secretKey, async (err, authData) => {
      if (err) {
        res.send({
          message: "Invalid token",
        });
      } else {
        const result = await Blog.updateOne(
          { _id: req.params.id },
          { title: req.body.title, body: req.body.body, image: req.body.image }
        );
        res.json({
          status: "Success",
          result,
        });
      }
    });
  } catch (e) {
    res.json({
      status: "Failed",
      result,
    });
  }
});

router.delete("/post/:id", verifyToken, (req, res) => {
  try {
    jwt.verify(req.token, secretKey, async (err, authData) => {
      const result = await Blog.deleteOne({ _id: req.params.id });
      res.json({
        status: "Success",
        result,
      });
    });
  } catch (e) {
    res.json({
      status: "Failed",
      result,
    });
  }
});

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    res.send({
      result: "Token is not valid",
    });
  }
}

module.exports = router;
