var rsp = {};
rsp.view;

rsp.createChildren = function () {
    personPannel.createChildren();
    addressPannel.createChildren();
}

rsp.createView = function () {
    rsp.view = doGet('../html/rsp.html');
    app.appView.innerHTML += rsp.view;
    rsp.view = document.getElementById();
}

rsp.prePopulate = function () {
    personPannel.prePopulate();
}