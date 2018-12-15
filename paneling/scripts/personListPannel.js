var personListPannel = {};
personListPannel.view;

personListPannel.createChildren = function () {};

personListPannel.createView = function () {
    personListPannel.view = doGet('../html/personList.html');
    personPannel.view.innerHTML = personListPannel.view;
}

personListPannel.prePopulate = function () {}