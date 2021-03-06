﻿//
// Dynamsoft JavaScript Library for Basic Initiation of Dynamic Web TWAIN
// More info on DWT: http://www.dynamsoft.com/Products/WebTWAIN_Overview.aspx
//
// Copyright 2016, Dynamsoft Corporation 
// Author: Dynamsoft Team
// Version: 12.1
//
/// <reference path="dynamsoft.webtwain.initiate.js" />
var Dynamsoft = Dynamsoft || { WebTwainEnv: {} };

Dynamsoft.WebTwainEnv.AutoLoad = true;
///
Dynamsoft.WebTwainEnv.Containers = [{ContainerId:'dwtcontrolContainer', Width:580, Height:500}];
///
//Dynamsoft.WebTwainEnv.ProductKey = '780652B510CE956C3A83FEE8DD2C10804109A781C28249C4A56A970AB46206487C27D2113B38EA37C67D690A9C06A1B2B4ABE1747B1CBC874F2242F696A7F390ADC10D7221F4F9DBD38832C9A27D07FAC0AA7807F0AC58AE56C592D492E03FCD3451FE16EAC46A958652EDA5BAC5D020E00FB4ECB7DD98635D69DF3773BEA2CE18FD2ABBC9C1FFD7F946C0F280DA0D8E53E2D33BD82F85787DB3B7BB77BC1D325ABBA7AD0F2E4EFDE787468B7ECEBA07E7B8ED01FF1F1EE40687FC3B9B55ADA09ADDF937EECCE463287039BCE6636AE002C673A901AD55D24485D0DF85169870D311AF8E0B7B248E70582324E2CE0E36809F2B8BDDA66CC4A1748B09FF346FD1ECFDB742DE4FFBA23B15EF255AAB71973818B219B64B6ED1A6B2D205057782EDBD4F229B652FB0BB640BCA3B0105CC9DEBCC007F74A0F0B32E4B4B9202E1557D504182EE38E95B1F4534BFDB2D888764547C8BFE08174AC60F1283A8DB8E2F5433D7650BA71D45467F0B83FC1102CE8091935A83A7021C5D5A307CADE2886619B3EE34A859E7FBDA3D99F718F9240284D55AB0B2D77391AC034E8ACE8E0854662D6A74D1755116FEC7AB0842786C5126';
Dynamsoft.WebTwainEnv.ProductKey = '537D75AD41836AE3F6DEDD1F426074D13A1FC67D73BDE5C8C87E7BA06AE2BB3388C4F4CEBCD92E408A0DA77979361058E833798A52F43D76DE58CB5FA2843CD5F5207614330619E955640CB1B3B93B549E4152B075A08AF4E084F07810489A3F9FBBFC3E190C70010EBC0EE7';
///
Dynamsoft.WebTwainEnv.Trial = true;
///
Dynamsoft.WebTwainEnv.ActiveXInstallWithCAB = false;
///
Dynamsoft.WebTwainEnv.ResourcesPath = 'Assets/JavaScript/Resources';

/// All callbacks are defined in the dynamsoft.webtwain.install.js file, you can customize them.

// Dynamsoft.WebTwainEnv.RegisterEvent('OnWebTwainReady', function(){
// 		// webtwain has been inited
// });

