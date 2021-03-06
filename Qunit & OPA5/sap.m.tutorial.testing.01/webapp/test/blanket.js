if (typeof QUnit !== 'undefined') {
	QUnit.config.autostart = false;
}(function(d) {
	/*
	  Copyright (C) 2013 Ariya Hidayat <ariya.hidayat@gmail.com>
	  Copyright (C) 2013 Thaddee Tyl <thaddee.tyl@gmail.com>
	  Copyright (C) 2013 Mathias Bynens <mathias@qiwi.be>
	  Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>
	  Copyright (C) 2012 Mathias Bynens <mathias@qiwi.be>
	  Copyright (C) 2012 Joost-Wim Boekesteijn <joost-wim@boekesteijn.nl>
	  Copyright (C) 2012 Kris Kowal <kris.kowal@cixar.com>
	  Copyright (C) 2012 Yusuke Suzuki <utatane.tea@gmail.com>
	  Copyright (C) 2012 Arpad Borsos <arpad.borsos@googlemail.com>
	  Copyright (C) 2011 Ariya Hidayat <ariya.hidayat@gmail.com>

	  Redistribution and use in source and binary forms, with or without
	  modification, are permitted provided that the following conditions are met:

	    * Redistributions of source code must retain the above copyright
	      notice, this list of conditions and the following disclaimer.
	    * Redistributions in binary form must reproduce the above copyright
	      notice, this list of conditions and the following disclaimer in the
	      documentation and/or other materials provided with the distribution.

	  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
	  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
	  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/
	(function(r, f) {
		'use strict';
		if (typeof d === 'function' && d.amd) {
			d(['exports'], f);
		} else if (typeof exports !== 'undefined') {
			f(exports);
		} else {
			f((r.esprima = {}));
		}
	}(this, function(a) {
		'use strict';
		var T, b, F, S, P, M, R, c, s, f, g, l, h, j, k, m, n, o;
		T = {
			BooleanLiteral: 1,
			EOF: 2,
			Identifier: 3,
			Keyword: 4,
			NullLiteral: 5,
			NumericLiteral: 6,
			Punctuator: 7,
			StringLiteral: 8,
			RegularExpression: 9
		};
		b = {};
		b[T.BooleanLiteral] = 'Boolean';
		b[T.EOF] = '<end>';
		b[T.Identifier] = 'Identifier';
		b[T.Keyword] = 'Keyword';
		b[T.NullLiteral] = 'Null';
		b[T.NumericLiteral] = 'Numeric';
		b[T.Punctuator] = 'Punctuator';
		b[T.StringLiteral] = 'String';
		b[T.RegularExpression] = 'RegularExpression';
		F = ['(', '{', '[', 'in', 'typeof', 'instanceof', 'new', 'return', 'case', 'delete', 'throw', 'void', '=', '+=', '-=', '*=', '/=',
			'%=', '<<=', '>>=', '>>>=', '&=', '|=', '^=', ',', '+', '-', '*', '/', '%', '++', '--', '<<', '>>', '>>>', '&', '|', '^', '!', '~',
			'&&', '||', '?', ':', '===', '==', '>=', '<=', '<', '>', '!=', '!=='
		];
		S = {
			AssignmentExpression: 'AssignmentExpression',
			ArrayExpression: 'ArrayExpression',
			BlockStatement: 'BlockStatement',
			BinaryExpression: 'BinaryExpression',
			BreakStatement: 'BreakStatement',
			CallExpression: 'CallExpression',
			CatchClause: 'CatchClause',
			ConditionalExpression: 'ConditionalExpression',
			ContinueStatement: 'ContinueStatement',
			DoWhileStatement: 'DoWhileStatement',
			DebuggerStatement: 'DebuggerStatement',
			EmptyStatement: 'EmptyStatement',
			ExpressionStatement: 'ExpressionStatement',
			ForStatement: 'ForStatement',
			ForInStatement: 'ForInStatement',
			FunctionDeclaration: 'FunctionDeclaration',
			FunctionExpression: 'FunctionExpression',
			Identifier: 'Identifier',
			IfStatement: 'IfStatement',
			Literal: 'Literal',
			LabeledStatement: 'LabeledStatement',
			LogicalExpression: 'LogicalExpression',
			MemberExpression: 'MemberExpression',
			NewExpression: 'NewExpression',
			ObjectExpression: 'ObjectExpression',
			Program: 'Program',
			Property: 'Property',
			ReturnStatement: 'ReturnStatement',
			SequenceExpression: 'SequenceExpression',
			SwitchStatement: 'SwitchStatement',
			SwitchCase: 'SwitchCase',
			ThisExpression: 'ThisExpression',
			ThrowStatement: 'ThrowStatement',
			TryStatement: 'TryStatement',
			UnaryExpression: 'UnaryExpression',
			UpdateExpression: 'UpdateExpression',
			VariableDeclaration: 'VariableDeclaration',
			VariableDeclarator: 'VariableDeclarator',
			WhileStatement: 'WhileStatement',
			WithStatement: 'WithStatement'
		};
		P = {
			Data: 1,
			Get: 2,
			Set: 4
		};
		M = {
			UnexpectedToken: 'Unexpected token %0',
			UnexpectedNumber: 'Unexpected number',
			UnexpectedString: 'Unexpected string',
			UnexpectedIdentifier: 'Unexpected identifier',
			UnexpectedReserved: 'Unexpected reserved word',
			UnexpectedEOS: 'Unexpected end of input',
			NewlineAfterThrow: 'Illegal newline after throw',
			InvalidRegExp: 'Invalid regular expression',
			UnterminatedRegExp: 'Invalid regular expression: missing /',
			InvalidLHSInAssignment: 'Invalid left-hand side in assignment',
			InvalidLHSInForIn: 'Invalid left-hand side in for-in',
			MultipleDefaultsInSwitch: 'More than one default clause in switch statement',
			NoCatchOrFinally: 'Missing catch or finally after try',
			UnknownLabel: 'Undefined label \'%0\'',
			Redeclaration: '%0 \'%1\' has already been declared',
			IllegalContinue: 'Illegal continue statement',
			IllegalBreak: 'Illegal break statement',
			IllegalReturn: 'Illegal return statement',
			StrictModeWith: 'Strict mode code may not include a with statement',
			StrictCatchVariable: 'Catch variable may not be eval or arguments in strict mode',
			StrictVarName: 'Variable name may not be eval or arguments in strict mode',
			StrictParamName: 'Parameter name eval or arguments is not allowed in strict mode',
			StrictParamDupe: 'Strict mode function may not have duplicate parameter names',
			StrictFunctionName: 'Function name may not be eval or arguments in strict mode',
			StrictOctalLiteral: 'Octal literals are not allowed in strict mode.',
			StrictDelete: 'Delete of an unqualified identifier in strict mode.',
			StrictDuplicateProperty: 'Duplicate data property in object literal not allowed in strict mode',
			AccessorDataProperty: 'Object literal may not have data and accessor property with the same name',
			AccessorGetSet: 'Object literal may not have multiple get/set accessors with the same name',
			StrictLHSAssignment: 'Assignment to eval or arguments is not allowed in strict mode',
			StrictLHSPostfix: 'Postfix increment/decrement may not have eval or arguments operand in strict mode',
			StrictLHSPrefix: 'Prefix increment/decrement may not have eval or arguments operand in strict mode',
			StrictReservedWord: 'Use of future reserved word in strict mode'
		};
		R = {
			NonAsciiIdentifierStart: new RegExp(
				'[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]'
			),
			NonAsciiIdentifierPart: new RegExp(
				'[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0\u08A2-\u08AC\u08E4-\u08FE\u0900-\u0963\u0966-\u096F\u0971-\u0977\u0979-\u097F\u0981-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C01-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C82\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191C\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1D00-\u1DE6\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA697\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7B\uAA80-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE26\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]'
			)
		};

		function p(e, i) {
			if (!e) {
				throw new Error('ASSERT: ' + i);
			}
		}

		function q(e) {
			return (e >= 48 && e <= 57);
		}

		function r(e) {
			return '0123456789abcdefABCDEF'.indexOf(e) >= 0;
		}

		function t(e) {
			return '01234567'.indexOf(e) >= 0;
		}

		function u(e) {
			return (e === 0x20) || (e === 0x09) || (e === 0x0B) || (e === 0x0C) || (e === 0xA0) || (e >= 0x1680 && [0x1680, 0x180E, 0x2000,
				0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A, 0x202F, 0x205F, 0x3000, 0xFEFF
			].indexOf(e) >= 0);
		}

		function v(e) {
			return (e === 0x0A) || (e === 0x0D) || (e === 0x2028) || (e === 0x2029);
		}

		function w(e) {
			return (e === 0x24) || (e === 0x5F) || (e >= 0x41 && e <= 0x5A) || (e >= 0x61 && e <= 0x7A) || (e === 0x5C) || ((e >= 0x80) && R.NonAsciiIdentifierStart
				.test(String.fromCharCode(e)));
		}

		function x(e) {
			return (e === 0x24) || (e === 0x5F) || (e >= 0x41 && e <= 0x5A) || (e >= 0x61 && e <= 0x7A) || (e >= 0x30 && e <= 0x39) || (e ===
				0x5C) || ((e >= 0x80) && R.NonAsciiIdentifierPart.test(String.fromCharCode(e)));
		}

		function y(i) {
			switch (i) {
				case 'class':
				case 'enum':
				case 'export':
				case 'extends':
				case 'import':
				case 'super':
					return true;
				default:
					return false;
			}
		}

		function z(i) {
			switch (i) {
				case 'implements':
				case 'interface':
				case 'package':
				case 'private':
				case 'protected':
				case 'public':
				case 'static':
				case 'yield':
				case 'let':
					return true;
				default:
					return false;
			}
		}

		function A(i) {
			return i === 'eval' || i === 'arguments';
		}

		function B(i) {
			if (f && z(i)) {
				return true;
			}
			switch (i.length) {
				case 2:
					return (i === 'if') || (i === 'in') || (i === 'do');
				case 3:
					return (i === 'var') || (i === 'for') || (i === 'new') || (i === 'try') || (i === 'let');
				case 4:
					return (i === 'this') || (i === 'else') || (i === 'case') || (i === 'void') || (i === 'with') || (i === 'enum');
				case 5:
					return (i === 'while') || (i === 'break') || (i === 'catch') || (i === 'throw') || (i === 'const') || (i === 'yield') || (i ===
						'class') || (i === 'super');
				case 6:
					return (i === 'return') || (i === 'typeof') || (i === 'delete') || (i === 'switch') || (i === 'export') || (i === 'import');
				case 7:
					return (i === 'default') || (i === 'finally') || (i === 'extends');
				case 8:
					return (i === 'function') || (i === 'continue') || (i === 'debugger');
				case 10:
					return (i === 'instanceof');
				default:
					return false;
			}
		}

		function C(e, i, t2, u2, v2) {
			var w2, x2;
			p(typeof t2 === 'number', 'Comment must have valid position');
			if (n.lastCommentStart >= t2) {
				return;
			}
			n.lastCommentStart = t2;
			w2 = {
				type: e,
				value: i
			};
			if (o.range) {
				w2.range = [t2, u2];
			}
			if (o.loc) {
				w2.loc = v2;
			}
			o.comments.push(w2);
			if (o.attachComment) {
				o.leadingComments.push(w2);
				o.trailingComments.push(w2);
			}
		}

		function D(e) {
			var i, t2, ch, v2;
			i = g - e;
			t2 = {
				start: {
					line: l,
					column: g - h - e
				}
			};
			while (g < j) {
				ch = s.charCodeAt(g);
				++g;
				if (v(ch)) {
					if (o.comments) {
						v2 = s.slice(i + e, g - 1);
						t2.end = {
							line: l,
							column: g - h - 1
						};
						C('Line', v2, i, g - 1, t2);
					}
					if (ch === 13 && s.charCodeAt(g) === 10) {
						++g;
					}++l;
					h = g;
					return;
				}
			}
			if (o.comments) {
				v2 = s.slice(i + e, g);
				t2.end = {
					line: l,
					column: g - h
				};
				C('Line', v2, i, g, t2);
			}
		}

		function E() {
			var e, i, ch, t2;
			if (o.comments) {
				e = g - 2;
				i = {
					start: {
						line: l,
						column: g - h - 2
					}
				};
			}
			while (g < j) {
				ch = s.charCodeAt(g);
				if (v(ch)) {
					if (ch === 0x0D && s.charCodeAt(g + 1) === 0x0A) {
						++g;
					}++l;
					++g;
					h = g;
					if (g >= j) {
						h1({}, M.UnexpectedToken, 'ILLEGAL');
					}
				} else if (ch === 0x2A) {
					if (s.charCodeAt(g + 1) === 0x2F) {
						++g;
						++g;
						if (o.comments) {
							t2 = s.slice(e + 2, g - 2);
							i.end = {
								line: l,
								column: g - h
							};
							C('Block', t2, e, g, i);
						}
						return;
					}++g;
				} else {
					++g;
				}
			}
			h1({}, M.UnexpectedToken, 'ILLEGAL');
		}

		function G() {
			var e, i;
			i = (g === 0);
			while (g < j) {
				e = s.charCodeAt(g);
				if (u(e)) {
					++g;
				} else if (v(e)) {
					++g;
					if (e === 0x0D && s.charCodeAt(g) === 0x0A) {
						++g;
					}++l;
					h = g;
					i = true;
				} else if (e === 0x2F) {
					e = s.charCodeAt(g + 1);
					if (e === 0x2F) {
						++g;
						++g;
						D(2);
						i = true;
					} else if (e === 0x2A) {
						++g;
						++g;
						E();
					} else {
						break;
					}
				} else if (i && e === 0x2D) {
					if ((s.charCodeAt(g + 1) === 0x2D) && (s.charCodeAt(g + 2) === 0x3E)) {
						g += 3;
						D(3);
					} else {
						break;
					}
				} else if (e === 0x3C) {
					if (s.slice(g + 1, g + 4) === '!--') {
						++g;
						++g;
						++g;
						++g;
						D(4);
					} else {
						break;
					}
				} else {
					break;
				}
			}
		}

		function H(e) {
			var i, t2, ch, v2 = 0;
			t2 = (e === 'u') ? 4 : 2;
			for (i = 0; i < t2; ++i) {
				if (g < j && r(s[g])) {
					ch = s[g++];
					v2 = v2 * 16 + '0123456789abcdef'.indexOf(ch.toLowerCase());
				} else {
					return '';
				}
			}
			return String.fromCharCode(v2);
		}

		function I() {
			var e, i;
			e = s.charCodeAt(g++);
			i = String.fromCharCode(e);
			if (e === 0x5C) {
				if (s.charCodeAt(g) !== 0x75) {
					h1({}, M.UnexpectedToken, 'ILLEGAL');
				}++g;
				e = H('u');
				if (!e || e === '\\' || !w(e.charCodeAt(0))) {
					h1({}, M.UnexpectedToken, 'ILLEGAL');
				}
				i = e;
			}
			while (g < j) {
				e = s.charCodeAt(g);
				if (!x(e)) {
					break;
				}++g;
				i += String.fromCharCode(e);
				if (e === 0x5C) {
					i = i.substr(0, i.length - 1);
					if (s.charCodeAt(g) !== 0x75) {
						h1({}, M.UnexpectedToken, 'ILLEGAL');
					}++g;
					e = H('u');
					if (!e || e === '\\' || !x(e.charCodeAt(0))) {
						h1({}, M.UnexpectedToken, 'ILLEGAL');
					}
					i += e;
				}
			}
			return i;
		}

		function J() {
			var e, i;
			e = g++;
			while (g < j) {
				i = s.charCodeAt(g);
				if (i === 0x5C) {
					g = e;
					return I();
				}
				if (x(i)) {
					++g;
				} else {
					break;
				}
			}
			return s.slice(e, g);
		}

		function K() {
			var e, i, t2;
			e = g;
			i = (s.charCodeAt(g) === 0x5C) ? I() : J();
			if (i.length === 1) {
				t2 = T.Identifier;
			} else if (B(i)) {
				t2 = T.Keyword;
			} else if (i === 'null') {
				t2 = T.NullLiteral;
			} else if (i === 'true' || i === 'false') {
				t2 = T.BooleanLiteral;
			} else {
				t2 = T.Identifier;
			}
			return {
				type: t2,
				value: i,
				lineNumber: l,
				lineStart: h,
				start: e,
				end: g
			};
		}

		function L() {
			var e = g,
				i = s.charCodeAt(g),
				t2, u2 = s[g],
				v2, w2, x2;
			switch (i) {
				case 0x2E:
				case 0x28:
				case 0x29:
				case 0x3B:
				case 0x2C:
				case 0x7B:
				case 0x7D:
				case 0x5B:
				case 0x5D:
				case 0x3A:
				case 0x3F:
				case 0x7E:
					++g;
					if (o.tokenize) {
						if (i === 0x28) {
							o.openParenToken = o.tokens.length;
						} else if (i === 0x7B) {
							o.openCurlyToken = o.tokens.length;
						}
					}
					return {
						type: T.Punctuator,
						value: String.fromCharCode(i),
						lineNumber: l,
						lineStart: h,
						start: e,
						end: g
					};
				default:
					t2 = s.charCodeAt(g + 1);
					if (t2 === 0x3D) {
						switch (i) {
							case 0x2B:
							case 0x2D:
							case 0x2F:
							case 0x3C:
							case 0x3E:
							case 0x5E:
							case 0x7C:
							case 0x25:
							case 0x26:
							case 0x2A:
								g += 2;
								return {
									type: T.Punctuator,
									value: String.fromCharCode(i) + String.fromCharCode(t2),
									lineNumber: l,
									lineStart: h,
									start: e,
									end: g
								};
							case 0x21:
							case 0x3D:
								g += 2;
								if (s.charCodeAt(g) === 0x3D) {
									++g;
								}
								return {
									type: T.Punctuator,
									value: s.slice(e, g),
									lineNumber: l,
									lineStart: h,
									start: e,
									end: g
								};
						}
					}
			}
			x2 = s.substr(g, 4);
			if (x2 === '>>>=') {
				g += 4;
				return {
					type: T.Punctuator,
					value: x2,
					lineNumber: l,
					lineStart: h,
					start: e,
					end: g
				};
			}
			w2 = x2.substr(0, 3);
			if (w2 === '>>>' || w2 === '<<=' || w2 === '>>=') {
				g += 3;
				return {
					type: T.Punctuator,
					value: w2,
					lineNumber: l,
					lineStart: h,
					start: e,
					end: g
				};
			}
			v2 = w2.substr(0, 2);
			if ((u2 === v2[1] && ('+-<>&|'.indexOf(u2) >= 0)) || v2 === '=>') {
				g += 2;
				return {
					type: T.Punctuator,
					value: v2,
					lineNumber: l,
					lineStart: h,
					start: e,
					end: g
				};
			}
			if ('<>=!+-*%&|^/'.indexOf(u2) >= 0) {
				++g;
				return {
					type: T.Punctuator,
					value: u2,
					lineNumber: l,
					lineStart: h,
					start: e,
					end: g
				};
			}
			h1({}, M.UnexpectedToken, 'ILLEGAL');
		}

		function N(e) {
			var i = '';
			while (g < j) {
				if (!r(s[g])) {
					break;
				}
				i += s[g++];
			}
			if (i.length === 0) {
				h1({}, M.UnexpectedToken, 'ILLEGAL');
			}
			if (w(s.charCodeAt(g))) {
				h1({}, M.UnexpectedToken, 'ILLEGAL');
			}
			return {
				type: T.NumericLiteral,
				value: parseInt('0x' + i, 16),
				lineNumber: l,
				lineStart: h,
				start: e,
				end: g
			};
		}

		function O(e) {
			var i = '0' + s[g++];
			while (g < j) {
				if (!t(s[g])) {
					break;
				}
				i += s[g++];
			}
			if (w(s.charCodeAt(g)) || q(s.charCodeAt(g))) {
				h1({}, M.UnexpectedToken, 'ILLEGAL');
			}
			return {
				type: T.NumericLiteral,
				value: parseInt(i, 8),
				octal: true,
				lineNumber: l,
				lineStart: h,
				start: e,
				end: g
			};
		}

		function Q() {
			var e, i, ch;
			ch = s[g];
			p(q(ch.charCodeAt(0)) || (ch === '.'), 'Numeric literal must start with a decimal digit or a decimal point');
			i = g;
			e = '';
			if (ch !== '.') {
				e = s[g++];
				ch = s[g];
				if (e === '0') {
					if (ch === 'x' || ch === 'X') {
						++g;
						return N(i);
					}
					if (t(ch)) {
						return O(i);
					}
					if (ch && q(ch.charCodeAt(0))) {
						h1({}, M.UnexpectedToken, 'ILLEGAL');
					}
				}
				while (q(s.charCodeAt(g))) {
					e += s[g++];
				}
				ch = s[g];
			}
			if (ch === '.') {
				e += s[g++];
				while (q(s.charCodeAt(g))) {
					e += s[g++];
				}
				ch = s[g];
			}
			if (ch === 'e' || ch === 'E') {
				e += s[g++];
				ch = s[g];
				if (ch === '+' || ch === '-') {
					e += s[g++];
				}
				if (q(s.charCodeAt(g))) {
					while (q(s.charCodeAt(g))) {
						e += s[g++];
					}
				} else {
					h1({}, M.UnexpectedToken, 'ILLEGAL');
				}
			}
			if (w(s.charCodeAt(g))) {
				h1({}, M.UnexpectedToken, 'ILLEGAL');
			}
			return {
				type: T.NumericLiteral,
				value: parseFloat(e),
				lineNumber: l,
				lineStart: h,
				start: i,
				end: g
			};
		}

		function U() {
			var e = '',
				i, t2, ch, v2, w2, x2, y2 = false,
				z2, A2;
			z2 = l;
			A2 = h;
			i = s[g];
			p((i === '\'' || i === '"'), 'String literal must starts with a quote');
			t2 = g;
			++g;
			while (g < j) {
				ch = s[g++];
				if (ch === i) {
					i = '';
					break;
				} else if (ch === '\\') {
					ch = s[g++];
					if (!ch || !v(ch.charCodeAt(0))) {
						switch (ch) {
							case 'u':
							case 'x':
								x2 = g;
								w2 = H(ch);
								if (w2) {
									e += w2;
								} else {
									g = x2;
									e += ch;
								}
								break;
							case 'n':
								e += '\n';
								break;
							case 'r':
								e += '\r';
								break;
							case 't':
								e += '\t';
								break;
							case 'b':
								e += '\b';
								break;
							case 'f':
								e += '\f';
								break;
							case 'v':
								e += '\x0B';
								break;
							default:
								if (t(ch)) {
									v2 = '01234567'.indexOf(ch);
									if (v2 !== 0) {
										y2 = true;
									}
									if (g < j && t(s[g])) {
										y2 = true;
										v2 = v2 * 8 + '01234567'.indexOf(s[g++]);
										if ('0123'.indexOf(ch) >= 0 && g < j && t(s[g])) {
											v2 = v2 * 8 + '01234567'.indexOf(s[g++]);
										}
									}
									e += String.fromCharCode(v2);
								} else {
									e += ch;
								}
								break;
						}
					} else {
						++l;
						if (ch === '\r' && s[g] === '\n') {
							++g;
						}
						h = g;
					}
				} else if (v(ch.charCodeAt(0))) {
					break;
				} else {
					e += ch;
				}
			}
			if (i !== '') {
				h1({}, M.UnexpectedToken, 'ILLEGAL');
			}
			return {
				type: T.StringLiteral,
				value: e,
				octal: y2,
				startLineNumber: z2,
				startLineStart: A2,
				lineNumber: l,
				lineStart: h,
				start: t2,
				end: g
			};
		}

		function V(i, t2) {
			var u2;
			try {
				u2 = new RegExp(i, t2);
			} catch (e) {
				h1({}, M.InvalidRegExp);
			}
			return u2;
		}

		function W() {
			var e, i, t2, u2, v2;
			e = s[g];
			p(e === '/', 'Regular expression literal must start with a slash');
			i = s[g++];
			t2 = false;
			u2 = false;
			while (g < j) {
				e = s[g++];
				i += e;
				if (e === '\\') {
					e = s[g++];
					if (v(e.charCodeAt(0))) {
						h1({}, M.UnterminatedRegExp);
					}
					i += e;
				} else if (v(e.charCodeAt(0))) {
					h1({}, M.UnterminatedRegExp);
				} else if (t2) {
					if (e === ']') {
						t2 = false;
					}
				} else {
					if (e === '/') {
						u2 = true;
						break;
					} else if (e === '[') {
						t2 = true;
					}
				}
			}
			if (!u2) {
				h1({}, M.UnterminatedRegExp);
			}
			v2 = i.substr(1, i.length - 2);
			return {
				value: v2,
				literal: i
			};
		}

		function X() {
			var e, i, t2, u2;
			i = '';
			t2 = '';
			while (g < j) {
				e = s[g];
				if (!x(e.charCodeAt(0))) {
					break;
				}++g;
				if (e === '\\' && g < j) {
					e = s[g];
					if (e === 'u') {
						++g;
						u2 = g;
						e = H('u');
						if (e) {
							t2 += e;
							for (i += '\\u'; u2 < g; ++u2) {
								i += s[u2];
							}
						} else {
							g = u2;
							t2 += 'u';
							i += '\\u';
						}
						i1({}, M.UnexpectedToken, 'ILLEGAL');
					} else {
						i += '\\';
						i1({}, M.UnexpectedToken, 'ILLEGAL');
					}
				} else {
					t2 += e;
					i += e;
				}
			}
			return {
				value: t2,
				literal: i
			};
		}

		function Y() {
			var e, i, t2, u2, v2;
			m = null;
			G();
			e = g;
			i = W();
			t2 = X();
			v2 = V(i.value, t2.value);
			if (o.tokenize) {
				return {
					type: T.RegularExpression,
					value: v2,
					lineNumber: l,
					lineStart: h,
					start: e,
					end: g
				};
			}
			return {
				literal: i.literal + t2.literal,
				value: v2,
				start: e,
				end: g
			};
		}

		function Z() {
			var e, i, t2, u2;
			G();
			e = g;
			i = {
				start: {
					line: l,
					column: g - h
				}
			};
			t2 = Y();
			i.end = {
				line: l,
				column: g - h
			};
			if (!o.tokenize) {
				if (o.tokens.length > 0) {
					u2 = o.tokens[o.tokens.length - 1];
					if (u2.range[0] === e && u2.type === 'Punctuator') {
						if (u2.value === '/' || u2.value === '/=') {
							o.tokens.pop();
						}
					}
				}
				o.tokens.push({
					type: 'RegularExpression',
					value: t2.literal,
					range: [e, g],
					loc: i
				});
			}
			return t2;
		}

		function $(e) {
			return e.type === T.Identifier || e.type === T.Keyword || e.type === T.BooleanLiteral || e.type === T.NullLiteral;
		}

		function _() {
			var e, i;
			e = o.tokens[o.tokens.length - 1];
			if (!e) {
				return Z();
			}
			if (e.type === 'Punctuator') {
				if (e.value === ']') {
					return L();
				}
				if (e.value === ')') {
					i = o.tokens[o.openParenToken - 1];
					if (i && i.type === 'Keyword' && (i.value === 'if' || i.value === 'while' || i.value === 'for' || i.value === 'with')) {
						return Z();
					}
					return L();
				}
				if (e.value === '}') {
					if (o.tokens[o.openCurlyToken - 3] && o.tokens[o.openCurlyToken - 3].type === 'Keyword') {
						i = o.tokens[o.openCurlyToken - 4];
						if (!i) {
							return L();
						}
					} else if (o.tokens[o.openCurlyToken - 4] && o.tokens[o.openCurlyToken - 4].type === 'Keyword') {
						i = o.tokens[o.openCurlyToken - 5];
						if (!i) {
							return Z();
						}
					} else {
						return L();
					}
					if (F.indexOf(i.value) >= 0) {
						return L();
					}
					return Z();
				}
				return Z();
			}
			if (e.type === 'Keyword') {
				return Z();
			}
			return L();
		}

		function a1() {
			var e;
			G();
			if (g >= j) {
				return {
					type: T.EOF,
					lineNumber: l,
					lineStart: h,
					start: g,
					end: g
				};
			}
			e = s.charCodeAt(g);
			if (w(e)) {
				return K();
			}
			if (e === 0x28 || e === 0x29 || e === 0x3B) {
				return L();
			}
			if (e === 0x27 || e === 0x22) {
				return U();
			}
			if (e === 0x2E) {
				if (q(s.charCodeAt(g + 1))) {
					return Q();
				}
				return L();
			}
			if (q(e)) {
				return Q();
			}
			if (o.tokenize && e === 0x2F) {
				return _();
			}
			return L();
		}

		function b1() {
			var e, i, t2, u2;
			G();
			e = {
				start: {
					line: l,
					column: g - h
				}
			};
			i = a1();
			e.end = {
				line: l,
				column: g - h
			};
			if (i.type !== T.EOF) {
				u2 = s.slice(i.start, i.end);
				o.tokens.push({
					type: b[i.type],
					value: u2,
					range: [i.start, i.end],
					loc: e
				});
			}
			return i;
		}

		function c1() {
			var e;
			e = m;
			g = e.end;
			l = e.lineNumber;
			h = e.lineStart;
			m = (typeof o.tokens !== 'undefined') ? b1() : a1();
			g = e.end;
			l = e.lineNumber;
			h = e.lineStart;
			return e;
		}

		function d1() {
			var e, i, t2;
			e = g;
			i = l;
			t2 = h;
			m = (typeof o.tokens !== 'undefined') ? b1() : a1();
			g = e;
			l = i;
			h = t2;
		}

		function e1(e, i) {
			this.line = e;
			this.column = i;
		}

		function f1(e, i, t2, u2) {
			this.start = new e1(e, i);
			this.end = new e1(t2, u2);
		}
		c = {
			name: 'SyntaxTree',
			processComment: function(e) {
				var i, t2;
				if (e.type === S.Program) {
					if (e.body.length > 0) {
						return;
					}
				}
				if (o.trailingComments.length > 0) {
					if (o.trailingComments[0].range[0] >= e.range[1]) {
						t2 = o.trailingComments;
						o.trailingComments = [];
					} else {
						o.trailingComments.length = 0;
					}
				} else {
					if (o.bottomRightStack.length > 0 && o.bottomRightStack[o.bottomRightStack.length - 1].trailingComments && o.bottomRightStack[o.bottomRightStack
							.length - 1].trailingComments[0].range[0] >= e.range[1]) {
						t2 = o.bottomRightStack[o.bottomRightStack.length - 1].trailingComments;
						delete o.bottomRightStack[o.bottomRightStack.length - 1].trailingComments;
					}
				}
				while (o.bottomRightStack.length > 0 && o.bottomRightStack[o.bottomRightStack.length - 1].range[0] >= e.range[0]) {
					i = o.bottomRightStack.pop();
				}
				if (i) {
					if (i.leadingComments && i.leadingComments[i.leadingComments.length - 1].range[1] <= e.range[0]) {
						e.leadingComments = i.leadingComments;
						delete i.leadingComments;
					}
				} else if (o.leadingComments.length > 0 && o.leadingComments[o.leadingComments.length - 1].range[1] <= e.range[0]) {
					e.leadingComments = o.leadingComments;
					o.leadingComments = [];
				}
				if (t2) {
					e.trailingComments = t2;
				}
				o.bottomRightStack.push(e);
			},
			markEnd: function(e, i) {
				if (o.range) {
					e.range = [i.start, g];
				}
				if (o.loc) {
					e.loc = new f1(i.startLineNumber === undefined ? i.lineNumber : i.startLineNumber, i.start - (i.startLineStart === undefined ? i.lineStart :
						i.startLineStart), l, g - h);
					this.postProcess(e);
				}
				if (o.attachComment) {
					this.processComment(e);
				}
				return e;
			},
			postProcess: function(e) {
				if (o.source) {
					e.loc.source = o.source;
				}
				return e;
			},
			createArrayExpression: function(e) {
				return {
					type: S.ArrayExpression,
					elements: e
				};
			},
			createAssignmentExpression: function(e, i, t2) {
				return {
					type: S.AssignmentExpression,
					operator: e,
					left: i,
					right: t2
				};
			},
			createBinaryExpression: function(e, i, t2) {
				var u2 = (e === '||' || e === '&&') ? S.LogicalExpression : S.BinaryExpression;
				return {
					type: u2,
					operator: e,
					left: i,
					right: t2
				};
			},
			createBlockStatement: function(e) {
				return {
					type: S.BlockStatement,
					body: e
				};
			},
			createBreakStatement: function(e) {
				return {
					type: S.BreakStatement,
					label: e
				};
			},
			createCallExpression: function(e, i) {
				return {
					type: S.CallExpression,
					callee: e,
					'arguments': i
				};
			},
			createCatchClause: function(e, i) {
				return {
					type: S.CatchClause,
					param: e,
					body: i
				};
			},
			createConditionalExpression: function(e, i, t2) {
				return {
					type: S.ConditionalExpression,
					test: e,
					consequent: i,
					alternate: t2
				};
			},
			createContinueStatement: function(e) {
				return {
					type: S.ContinueStatement,
					label: e
				};
			},
			createDebuggerStatement: function() {
				return {
					type: S.DebuggerStatement
				};
			},
			createDoWhileStatement: function(e, i) {
				return {
					type: S.DoWhileStatement,
					body: e,
					test: i
				};
			},
			createEmptyStatement: function() {
				return {
					type: S.EmptyStatement
				};
			},
			createExpressionStatement: function(e) {
				return {
					type: S.ExpressionStatement,
					expression: e
				};
			},
			createForStatement: function(i, e, t2, u2) {
				return {
					type: S.ForStatement,
					init: i,
					test: e,
					update: t2,
					body: u2
				};
			},
			createForInStatement: function(e, i, t2) {
				return {
					type: S.ForInStatement,
					left: e,
					right: i,
					body: t2,
					each: false
				};
			},
			createFunctionDeclaration: function(i, e, t2, u2) {
				return {
					type: S.FunctionDeclaration,
					id: i,
					params: e,
					defaults: t2,
					body: u2,
					rest: null,
					generator: false,
					expression: false
				};
			},
			createFunctionExpression: function(i, e, t2, u2) {
				return {
					type: S.FunctionExpression,
					id: i,
					params: e,
					defaults: t2,
					body: u2,
					rest: null,
					generator: false,
					expression: false
				};
			},
			createIdentifier: function(e) {
				return {
					type: S.Identifier,
					name: e
				};
			},
			createIfStatement: function(e, i, t2) {
				return {
					type: S.IfStatement,
					test: e,
					consequent: i,
					alternate: t2
				};
			},
			createLabeledStatement: function(e, i) {
				return {
					type: S.LabeledStatement,
					label: e,
					body: i
				};
			},
			createLiteral: function(e) {
				return {
					type: S.Literal,
					value: e.value,
					raw: s.slice(e.start, e.end)
				};
			},
			createMemberExpression: function(e, i, t2) {
				return {
					type: S.MemberExpression,
					computed: e === '[',
					object: i,
					property: t2
				};
			},
			createNewExpression: function(e, i) {
				return {
					type: S.NewExpression,
					callee: e,
					'arguments': i
				};
			},
			createObjectExpression: function(e) {
				return {
					type: S.ObjectExpression,
					properties: e
				};
			},
			createPostfixExpression: function(e, i) {
				return {
					type: S.UpdateExpression,
					operator: e,
					argument: i,
					prefix: false
				};
			},
			createProgram: function(e) {
				return {
					type: S.Program,
					body: e
				};
			},
			createProperty: function(e, i, t2) {
				return {
					type: S.Property,
					key: i,
					value: t2,
					kind: e
				};
			},
			createReturnStatement: function(e) {
				return {
					type: S.ReturnStatement,
					argument: e
				};
			},
			createSequenceExpression: function(e) {
				return {
					type: S.SequenceExpression,
					expressions: e
				};
			},
			createSwitchCase: function(e, i) {
				return {
					type: S.SwitchCase,
					test: e,
					consequent: i
				};
			},
			createSwitchStatement: function(e, i) {
				return {
					type: S.SwitchStatement,
					discriminant: e,
					cases: i
				};
			},
			createThisExpression: function() {
				return {
					type: S.ThisExpression
				};
			},
			createThrowStatement: function(e) {
				return {
					type: S.ThrowStatement,
					argument: e
				};
			},
			createTryStatement: function(e, i, t2, u2) {
				return {
					type: S.TryStatement,
					block: e,
					guardedHandlers: i,
					handlers: t2,
					finalizer: u2
				};
			},
			createUnaryExpression: function(e, i) {
				if (e === '++' || e === '--') {
					return {
						type: S.UpdateExpression,
						operator: e,
						argument: i,
						prefix: true
					};
				}
				return {
					type: S.UnaryExpression,
					operator: e,
					argument: i,
					prefix: true
				};
			},
			createVariableDeclaration: function(e, i) {
				return {
					type: S.VariableDeclaration,
					declarations: e,
					kind: i
				};
			},
			createVariableDeclarator: function(i, e) {
				return {
					type: S.VariableDeclarator,
					id: i,
					init: e
				};
			},
			createWhileStatement: function(e, i) {
				return {
					type: S.WhileStatement,
					test: e,
					body: i
				};
			},
			createWithStatement: function(e, i) {
				return {
					type: S.WithStatement,
					object: e,
					body: i
				};
			}
		};

		function g1() {
			var e, i, t2, u2;
			e = g;
			i = l;
			t2 = h;
			G();
			u2 = l !== i;
			g = e;
			l = i;
			h = t2;
			return u2;
		}

		function h1(e, i) {
			var t2, u2 = Array.prototype.slice.call(arguments, 2),
				v2 = i.replace(/%(\d)/g, function(w2, g) {
					p(g < u2.length, 'Message reference must be in range');
					return u2[g];
				});
			if (typeof e.lineNumber === 'number') {
				t2 = new Error('Line ' + e.lineNumber + ': ' + v2);
				t2.index = e.start;
				t2.lineNumber = e.lineNumber;
				t2.column = e.start - h + 1;
			} else {
				t2 = new Error('Line ' + l + ': ' + v2);
				t2.index = g;
				t2.lineNumber = l;
				t2.column = g - h + 1;
			}
			t2.description = v2;
			throw t2;
		}

		function i1() {
			try {
				h1.apply(null, arguments);
			} catch (e) {
				if (o.errors) {
					o.errors.push(e);
				} else {
					throw e;
				}
			}
		}

		function j1(e) {
			if (e.type === T.EOF) {
				h1(e, M.UnexpectedEOS);
			}
			if (e.type === T.NumericLiteral) {
				h1(e, M.UnexpectedNumber);
			}
			if (e.type === T.StringLiteral) {
				h1(e, M.UnexpectedString);
			}
			if (e.type === T.Identifier) {
				h1(e, M.UnexpectedIdentifier);
			}
			if (e.type === T.Keyword) {
				if (y(e.value)) {
					h1(e, M.UnexpectedReserved);
				} else if (f && z(e.value)) {
					i1(e, M.StrictReservedWord);
					return;
				}
				h1(e, M.UnexpectedToken, e.value);
			}
			h1(e, M.UnexpectedToken, e.value);
		}

		function k1(e) {
			var i = c1();
			if (i.type !== T.Punctuator || i.value !== e) {
				j1(i);
			}
		}

		function l1(e) {
			var i = c1();
			if (i.type !== T.Keyword || i.value !== e) {
				j1(i);
			}
		}

		function m1(e) {
			return m.type === T.Punctuator && m.value === e;
		}

		function n1(e) {
			return m.type === T.Keyword && m.value === e;
		}

		function o1() {
			var e;
			if (m.type !== T.Punctuator) {
				return false;
			}
			e = m.value;
			return e === '=' || e === '*=' || e === '/=' || e === '%=' || e === '+=' || e === '-=' || e === '<<=' || e === '>>=' || e === '>>>=' ||
				e === '&=' || e === '^=' || e === '|=';
		}

		function p1() {
			var e;
			if (s.charCodeAt(g) === 0x3B || m1(';')) {
				c1();
				return;
			}
			e = l;
			G();
			if (l !== e) {
				return;
			}
			if (m.type !== T.EOF && !m1('}')) {
				j1(m);
			}
		}

		function q1(e) {
			return e.type === S.Identifier || e.type === S.MemberExpression;
		}

		function r1() {
			var e = [],
				i;
			i = m;
			k1('[');
			while (!m1(']')) {
				if (m1(',')) {
					c1();
					e.push(null);
				} else {
					e.push(K1());
					if (!m1(']')) {
						k1(',');
					}
				}
			}
			c1();
			return k.markEnd(k.createArrayExpression(e), i);
		}

		function s1(e, i) {
			var t2, u2, v2;
			t2 = f;
			v2 = m;
			u2 = j2();
			if (i && f && A(e[0].name)) {
				i1(i, M.StrictParamName);
			}
			f = t2;
			return k.markEnd(k.createFunctionExpression(null, e, [], u2), v2);
		}

		function t1() {
			var e, i;
			i = m;
			e = c1();
			if (e.type === T.StringLiteral || e.type === T.NumericLiteral) {
				if (f && e.octal) {
					i1(e, M.StrictOctalLiteral);
				}
				return k.markEnd(k.createLiteral(e), i);
			}
			return k.markEnd(k.createIdentifier(e.value), i);
		}

		function u1() {
			var e, i, id, t2, u2, v2;
			e = m;
			v2 = m;
			if (e.type === T.Identifier) {
				id = t1();
				if (e.value === 'get' && !m1(':')) {
					i = t1();
					k1('(');
					k1(')');
					t2 = s1([]);
					return k.markEnd(k.createProperty('get', i, t2), v2);
				}
				if (e.value === 'set' && !m1(':')) {
					i = t1();
					k1('(');
					e = m;
					if (e.type !== T.Identifier) {
						k1(')');
						i1(e, M.UnexpectedToken, e.value);
						t2 = s1([]);
					} else {
						u2 = [O1()];
						k1(')');
						t2 = s1(u2, e);
					}
					return k.markEnd(k.createProperty('set', i, t2), v2);
				}
				k1(':');
				t2 = K1();
				return k.markEnd(k.createProperty('init', id, t2), v2);
			}
			if (e.type === T.EOF || e.type === T.Punctuator) {
				j1(e);
			} else {
				i = t1();
				k1(':');
				t2 = K1();
				return k.markEnd(k.createProperty('init', i, t2), v2);
			}
		}

		function v1() {
			var e = [],
				i, t2, u2, v2, w2 = {},
				x2 = String,
				y2;
			y2 = m;
			k1('{');
			while (!m1('}')) {
				i = u1();
				if (i.key.type === S.Identifier) {
					t2 = i.key.name;
				} else {
					t2 = x2(i.key.value);
				}
				v2 = (i.kind === 'init') ? P.Data : (i.kind === 'get') ? P.Get : P.Set;
				u2 = '$' + t2;
				if (Object.prototype.hasOwnProperty.call(w2, u2)) {
					if (w2[u2] === P.Data) {
						if (f && v2 === P.Data) {
							i1({}, M.StrictDuplicateProperty);
						} else if (v2 !== P.Data) {
							i1({}, M.AccessorDataProperty);
						}
					} else {
						if (v2 === P.Data) {
							i1({}, M.AccessorDataProperty);
						} else if (w2[u2] & v2) {
							i1({}, M.AccessorGetSet);
						}
					}
					w2[u2] |= v2;
				} else {
					w2[u2] = v2;
				}
				e.push(i);
				if (!m1('}')) {
					k1(',');
				}
			}
			k1('}');
			return k.markEnd(k.createObjectExpression(e), y2);
		}

		function w1() {
			var e;
			k1('(');
			e = L1();
			k1(')');
			return e;
		}

		function x1() {
			var e, i, t2, u2;
			if (m1('(')) {
				return w1();
			}
			if (m1('[')) {
				return r1();
			}
			if (m1('{')) {
				return v1();
			}
			e = m.type;
			u2 = m;
			if (e === T.Identifier) {
				t2 = k.createIdentifier(c1().value);
			} else if (e === T.StringLiteral || e === T.NumericLiteral) {
				if (f && m.octal) {
					i1(m, M.StrictOctalLiteral);
				}
				t2 = k.createLiteral(c1());
			} else if (e === T.Keyword) {
				if (n1('function')) {
					return m2();
				}
				if (n1('this')) {
					c1();
					t2 = k.createThisExpression();
				} else {
					j1(c1());
				}
			} else if (e === T.BooleanLiteral) {
				i = c1();
				i.value = (i.value === 'true');
				t2 = k.createLiteral(i);
			} else if (e === T.NullLiteral) {
				i = c1();
				i.value = null;
				t2 = k.createLiteral(i);
			} else if (m1('/') || m1('/=')) {
				if (typeof o.tokens !== 'undefined') {
					t2 = k.createLiteral(Z());
				} else {
					t2 = k.createLiteral(Y());
				}
				d1();
			} else {
				j1(c1());
			}
			return k.markEnd(t2, u2);
		}

		function y1() {
			var e = [];
			k1('(');
			if (!m1(')')) {
				while (g < j) {
					e.push(K1());
					if (m1(')')) {
						break;
					}
					k1(',');
				}
			}
			k1(')');
			return e;
		}

		function z1() {
			var e, i;
			i = m;
			e = c1();
			if (!$(e)) {
				j1(e);
			}
			return k.markEnd(k.createIdentifier(e.value), i);
		}

		function A1() {
			k1('.');
			return z1();
		}

		function B1() {
			var e;
			k1('[');
			e = L1();
			k1(']');
			return e;
		}

		function C1() {
			var e, i, t2;
			t2 = m;
			l1('new');
			e = E1();
			i = m1('(') ? y1() : [];
			return k.markEnd(k.createNewExpression(e, i), t2);
		}

		function D1() {
			var e, i, t2, u2, v2;
			v2 = m;
			e = n.allowIn;
			n.allowIn = true;
			i = n1('new') ? C1() : x1();
			n.allowIn = e;
			for (;;) {
				if (m1('.')) {
					u2 = A1();
					i = k.createMemberExpression('.', i, u2);
				} else if (m1('(')) {
					t2 = y1();
					i = k.createCallExpression(i, t2);
				} else if (m1('[')) {
					u2 = B1();
					i = k.createMemberExpression('[', i, u2);
				} else {
					break;
				}
				k.markEnd(i, v2);
			}
			return i;
		}

		function E1() {
			var e, i, t2, u2;
			u2 = m;
			e = n.allowIn;
			i = n1('new') ? C1() : x1();
			n.allowIn = e;
			while (m1('.') || m1('[')) {
				if (m1('[')) {
					t2 = B1();
					i = k.createMemberExpression('[', i, t2);
				} else {
					t2 = A1();
					i = k.createMemberExpression('.', i, t2);
				}
				k.markEnd(i, u2);
			}
			return i;
		}

		function F1() {
			var e, i, t2 = m;
			e = D1();
			if (m.type === T.Punctuator) {
				if ((m1('++') || m1('--')) && !g1()) {
					if (f && e.type === S.Identifier && A(e.name)) {
						i1({}, M.StrictLHSPostfix);
					}
					if (!q1(e)) {
						i1({}, M.InvalidLHSInAssignment);
					}
					i = c1();
					e = k.markEnd(k.createPostfixExpression(i.value, e), t2);
				}
			}
			return e;
		}

		function G1() {
			var e, i, t2;
			if (m.type !== T.Punctuator && m.type !== T.Keyword) {
				i = F1();
			} else if (m1('++') || m1('--')) {
				t2 = m;
				e = c1();
				i = G1();
				if (f && i.type === S.Identifier && A(i.name)) {
					i1({}, M.StrictLHSPrefix);
				}
				if (!q1(i)) {
					i1({}, M.InvalidLHSInAssignment);
				}
				i = k.createUnaryExpression(e.value, i);
				i = k.markEnd(i, t2);
			} else if (m1('+') || m1('-') || m1('~') || m1('!')) {
				t2 = m;
				e = c1();
				i = G1();
				i = k.createUnaryExpression(e.value, i);
				i = k.markEnd(i, t2);
			} else if (n1('delete') || n1('void') || n1('typeof')) {
				t2 = m;
				e = c1();
				i = G1();
				i = k.createUnaryExpression(e.value, i);
				i = k.markEnd(i, t2);
				if (f && i.operator === 'delete' && i.argument.type === S.Identifier) {
					i1({}, M.StrictDelete);
				}
			} else {
				i = F1();
			}
			return i;
		}

		function H1(e, i) {
			var t2 = 0;
			if (e.type !== T.Punctuator && e.type !== T.Keyword) {
				return 0;
			}
			switch (e.value) {
				case '||':
					t2 = 1;
					break;
				case '&&':
					t2 = 2;
					break;
				case '|':
					t2 = 3;
					break;
				case '^':
					t2 = 4;
					break;
				case '&':
					t2 = 5;
					break;
				case '==':
				case '!=':
				case '===':
				case '!==':
					t2 = 6;
					break;
				case '<':
				case '>':
				case '<=':
				case '>=':
				case 'instanceof':
					t2 = 7;
					break;
				case 'in':
					t2 = i ? 7 : 0;
					break;
				case '<<':
				case '>>':
				case '>>>':
					t2 = 8;
					break;
				case '+':
				case '-':
					t2 = 9;
					break;
				case '*':
				case '/':
				case '%':
					t2 = 11;
					break;
				default:
					break;
			}
			return t2;
		}

		function I1() {
			var e, t2, u2, v2, w2, x2, y2, z2, A2, i;
			e = m;
			A2 = G1();
			v2 = m;
			w2 = H1(v2, n.allowIn);
			if (w2 === 0) {
				return A2;
			}
			v2.prec = w2;
			c1();
			t2 = [e, m];
			y2 = G1();
			x2 = [A2, v2, y2];
			while ((w2 = H1(m, n.allowIn)) > 0) {
				while ((x2.length > 2) && (w2 <= x2[x2.length - 2].prec)) {
					y2 = x2.pop();
					z2 = x2.pop().value;
					A2 = x2.pop();
					u2 = k.createBinaryExpression(z2, A2, y2);
					t2.pop();
					e = t2[t2.length - 1];
					k.markEnd(u2, e);
					x2.push(u2);
				}
				v2 = c1();
				v2.prec = w2;
				x2.push(v2);
				t2.push(m);
				u2 = G1();
				x2.push(u2);
			}
			i = x2.length - 1;
			u2 = x2[i];
			t2.pop();
			while (i > 1) {
				u2 = k.createBinaryExpression(x2[i - 1].value, x2[i - 2], u2);
				i -= 2;
				e = t2.pop();
				k.markEnd(u2, e);
			}
			return u2;
		}

		function J1() {
			var e, i, t2, u2, v2;
			v2 = m;
			e = I1();
			if (m1('?')) {
				c1();
				i = n.allowIn;
				n.allowIn = true;
				t2 = K1();
				n.allowIn = i;
				k1(':');
				u2 = K1();
				e = k.createConditionalExpression(e, t2, u2);
				k.markEnd(e, v2);
			}
			return e;
		}

		function K1() {
			var e, i, t2, u2, v2;
			e = m;
			v2 = m;
			u2 = i = J1();
			if (o1()) {
				if (!q1(i)) {
					i1({}, M.InvalidLHSInAssignment);
				}
				if (f && i.type === S.Identifier && A(i.name)) {
					i1(e, M.StrictLHSAssignment);
				}
				e = c1();
				t2 = K1();
				u2 = k.markEnd(k.createAssignmentExpression(e.value, i, t2), v2);
			}
			return u2;
		}

		function L1() {
			var e, i = m;
			e = K1();
			if (m1(',')) {
				e = k.createSequenceExpression([e]);
				while (g < j) {
					if (!m1(',')) {
						break;
					}
					c1();
					e.expressions.push(K1());
				}
				k.markEnd(e, i);
			}
			return e;
		}

		function M1() {
			var e = [],
				i;
			while (g < j) {
				if (m1('}')) {
					break;
				}
				i = n2();
				if (typeof i === 'undefined') {
					break;
				}
				e.push(i);
			}
			return e;
		}

		function N1() {
			var e, i;
			i = m;
			k1('{');
			e = M1();
			k1('}');
			return k.markEnd(k.createBlockStatement(e), i);
		}

		function O1() {
			var e, i;
			i = m;
			e = c1();
			if (e.type !== T.Identifier) {
				j1(e);
			}
			return k.markEnd(k.createIdentifier(e.value), i);
		}

		function P1(e) {
			var i = null,
				id, t2;
			t2 = m;
			id = O1();
			if (f && A(id.name)) {
				i1({}, M.StrictVarName);
			}
			if (e === 'const') {
				k1('=');
				i = K1();
			} else if (m1('=')) {
				c1();
				i = K1();
			}
			return k.markEnd(k.createVariableDeclarator(id, i), t2);
		}

		function Q1(e) {
			var i = [];
			do {
				i.push(P1(e));
				if (!m1(',')) {
					break;
				}
				c1();
			} while (g < j);
			return i;
		}

		function R1() {
			var e;
			l1('var');
			e = Q1();
			p1();
			return k.createVariableDeclaration(e, 'var');
		}

		function S1(e) {
			var i, t2;
			t2 = m;
			l1(e);
			i = Q1(e);
			p1();
			return k.markEnd(k.createVariableDeclaration(i, e), t2);
		}

		function T1() {
			k1(';');
			return k.createEmptyStatement();
		}

		function U1() {
			var e = L1();
			p1();
			return k.createExpressionStatement(e);
		}

		function V1() {
			var e, i, t2;
			l1('if');
			k1('(');
			e = L1();
			k1(')');
			i = i2();
			if (n1('else')) {
				c1();
				t2 = i2();
			} else {
				t2 = null;
			}
			return k.createIfStatement(e, i, t2);
		}

		function W1() {
			var e, i, t2;
			l1('do');
			t2 = n.inIteration;
			n.inIteration = true;
			e = i2();
			n.inIteration = t2;
			l1('while');
			k1('(');
			i = L1();
			k1(')');
			if (m1(';')) {
				c1();
			}
			return k.createDoWhileStatement(e, i);
		}

		function X1() {
			var e, i, t2;
			l1('while');
			k1('(');
			e = L1();
			k1(')');
			t2 = n.inIteration;
			n.inIteration = true;
			i = i2();
			n.inIteration = t2;
			return k.createWhileStatement(e, i);
		}

		function Y1() {
			var e, i, t2;
			t2 = m;
			e = c1();
			i = Q1();
			return k.markEnd(k.createVariableDeclaration(i, e.value), t2);
		}

		function Z1() {
			var i, e, t2, u2, v2, w2, x2;
			i = e = t2 = null;
			l1('for');
			k1('(');
			if (m1(';')) {
				c1();
			} else {
				if (n1('var') || n1('let')) {
					n.allowIn = false;
					i = Y1();
					n.allowIn = true;
					if (i.declarations.length === 1 && n1('in')) {
						c1();
						u2 = i;
						v2 = L1();
						i = null;
					}
				} else {
					n.allowIn = false;
					i = L1();
					n.allowIn = true;
					if (n1('in')) {
						if (!q1(i)) {
							i1({}, M.InvalidLHSInForIn);
						}
						c1();
						u2 = i;
						v2 = L1();
						i = null;
					}
				}
				if (typeof u2 === 'undefined') {
					k1(';');
				}
			}
			if (typeof u2 === 'undefined') {
				if (!m1(';')) {
					e = L1();
				}
				k1(';');
				if (!m1(')')) {
					t2 = L1();
				}
			}
			k1(')');
			x2 = n.inIteration;
			n.inIteration = true;
			w2 = i2();
			n.inIteration = x2;
			return (typeof u2 === 'undefined') ? k.createForStatement(i, e, t2, w2) : k.createForInStatement(u2, v2, w2);
		}

		function $1() {
			var e = null,
				i;
			l1('continue');
			if (s.charCodeAt(g) === 0x3B) {
				c1();
				if (!n.inIteration) {
					h1({}, M.IllegalContinue);
				}
				return k.createContinueStatement(null);
			}
			if (g1()) {
				if (!n.inIteration) {
					h1({}, M.IllegalContinue);
				}
				return k.createContinueStatement(null);
			}
			if (m.type === T.Identifier) {
				e = O1();
				i = '$' + e.name;
				if (!Object.prototype.hasOwnProperty.call(n.labelSet, i)) {
					h1({}, M.UnknownLabel, e.name);
				}
			}
			p1();
			if (e === null && !n.inIteration) {
				h1({}, M.IllegalContinue);
			}
			return k.createContinueStatement(e);
		}

		function _1() {
			var e = null,
				i;
			l1('break');
			if (s.charCodeAt(g) === 0x3B) {
				c1();
				if (!(n.inIteration || n.inSwitch)) {
					h1({}, M.IllegalBreak);
				}
				return k.createBreakStatement(null);
			}
			if (g1()) {
				if (!(n.inIteration || n.inSwitch)) {
					h1({}, M.IllegalBreak);
				}
				return k.createBreakStatement(null);
			}
			if (m.type === T.Identifier) {
				e = O1();
				i = '$' + e.name;
				if (!Object.prototype.hasOwnProperty.call(n.labelSet, i)) {
					h1({}, M.UnknownLabel, e.name);
				}
			}
			p1();
			if (e === null && !(n.inIteration || n.inSwitch)) {
				h1({}, M.IllegalBreak);
			}
			return k.createBreakStatement(e);
		}

		function a2() {
			var e = null;
			l1('return');
			if (!n.inFunctionBody) {
				i1({}, M.IllegalReturn);
			}
			if (s.charCodeAt(g) === 0x20) {
				if (w(s.charCodeAt(g + 1))) {
					e = L1();
					p1();
					return k.createReturnStatement(e);
				}
			}
			if (g1()) {
				return k.createReturnStatement(null);
			}
			if (!m1(';')) {
				if (!m1('}') && m.type !== T.EOF) {
					e = L1();
				}
			}
			p1();
			return k.createReturnStatement(e);
		}

		function b2() {
			var e, i;
			if (f) {
				G();
				i1({}, M.StrictModeWith);
			}
			l1('with');
			k1('(');
			e = L1();
			k1(')');
			i = i2();
			return k.createWithStatement(e, i);
		}

		function c2() {
			var e, i = [],
				t2, u2;
			u2 = m;
			if (n1('default')) {
				c1();
				e = null;
			} else {
				l1('case');
				e = L1();
			}
			k1(':');
			while (g < j) {
				if (m1('}') || n1('default') || n1('case')) {
					break;
				}
				t2 = i2();
				i.push(t2);
			}
			return k.markEnd(k.createSwitchCase(e, i), u2);
		}

		function d2() {
			var e, i, t2, u2, v2;
			l1('switch');
			k1('(');
			e = L1();
			k1(')');
			k1('{');
			i = [];
			if (m1('}')) {
				c1();
				return k.createSwitchStatement(e, i);
			}
			u2 = n.inSwitch;
			n.inSwitch = true;
			v2 = false;
			while (g < j) {
				if (m1('}')) {
					break;
				}
				t2 = c2();
				if (t2.test === null) {
					if (v2) {
						h1({}, M.MultipleDefaultsInSwitch);
					}
					v2 = true;
				}
				i.push(t2);
			}
			n.inSwitch = u2;
			k1('}');
			return k.createSwitchStatement(e, i);
		}

		function e2() {
			var e;
			l1('throw');
			if (g1()) {
				h1({}, M.NewlineAfterThrow);
			}
			e = L1();
			p1();
			return k.createThrowStatement(e);
		}

		function f2() {
			var e, i, t2;
			t2 = m;
			l1('catch');
			k1('(');
			if (m1(')')) {
				j1(m);
			}
			e = O1();
			if (f && A(e.name)) {
				i1({}, M.StrictCatchVariable);
			}
			k1(')');
			i = N1();
			return k.markEnd(k.createCatchClause(e, i), t2);
		}

		function g2() {
			var e, i = [],
				t2 = null;
			l1('try');
			e = N1();
			if (n1('catch')) {
				i.push(f2());
			}
			if (n1('finally')) {
				c1();
				t2 = N1();
			}
			if (i.length === 0 && !t2) {
				h1({}, M.NoCatchOrFinally);
			}
			return k.createTryStatement(e, [], i, t2);
		}

		function h2() {
			l1('debugger');
			p1();
			return k.createDebuggerStatement();
		}

		function i2() {
			var e = m.type,
				i, t2, u2, v2;
			if (e === T.EOF) {
				j1(m);
			}
			if (e === T.Punctuator && m.value === '{') {
				return N1();
			}
			v2 = m;
			if (e === T.Punctuator) {
				switch (m.value) {
					case ';':
						return k.markEnd(T1(), v2);
					case '(':
						return k.markEnd(U1(), v2);
					default:
						break;
				}
			}
			if (e === T.Keyword) {
				switch (m.value) {
					case 'break':
						return k.markEnd(_1(), v2);
					case 'continue':
						return k.markEnd($1(), v2);
					case 'debugger':
						return k.markEnd(h2(), v2);
					case 'do':
						return k.markEnd(W1(), v2);
					case 'for':
						return k.markEnd(Z1(), v2);
					case 'function':
						return k.markEnd(l2(), v2);
					case 'if':
						return k.markEnd(V1(), v2);
					case 'return':
						return k.markEnd(a2(), v2);
					case 'switch':
						return k.markEnd(d2(), v2);
					case 'throw':
						return k.markEnd(e2(), v2);
					case 'try':
						return k.markEnd(g2(), v2);
					case 'var':
						return k.markEnd(R1(), v2);
					case 'while':
						return k.markEnd(X1(), v2);
					case 'with':
						return k.markEnd(b2(), v2);
					default:
						break;
				}
			}
			i = L1();
			if ((i.type === S.Identifier) && m1(':')) {
				c1();
				u2 = '$' + i.name;
				if (Object.prototype.hasOwnProperty.call(n.labelSet, u2)) {
					h1({}, M.Redeclaration, 'Label', i.name);
				}
				n.labelSet[u2] = true;
				t2 = i2();
				delete n.labelSet[u2];
				return k.markEnd(k.createLabeledStatement(i, t2), v2);
			}
			p1();
			return k.markEnd(k.createExpressionStatement(i), v2);
		}

		function j2() {
			var e, i = [],
				t2, u2, v2, w2, x2, y2, z2, A2;
			A2 = m;
			k1('{');
			while (g < j) {
				if (m.type !== T.StringLiteral) {
					break;
				}
				t2 = m;
				e = n2();
				i.push(e);
				if (e.expression.type !== S.Literal) {
					break;
				}
				u2 = s.slice(t2.start + 1, t2.end - 1);
				if (u2 === 'use strict') {
					f = true;
					if (v2) {
						i1(v2, M.StrictOctalLiteral);
					}
				} else {
					if (!v2 && t2.octal) {
						v2 = t2;
					}
				}
			}
			w2 = n.labelSet;
			x2 = n.inIteration;
			y2 = n.inSwitch;
			z2 = n.inFunctionBody;
			n.labelSet = {};
			n.inIteration = false;
			n.inSwitch = false;
			n.inFunctionBody = true;
			while (g < j) {
				if (m1('}')) {
					break;
				}
				e = n2();
				if (typeof e === 'undefined') {
					break;
				}
				i.push(e);
			}
			k1('}');
			n.labelSet = w2;
			n.inIteration = x2;
			n.inSwitch = y2;
			n.inFunctionBody = z2;
			return k.markEnd(k.createBlockStatement(i), A2);
		}

		function k2(e) {
			var i, t2 = [],
				u2, v2, w2, x2, y2;
			k1('(');
			if (!m1(')')) {
				w2 = {};
				while (g < j) {
					u2 = m;
					i = O1();
					x2 = '$' + u2.value;
					if (f) {
						if (A(u2.value)) {
							v2 = u2;
							y2 = M.StrictParamName;
						}
						if (Object.prototype.hasOwnProperty.call(w2, x2)) {
							v2 = u2;
							y2 = M.StrictParamDupe;
						}
					} else if (!e) {
						if (A(u2.value)) {
							e = u2;
							y2 = M.StrictParamName;
						} else if (z(u2.value)) {
							e = u2;
							y2 = M.StrictReservedWord;
						} else if (Object.prototype.hasOwnProperty.call(w2, x2)) {
							e = u2;
							y2 = M.StrictParamDupe;
						}
					}
					t2.push(i);
					w2[x2] = true;
					if (m1(')')) {
						break;
					}
					k1(',');
				}
			}
			k1(')');
			return {
				params: t2,
				stricted: v2,
				firstRestricted: e,
				message: y2
			};
		}

		function l2() {
			var i, e = [],
				t2, u2, v2, w2, x2, y2, z2, A2;
			A2 = m;
			l1('function');
			u2 = m;
			i = O1();
			if (f) {
				if (A(u2.value)) {
					i1(u2, M.StrictFunctionName);
				}
			} else {
				if (A(u2.value)) {
					x2 = u2;
					y2 = M.StrictFunctionName;
				} else if (z(u2.value)) {
					x2 = u2;
					y2 = M.StrictReservedWord;
				}
			}
			w2 = k2(x2);
			e = w2.params;
			v2 = w2.stricted;
			x2 = w2.firstRestricted;
			if (w2.message) {
				y2 = w2.message;
			}
			z2 = f;
			t2 = j2();
			if (f && x2) {
				h1(x2, y2);
			}
			if (f && v2) {
				i1(v2, y2);
			}
			f = z2;
			return k.markEnd(k.createFunctionDeclaration(i, e, [], t2), A2);
		}

		function m2() {
			var e, i = null,
				t2, u2, v2, w2, x2 = [],
				y2, z2, A2;
			A2 = m;
			l1('function');
			if (!m1('(')) {
				e = m;
				i = O1();
				if (f) {
					if (A(e.value)) {
						i1(e, M.StrictFunctionName);
					}
				} else {
					if (A(e.value)) {
						u2 = e;
						v2 = M.StrictFunctionName;
					} else if (z(e.value)) {
						u2 = e;
						v2 = M.StrictReservedWord;
					}
				}
			}
			w2 = k2(u2);
			x2 = w2.params;
			t2 = w2.stricted;
			u2 = w2.firstRestricted;
			if (w2.message) {
				v2 = w2.message;
			}
			z2 = f;
			y2 = j2();
			if (f && u2) {
				h1(u2, v2);
			}
			if (f && t2) {
				i1(t2, v2);
			}
			f = z2;
			return k.markEnd(k.createFunctionExpression(i, x2, [], y2), A2);
		}

		function n2() {
			if (m.type === T.Keyword) {
				switch (m.value) {
					case 'const':
					case 'let':
						return S1(m.value);
					case 'function':
						return l2();
					default:
						return i2();
				}
			}
			if (m.type !== T.EOF) {
				return i2();
			}
		}

		function o2() {
			var e, i = [],
				t2, u2, v2;
			while (g < j) {
				t2 = m;
				if (t2.type !== T.StringLiteral) {
					break;
				}
				e = n2();
				i.push(e);
				if (e.expression.type !== S.Literal) {
					break;
				}
				u2 = s.slice(t2.start + 1, t2.end - 1);
				if (u2 === 'use strict') {
					f = true;
					if (v2) {
						i1(v2, M.StrictOctalLiteral);
					}
				} else {
					if (!v2 && t2.octal) {
						v2 = t2;
					}
				}
			}
			while (g < j) {
				e = n2();
				if (typeof e === 'undefined') {
					break;
				}
				i.push(e);
			}
			return i;
		}

		function p2() {
			var e, i;
			G();
			d1();
			i = m;
			f = false;
			e = o2();
			return k.markEnd(k.createProgram(e), i);
		}

		function q2() {
			var i, e, t2, u2 = [];
			for (i = 0; i < o.tokens.length; ++i) {
				e = o.tokens[i];
				t2 = {
					type: e.type,
					value: e.value
				};
				if (o.range) {
					t2.range = e.range;
				}
				if (o.loc) {
					t2.loc = e.loc;
				}
				u2.push(t2);
			}
			o.tokens = u2;
		}

		function r2(i, t2) {
			var u2, v2, w2;
			u2 = String;
			if (typeof i !== 'string' && !(i instanceof String)) {
				i = u2(i);
			}
			k = c;
			s = i;
			g = 0;
			l = (s.length > 0) ? 1 : 0;
			h = 0;
			j = s.length;
			m = null;
			n = {
				allowIn: true,
				labelSet: {},
				inFunctionBody: false,
				inIteration: false,
				inSwitch: false,
				lastCommentStart: -1
			};
			o = {};
			t2 = t2 || {};
			t2.tokens = true;
			o.tokens = [];
			o.tokenize = true;
			o.openParenToken = -1;
			o.openCurlyToken = -1;
			o.range = (typeof t2.range === 'boolean') && t2.range;
			o.loc = (typeof t2.loc === 'boolean') && t2.loc;
			if (typeof t2.comment === 'boolean' && t2.comment) {
				o.comments = [];
			}
			if (typeof t2.tolerant === 'boolean' && t2.tolerant) {
				o.errors = [];
			}
			try {
				d1();
				if (m.type === T.EOF) {
					return o.tokens;
				}
				v2 = c1();
				while (m.type !== T.EOF) {
					try {
						v2 = c1();
					} catch (x2) {
						v2 = m;
						if (o.errors) {
							o.errors.push(x2);
							break;
						} else {
							throw x2;
						}
					}
				}
				q2();
				w2 = o.tokens;
				if (typeof o.comments !== 'undefined') {
					w2.comments = o.comments;
				}
				if (typeof o.errors !== 'undefined') {
					w2.errors = o.errors;
				}
			} catch (e) {
				throw e;
			} finally {
				o = {};
			}
			return w2;
		}

		function s2(i, t2) {
			var u2, v2;
			v2 = String;
			if (typeof i !== 'string' && !(i instanceof String)) {
				i = v2(i);
			}
			k = c;
			s = i;
			g = 0;
			l = (s.length > 0) ? 1 : 0;
			h = 0;
			j = s.length;
			m = null;
			n = {
				allowIn: true,
				labelSet: {},
				inFunctionBody: false,
				inIteration: false,
				inSwitch: false,
				lastCommentStart: -1
			};
			o = {};
			if (typeof t2 !== 'undefined') {
				o.range = (typeof t2.range === 'boolean') && t2.range;
				o.loc = (typeof t2.loc === 'boolean') && t2.loc;
				o.attachComment = (typeof t2.attachComment === 'boolean') && t2.attachComment;
				if (o.loc && t2.source !== null && t2.source !== undefined) {
					o.source = v2(t2.source);
				}
				if (typeof t2.tokens === 'boolean' && t2.tokens) {
					o.tokens = [];
				}
				if (typeof t2.comment === 'boolean' && t2.comment) {
					o.comments = [];
				}
				if (typeof t2.tolerant === 'boolean' && t2.tolerant) {
					o.errors = [];
				}
				if (o.attachComment) {
					o.range = true;
					o.comments = [];
					o.bottomRightStack = [];
					o.trailingComments = [];
					o.leadingComments = [];
				}
			}
			try {
				u2 = p2();
				if (typeof o.comments !== 'undefined') {
					u2.comments = o.comments;
				}
				if (typeof o.tokens !== 'undefined') {
					q2();
					u2.tokens = o.tokens;
				}
				if (typeof o.errors !== 'undefined') {
					u2.errors = o.errors;
				}
			} catch (e) {
				throw e;
			} finally {
				o = {};
			}
			return u2;
		}
		a.version = '1.2.2';
		a.tokenize = r2;
		a.parse = s2;
		a.Syntax = (function() {
			var e, i = {};
			if (typeof Object.create === 'function') {
				i = Object.create(null);
			}
			for (e in S) {
				if (S.hasOwnProperty(e)) {
					i[e] = S[e];
				}
			}
			if (typeof Object.freeze === 'function') {
				Object.freeze(i);
			}
			return i;
		}());
	}));
})(null);
/*!
 * falafel (c) James Halliday / MIT License
 * https://github.com/substack/node-falafel
 */
(function(r, m) {
	var p = r('esprima').parse;
	var o = Object.keys || function(c) {
		var k = [];
		for (var d in c) k.push(d);
		return k;
	};
	var f = function(x, c) {
		if (x.forEach) return x.forEach(c);
		for (var i = 0; i < x.length; i++) {
			c.call(x, x[i], i, x);
		}
	};
	var a = Array.isArray || function(x) {
		return Object.prototype.toString.call(x) === '[object Array]';
	};
	m.exports = function(s, d, e) {
		if (typeof d === 'function') {
			e = d;
			d = {};
		}
		if (typeof s === 'object') {
			d = s;
			s = d.source;
			delete d.source;
		}
		s = s === undefined ? d.source : s;
		d.range = true;
		if (typeof s !== 'string') s = String(s);
		var g = p(s, d);
		var h = {
			chunks: s.split(''),
			toString: function() {
				return h.chunks.join('')
			},
			inspect: function() {
				return h.toString()
			}
		};
		var i = 0;
		(function w(n, j) {
			b(n, j, h.chunks);
			f(o(n), function(k) {
				if (k === 'parent') return;
				var l = n[k];
				if (a(l)) {
					f(l, function(c) {
						if (c && typeof c.type === 'string') {
							w(c, n);
						}
					});
				} else if (l && typeof l.type === 'string') {
					b(l, n, h.chunks);
					w(l, n);
				}
			});
			e(n);
		})(g, undefined);
		return h;
	};

	function b(n, c, d) {
		if (!n.range) return;
		n.parent = c;
		n.source = function() {
			return d.slice(n.range[0], n.range[1]).join('');
		};
		if (n.update && typeof n.update === 'object') {
			var e = n.update;
			f(o(e), function(k) {
				u[k] = e[k];
			});
			n.update = u;
		} else {
			n.update = u;
		}

		function u(s) {
			d[n.range[0]] = s;
			for (var i = n.range[0] + 1; i < n.range[1]; i++) {
				d[i] = '';
			}
		};
	}
	window.falafel = m.exports;
})(function() {
	return {
		parse: esprima.parse
	};
}, {
	exports: {}
});
var inBrowser = typeof window !== 'undefined' && this === window;
var parseAndModify = (inBrowser ? window.falafel : require("falafel"));
(inBrowser ? window : exports).blanket = (function() {
	var l = ["ExpressionStatement", "BreakStatement", "ContinueStatement", "VariableDeclaration", "ReturnStatement", "ThrowStatement",
			"TryStatement", "FunctionDeclaration", "IfStatement", "WhileStatement", "DoWhileStatement", "ForStatement", "ForInStatement",
			"SwitchStatement", "WithStatement"
		],
		c = ["IfStatement", "WhileStatement", "DoWhileStatement", "ForStatement", "ForInStatement", "WithStatement"],
		_, d = Math.floor(Math.random() * 1000),
		e = {},
		o = {
			reporter: null,
			adapter: null,
			filter: null,
			customVariable: null,
			loader: null,
			ignoreScriptError: false,
			existingRequireJS: false,
			autoStart: false,
			timeout: 180,
			ignoreCors: false,
			branchTracking: false,
			sourceURL: false,
			debug: false,
			engineOnly: false,
			testReadyCallback: null,
			commonJS: false,
			instrumentCache: false,
			modulePattern: null
		};
	if (inBrowser && typeof window.blanket !== 'undefined') {
		_ = window.blanket.noConflict();
	}
	_blanket = {
		noConflict: function() {
			if (_) {
				return _;
			}
			return _blanket;
		},
		_getCopyNumber: function() {
			return d;
		},
		extend: function(a) {
			_blanket._extend(_blanket, a);
		},
		_extend: function(a, s) {
			if (s) {
				for (var p in s) {
					if (a[p] instanceof Object && typeof a[p] !== "function") {
						_blanket._extend(a[p], s[p]);
					} else {
						a[p] = s[p];
					}
				}
			}
		},
		getCovVar: function() {
			var a = _blanket.options("customVariable");
			if (a) {
				if (_blanket.options("debug")) {
					console.log("BLANKET-Using custom tracking variable:", a);
				}
				return inBrowser ? "window." + a : a;
			}
			return inBrowser ? "window._$blanket" : "_$jscoverage";
		},
		options: function(k, v) {
			if (typeof k !== "string") {
				_blanket._extend(o, k);
			} else if (typeof v === 'undefined') {
				return o[k];
			} else {
				o[k] = v;
			}
		},
		instrument: function(a, n) {
			var i = a.inputFile,
				b = a.inputFileName;
			if (_blanket.options("instrumentCache") && sessionStorage && sessionStorage.getItem("blanket_instrument_store-" + b)) {
				if (_blanket.options("debug")) {
					console.log("BLANKET-Reading instrumentation from cache: ", b);
				}
				n(sessionStorage.getItem("blanket_instrument_store-" + b));
			} else {
				var s = _blanket._prepareSource(i);
				_blanket._trackingArraySetup = [];
				i = i.replace(/^\#\!.*/, "");
				var f = parseAndModify(i, {
					loc: true,
					comment: true
				}, _blanket._addTracking(b));
				f = _blanket._trackingSetup(b, s) + f;
				if (_blanket.options("sourceURL")) {
					f += "\n//@ sourceURL=" + b.replace("http://", "");
				}
				if (_blanket.options("debug")) {
					console.log("BLANKET-Instrumented file: ", b);
				}
				if (_blanket.options("instrumentCache") && sessionStorage) {
					if (_blanket.options("debug")) {
						console.log("BLANKET-Saving instrumentation to cache: ", b);
					}
					sessionStorage.setItem("blanket_instrument_store-" + b, f);
				}
				n(f);
			}
		},
		_trackingArraySetup: [],
		_branchingArraySetup: [],
		_prepareSource: function(s) {
			return s.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/(\r\n|\n|\r)/gm, "\n").split('\n');
		},
		_trackingSetup: function(f, s) {
			var g = _blanket.options("branchTracking");
			var h = s.join("',\n'");
			var i = "";
			var j = _blanket.getCovVar();
			i += "if (typeof " + j + " === 'undefined') " + j + " = {};\n";
			if (g) {
				i += "var _$branchFcn=function(f,l,c,r){ ";
				i += "if (!!r) { ";
				i += j + "[f].branchData[l][c][0] = " + j + "[f].branchData[l][c][0] || [];";
				i += j + "[f].branchData[l][c][0].push(r); }";
				i += "else { ";
				i += j + "[f].branchData[l][c][1] = " + j + "[f].branchData[l][c][1] || [];";
				i += j + "[f].branchData[l][c][1].push(r); }";
				i += "return r;};\n";
			}
			i += "if (typeof " + j + "['" + f + "'] === 'undefined'){";
			i += j + "['" + f + "']=[];\n";
			if (g) {
				i += j + "['" + f + "'].branchData=[];\n";
			}
			i += j + "['" + f + "'].source=['" + h + "'];\n";
			_blanket._trackingArraySetup.sort(function(a, b) {
				return parseInt(a, 10) > parseInt(b, 10);
			}).forEach(function(a) {
				i += j + "['" + f + "'][" + a + "]=0;\n";
			});
			if (g) {
				_blanket._branchingArraySetup.sort(function(a, b) {
					return a.line > b.line;
				}).sort(function(a, b) {
					return a.column > b.column;
				}).forEach(function(a) {
					if (a.file === f) {
						i += "if (typeof " + j + "['" + f + "'].branchData[" + a.line + "] === 'undefined'){\n";
						i += j + "['" + f + "'].branchData[" + a.line + "]=[];\n";
						i += "}";
						i += j + "['" + f + "'].branchData[" + a.line + "][" + a.column + "] = [];\n";
						i += j + "['" + f + "'].branchData[" + a.line + "][" + a.column + "].consequent = " + JSON.stringify(a.consequent) + ";\n";
						i += j + "['" + f + "'].branchData[" + a.line + "][" + a.column + "].alternate = " + JSON.stringify(a.alternate) + ";\n";
					}
				});
			}
			i += "}";
			return i;
		},
		_blockifyIf: function(n) {
			if (c.indexOf(n.type) > -1) {
				var b = n.consequent || n.body;
				var a = n.alternate;
				if (a && a.type !== "BlockStatement") {
					a.update("{\n" + a.source() + "}\n");
				}
				if (b && b.type !== "BlockStatement") {
					b.update("{\n" + b.source() + "}\n");
				}
			}
		},
		_trackBranch: function(n, f) {
			var a = n.loc.start.line;
			var b = n.loc.start.column;
			_blanket._branchingArraySetup.push({
				line: a,
				column: b,
				file: f,
				consequent: n.consequent.loc,
				alternate: n.alternate.loc
			});
			var u = "_$branchFcn" + "('" + f + "'," + a + "," + b + "," + n.test.source() + ")?" + n.consequent.source() + ":" + n.alternate.source();
			n.update(u);
		},
		_addTracking: function(f) {
			var a = _blanket.getCovVar();
			return function(n) {
				_blanket._blockifyIf(n);
				if (l.indexOf(n.type) > -1 && n.parent.type !== "LabeledStatement") {
					_blanket._checkDefs(n, f);
					if (n.type === "VariableDeclaration" && (n.parent.type === "ForStatement" || n.parent.type === "ForInStatement")) {
						return;
					}
					if (n.type === "ExpressionStatement" && n.expression.type === "Literal" && n.expression.value === "use strict") {
						return;
					}
					if (n.loc && n.loc.start) {
						n.update(a + "['" + f + "'][" + n.loc.start.line + "]++;\n" + n.source());
						_blanket._trackingArraySetup.push(n.loc.start.line);
					} else {
						throw new Error("The instrumenter encountered a node with no location: " + Object.keys(n));
					}
				} else if (_blanket.options("branchTracking") && n.type === "ConditionalExpression") {
					_blanket._trackBranch(n, f);
				}
			};
		},
		_checkDefs: function(n, f) {
			if (inBrowser) {
				if (n.type === "VariableDeclaration" && n.declarations) {
					n.declarations.forEach(function(a) {
						if (a.id.name === "window") {
							throw new Error("Instrumentation error, you cannot redefine the 'window' variable in  " + f + ":" + n.loc.start.line);
						}
					});
				}
				if (n.type === "FunctionDeclaration" && n.params) {
					n.params.forEach(function(p) {
						if (p.name === "window") {
							throw new Error("Instrumentation error, you cannot redefine the 'window' variable in  " + f + ":" + n.loc.start.line);
						}
					});
				}
				if (n.type === "ExpressionStatement" && n.expression && n.expression.left && n.expression.left.object && n.expression.left.property &&
					n.expression.left.object.name + "." + n.expression.left.property.name === _blanket.getCovVar()) {
					throw new Error("Instrumentation error, you cannot redefine the coverage variable in  " + f + ":" + n.loc.start.line);
				}
			} else {
				if (n.type === "ExpressionStatement" && n.expression && n.expression.left && !n.expression.left.object && !n.expression.left.property &&
					n.expression.left.name === _blanket.getCovVar()) {
					throw new Error("Instrumentation error, you cannot redefine the coverage variable in  " + f + ":" + n.loc.start.line);
				}
			}
		},
		setupCoverage: function() {
			e.instrumentation = "blanket";
			e.stats = {
				"suites": 0,
				"tests": 0,
				"passes": 0,
				"pending": 0,
				"failures": 0,
				"start": new Date()
			};
		},
		_checkIfSetup: function() {
			if (!e.stats) {
				throw new Error("You must call blanket.setupCoverage() first.");
			}
		},
		onTestStart: function() {
			if (_blanket.options("debug")) {
				console.log("BLANKET-Test event started");
			}
			this._checkIfSetup();
			e.stats.tests++;
			e.stats.pending++;
		},
		onTestDone: function(t, p) {
			this._checkIfSetup();
			if (p === t) {
				e.stats.passes++;
			} else {
				e.stats.failures++;
			}
			e.stats.pending--;
		},
		onModuleStart: function() {
			this._checkIfSetup();
			e.stats.suites++;
		},
		onTestsDone: function() {
			if (_blanket.options("debug")) {
				console.log("BLANKET-Test event done");
			}
			this._checkIfSetup();
			e.stats.end = new Date();
			if (inBrowser) {
				this.report(e);
			} else {
				if (!_blanket.options("branchTracking")) {
					delete(inBrowser ? window : global)[_blanket.getCovVar()].branchFcn;
				}
				this.options("reporter").call(this, e);
			}
		}
	};
	return _blanket;
})();
(function(_) {
	var b = _.options;
	_.extend({
		outstandingRequireFiles: [],
		options: function(k, v) {
			var n = {};
			if (typeof k !== "string") {
				b(k);
				n = k;
			} else if (typeof v === 'undefined') {
				return b(k);
			} else {
				b(k, v);
				n[k] = v;
			}
			if (n.adapter) {
				_._loadFile(n.adapter);
			}
			if (n.loader) {
				_._loadFile(n.loader);
			}
		},
		requiringFile: function(f, d) {
			if (typeof f === "undefined") {
				_.outstandingRequireFiles = [];
			} else if (typeof d === "undefined") {
				_.outstandingRequireFiles.push(f);
			} else {
				_.outstandingRequireFiles.splice(_.outstandingRequireFiles.indexOf(f), 1);
			}
		},
		requireFilesLoaded: function() {
			return _.outstandingRequireFiles.length === 0;
		},
		showManualLoader: function() {
			if (document.getElementById("blanketLoaderDialog")) {
				return;
			}
			var l = "<div class='blanketDialogOverlay'>";
			l += "&nbsp;</div>";
			l += "<div class='blanketDialogVerticalOffset'>";
			l += "<div class='blanketDialogBox'>";
			l += "<b>Error:</b> Blanket.js encountered a cross origin request error while instrumenting the source files.  ";
			l += "<br><br>This is likely caused by the source files being referenced locally (using the file:// protocol). ";
			l +=
				"<br><br>Some solutions include <a href='http://askubuntu.com/questions/160245/making-google-chrome-option-allow-file-access-from-files-permanent' target='_blank'>starting Chrome with special flags</a>, <a target='_blank' href='https://github.com/remy/servedir'>running a server locally</a>, or using a browser without these CORS restrictions (Safari).";
			l += "<br>";
			if (typeof FileReader !== "undefined") {
				l +=
					"<br>Or, try the experimental loader.  When prompted, simply click on the directory containing all the source files you want covered.";
				l += "<a href='javascript:document.getElementById(\"fileInput\").click();'>Start Loader</a>";
				l +=
					"<input type='file' type='application/x-javascript' accept='application/x-javascript' webkitdirectory id='fileInput' multiple onchange='window.blanket.manualFileLoader(this.files)' style='visibility:hidden;position:absolute;top:-50;left:-50'/>";
			}
			l +=
				"<br><span style='float:right;cursor:pointer;'  onclick=document.getElementById('blanketLoaderDialog').style.display='none';>Close</span>";
			l += "<div style='clear:both'></div>";
			l += "</div></div>";
			var c = ".blanketDialogWrapper {";
			c += "display:block;";
			c += "position:fixed;";
			c += "z-index:40001; }";
			c += ".blanketDialogOverlay {";
			c += "position:fixed;";
			c += "width:100%;";
			c += "height:100%;";
			c += "background-color:black;";
			c += "opacity:.5; ";
			c += "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)'; ";
			c += "filter:alpha(opacity=50); ";
			c += "z-index:40001; }";
			c += ".blanketDialogVerticalOffset { ";
			c += "position:fixed;";
			c += "top:30%;";
			c += "width:100%;";
			c += "z-index:40002; }";
			c += ".blanketDialogBox { ";
			c += "width:405px; ";
			c += "position:relative;";
			c += "margin:0 auto;";
			c += "background-color:white;";
			c += "padding:10px;";
			c += "border:1px solid black; }";
			var d = document.createElement("style");
			d.innerHTML = c;
			document.head.appendChild(d);
			var a = document.createElement("div");
			a.id = "blanketLoaderDialog";
			a.className = "blanketDialogWrapper";
			a.innerHTML = l;
			document.body.insertBefore(a, document.body.firstChild);
		},
		manualFileLoader: function(f) {
			var t = Array.prototype.slice;
			f = t.call(f).filter(function(i) {
				return i.type !== "";
			});
			var s = f.length - 1;
			var a = 0;
			var c = {};
			if (sessionStorage["blanketSessionLoader"]) {
				c = JSON.parse(sessionStorage["blanketSessionLoader"]);
			}
			var d = function(e) {
				var g = e.currentTarget.result;
				var h = f[a];
				var i = h.webkitRelativePath && h.webkitRelativePath !== '' ? h.webkitRelativePath : h.name;
				c[i] = g;
				a++;
				if (a === s) {
					sessionStorage.setItem("blanketSessionLoader", JSON.stringify(c));
					document.location.reload();
				} else {
					r(f[a]);
				}
			};

			function r(e) {
				var g = new FileReader();
				g.onload = d;
				g.readAsText(e);
			}
			r(f[a]);
		},
		_loadFile: function(p) {
			if (typeof p !== "undefined") {
				var r = new XMLHttpRequest();
				r.open('GET', p, false);
				r.send();
				_._addScript(r.responseText);
			}
		},
		_addScript: function(d) {
			var s = document.createElement("script");
			s.type = "text/javascript";
			s.text = d;
			(document.body || document.getElementsByTagName('head')[0]).appendChild(s);
		},
		hasAdapter: function(c) {
			return _.options("adapter") !== null;
		},
		report: function(c) {
			if (!document.getElementById("blanketLoaderDialog")) {
				_.blanketSession = null;
			}
			c.files = window._$blanket;
			var r = blanket.options("commonJS") ? blanket._commonjs.require : window.require;
			if (!c.files || !Object.keys(c.files).length) {
				if (_.options("debug")) {
					console.log("BLANKET-Reporting No files were instrumented.");
				}
				return;
			}
			if (typeof c.files.branchFcn !== "undefined") {
				delete c.files.branchFcn;
			}
			if (typeof _.options("reporter") === "string") {
				_._loadFile(_.options("reporter"));
				_.customReporter(c, _.options("reporter_options"));
			} else if (typeof _.options("reporter") === "function") {
				_.options("reporter")(c, _.options("reporter_options"));
			} else if (typeof _.defaultReporter === 'function') {
				_.defaultReporter(c, _.options("reporter_options"));
			} else {
				throw new Error("no reporter defined.");
			}
		},
		_bindStartTestRunner: function(a, s) {
			if (a) {
				a(s);
			} else {
				window.addEventListener("load", s, false);
			}
		},
		_loadSourceFiles: function(c) {
			var r = blanket.options("commonJS") ? blanket._commonjs.require : window.require;

			function a(o) {
				var e = Object.create(Object.getPrototypeOf(o));
				var p = Object.getOwnPropertyNames(o);
				p.forEach(function(n) {
					var f = Object.getOwnPropertyDescriptor(o, n);
					Object.defineProperty(e, n, f);
				});
				return e;
			}
			if (_.options("debug")) {
				console.log("BLANKET-Collecting page scripts");
			}
			var s = _.utils.collectPageScripts();
			if (s.length === 0) {
				c();
			} else {
				if (sessionStorage["blanketSessionLoader"]) {
					_.blanketSession = JSON.parse(sessionStorage["blanketSessionLoader"]);
				}
				s.forEach(function(f, i) {
					_.utils.cache[f] = {
						loaded: false
					};
				});
				var d = -1;
				_.utils.loadAll(function(t) {
					if (t) {
						return typeof s[d + 1] !== 'undefined';
					}
					d++;
					if (d >= s.length) {
						return null;
					}
					return s[d];
				}, c);
			}
		},
		beforeStartTestRunner: function(o) {
			o = o || {};
			o.checkRequirejs = typeof o.checkRequirejs === "undefined" ? true : o.checkRequirejs;
			o.callback = o.callback || function() {};
			o.coverage = typeof o.coverage === "undefined" ? true : o.coverage;
			if (o.coverage) {
				_._bindStartTestRunner(o.bindEvent, function() {
					_._loadSourceFiles(function() {
						var a = function() {
							return o.condition ? o.condition() : _.requireFilesLoaded();
						};
						var c = function() {
							if (a()) {
								if (_.options("debug")) {
									console.log("BLANKET-All files loaded, init start test runner callback.");
								}
								var d = _.options("testReadyCallback");
								if (d) {
									if (typeof d === "function") {
										d(o.callback);
									} else if (typeof d === "string") {
										_._addScript(d);
										o.callback();
									}
								} else {
									o.callback();
								}
							} else {
								setTimeout(c, 13);
							}
						};
						c();
					});
				});
			} else {
				o.callback();
			}
		},
		utils: {
			qualifyURL: function(u) {
				var a = document.createElement('a');
				a.href = u;
				return a.href;
			}
		}
	});
})(blanket);
blanket.defaultReporter = function(c) {
	var a =
		"#blanket-main {margin:2px;background:#EEE;color:#333;clear:both;font-family:'Helvetica Neue Light', 'HelveticaNeue-Light', 'Helvetica Neue', Calibri, Helvetica, Arial, sans-serif; font-size:17px;} #blanket-main a {color:#333;text-decoration:none;}  #blanket-main a:hover {text-decoration:underline;} .blanket {margin:0;padding:5px;clear:both;border-bottom: 1px solid #FFFFFF;} .bl-error {color:red;}.bl-success {color:#5E7D00;} .bl-file{width:auto;} .bl-cl{float:left;} .blanket div.rs {margin-left:50px; width:150px; float:right} .bl-nb {padding-right:10px;} #blanket-main a.bl-logo {color: #EB1764;cursor: pointer;font-weight: bold;text-decoration: none} .bl-source{ overflow-x:scroll; background-color: #FFFFFF; border: 1px solid #CBCBCB; color: #363636; margin: 25px 20px; width: 80%;} .bl-source div{white-space: pre;font-family: monospace;} .bl-source > div > span:first-child{background-color: #EAEAEA;color: #949494;display: inline-block;padding: 0 10px;text-align: center;width: 30px;} .bl-source .miss{background-color:#e6c3c7} .bl-source span.branchWarning{color:#000;background-color:yellow;} .bl-source span.branchOkay{color:#000;background-color:transparent;}",
		s = 60,
		h = document.head,
		f = 0,
		b = document.body,
		d, e = Object.keys(c.files).some(function(V) {
			return typeof c.files[V].branchData !== 'undefined';
		}),
		g =
		"<div id='blanket-main'><div class='blanket bl-title'><div class='bl-cl bl-file'><a href='http://alex-seville.github.com/blanket/' target='_blank' class='bl-logo'>Blanket.js</a> results</div><div class='bl-cl rs'>Coverage (%)</div><div class='bl-cl rs'>Covered/Total Smts.</div>" +
		(e ? "<div class='bl-cl rs'>Covered/Total Branches</div>" : "") + "<div style='clear:both;'></div></div>",
		l =
		"<div class='blanket {{statusclass}}'><div class='bl-cl bl-file'><span class='bl-nb'>{{fileNumber}}.</span><a href='javascript:blanket_toggleSource(\"file-{{fileNumber}}\")'>{{file}}</a></div><div class='bl-cl rs'>{{percentage}} %</div><div class='bl-cl rs'>{{numberCovered}}/{{totalSmts}}</div>" +
		(e ? "<div class='bl-cl rs'>{{passedBranches}}/{{totalBranches}}</div>" : "") +
		"<div id='file-{{fileNumber}}' class='bl-source' style='display:none;'>{{source}}</div><div style='clear:both;'></div></div>";
	grandTotalTemplate =
		"<div class='blanket grand-total {{statusclass}}'><div class='bl-cl'>{{rowTitle}}</div><div class='bl-cl rs'>{{percentage}} %</div><div class='bl-cl rs'>{{numberCovered}}/{{totalSmts}}</div>" +
		(e ? "<div class='bl-cl rs'>{{passedBranches}}/{{totalBranches}}</div>" : "") + "<div style='clear:both;'></div></div>";

	function m(V) {
		var W = document.getElementById(V);
		if (W.style.display === 'block') {
			W.style.display = 'none';
		} else {
			W.style.display = 'block';
		}
	}
	var n = document.createElement("script");
	n.type = "text/javascript";
	n.text = m.toString().replace('function ' + m.name, 'function blanket_toggleSource');
	b.appendChild(n);
	var p = function(V, W) {
		return (Math.round(((V / W) * 100) * 100) / 100);
	};
	var o = function(V, W, X) {
		var Y = document.createElement(V);
		Y.innerHTML = X;
		W.appendChild(Y);
	};

	function q(V) {
		return V.replace(/\&/g, "&amp;").replace(/</g, "&lt;").replace(/\>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&apos;");
	}

	function r(V, W) {
		var X = W ? 0 : 1;
		if (typeof V === 'undefined' || typeof V === null || typeof V[X] === 'undefined') {
			return false;
		}
		return V[X].length > 0;
	}
	var t = [];

	function u(I, G, H, V, W) {
		var X = "";
		var Y = "";
		if (t.length > 0) {
			X += "<span class='" + (r(t[0][1], t[0][1].consequent === t[0][0]) ? 'branchOkay' : 'branchWarning') + "'>";
			if (t[0][0].end.line === W) {
				X += q(G.slice(0, t[0][0].end.column)) + "</span>";
				G = G.slice(t[0][0].end.column);
				t.shift();
				if (t.length > 0) {
					X += "<span class='" + (r(t[0][1], false) ? 'branchOkay' : 'branchWarning') + "'>";
					if (t[0][0].end.line === W) {
						X += q(G.slice(0, t[0][0].end.column)) + "</span>";
						G = G.slice(t[0][0].end.column);
						t.shift();
						if (!H) {
							return {
								src: X + q(G),
								cols: H
							};
						}
					} else if (!H) {
						return {
							src: X + q(G) + "</span>",
							cols: H
						};
					} else {
						Y = "</span>";
					}
				} else if (!H) {
					return {
						src: X + q(G),
						cols: H
					};
				}
			} else if (!H) {
				return {
					src: X + q(G) + "</span>",
					cols: H
				};
			} else {
				Y = "</span>";
			}
		}
		var Z = H[I];
		var $ = Z.consequent;
		if ($.start.line > W) {
			t.unshift([Z.alternate, Z]);
			t.unshift([$, Z]);
			G = q(G);
		} else {
			var _ = "<span class='" + (r(Z, true) ? 'branchOkay' : 'branchWarning') + "'>";
			X += q(G.slice(0, $.start.column - V)) + _;
			if (H.length > I + 1 && H[I + 1].consequent.start.line === W && H[I + 1].consequent.start.column - V < H[I].consequent.end.column - V) {
				var a1 = u(I + 1, G.slice($.start.column - V, $.end.column - V), H, $.start.column - V, W);
				X += a1.src;
				H = a1.cols;
				H[I + 1] = H[I + 2];
				H.length--;
			} else {
				X += q(G.slice($.start.column - V, $.end.column - V));
			}
			X += "</span>";
			var b1 = Z.alternate;
			if (b1.start.line > W) {
				X += q(G.slice($.end.column - V));
				t.unshift([b1, Z]);
			} else {
				X += q(G.slice($.end.column - V, b1.start.column - V));
				_ = "<span class='" + (r(Z, false) ? 'branchOkay' : 'branchWarning') + "'>";
				X += _;
				if (H.length > I + 1 && H[I + 1].consequent.start.line === W && H[I + 1].consequent.start.column - V < H[I].alternate.end.column - V) {
					var c1 = u(I + 1, G.slice(b1.start.column - V, b1.end.column - V), H, b1.start.column - V, W);
					X += c1.src;
					H = c1.cols;
					H[I + 1] = H[I + 2];
					H.length--;
				} else {
					X += q(G.slice(b1.start.column - V, b1.end.column - V));
				}
				X += "</span>";
				X += q(G.slice(b1.end.column - V));
				G = X;
			}
		}
		return {
			src: G + Y,
			cols: H
		};
	}
	var v = function(V) {
		return typeof V !== 'undefined';
	};
	var w = c.files;
	var x = {
		totalSmts: 0,
		numberOfFilesCovered: 0,
		passedBranches: 0,
		totalBranches: 0,
		moduleTotalStatements: {},
		moduleTotalCoveredStatements: {},
		moduleTotalBranches: {},
		moduleTotalCoveredBranches: {}
	};
	var y = _blanket.options("modulePattern");
	var z = (y ? new RegExp(y) : null);
	for (var A in w) {
		if (!w.hasOwnProperty(A)) {
			continue;
		}
		f++;
		var B = w[A],
			C = 0,
			D = 0,
			E = [],
			i;
		var F = [];
		for (i = 0; i < B.source.length; i += 1) {
			var G = B.source[i];
			if (t.length > 0 || typeof B.branchData !== 'undefined') {
				if (typeof B.branchData[i + 1] !== 'undefined') {
					var H = B.branchData[i + 1].filter(v);
					var I = 0;
					G = u(I, G, H, 0, i + 1).src;
				} else if (t.length) {
					G = u(0, G, null, 0, i + 1).src;
				} else {
					G = q(G);
				}
			} else {
				G = q(G);
			}
			var J = "";
			if (B[i + 1]) {
				D += 1;
				C += 1;
				J = 'hit';
			} else {
				if (B[i + 1] === 0) {
					C++;
					J = 'miss';
				}
			}
			E[i + 1] = "<div class='" + J + "'><span class=''>" + (i + 1) + "</span>" + G + "</div>";
		}
		x.totalSmts += C;
		x.numberOfFilesCovered += D;
		var K = 0;
		var L = 0;
		if (typeof B.branchData !== 'undefined') {
			for (var j = 0; j < B.branchData.length; j++) {
				if (typeof B.branchData[j] !== 'undefined') {
					for (var k = 0; k < B.branchData[j].length; k++) {
						if (typeof B.branchData[j][k] !== 'undefined') {
							K++;
							if (typeof B.branchData[j][k][0] !== 'undefined' && B.branchData[j][k][0].length > 0 && typeof B.branchData[j][k][1] !==
								'undefined' && B.branchData[j][k][1].length > 0) {
								L++;
							}
						}
					}
				}
			}
		}
		x.passedBranches += L;
		x.totalBranches += K;
		if (z) {
			var M = A.match(z)[1];
			if (!x.moduleTotalStatements.hasOwnProperty(M)) {
				x.moduleTotalStatements[M] = 0;
				x.moduleTotalCoveredStatements[M] = 0;
			}
			x.moduleTotalStatements[M] += C;
			x.moduleTotalCoveredStatements[M] += D;
			if (!x.moduleTotalBranches.hasOwnProperty(M)) {
				x.moduleTotalBranches[M] = 0;
				x.moduleTotalCoveredBranches[M] = 0;
			}
			x.moduleTotalBranches[M] += K;
			x.moduleTotalCoveredBranches[M] += L;
		}
		var N = p(D, C);
		var O = l.replace("{{file}}", A).replace("{{percentage}}", N).replace("{{numberCovered}}", D).replace(/\{\{fileNumber\}\}/g, f).replace(
			"{{totalSmts}}", C).replace("{{totalBranches}}", K).replace("{{passedBranches}}", L).replace("{{source}}", E.join(" "));
		if (N < s) {
			O = O.replace("{{statusclass}}", "bl-error");
		} else {
			O = O.replace("{{statusclass}}", "bl-success");
		}
		g += O;
	}
	var P = function(V, W, X, Y, M) {
		var Z = p(W, V);
		var $ = Z < s ? "bl-error" : "bl-success";
		var _ = (M ? "Total for module: " + M : "Global total");
		var a1 = grandTotalTemplate.replace("{{rowTitle}}", _).replace("{{percentage}}", Z).replace("{{numberCovered}}", W).replace(
			"{{totalSmts}}", V).replace("{{passedBranches}}", Y).replace("{{totalBranches}}", X).replace("{{statusclass}}", $);
		g += a1;
	};
	if (z) {
		for (var Q in x.moduleTotalStatements) {
			if (x.moduleTotalStatements.hasOwnProperty(Q)) {
				var R = x.moduleTotalStatements[Q];
				var S = x.moduleTotalCoveredStatements[Q];
				var T = x.moduleTotalBranches[Q];
				var U = x.moduleTotalCoveredBranches[Q];
				P(R, S, T, U, Q);
			}
		}
	}
	P(x.totalSmts, x.numberOfFilesCovered, x.totalBranches, x.passedBranches, null);
	g += "</div>";
	o('style', h, a);
	if (document.getElementById("blanket-main")) {
		document.getElementById("blanket-main").innerHTML = g.slice(23, -6);
	} else {
		o('div', b, g);
	}
};
(function() {
	var n = {};
	var t = Array.prototype.slice;
	var s = t.call(document.scripts);
	t.call(s[s.length - 1].attributes).forEach(function(a) {
		if (a.nodeName === "data-cover-only") {
			n.filter = a.nodeValue;
		}
		if (a.nodeName === "data-cover-never") {
			n.antifilter = a.nodeValue;
		}
		if (a.nodeName === "data-cover-reporter") {
			n.reporter = a.nodeValue;
		}
		if (a.nodeName === "data-cover-adapter") {
			n.adapter = a.nodeValue;
		}
		if (a.nodeName === "data-cover-loader") {
			n.loader = a.nodeValue;
		}
		if (a.nodeName === "data-cover-timeout") {
			n.timeout = a.nodeValue;
		}
		if (a.nodeName === "data-cover-modulepattern") {
			n.modulePattern = a.nodeValue;
		}
		if (a.nodeName === "data-cover-reporter-options") {
			try {
				n.reporter_options = JSON.parse(a.nodeValue);
			} catch (e) {
				if (blanket.options("debug")) {
					throw new Error("Invalid reporter options.  Must be a valid stringified JSON object.");
				}
			}
		}
		if (a.nodeName === "data-cover-testReadyCallback") {
			n.testReadyCallback = a.nodeValue;
		}
		if (a.nodeName === "data-cover-customVariable") {
			n.customVariable = a.nodeValue;
		}
		if (a.nodeName === "data-cover-flags") {
			var f = " " + a.nodeValue + " ";
			if (f.indexOf(" ignoreError ") > -1) {
				n.ignoreScriptError = true;
			}
			if (f.indexOf(" autoStart ") > -1) {
				n.autoStart = true;
			}
			if (f.indexOf(" ignoreCors ") > -1) {
				n.ignoreCors = true;
			}
			if (f.indexOf(" branchTracking ") > -1) {
				n.branchTracking = true;
			}
			if (f.indexOf(" sourceURL ") > -1) {
				n.sourceURL = true;
			}
			if (f.indexOf(" debug ") > -1) {
				n.debug = true;
			}
			if (f.indexOf(" engineOnly ") > -1) {
				n.engineOnly = true;
			}
			if (f.indexOf(" commonJS ") > -1) {
				n.commonJS = true;
			}
			if (f.indexOf(" instrumentCache ") > -1) {
				n.instrumentCache = true;
			}
		}
	});
	blanket.options(n);
	if (typeof requirejs !== 'undefined') {
		blanket.options("existingRequireJS", true);
	}
	if (blanket.options("commonJS")) {
		blanket._commonjs = {};
	}
})();
(function(_) {
	_.extend({
		utils: {
			normalizeBackslashes: function(s) {
				return s.replace(/\\/g, '/');
			},
			matchPatternAttribute: function(f, p) {
				if (typeof p === 'string') {
					if (p.indexOf("[") === 0) {
						var a = p.slice(1, p.length - 1).split(",");
						return a.some(function(b) {
							return _.utils.matchPatternAttribute(f, _.utils.normalizeBackslashes(b.slice(1, -1)));
						});
					} else if (p.indexOf("//") === 0) {
						var e = p.slice(2, p.lastIndexOf('/'));
						var m = p.slice(p.lastIndexOf('/') + 1);
						var r = new RegExp(e, m);
						return r.test(f);
					} else if (p.indexOf("#") === 0) {
						return window[p.slice(1)].call(window, f);
					} else {
						return f.indexOf(_.utils.normalizeBackslashes(p)) > -1;
					}
				} else if (p instanceof Array) {
					return p.some(function(b) {
						return _.utils.matchPatternAttribute(f, b);
					});
				} else if (p instanceof RegExp) {
					return p.test(f);
				} else if (typeof p === "function") {
					return p.call(window, f);
				}
			},
			blanketEval: function(d) {
				_._addScript(d);
			},
			collectPageScripts: function() {
				var t = Array.prototype.slice;
				var a = t.call(document.scripts);
				var b = [],
					c = [];
				var f = _.options("filter");
				if (f != null) {
					var d = _.options("antifilter");
					b = t.call(document.scripts).filter(function(s) {
						return t.call(s.attributes).filter(function(e) {
							return e.nodeName === "src" && _.utils.matchPatternAttribute(e.nodeValue, f) && (typeof d === "undefined" || !_.utils.matchPatternAttribute(
								e.nodeValue, d));
						}).length === 1;
					});
				} else {
					b = t.call(document.querySelectorAll("script[data-cover]"));
				}
				c = b.map(function(s) {
					return _.utils.qualifyURL(t.call(s.attributes).filter(function(e) {
						return e.nodeName === "src";
					})[0].nodeValue);
				});
				if (!f) {
					_.options("filter", "['" + c.join("','") + "']");
				}
				return c;
			},
			loadAll: function(n, c, p) {
				var a = n();
				var i = _.utils.scriptIsLoaded(a, _.utils.ifOrdered, n, c);
				if (!(_.utils.cache[a] && _.utils.cache[a].loaded)) {
					var b = function() {
						if (_.options("debug")) {
							console.log("BLANKET-Mark script:" + a + ", as loaded and move to next script.");
						}
						i();
					};
					var w = function(r) {
						if (_.options("debug")) {
							console.log("BLANKET-File loading finished");
						}
						if (typeof r !== 'undefined') {
							if (_.options("debug")) {
								console.log("BLANKET-Add file to DOM.");
							}
							_._addScript(r);
						}
						b();
					};
					_.utils.attachScript({
						url: a
					}, function(d) {
						_.utils.processFile(d, a, w, w);
					});
				} else {
					i();
				}
			},
			attachScript: function(o, c) {
				var t = _.options("timeout") || 3000;
				setTimeout(function() {
					if (!_.utils.cache[o.url].loaded) {
						throw new Error("error loading source script");
					}
				}, t);
				_.utils.getFile(o.url, c, function() {
					throw new Error("error loading source script");
				});
			},
			ifOrdered: function(n, c) {
				var a = n(true);
				if (a) {
					_.utils.loadAll(n, c);
				} else {
					c(new Error("Error in loading chain."));
				}
			},
			scriptIsLoaded: function(u, o, n, c) {
				if (_.options("debug")) {
					console.log("BLANKET-Returning function");
				}
				return function() {
					if (_.options("debug")) {
						console.log("BLANKET-Marking file as loaded: " + u);
					}
					_.utils.cache[u].loaded = true;
					if (_.utils.allLoaded()) {
						if (_.options("debug")) {
							console.log("BLANKET-All files loaded");
						}
						c();
					} else if (o) {
						if (_.options("debug")) {
							console.log("BLANKET-Load next file.");
						}
						o(n, c);
					}
				};
			},
			cache: {},
			allLoaded: function() {
				var c = Object.keys(_.utils.cache);
				for (var i = 0; i < c.length; i++) {
					if (!_.utils.cache[c[i]].loaded) {
						return false;
					}
				}
				return true;
			},
			processFile: function(c, u, a, o) {
				var m = _.options("filter");
				var b = _.options("antifilter");
				if (typeof b !== "undefined" && _.utils.matchPatternAttribute(u, b)) {
					o(c);
					if (_.options("debug")) {
						console.log("BLANKET-File will never be instrumented:" + u);
					}
					_.requiringFile(u, true);
				} else if (_.utils.matchPatternAttribute(u, m)) {
					if (_.options("debug")) {
						console.log("BLANKET-Attempting instrument of:" + u);
					}
					_.instrument({
						inputFile: c,
						inputFileName: u
					}, function(i) {
						try {
							if (_.options("debug")) {
								console.log("BLANKET-instrument of:" + u + " was successfull.");
							}
							_.utils.blanketEval(i);
							a();
							_.requiringFile(u, true);
						} catch (e) {
							if (_.options("ignoreScriptError")) {
								if (_.options("debug")) {
									console.log("BLANKET-There was an error loading the file:" + u);
								}
								a(c);
								_.requiringFile(u, true);
							} else {
								throw new Error("Error parsing instrumented code: " + e);
							}
						}
					});
				} else {
					if (_.options("debug")) {
						console.log("BLANKET-Loading (without instrumenting) the file:" + u);
					}
					o(c);
					_.requiringFile(u, true);
				}
			},
			cacheXhrConstructor: function() {
				var C, c, i, p;
				if (typeof XMLHttpRequest !== "undefined") {
					C = XMLHttpRequest;
					this.createXhr = function() {
						return new C();
					};
				} else if (typeof ActiveXObject !== "undefined") {
					C = ActiveXObject;
					for (i = 0; i < 3; i += 1) {
						p = progIds[i];
						try {
							new ActiveXObject(p);
							break;
						} catch (e) {}
					}
					this.createXhr = function() {
						return new C(p);
					};
				}
			},
			craeteXhr: function() {
				throw new Error("cacheXhrConstructor is supposed to overwrite this function.");
			},
			getFile: function(u, c, a, o) {
				var f = false;
				if (_.blanketSession) {
					var b = Object.keys(_.blanketSession);
					for (var i = 0; i < b.length; i++) {
						var k = b[i];
						if (u.indexOf(k) > -1) {
							c(_.blanketSession[k]);
							f = true;
							return;
						}
					}
				}
				if (!f) {
					var x = _.utils.createXhr();
					x.open('GET', u, true);
					if (o) {
						o(x, u);
					}
					x.onreadystatechange = function(d) {
						var s, g;
						if (x.readyState === 4) {
							s = x.status;
							if ((s > 399 && s < 600)) {
								g = new Error(u + ' HTTP status: ' + s);
								g.xhr = x;
								a(g);
							} else {
								c(x.responseText);
							}
						}
					};
					try {
						x.send(null);
					} catch (e) {
						if (e.code && (e.code === 101 || e.code === 1012) && _.options("ignoreCors") === false) {
							_.showManualLoader();
						} else {
							throw e;
						}
					}
				}
			}
		}
	});
	(function() {
		var r = blanket.options("commonJS") ? blanket._commonjs.require : window.require;
		var a = blanket.options("commonJS") ? blanket._commonjs.requirejs : window.requirejs;
		if (!_.options("engineOnly") && _.options("existingRequireJS")) {
			_.utils.oldloader = a.load;
			a.load = function(c, m, u) {
				_.requiringFile(u);
				_.utils.getFile(u, function(b) {
					_.utils.processFile(b, u, function n() {
						c.completeLoad(m);
					}, function o() {
						_.utils.oldloader(c, m, u);
					});
				}, function(e) {
					_.requiringFile();
					throw e;
				});
			};
		}
		_.utils.cacheXhrConstructor();
	})();
})(blanket);
(function() {
	if (typeof QUnit !== 'undefined') {
		var a = function() {
			return window.QUnit.config.queue.length > 0 && blanket.noConflict().requireFilesLoaded();
		};
		if (!QUnit.config.urlConfig[0].tooltip) {
			QUnit.begin = function() {
				blanket.noConflict().setupCoverage();
			};
			QUnit.done = function(f, t) {
				blanket.noConflict().onTestsDone();
			};
			QUnit.moduleStart = function(d) {
				blanket.noConflict().onModuleStart();
			};
			QUnit.testStart = function(d) {
				blanket.noConflict().onTestStart();
			};
			QUnit.testDone = function(d) {
				blanket.noConflict().onTestDone(d.total, d.passed);
			};
			blanket.beforeStartTestRunner({
				condition: a,
				callback: QUnit.start
			});
		} else {
			QUnit.config.urlConfig.push({
				id: "coverage",
				label: "Enable coverage",
				tooltip: "Enable code coverage."
			});
			if (QUnit.urlParams.coverage || blanket.options("autoStart")) {
				QUnit.begin(function() {
					blanket.noConflict().setupCoverage();
				});
				QUnit.done(function(f, t) {
					blanket.noConflict().onTestsDone();
				});
				QUnit.moduleStart(function(d) {
					blanket.noConflict().onModuleStart();
				});
				QUnit.testStart(function(d) {
					blanket.noConflict().onTestStart();
				});
				QUnit.testDone(function(d) {
					blanket.noConflict().onTestDone(d.total, d.passed);
				});
				blanket.noConflict().beforeStartTestRunner({
					condition: a,
					callback: function() {
						if (!(blanket.options("existingRequireJS") && !blanket.options("autoStart"))) {
							QUnit.start();
						}
					}
				});
			} else {
				if (blanket.options("existingRequireJS")) {
					requirejs.load = _blanket.utils.oldloader;
				}
				blanket.noConflict().beforeStartTestRunner({
					condition: a,
					callback: function() {
						if (!(blanket.options("existingRequireJS") && !blanket.options("autoStart"))) {
							QUnit.start();
						}
					},
					coverage: false
				});
			}
		}
	}
})();