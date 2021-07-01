sap.ui.require(["sap/ui/model/json/JSONModel", "sap/ui/core/mvc/XMLView","sap/ui/model/BindingMode"], function(JSONModel, XMLView,BindingMode) {
	"use strict";
	sap.ui.getCore().attachInit(function() {
		//create a JSON model
		var oModel = new JSONModel({
			firstName: "Harry",
			lastName: "Hawk",
			enbaled: true,
			panelHeaderText: "Data Binding Basics"
		});
		oModel.setDefaultBindingMode(BindingMode.OneWay);
		//Assign the model object to the SAPUI5
		sap.ui.getCore().setModel(oModel);

		//Display the XML view called 'App'
		new XMLView({
			viewName: "sap.ui.demo.db.view.App"
		}).placeAt("content");
	});
});