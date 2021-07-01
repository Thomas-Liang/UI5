sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"./controller/HelloDialog",
	"sap/ui/Device"
], function(UIComponent, JSONModel, HelloDialog, Device) {
	"use strict";
	return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
		metadata: {
			manifest: "json"
		},
		init: function() {
			UIComponent.prototype.init.apply(this, arguments);
			var oData = {
				recipient: {
					name: "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
			//set the device model
			var oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");
			//set the dialog
			this._helloDialog = new HelloDialog(this.getRootControl());

			this.getRouter().initialize();
		},
		getContentDensityClass: function() {
			if (!this._sContentDensityClass) {
            	this._sContentDensityClass = "sapUiSizeCompact";
			} else {
                this._sContentDensityClass = "sapUiSizeCozy";
			}
			return this._sContentDensityClass;
		},
		exit: function() {
			this._helloDialog.destroy();
			delete this._helloDialog;
		},
		openHelloDialog: function() {
			this._helloDialog.open();
		}
	});
});