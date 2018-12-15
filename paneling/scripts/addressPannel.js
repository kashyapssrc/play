var addressPannel = {};

addressPannel.createChildren = function () {
    addressListPannel.createChildren();
    addressInfoPannel.createChildren();
}

addressPannel.createView = function () {
    addressListPannel.createView();
    addressInfoPannel.createView();
}

addressPannel.prePopulate = function () {
    addressListPannel.prePopulate();
    addressInfoPannel.prePopulate();
}