var Observable = require("FuseJS/Observable");

var text1 = Observable("");
var text2 = Observable("");
var text3 = Observable("");
var text4 = Observable("");
var text5 = Observable("");
var text6 = Observable("");

var lotteryNumber = [1,2,3,4,5,6,7,8,9,
					10,11,12,13,14,15,16,17,18,19,
					20,21,22,23,24,25,26,27,28,29,
					30,31,32,33,34,35,36,37,38,39,
					40,41,42,43,44];

var shuffledLotteryNumber = [];

var lotteryList = ["0","1","2","3","4","5","6","7","8","9"
				  ,"10","11","12","13","14","15","16","17","18","19"
				  ,"20","21","22","23","24","25","26","27","28","29"
				  ,"30","31","32","33","34","35","36","37","38","39"
				  ,"40","41","42","43","44","45"]

function pick()
{
	text1.value = lotteryList[shuffledLotteryNumber[0]];
	text2.value = lotteryList[shuffledLotteryNumber[1]];
	text3.value = lotteryList[shuffledLotteryNumber[2]];
	text4.value = lotteryList[shuffledLotteryNumber[3]];
	text5.value = lotteryList[shuffledLotteryNumber[4]];
	text6.value = lotteryList[shuffledLotteryNumber[5]];
	shuffledLotteryNumber = [];
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

	for(i=0; i<6; ++i)
	{
		shuffledLotteryNumber.push(tempLottery[i]);
	}

	shuffledLotteryNumber.sort(function (f, s) { return f-s; });
}

module.exports = {
	text1: text1,
	text2: text2,
	text3: text3,
	text4: text4,
	text5: text5,
	text6: text6,
	pick: pick,
	shuffle: shuffle
};
