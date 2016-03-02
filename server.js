"use strict";
var express = require("express");
var appMain = express();
var appChild = express();
appMain.use(express.static("main"));
appChild.use(express.static("child"));
appMain.listen(8080, function() {
    appChild.listen(8081, function () {
        console.log("test app listening on port 8080");
    });
});
