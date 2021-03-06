﻿///<reference path='_project.ts'/>
declare var JSON2;
declare var require: any;
if (typeof require === "function") {
	JSON2 = JSON;
}

describe('getScriptLexicalStructure', function () {
    var typescriptLS = new Harness.TypeScriptLS();

    typescriptLS.addDefaultLibrary();

    var fileName = 'services/testCode/getScriptLexicalStructure.ts';

    typescriptLS.addFile(fileName);

    var ls = typescriptLS.getLanguageService();


    function getScriptLexicalStructure(fileName: string): Services.NavigateToItem[] {
        return ls.languageService.getScriptLexicalStructure(fileName);
    }

    describe('Get script lexical structure', function () {
        it("Cover all kinds of structure elements", function () {
            var result = getScriptLexicalStructure(fileName);

            // Note: This baseline can be easily regenerated by taking the output of the test
            //       resulting from the call to "assert.equal" below.
            var baseline =
[
 {
  "name": "Bar",
  "kind": "module",
  "kindModifiers": "",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 0,
  "limChar": 1501,
  "containerName": "",
  "containerKind": ""
 },
 {
  "name": "x",
  "kind": "variable",
  "kindModifiers": "",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 47,
  "limChar": 61,
  "containerName": "Bar",
  "containerKind": "module"
 },
 {
  "name": "f",
  "kind": "function",
  "kindModifiers": "",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 92,
  "limChar": 114,
  "containerName": "Bar",
  "containerKind": "module"
 },
 {
  "name": "IFoo",
  "kind": "interface",
  "kindModifiers": "",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 139,
  "limChar": 411,
  "containerName": "Bar",
  "containerKind": "module"
 },
 {
  "name": "()",
  "kind": "call",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 165,
  "limChar": 183,
  "containerName": "Bar.IFoo",
  "containerKind": "interface"
 },
 {
  "name": "new()",
  "kind": "construct",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 212,
  "limChar": 225,
  "containerName": "Bar.IFoo",
  "containerKind": "interface"
 },
 {
  "name": "[]",
  "kind": "index",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 264,
  "limChar": 284,
  "containerName": "Bar.IFoo",
  "containerKind": "interface"
 },
 {
  "name": "foo",
  "kind": "property",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 312,
  "limChar": 324,
  "containerName": "Bar.IFoo",
  "containerKind": "interface"
 },
 {
  "name": "bar",
  "kind": "method",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 363,
  "limChar": 375,
  "containerName": "Bar.IFoo",
  "containerKind": "interface"
 },
 {
  "name": "Blah",
  "kind": "enum",
  "kindModifiers": "",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 419,
  "limChar": 491,
  "containerName": "Bar",
  "containerKind": "module"
 },
 {
  "name": "foo",
  "kind": "property",
  "kindModifiers": "export",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 440,
  "limChar": 447,
  "containerName": "Bar.Blah",
  "containerKind": "enum"
 },
 {
  "name": "Bar",
  "kind": "class",
  "kindModifiers": "",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 499,
  "limChar": 1498,
  "containerName": "Bar",
  "containerKind": "module"
 },
 {
  "name": "constructor",
  "kind": "constructor",
  "kindModifiers": "",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 520,
  "limChar": 556,
  "containerName": "Bar.Bar",
  "containerKind": "class"
 },
 {
  "name": "barVar",
  "kind": "property",
  "kindModifiers": "private",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 532,
  "limChar": 551,
  "containerName": "Bar.Bar",
  "containerKind": "class"
 },
 {
  "name": "barProp",
  "kind": "property",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 597,
  "limChar": 620,
  "containerName": "Bar.Bar",
  "containerKind": "class"
 },
 {
  "name": "barPropFunc",
  "kind": "method",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 672,
  "limChar": 702,
  "containerName": "Bar.Bar",
  "containerKind": "class"
 },
 {
  "name": "prop1",
  "kind": "getter",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 747,
  "limChar": 775,
  "containerName": "Bar.Bar",
  "containerKind": "class"
 },
 {
  "name": "prop1",
  "kind": "setter",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 822,
  "limChar": 844,
  "containerName": "Bar.Bar",
  "containerKind": "class"
 },
 {
  "name": "barPropP",
  "kind": "property",
  "kindModifiers": "private",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 899,
  "limChar": 924,
  "containerName": "Bar.Bar",
  "containerKind": "class"
 },
 {
  "name": "barPropFuncP",
  "kind": "method",
  "kindModifiers": "private",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 974,
  "limChar": 1006,
  "containerName": "Bar.Bar",
  "containerKind": "class"
 },
 {
  "name": "prop1P",
  "kind": "getter",
  "kindModifiers": "private",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 1049,
  "limChar": 1079,
  "containerName": "Bar.Bar",
  "containerKind": "class"
 },
 {
  "name": "prop1P",
  "kind": "setter",
  "kindModifiers": "private",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 1124,
  "limChar": 1148,
  "containerName": "Bar.Bar",
  "containerKind": "class"
 },
 {
  "name": "foo",
  "kind": "property",
  "kindModifiers": "public,static",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 1201,
  "limChar": 1220,
  "containerName": "Bar.Bar",
  "containerKind": "class"
 },
 {
  "name": "bar",
  "kind": "method",
  "kindModifiers": "public,static",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 1276,
  "limChar": 1298,
  "containerName": "Bar.Bar",
  "containerKind": "class"
 },
 {
  "name": "foo2",
  "kind": "getter",
  "kindModifiers": "public,static",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 1351,
  "limChar": 1378,
  "containerName": "Bar.Bar",
  "containerKind": "class"
 },
 {
  "name": "foo2",
  "kind": "setter",
  "kindModifiers": "public,static",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 1426,
  "limChar": 1447,
  "containerName": "Bar.Bar",
  "containerKind": "class"
 },
 {
  "name": "Bar2",
  "kind": "module",
  "kindModifiers": "",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 1505,
  "limChar": 3051,
  "containerName": "",
  "containerKind": ""
 },
 {
  "name": "x",
  "kind": "variable",
  "kindModifiers": "export",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 1560,
  "limChar": 1581,
  "containerName": "Bar2",
  "containerKind": "module"
 },
 {
  "name": "f",
  "kind": "function",
  "kindModifiers": "export",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 1613,
  "limChar": 1642,
  "containerName": "Bar2",
  "containerKind": "module"
 },
 {
  "name": "IFoo",
  "kind": "interface",
  "kindModifiers": "export",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 1668,
  "limChar": 1947,
  "containerName": "Bar2",
  "containerKind": "module"
 },
 {
  "name": "()",
  "kind": "call",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 1701,
  "limChar": 1719,
  "containerName": "Bar2.IFoo",
  "containerKind": "interface"
 },
 {
  "name": "new()",
  "kind": "construct",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 1748,
  "limChar": 1761,
  "containerName": "Bar2.IFoo",
  "containerKind": "interface"
 },
 {
  "name": "[]",
  "kind": "index",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 1800,
  "limChar": 1820,
  "containerName": "Bar2.IFoo",
  "containerKind": "interface"
 },
 {
  "name": "foo",
  "kind": "property",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 1848,
  "limChar": 1860,
  "containerName": "Bar2.IFoo",
  "containerKind": "interface"
 },
 {
  "name": "bar",
  "kind": "method",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 1899,
  "limChar": 1911,
  "containerName": "Bar2.IFoo",
  "containerKind": "interface"
 },
 {
  "name": "Blah",
  "kind": "enum",
  "kindModifiers": "export",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 1955,
  "limChar": 2034,
  "containerName": "Bar2",
  "containerKind": "module"
 },
 {
  "name": "foo",
  "kind": "property",
  "kindModifiers": "export",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 1983,
  "limChar": 1990,
  "containerName": "Bar2.Blah",
  "containerKind": "enum"
 },
 {
  "name": "Bar",
  "kind": "class",
  "kindModifiers": "export",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 2042,
  "limChar": 3048,
  "containerName": "Bar2",
  "containerKind": "module"
 },
 {
  "name": "constructor",
  "kind": "constructor",
  "kindModifiers": "export",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 2070,
  "limChar": 2106,
  "containerName": "Bar2.Bar",
  "containerKind": "class"
 },
 {
  "name": "barVar",
  "kind": "property",
  "kindModifiers": "private",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 2082,
  "limChar": 2101,
  "containerName": "Bar2.Bar",
  "containerKind": "class"
 },
 {
  "name": "barProp",
  "kind": "property",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 2147,
  "limChar": 2170,
  "containerName": "Bar2.Bar",
  "containerKind": "class"
 },
 {
  "name": "barPropFunc",
  "kind": "method",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 2222,
  "limChar": 2252,
  "containerName": "Bar2.Bar",
  "containerKind": "class"
 },
 {
  "name": "prop1",
  "kind": "getter",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 2297,
  "limChar": 2325,
  "containerName": "Bar2.Bar",
  "containerKind": "class"
 },
 {
  "name": "prop1",
  "kind": "setter",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 2372,
  "limChar": 2394,
  "containerName": "Bar2.Bar",
  "containerKind": "class"
 },
 {
  "name": "barPropP",
  "kind": "property",
  "kindModifiers": "private",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 2449,
  "limChar": 2474,
  "containerName": "Bar2.Bar",
  "containerKind": "class"
 },
 {
  "name": "barPropFuncP",
  "kind": "method",
  "kindModifiers": "private",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 2524,
  "limChar": 2556,
  "containerName": "Bar2.Bar",
  "containerKind": "class"
 },
 {
  "name": "prop1P",
  "kind": "getter",
  "kindModifiers": "private",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 2599,
  "limChar": 2629,
  "containerName": "Bar2.Bar",
  "containerKind": "class"
 },
 {
  "name": "prop1P",
  "kind": "setter",
  "kindModifiers": "private",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 2674,
  "limChar": 2698,
  "containerName": "Bar2.Bar",
  "containerKind": "class"
 },
 {
  "name": "foo",
  "kind": "property",
  "kindModifiers": "public,static",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 2751,
  "limChar": 2770,
  "containerName": "Bar2.Bar",
  "containerKind": "class"
 },
 {
  "name": "bar",
  "kind": "method",
  "kindModifiers": "public,static",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 2826,
  "limChar": 2848,
  "containerName": "Bar2.Bar",
  "containerKind": "class"
 },
 {
  "name": "foo2",
  "kind": "getter",
  "kindModifiers": "public,static",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 2901,
  "limChar": 2928,
  "containerName": "Bar2.Bar",
  "containerKind": "class"
 },
 {
  "name": "foo2",
  "kind": "setter",
  "kindModifiers": "public,static",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 2976,
  "limChar": 2997,
  "containerName": "Bar2.Bar",
  "containerKind": "class"
 },
 {
  "name": "Bar3",
  "kind": "module",
  "kindModifiers": "declare",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 3057,
  "limChar": 3083,
  "containerName": "",
  "containerKind": ""
 },
 {
  "name": "Bar4",
  "kind": "module",
  "kindModifiers": "",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 3087,
  "limChar": 4611,
  "containerName": "",
  "containerKind": ""
 },
 {
  "name": "x",
  "kind": "variable",
  "kindModifiers": "declare",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 3134,
  "limChar": 3156,
  "containerName": "Bar4",
  "containerKind": "module"
 },
 {
  "name": "f",
  "kind": "method",
  "kindModifiers": "declare",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 3179,
  "limChar": 3206,
  "containerName": "Bar4",
  "containerKind": "module"
 },
 {
  "name": "IFoo",
  "kind": "interface",
  "kindModifiers": "",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 3226,
  "limChar": 3506,
  "containerName": "Bar4",
  "containerKind": "module"
 },
 {
  "name": "()",
  "kind": "call",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 3260,
  "limChar": 3278,
  "containerName": "Bar4.IFoo",
  "containerKind": "interface"
 },
 {
  "name": "new()",
  "kind": "construct",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 3307,
  "limChar": 3320,
  "containerName": "Bar4.IFoo",
  "containerKind": "interface"
 },
 {
  "name": "[]",
  "kind": "index",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 3359,
  "limChar": 3379,
  "containerName": "Bar4.IFoo",
  "containerKind": "interface"
 },
 {
  "name": "foo",
  "kind": "property",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 3407,
  "limChar": 3419,
  "containerName": "Bar4.IFoo",
  "containerKind": "interface"
 },
 {
  "name": "bar",
  "kind": "method",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 3458,
  "limChar": 3470,
  "containerName": "Bar4.IFoo",
  "containerKind": "interface"
 },
 {
  "name": "Blah",
  "kind": "enum",
  "kindModifiers": "declare",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 3514,
  "limChar": 3594,
  "containerName": "Bar4",
  "containerKind": "module"
 },
 {
  "name": "foo",
  "kind": "property",
  "kindModifiers": "export",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 3543,
  "limChar": 3550,
  "containerName": "Bar4.Blah",
  "containerKind": "enum"
 },
 {
  "name": "Bar",
  "kind": "class",
  "kindModifiers": "declare",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 3602,
  "limChar": 4608,
  "containerName": "Bar4",
  "containerKind": "module"
 },
 {
  "name": "constructor",
  "kind": "constructor",
  "kindModifiers": "declare",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 3631,
  "limChar": 3665,
  "containerName": "Bar4.Bar",
  "containerKind": "class"
 },
 {
  "name": "barVar",
  "kind": "property",
  "kindModifiers": "private",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 3644,
  "limChar": 3663,
  "containerName": "Bar4.Bar",
  "containerKind": "class"
 },
 {
  "name": "barProp",
  "kind": "property",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 3707,
  "limChar": 3730,
  "containerName": "Bar4.Bar",
  "containerKind": "class"
 },
 {
  "name": "barPropFunc",
  "kind": "method",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 3782,
  "limChar": 3809,
  "containerName": "Bar4.Bar",
  "containerKind": "class"
 },
 {
  "name": "prop1",
  "kind": "getter",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 3857,
  "limChar": 3882,
  "containerName": "Bar4.Bar",
  "containerKind": "class"
 },
 {
  "name": "prop1",
  "kind": "setter",
  "kindModifiers": "public",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 3932,
  "limChar": 3951,
  "containerName": "Bar4.Bar",
  "containerKind": "class"
 },
 {
  "name": "barPropP",
  "kind": "property",
  "kindModifiers": "private",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 4009,
  "limChar": 4034,
  "containerName": "Bar4.Bar",
  "containerKind": "class"
 },
 {
  "name": "barPropFuncP",
  "kind": "method",
  "kindModifiers": "private",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 4084,
  "limChar": 4113,
  "containerName": "Bar4.Bar",
  "containerKind": "class"
 },
 {
  "name": "prop1P",
  "kind": "getter",
  "kindModifiers": "private",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 4159,
  "limChar": 4186,
  "containerName": "Bar4.Bar",
  "containerKind": "class"
 },
 {
  "name": "prop1P",
  "kind": "setter",
  "kindModifiers": "private",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 4234,
  "limChar": 4255,
  "containerName": "Bar4.Bar",
  "containerKind": "class"
 },
 {
  "name": "foo",
  "kind": "property",
  "kindModifiers": "public,static",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 4311,
  "limChar": 4330,
  "containerName": "Bar4.Bar",
  "containerKind": "class"
 },
 {
  "name": "bar",
  "kind": "method",
  "kindModifiers": "public,static",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 4386,
  "limChar": 4405,
  "containerName": "Bar4.Bar",
  "containerKind": "class"
 },
 {
  "name": "foo2",
  "kind": "getter",
  "kindModifiers": "public,static",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 4461,
  "limChar": 4485,
  "containerName": "Bar4.Bar",
  "containerKind": "class"
 },
 {
  "name": "foo2",
  "kind": "setter",
  "kindModifiers": "public,static",
  "matchKind": "exact",
  "unitIndex": 1,
  "minChar": 4536,
  "limChar": 4554,
  "containerName": "Bar4.Bar",
  "containerKind": "class"
 }
];
            var baselineText = JSON2.stringify(baseline, null, " ");
            var resultText = JSON2.stringify(result, null, " ");
            assert.notNull(result);
            assert.equal(79, result.length);
            assert.equal(baselineText, resultText);
        });
    });
});

