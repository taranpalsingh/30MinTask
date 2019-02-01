

var turn = 0;
//var array = {{"ul","um","ur"},{"cl","cm","cr"}{"dl","dm","dr"}};
//                               console.log(array);
                               


function update(cellid){
    console.log(cellid);
    console.log(turn);
    if(turn == 0){
     document.getElementById(cellid).innerHTML = "O";
     
//        document.getElementById(cellid).setAttribute("background-color", "blue");
//        document.getElementById(cellid).setAttribute("value", "O");
        turn = 1;
    }
    else if(turn == 1){
        document.getElementById(cellid).innerHTML = "X";
        
//        document.getElementById(cellid).setAttribute("value", "X");
        turn = 0;
    }    
    
    
}
