// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.20/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmd/identification/templates/MD_Keywords.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\r\n    data-dojo-props\x3d"target:\'gmd:MD_Keywords\',minOccurs:0"\x3e\r\n     \r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'gmd:keyword\',minOccurs:1,maxOccurs:\'unbounded\',\r\n        label:\'${i18nIso.MD_Keywords.delimitedCaption}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputDelimitedTextArea"\r\n        data-dojo-props\x3d"subTarget:\'gco:CharacterString\'"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListReference"\r\n      data-dojo-props\x3d"target:\'gmd:type\',\r\n        label:\'${i18nIso.MD_KeywordTypeCode.caption}\',minOccurs:0"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/identification/MD_KeywordTypeCode"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n      data-dojo-props\x3d"target:\'gmd:thesaurusName\',minOccurs:0,\r\n        label:\'${i18nIso.MD_Keywords.thesaurusName}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/citation/SpecificationCitation"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n  \x3c/div\x3e\r\n  \r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmd/identification/MD_Keywords","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Element ../../../../form/InputDelimitedTextArea ../../../../form/iso/AbstractObject ../../../../form/iso/CodeListReference ../../../../form/iso/ObjectReference ../citation/SpecificationCitation ./MD_KeywordTypeCode dojo/text!./templates/MD_Keywords.html ../../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,n,p,e,f){a=a(d,{templateString:e});
c("extend-esri")&&b.setObject("dijit.metadata.types.iso.gmd.identification.MD_Keywords",a,f);return a});