var app = {};
app.appView;

function init () {
  app.createChildren ();
  app.createView ();
  app.prePopulate ();
  app.listenEvents ();
  // app.setDefault ();
}

app.createChildren = function () {
    lsp.createChildren();
    rsp.createChildren();
}

app.createView = function () {
    app.appView = document.getElementById('app');
    lsp.createView();
    rsp.createView();
}

app.prePopulate = function () {
    lsp.prePopulate();
    rsp.prePopulate();
}

app.listenEvents = function () {
    lsp.ListenEvents();
    rsp.listenEvents();
}