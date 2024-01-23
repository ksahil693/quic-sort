require('dotenv').config();
const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mysql = require("mysql2");
const bodyParser = require('body-parser');
const GitHubStrategy = require('passport-github').Strategy;
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const nodemailer = require('nodemailer');


const app = express();

const users=[];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: "your-database-host",
  user: "your-database-user",
  password: "your-database-password",
  database: "your-database-name",
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");

  // You can start executing SQL queries here
});
function createOrRetrieveUser(googleId,displayName,email) {

  const existingUser = users.find(user => user.googleId === profile.googleId);

  if (existingUser) {
    // User already exists, return the existing user
    return existingUser;
  } else {
    // User doesn't exist, create a new user
    const newUser = {
      id: users.length + 1,
      googleId: googleId,
      displayName: displayName,
    };

    // Add the new user to the array (in a real app, you'd save it to the database)
    users.push(newUser);

    // Return the newly created user
    return newUser;
  }
}

// Passport setup
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // Handle user profile data here (create user, store in database, etc.)
      const user = createOrRetrieveUser({ googleId: profile.id, displayName: profile.displayName });

  // The user object is then passed to the done callback.
      return done(null, user);
    }
  )
);

// Configure GitHub strategy
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/github/callback',
}, (accessToken, refreshToken, profile, done) => {
  // Store user information in session or database as needed
      const user = createOrRetrieveUser({ googleId: profile.id, displayName: profile.displayName});

      // The user object is then passed to the done callback.
      return done(null, user);
    }));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = users.find(u => u.id === id);
  done(null, user);
});


app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

// Initialize Passport and restore authentication state, if any, from the session
app.use(passport.initialize());

app.use(passport.session());

// Configure Nodemailer for sending emails
const transporter = nodemailer.createTransport({
  host: "example@gmail.com",
  port: 25,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: "example@gmail.com",
    pass: "B093jd",
  },
});


// Define routes
app.post('/register', (req, res) => {
  const { email, password } = req.body;

  // For simplicity, store passwords in plain text (in a real app, use bcrypt)
  const user = { id: users.length + 1, email, password, verified: false };

  // Generate a verification token (for simplicity, just use the user ID)
  const verificationToken = user.id.toString();

  // Send a verification email
  const verificationLink = `http://localhost:3000/verify/${verificationToken}`;
  const mailOptions = {
    from: 'example@gmail.com',
    to: email,
    subject: 'Email Verification',
    text: `Click on the following link to verify your email: ${verificationLink}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: 'Failed to send verification email' });
    }

    users.push(user);
    return res.json({ message: 'User registered. Check your email for verification.' });
  });
});

app.get('/verify/:token', (req, res) => {
  const token = req.params.token;
  const userId = parseInt(token);

  const user = users.find(u => u.id === userId);

  if (user) {
    user.verified = true;
    return res.send('Email verified successfully. You can now log in.');
  } else {
    return res.status(404).send('Invalid verification token.');
  }
});


// Initialize GitHub authentication
app.get('/auth/github', passport.authenticate('github'));

// Handle GitHub callback after authentication
app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect to profile page or any desired route
    res.redirect('/profile');
  }
);

// Routes for Google and Facebook authentication
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login"],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/profile");
  }
);

//api endpoint for getting new jobs
app.get("/discover", (req, res) => {
  try {
    const sqlQuery = "SELECT * FROM your_table_name";

    // Execute the query
    connection.query(sqlQuery, (err, results) => {
      if (err) {
        console.error("Error executing the query:", err);
        return;
      }

      // Process the results
      res.send(results);
    });
  } catch (err) {
    console.log(err);
  }

  res.send("");
});

//api endpoint for getting wishlist jobs
app.get("/wishlist", (req, res) => {
  try {
    const sqlQuery = "SELECT * FROM your_table_name";

    // Execute the query
    connection.query(sqlQuery, (err, results) => {
      if (err) {
        console.error("Error executing the query:", err);
        return;
      }

      // Process the results
      res.send(results);
    });
  } catch (err) {
    console.log(err);
  }

  res.send("");
});

//api endpoint for wishlisting job
app.post("/add", (req, res) => {
  try {
    const sqlQuery = "SELECT * FROM your_table_name";

    // Execute the query
    connection.query(sqlQuery, (err, results) => {
      if (err) {
        console.error("Error executing the query:", err);
        return;
      }

      // Process the results
      res.send(results);
    });
  } catch (err) {
    console.log(err);
  }

  res.send("");
});

//api endpoint for reporting a job
app.post("/report", (req, res) => {
  try {
    const sqlQuery = "SELECT * FROM your_table_name";

    // Execute the query
    connection.query(sqlQuery, (err, results) => {
      if (err) {
        console.error("Error executing the query:", err);
        return;
      }

      // Process the results
      res.send(results);
    });
  } catch (err) {
    console.log(err);
  }

  res.send("");
});

//api endpoint for removing a job
app.post("/remove", (req, res) => {
  try {
    const sqlQuery = "SELECT * FROM your_table_name";

    // Execute the query
    connection.query(sqlQuery, (err, results) => {
      if (err) {
        console.error("Error executing the query:", err);
        return;
      }

      // Process the results
      res.send(results);
    });
  } catch (err) {
    console.log(err);
  }

  res.send("");
});

// Close the database connection when the application exits
process.on("exit", () => {
  connection.end();
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
