var Observable = require("FuseJS/Observable");

var text1 = Observable(""); var text2 = Observable(""); var text3 = Observable(""); var text4 = Observable("");
var text5 = Observable(""); var text6 = Observable(""); 
// var text7 = Observable(""); var text8 = Observable("");
// var text9 = Observable(""); var text10 = Observable("");var text11 = Observable("");var text12 = Observable("");
// var text13 = Observable("");var text14 = Observable("");var text15 = Observable("");var text16 = Observable("");
// var text17 = Observable("");var text18 = Observable("");var text19 = Observable("");var text20 = Observable("");
// var text21 = Observable("");var text22 = Observable("");var text23 = Observable("");var text24 = Observable("");
// var text25 = Observable("");var text26 = Observable("");var text27 = Observable("");var text28 = Observable("");
// var text29 = Observable("");var text30 = Observable("");var text31 = Observable("");var text32 = Observable("");
// var text33 = Observable("");var text34 = Observable("");var text35 = Observable("");var text36 = Observable("");
// var text37 = Observable("");var text38 = Observable("");var text39 = Observable("");var text40 = Observable("");
// var text41 = Observable("");var text42 = Observable("");var text43 = Observable("");var text44 = Observable("");
// var text45 = Observable("");

var clickPlease = Observable("");

var lotteryNumber = [1,2,3,4,5,6,7,8,9,
					10,11,12,13,14,15,16,17,18,19,
					20,21,22,23,24,25,26,27,28,29,
					30,31,32,33,34,35,36,37,38,39,
					40,41,42,43,44];

var sortedLotteryNumber = [];

var lotteryList = ["0","1","2","3","4","5","6","7","8","9"
				  ,"10","11","12","13","14","15","16","17","18","19"
				  ,"20","21","22","23","24","25","26","27","28","29"
				  ,"30","31","32","33","34","35","36","37","38","39"
				  ,"40","41","42","43","44","45"]

function pick()
{
	text1.value = lotteryList[sortedLotteryNumber[0]];
	text2.value = lotteryList[sortedLotteryNumber[1]];
	text3.value = lotteryList[sortedLotteryNumber[2]];
	text4.value = lotteryList[sortedLotteryNumber[3]];
	text5.value = lotteryList[sortedLotteryNumber[4]];
	text6.value = lotteryList[sortedLotteryNumber[5]];
	// text7.value = lotteryList[lotteryNumber[6]];
	// text8.value = lotteryList[lotteryNumber[7]];
	// text9.value = lotteryList[lotteryNumber[8]];
	// text10.value = lotteryList[lotteryNumber[9]];
	// text11.value = lotteryList[lotteryNumber[10]];
	// text12.value = lotteryList[lotteryNumber[11]];
	// text13.value = lotteryList[lotteryNumber[12]];
	// text14.value = lotteryList[lotteryNumber[13]];
	// text15.value = lotteryList[lotteryNumber[14]];
	// text16.value = lotteryList[lotteryNumber[15]];
	// text17.value = lotteryList[lotteryNumber[16]];
	// text18.value = lotteryList[lotteryNumber[17]];
	// text19.value = lotteryList[lotteryNumber[18]];
	// text20.value = lotteryList[lotteryNumber[19]];
	// text21.value = lotteryList[lotteryNumber[20]];
	// text22.value = lotteryList[lotteryNumber[21]];
	// text23.value = lotteryList[lotteryNumber[22]];
	// text24.value = lotteryList[lotteryNumber[23]];
	// text25.value = lotteryList[lotteryNumber[24]];
	// text26.value = lotteryList[lotteryNumber[25]];
	// text27.value = lotteryList[lotteryNumber[26]];
	// text28.value = lotteryList[lotteryNumber[27]];
	// text29.value = lotteryList[lotteryNumber[28]];
	// text30.value = lotteryList[lotteryNumber[29]];
	// text31.value = lotteryList[lotteryNumber[30]];
	// text32.value = lotteryList[lotteryNumber[31]];
	// text33.value = lotteryList[lotteryNumber[32]];
	// text34.value = lotteryList[lotteryNumber[33]];
	// text35.value = lotteryList[lotteryNumber[34]];
	// text36.value = lotteryList[lotteryNumber[35]];
	// text37.value = lotteryList[lotteryNumber[36]];
	// text38.value = lotteryList[lotteryNumber[37]];
	// text39.value = lotteryList[lotteryNumber[38]];
	// text40.value = lotteryList[lotteryNumber[39]];
	// text41.value = lotteryList[lotteryNumber[40]];
	// text42.value = lotteryList[lotteryNumber[41]];
	// text43.value = lotteryList[lotteryNumber[42]];
	// text44.value = lotteryList[lotteryNumber[43]];
	// text45.value = lotteryList[lotteryNumber[44]];
	clickPlease.value = "Click on each circle";
}

function remove()
{
	text1.value = "";
	text2.value = "";
	text3.value = "";
	text4.value = "";
	text5.value = "";
	text6.value = "";
	// text7.value = "";
	// text8.value = "";
	// text9.value = "";
	// text10.value = "";
	// text11.value = "";
	// text12.value = "";
	// text13.value = "";
	// text14.value = "";
	// text15.value = "";
	// text16.value = "";
	// text17.value = "";
	// text18.value = "";
	// text19.value = "";
	// text20.value = "";
	// text21.value = "";
	// text22.value = "";
	// text23.value = "";
	// text24.value = "";
	// text25.value = "";
	// text26.value = "";
	// text27.value = "";
	// text28.value = "";
	// text29.value = "";
	// text30.value = "";
	// text31.value = "";
	// text32.value = "";
	// text33.value = "";
	// text34.value = "";
	// text35.value = "";
	// text36.value = "";
	// text37.value = "";
	// text38.value = "";
	// text39.value = "";
	// text40.value = "";
	// text41.value = "";
	// text42.value = "";
	// text43.value = "";
	// text44.value = "";
	// text45.value = "";
	clickPlease.value = "";
}

function shuffle() 
{ 
	var i, j, temp; 
	var tempLottery = lotteryNumber;

	for (i = tempLottery.length; i; i -= 1) 
	{ 
		j = Math.floor(Math.random() * i); 
		temp = tempLottery[i - 1];
		tempLottery[i - 1] = tempLottery[j]; 
		tempLottery[j] = temp; 
	} 

	sortedLotteryNumber = [];

	for(i=0; i<6; ++i)
	{
		sortedLotteryNumber.push(tempLottery[i]);
	}

	sortedLotteryNumber.sort(function (f, s) { return f-s; });
}

module.exports = {
	text1: text1,
	text2: text2,
	text3: text3,
	text4: text4,
	text5: text5,
	text6: text6,
	// text7: text7,
	// text8: text8,
	// text9: text9,
	// text10: text10,
	// text11: text11,
	// text12: text12,
	// text13: text13,
	// text14: text14,
	// text15: text15,
	// text16: text16,
	// text17: text17,
	// text18: text18,
	// text19: text19,
	// text20: text20,
	// text21: text21,
	// text22: text22,
	// text23: text23,
	// text24: text24,
	// text25: text25,
	// text26: text26,
	// text27: text27,
	// text28: text28,
	// text29: text29,
	// text30: text30,
	// text31: text31,
	// text32: text32,
	// text33: text33,
	// text34: text34,
	// text35: text35,
	// text36: text36,
	// text37: text37,
	// text38: text38,
	// text39: text39,
	// text40: text40,
	// text41: text41,
	// text42: text42,
	// text43: text43,
	// text44: text44,
	// text45: text45,
	clickPlease: clickPlease,
	pick: pick,
	shuffle: shuffle,
	remove: remove,
};
