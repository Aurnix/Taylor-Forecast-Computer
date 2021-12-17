/* MIT License

Copyright (c) 2021 Joseph Sherman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */


// Javascript Implementation of the "Taylor Forecast Computer", a mid-century paper slide rule
// Gives a forecast 12-24 hours in advance
// Written by Joseph Sherman, 17 Dec 2021
//
// "Wind" is the Cardnal Wind Direction - N,NE,E, etc.
// "Pressure" corresponds to the Falling/Rising Barometer Case Assignments
// "Trend" selects the "rising or steady" and "falling slowly/rapidly". The original slide rule has two sides, and this selects the appropriate forecast set
// For any 12 hour period:
// >= 0.2 InHG - Rapididly changing
// 0.05-2 inHg - Slowly changing
//  <0.05 inHg - Steady

function taylorCaster (wind, pressure, trend){
    var text; // <-- Returned variable
	
// Falling Barometer Case Line Assignments
// Above 30.2 InHG
// 	Falling Rapidly - 1
// 	Falling Slowly - 4
// 30-30.2 InHG
// 	Falling Rapidly - 2 
// 	Falling Slowly - 5
// Below 30 InHG
// 	Falling Rapidly - 3
// 	Falling Slowly - 6
	
	if (trend = 0){	//Falling Barometer
case "N":{
	switch(pressure){

case 1: text = "Cloudy, Rain Probable, Warmer"break;
case 2: text = "Rain and Colder"; break;
case 3: text = "Severe gale, Heavy Rain, in Winter Cold Wave"break;
case 4: text = "Unsettled, Probably Cloudy";break;
case 5: text = "Unsettled, Probably Cloudy";break;
case 6: text = "Unsettled";break;
}}
case "NE":{
	switch(pressure){
case 1: text = "Rain, Increasing Winds";break;
case 2: text = "Increasing Wind, Rain";break;
case 3: text = "Severe gale, Heavy Rain, in Winter Cold Wave";break;
case 4: text = "Summer: Light Winds; Winter: Rain";break;
case 5: text = "Rain";break;
case 6: text = "Rain, Cooler";break;
}}
case "E":{
	switch(pressure){
case 1:text = "Rain, Increasing Winds";break;
case 2:text = "Increasing Winds, Rain";break;
case 3:text = "Severe Storm, Rain";break;
case 4:text = "Summer: Unsettled; Winter: Rain";break;
case 5:text = "Rain";break;
case 6:text = "Rain";break;
}}
case "SE":{
	switch(pressure){
case 1:text = "Cloudy and Rain";break;
case 2:text = "Increasing Wind, Rain- Warmer";break;
case 3:text = "Severe Storm Imminent";break;
case 4:text = "Cloudy and Warmer";break;
case 5:text = "Rain and Warmer";break;
case 6:text = "Rain";break;
}}
case "S":{
	switch(pressure){
case 1:text = "Rain";break;
case 2:text = "Increasing Wind, Rain";break;
case 3:text = "Stormy; In Winter, Colder";break;
case 4:text = "Increasing Cloudiness";break;
case 5:text = "Rain and Warmer";break;
case 6:text = "Rain";break;
}}
case ("SW":{
	switch(pressure){
case 1:text = "Cloudy and Warmer";break;
case 2:text = "Rain and Colder";break;
case 3:text = "Rain";break;
case 4:text = "Fair and Warmer";break;
case 5:text = "Unsettled- Warmer";break;
case 6:text = "Unsettled- Cloudy";break;
}}
case ("W":{
	switch(pressure){
case 1:text = "Increasing Cloudiness";break;
case 2:text = "Rain";break;
case 3:text = "Rain";break;
case 4:text = "Rising Temperature and Fair";break;
case 5:text = "Fair and Warmer";break;
case 6:text = "Unsettled";break;
}}
 case "NW":{
	 switch(pressure){
case 1:text = "Unsettled, Rain if Winds Comtinue";break;
case 2:text = "Increasing Cloudiness";break;
case 3:text = "Unsettled";break;
case 4:text = "Rising Temperature, And Fair";break;
case 5:text = "Unsettled";break;
case 6:text = "Unsettled";break;
}}}}
 
 }
 
////// Rising and/or Steady barometer case line assignments
// Above 30.2
// 	Rising Rapidly or Slowly - 1
// 	Steady - 4
// 30-30.2
// 	Rising Rapidly or Slowly - 2
// 	Steady - 5
// Below 30
// 	Rising Rapidly or Slowly - 3
// 	Steady - 6

else if ( trend = 1){ // Rising Barometer
case "N":{
	switch(pressure){
case 1:text = "Fair and Cooler";break;
case 2:text = "Fair and Cooler";break;
case 3:text = "Fair and Cooler";break;
case 4:text = "No Change";break;
case 5:text = "No Change";break;
case 6:text = "No Change";break;
}}
case "NE":{
switch(pressure){
case 1:text = "Fair";break;
case 2:text = "Fair";break;
case 3:text = "Fair and Cooler";break;
case 4:text = "No Change";break;
case 5:text = "No Change";break;
case 6:text = "No Change";break;
}}
case "E":{
switch(pressure){
case 1:text = "Fair and Cooler";break;
case 2:text = "Fair, Colder in Winter";break;
case 3:text = "Fair";break;
case 4:text = "No Change";break;
case 5:text = "No Change";break;
case 6:text = "No Change";break;
}}
case "SE":{
switch(pressure){
case 1:text = "Fair";break;
case 2:text = "Fair and Warmer";break;
case 3:text = "Fair";break;
case 4:text = "No Change";break;
case 5:text = "No Change";break;
case 6:text = "No Change";break;
}}
case "S":{
switch(pressure){
case 1:text = "Fair";break;
case 2:text = "Fair";break;
case 3:text = "Fair";break;
case 4:text = "No Change";break;
case 5:text = "No Change";break;
case 6:text = "No Change";break;
}}
case "SW":{
switch(pressure){
case 1:text = "Fair";break;
case 2:text = "Fair";break;
case 3:text = "Fair";break;
case 4:text = "No Change";break;
case 5:text = "No Change";break;
case 6:text = "No Change";break;
}}
case "W":{
switch(pressure){
case 1:text = "Fair";break;
case 2:text = "Fair and Cooler";break;
case 3:text = "Fair and Colder";break;
case 4:text = "No Change";break;
case 5:text = "Fair";break;
case 6:text = "No Change";break;
}}
case "NW":{
switch(pressure){
case 1:text = "Fair, Much Colder";break;
case 2:text = "Fair and Cooler";break;
case 3:text = "Fair and Colder";break;
case 4:text = "No Change";break;
case 5:text = "Fair";break;
case 6:text = "No Change";break;
}}}
return text;
}
