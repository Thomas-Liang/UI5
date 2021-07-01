sap.ui.define([
	"sap/m/Text"
	],function(Text){
	"use strict";
	//Create a text and return the text to  the frontend
	new Text({
		text:"Hello UI5"
	}).placeAt("content");
});