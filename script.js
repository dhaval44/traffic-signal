var topRed = document.getElementById('topRed').innerHTML;
var topYellow = document.getElementById('topYellow').innerHTML;
var topGreen = document.getElementById('topGreen').innerHTML;

var leftRed = document.getElementById('leftRed').innerHTML;
var leftYellow = document.getElementById('leftYellow').innerHTML;
var leftGreen = document.getElementById('leftGreen').innerHTML;

var rightRed = document.getElementById('rightRed').innerHTML;
var rightYellow = document.getElementById('rightYellow').innerHTML;
var rightGreen = document.getElementById('rightGreen').innerHTML;

var bottomRed = document.getElementById('bottomRed').innerHTML;
var bottomYellow = document.getElementById('bottomYellow').innerHTML;
var bottomGreen = document.getElementById('bottomGreen').innerHTML;

    
function myFun()
{

    ///////////    top -- bottom  //////////

    topRed--;
    bottomRed--;

    ///-------  top ---------///

    document.getElementById('topRed').innerHTML =topRed;
    document.getElementById('topRed').parentElement.className = "light light-inline red on";
	document.getElementById('topYellow').parentElement.className = "light light-inline yellow off";
    document.getElementById('topGreen').parentElement.className = "light light-inline green off";
    
    ///------- bottom -----///

    document.getElementById('bottomRed').innerHTML =bottomRed;
    document.getElementById('bottomRed').parentElement.className = "light light-inline red on";
	document.getElementById('bottomYellow').parentElement.className = "light light-inline yellow off";
    document.getElementById('bottomGreen').parentElement.className = "light light-inline green off";
    

    if(topRed <=45 && bottomRed <= 45){  
		topYellow--;
        bottomYellow--;

        document.getElementById('topYellow').innerHTML =topYellow;
        document.getElementById('bottomYellow').innerHTML =bottomYellow;

        document.getElementById('topYellow').parentElement.className = "light light-inline yellow on";
        document.getElementById('topRed').parentElement.className = "light light-inline red off";
        document.getElementById('topGreen').parentElement.className = "light light-inline green off";  ///
        

        document.getElementById('bottomYellow').parentElement.className = "light light-inline yellow on";
        document.getElementById('bottomRed').parentElement.className = "light light-inline red off";
        document.getElementById('bottomGreen').parentElement.className = "light light-inline green off";  ///
        
        
        if(topYellow <=35 && bottomYellow <= 35){
            topGreen--;
            bottomGreen--;

            document.getElementById('topGreen').innerHTML =topGreen;
            document.getElementById('bottomGreen').innerHTML =bottomGreen;
			
            document.getElementById('topYellow').parentElement.className = "light light-inline yellow off";
            document.getElementById('topRed').parentElement.className = "light light-inline red off";
            document.getElementById('topGreen').parentElement.className = "light light-inline green on";

            document.getElementById('bottomYellow').parentElement.className = "light light-inline yellow off";
            document.getElementById('bottomRed').parentElement.className = "light light-inline red off";
            document.getElementById('bottomGreen').parentElement.className = "light light-inline green on";
			
			if(topGreen<=10 && bottomGreen<=10){
				topYellow--;
                bottomYellow--;
                
				document.getElementById('topYellow').innerHTML =topYellow;
				document.getElementById('bottomYellow').innerHTML =bottomYellow;

				document.getElementById('topYellow').parentElement.className = "light light-inline yellow on";
				document.getElementById('topRed').parentElement.className = "light light-inline red off";
				document.getElementById('topGreen').parentElement.className = "light light-inline green off";

				document.getElementById('bottomYellow').parentElement.className = "light light-inline yellow on";
				document.getElementById('bottomRed').parentElement.className = "light light-inline red off";
                document.getElementById('bottomGreen').parentElement.className = "light light-inline green off";
                
				if(topYellow==0 && bottomYellow == 0){
					topRed = 70;
					bottomRed = 70;
					topYellow = 45;
					bottomYellow = 45;
					topGreen = 35;
					bottomGreen = 35;
				}
			}
        }
    }



    /////////    left -- right  ///////
	///////////////////////
	
	
	leftGreen--;
    rightGreen--;

    /// --------  left ------ ////

    document.getElementById('leftGreen').innerHTML =leftGreen;
    document.getElementById('leftGreen').parentElement.className = "light light green on";
	document.getElementById('leftYellow').parentElement.className = "light light yellow off";
    document.getElementById('leftRed').parentElement.className = "light light red off";

    /// ------ right ------///
    
    document.getElementById('rightGreen').innerHTML =bottomRed;
    document.getElementById('rightGreen').parentElement.className = "light light green on";
	document.getElementById('rightYellow').parentElement.className = "light light yellow off";
    document.getElementById('rightRed').parentElement.className = "light light red off";
    
    if(leftGreen <=45 && rightGreen <= 45){  
		leftYellow--;
        rightYellow--;
        document.getElementById('leftYellow').innerHTML =leftYellow;
        document.getElementById('rightYellow').innerHTML =rightYellow;

        document.getElementById('leftYellow').parentElement.className = "light light yellow on";
        document.getElementById('leftGreen').parentElement.className = "light light green off";
        document.getElementById('leftRed').parentElement.className = "light light red off";  //
        

        document.getElementById('rightYellow').parentElement.className = "light light yellow on";
        document.getElementById('rightGreen').parentElement.className = "light light green off";
        document.getElementById('rightRed').parentElement.className = "light light red off"; //
        
        
        if(leftYellow <=35 && rightYellow <= 35){
            leftRed--;
            rightRed--;
            document.getElementById('leftRed').innerHTML = leftRed;
            document.getElementById('rightRed').innerHTML = rightRed;
			
            document.getElementById('leftYellow').parentElement.className = "light light yellow off";
            document.getElementById('leftGreen').parentElement.className = "light light green off";
            document.getElementById('leftRed').parentElement.className = "light light red on";

            document.getElementById('rightYellow').parentElement.className = "light light yellow off";
            document.getElementById('rightGreen').parentElement.className = "light light green off";
            document.getElementById('rightRed').parentElement.className = "light light red on";
			
			if(leftRed<=10 && rightRed<=10){
				leftYellow--;
				rightYellow--;
				document.getElementById('leftYellow').innerHTML = leftYellow;
				document.getElementById('rightYellow').innerHTML = rightYellow;

				document.getElementById('leftYellow').parentElement.className = "light light yellow on";
				document.getElementById('leftGreen').parentElement.className = "light light green off";
				document.getElementById('leftRed').parentElement.className = "light light red off";

				document.getElementById('rightYellow').parentElement.className = "light light yellow on";
				document.getElementById('rightGreen').parentElement.className = "light light green off";
                document.getElementById('rightRed').parentElement.className = "light light red off";
                
				if(leftYellow==0 && rightYellow == 0){
					leftGreen = 70;
					rightGreen = 70;
					leftYellow = 45;
					rightYellow = 45;
					leftRed = 35;
					rightRed = 35;
				}
			}
        }
    }
}

var timer = setInterval(function()
{
myFun();
},1000);
