var server = require("./server/server");
var router	= require("./server/router");
var requestHandlers = require("./server/requestHandlers");

var handle = {};
handle["page"] = requestHandlers.page;
handle["/menu"] = requestHandlers.menu;
handle["/list"] = requestHandlers.list;
handle["/newscount"] = requestHandlers.newscount;

server.start(router.route,handle);

