var personInfoPannel = {};
personInfoPannel.view;


personInfoPannel.createChildren = function () {};

personInfoPannel.createView = function () {
    personInfoPannel.view = doGet('../html/personInfo.html');
    personPannel.view.innerHTML += personInfoPannel.view;
}

personInfoPannel.prePopulate = function () {}