/* eslint-disable new-cap */
window.suite = function() {
	"use strict";

	var oSuite = new parent.jsUnitTestSuite();
		// sContextPath = location.pathname.substring(0, location.pathname.lastIndexOf("/") + 1);

	oSuite.addTestPage("./unit/unitTests.qunit.html");
	oSuite.addTestPage("./integration/opaTests.qunit.html");

	return oSuite;
};