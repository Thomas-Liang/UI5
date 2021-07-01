sap.ui.require(["sap/m/Text", "sap/ui/model/json/JSONModel"], function(Text,JSONModel) {
	"use strict";
	sap.ui.getCore().attachInit(function() {
		//create a JSON model
		var oModel = new JSONModel({greetingText:"Hi,my name is Harry Hawk"});
	    //Assign the model object to the SAPUI5
	    sap.ui.getCore().setModel(oModel);
		new Text({
			text: "{/greetingText}"
		}).placeAt("content");
	});
});