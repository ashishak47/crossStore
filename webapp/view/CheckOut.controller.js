sap.ui.define(["jquery.sap.global", "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "sap/ui/Device"],
	function(jQuery, Controller, JSONModel, Device) {
	"use strict";

	var CheckOut = Controller.extend("sap.ui.chattes.view.CheckOut", {
		onInit : function () {},
		onAfterRendering: function () {
/*			var sCurrentBreakpoint = this._oDSC.getCurrentBreakpoint();
			this.updateToggleButtonState(sCurrentBreakpoint);
*/		},
		navButtonPress: function(oEvent){
            window.back();
        }
	});

	return CheckOut;

});
