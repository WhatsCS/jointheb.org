---
title: "ChitChat-Server"
tags: ["Group Project", "School Project", "Node", "Expressjs", "RESTful", "Socket.io"]
date: "2020-05-01"
url: "https://github.com/WhatsCS/ChitChat-Server"
---

ChitChat is an idea spawned from a group project in my Software Engineering course. It was an exercise in AGILE development with our client being a company in the SF Bay Area. The goal of the project was to have a Client-Server encrypted chat based on Socket.io and MongoDB. These were requests from the client.

The server is written in Javascript using Nodejs and Expressjs for the management of users and logging in/registration. Once authorized, users were supposed to then be given a Jason Web Token (JWT) to be used on all connections. Socket.io end-points were also requiring authentication in order to have access to sending messages.