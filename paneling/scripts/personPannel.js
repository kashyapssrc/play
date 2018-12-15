var personPannel = {};
personPannel.view;

personPannel.init = function () {
    personPannel.createChildren();
    personPannel.createView();
    personPannel.prePopulate();
    personPannel.listenEvents();
    personPannel.setDefault();
}


personPannel.createChildren = function () {
    personListPannel.createChildren();
    personInfoPannel.createChildren();
}

personPannel.createView = function () {
    personPanel.view = doGet('../html/personPannel.html');
    rsp.view.innerHTML = personPannel.view;

    personPannel.view = document.getElementById('personPannel');
    personListPannel.createView();
    personInfoPannel.createView();
}

personPannel.prePopulate = function () {
    personListPannel.prePopulate();
    personInfoPannel.prePopulate();
}