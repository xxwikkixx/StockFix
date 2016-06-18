var sentiment = require('sentiment');
var sentimental = require('Sentimental')
var Nightmare = require('nightmare')

//sentiment library
//https://github.com/thisandagain/sentiment
//need to setup a summarizer to take the articles and sumarize them
//before sending them to the sentimental analysis
var r1 = sentiment('MGT and its subsidiaries are principally engaged in the business of acquiring, developing and monetizing intellectual property assets. MGTs portfolio currently includes social casino and gaming platforms, and ownership stakes in DraftDay.com, a top daily fantasy sports wagering platform and DraftDay Fantasy Sports, Inc. operator of an online entertainment marketing and rewards platform. MGT also recently announced the acquisition of certain technology and assets from D-Vasive Inc., a provider of leading edge anti-spy software.  In conjunction with the acquisition, The Company also announced the proposed appointment of John McAfee as Executive Chairman and Chief Executive Officer.  Further, MGT Capital also intends to change its corporate name to John McAfee Global Technologies, Inc. Closing of the acquisition is contingent on customary conditions including approval by MGTs stockholders.')

//console.dir(r1);


	
//Sentimental library
//https://github.com/thinkroth/Sentimental
var analyze = require('Sentimental').analyze,
    positivity = require('Sentimental').positivity,
    negativity = require('Sentimental').negativity;

console.log(analyze("MGT and its subsidiaries are principally engaged in the business of acquiring, developing and monetizing intellectual property assets. MGTs portfolio currently includes social casino and gaming platforms, and ownership stakes in DraftDay.com, a top daily fantasy sports wagering platform and DraftDay Fantasy Sports, Inc. operator of an online entertainment marketing and rewards platform. MGT also recently announced the acquisition of certain technology and assets from D-Vasive Inc., a provider of leading edge anti-spy software.  In conjunction with the acquisition, The Company also announced the proposed appointment of John McAfee as Executive Chairman and Chief Executive Officer.  Further, MGT Capital also intends to change its corporate name to John McAfee Global Technologies, Inc. Closing of the acquisition is contingent on customary conditions including approval by MGTs stockholders."));

//read stock news from marketwatch.com or google stock news seems more
//appropriate. we can do both but lets see which one has better articles.
function readNews(){
	var readnews = new Nightmare()
	
}