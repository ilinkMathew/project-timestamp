# Timestamp Microservice

This is the boilerplate code for the Timestamp Microservice project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice



https://en.wikipedia.org/wiki/Year_2038_problem

Use 

[project url]/api/2015-12-25
[project url]/api/1451001600000

{"unix":1451001600000,"utc":"Fri, 25 Dec 2015 00:00:00 GMT"}

{"unix":1451001600000,"utc":"Fri, 25 Dec 2015 00:00:00 GMT"}


new Date("2015-12-25").toUTCString() // 'Fri, 25 Dec 2015 00:00:00 GMT'

new Date(1451001600000)