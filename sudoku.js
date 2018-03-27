	var Arr=[
			0,0,2,9,8,0,5,0,0,
			4,0,0,0,7,0,0,1,3,
			0,3,9,6,0,4,0,7,0,
			2,0,0,0,5,6,4,0,0,
			8,4,0,3,0,0,2,0,1,
			9,0,7,0,0,1,0,8,6,
			6,0,0,7,0,5,1,3,0,
			0,9,1,4,0,0,0,0,5,
			0,2,0,0,3,0,6,0,8	
			];
	var Arr2=[
			0,0,0,2,6,0,7,0,1,
			6,8,0,0,7,0,0,9,0,
			1,9,0,0,0,4,5,0,0,
			8,2,0,1,0,0,0,4,0,
			0,0,4,6,0,2,9,0,0,
			0,5,0,0,0,3,0,2,8,
			0,0,9,3,0,0,0,7,4,
			0,4,0,0,5,0,0,3,6,
			7,0,3,0,1,8,0,0,0
			];   
	var Arr3=[
			1,0,0,4,8,9,0,0,6,
			7,3,0,0,0,0,0,4,0,
			0,0,0,0,0,1,2,9,5,
			0,0,7,1,2,0,6,0,0,
			5,0,0,7,0,3,0,0,8,
			0,0,6,0,9,5,7,0,0,
			9,1,4,6,0,0,0,0,0,
			0,2,0,0,0,0,0,3,7,
			8,0,0,5,1,2,0,0,4
			];   

	var Arr4=[
			0,2,0,6,0,8,0,0,0,
			5,8,0,0,0,9,7,0,0,
			0,0,0,0,4,0,0,0,0,
			3,7,0,0,0,0,5,0,0,
			6,0,0,0,0,0,0,0,4,
			0,0,8,0,0,0,0,1,3,
			0,0,0,0,2,0,0,0,0,
			0,0,9,8,0,0,0,3,6,
			0,0,0,3,0,6,0,9,0
			];
	var Arr4=[
			0,0,0,6,0,0,4,0,0,
			7,0,0,0,0,3,6,0,0,
			0,0,0,0,9,1,0,8,0,
			0,0,0,0,0,0,0,0,0,
			0,5,0,1,8,0,0,0,3,
			0,0,0,3,0,6,0,4,5,
			0,4,0,2,0,0,0,6,0,
			9,0,3,0,0,0,0,0,0,
			0,2,0,0,0,0,1,0,0
			];

var flag_error=0;	
var check=0;
var randomNum;var rowErr=0,colErr=0,blockErr=0;	var copyArr,strId;
$(document).ready(function(){

	Load();

	$("input").keyup(function(){								//for function for  illegal input
			if($(this).val()==0)
			$(this).val(''); 
			if($(this).val()>='A'&&$(this).val()<='Z')
			$(this).val(''); 
			if($(this).val()>='a'&&$(this).val()<='z')
			$(this).val(''); 
	});

$("#submit").click(function(){								//Submit Button Functionallity
	var strid,sum=0,flag=1,K=0;
		for (var i = 0; i < 9; i++) {
				sum=0;
				for (var j = 0; j < 9; j++) {
						strid="#i"+K;K++;
						sum=sum+Number($(strid).val());
				}
				if(sum!=45)
					flag=0;
		} 
	if(flag==1)
		alert("You Win!!!!");
	else
		alert("You Lose!!!!");
});

$("#restart").click(function(){								//for Reset Button Functionallity
	location.reload();
});
																							//for Taking Input From User
	$("#i0").keyup(function(){
		i1(0,9,this,0,0);
		block_check(0,9,this,0,0);
	});
	$("#i1").keyup(function(){
		i1(0,9,this,1,0);
		block_check(0,9,this,1,0);
	});
	$("#i2").keyup(function(){
		i1(0,9,this,2,0);
		block_check(0,9,this,2,0);
	});
	$("#i3").keyup(function(){
		i1(0,9,this,3,3);
		block_check(0,9,this,3,3);
	});
	$("#i4").keyup(function(){
		i1(0,9,this,4,3);
		block_check(0,9,this,4,3);
	});
	$("#i5").keyup(function(){
		i1(0,9,this,5,3);
		block_check(0,9,this,5,3);
	});
	$("#i6").keyup(function(){
		i1(0,9,this,6,6);
		block_check(0,9,this,6,6);
	});
	$("#i7").keyup(function(){
		i1(0,9,this,7,6);
		block_check(0,9,this,7,6);
	});
	$("#i8").keyup(function(){
		i1(0,9,this,8,6);
		block_check(0,9,this,8,6);
	});
																							//9 to 17
	$("#i9").keyup(function(){
		i1(9,18,this,9,0);
		block_check(0,9,this,9,0);
	});
	$("#i10").keyup(function(){
		i1(9,18,this,10,0);
		block_check(0,9,this,10,0);
	});
	$("#i11").keyup(function(){
		i1(9,18,this,11,0);
		block_check(0,9,this,11,0);
	});
	$("#i12").keyup(function(){
		i1(9,18,this,12,3);
		block_check(9,18,this,12,3);
	});
	$("#i13").keyup(function(){
		i1(9,18,this,13,3);
		block_check(9,18,this,13,3);
	});
	$("#i14").keyup(function(){
		i1(9,18,this,14,3);
		block_check(9,18,this,14,3);
	});
	$("#i15").keyup(function(){
		i1(9,18,this,15,6);
		block_check(9,18,this,15,6);
	});
	$("#i16").keyup(function(){
		i1(9,18,this,16,6);
		block_check(9,18,this,16,6);
	});
	$("#i17").keyup(function(){
		i1(9,18,this,17,6);
		block_check(9,18,this,17,6);
	});
																							//18 to 26
	$("#i18").keyup(function(){
		i1(18,27,this,18,0);
		block_check(18,27,this,18,0);
	});
	$("#i19").keyup(function(){
		i1(18,27,this,19,0);
		block_check(18,27,this,19,0);
	});
	$("#i20").keyup(function(){
		i1(18,27,this,20,0);
		block_check(18,27,this,20,0);
	});
	$("#i21").keyup(function(){
		i1(18,27,this,21,3);
		block_check(18,27,this,21,3);
	});
	$("#i22").keyup(function(){
		i1(18,27,this,22,3);
		block_check(18,27,this,22,3);
	});
	$("#i23").keyup(function(){
		i1(18,27,this,23,3);
		block_check(18,27,this,23,3);
	});
	$("#i24").keyup(function(){
		i1(18,27,this,24,6);
		block_check(18,27,this,24,6);
	});
	$("#i25").keyup(function(){
		i1(18,27,this,25,6);
		block_check(18,27,this,25,6);
	});
	$("#i26").keyup(function(){
		i1(18,27,this,26,6);
		block_check(18,27,this,26,6);
	});
																							//27 to 35
	$("#i27").keyup(function(){
		i1(27,36,this,27,0);
		block_check(27,36,this,27,27);
	});                            
	$("#i28").keyup(function(){
		i1(27,36,this,28,0);
		block_check(27,36,this,28,27);
	});                            
	$("#i29").keyup(function(){
		i1(27,36,this,29,0);
		block_check(27,36,this,29,27);
	});                            
	$("#i30").keyup(function(){
		i1(27,36,this,30,3);
		block_check(27,36,this,30,30);
	});                                    
	$("#i31").keyup(function(){
		i1(27,36,this,31,3);
		block_check(27,36,this,31,30);
	});          
	$("#i32").keyup(function(){
		i1(27,36,this,32,3);
		block_check(27,36,this,32,30);
	});
	$("#i33").keyup(function(){
		i1(27,36,this,33,6);
		block_check(27,36,this,33,33);
	});
	$("#i34").keyup(function(){
		i1(27,36,this,34,6);
		block_check(27,36,this,34,33);
	});
	$("#i35").keyup(function(){
		i1(27,36,this,35,6);
		block_check(27,36,this,35,33);
	});
																							//36 to 44

	$("#i36").keyup(function(){
		i1(36,45,this,36,0);
		block_check(36,45,this,36,27);
	});
	$("#i37").keyup(function(){
		i1(36,45,this,37,0);
		block_check(36,45,this,37,27);
	});
	$("#i38").keyup(function(){
		i1(36,45,this,38,0);
		block_check(36,45,this,38,27);
	});
	$("#i39").keyup(function(){
		i1(36,45,this,39,3);
		block_check(36,45,this,39,30);
	});
	$("#i40").keyup(function(){
		i1(36,45,this,40,3);
		block_check(36,45,this,40,30);
	});
	$("#i41").keyup(function(){
		i1(36,45,this,41,3);
		block_check(36,45,this,41,30);
	});
	$("#i42").keyup(function(){
		i1(36,45,this,42,6);
		block_check(36,45,this,42,33);
	}); 
	$("#i43").keyup(function(){
		i1(36,45,this,43,6);
		block_check(36,45,this,43,33);
	}); 
	$("#i44").keyup(function(){
		i1(36,45,this,44,6);
		block_check(36,45,this,44,33);
	});	
																							//45 to 53
	$("#i45").keyup(function(){
		i1(45,54,this,45,0);
		block_check(45,54,this,45,27);
	}); 
	$("#i46").keyup(function(){
		i1(45,54,this,46,0);
		block_check(45,54,this,46,27);
	}); 
	$("#i47").keyup(function(){
		i1(45,54,this,47,0);
		block_check(45,54,this,47,27);
	});	
	$("#i48").keyup(function(){
		i1(45,54,this,48,3);
		block_check(45,54,this,48,30);
	}); 
	$("#i49").keyup(function(){
		i1(45,54,this,49,3);
		block_check(45,54,this,49,30);
	}); 
	$("#i50").keyup(function(){
		i1(45,54,this,50,3);
		block_check(45,54,this,50,30);
	}); 
	$("#i51").keyup(function(){
		i1(45,54,this,51,6);
		block_check(45,54,this,51,33);
	});     
	$("#i52").keyup(function(){
		i1(45,54,this,52,6);
		block_check(45,54,this,52,33);
	});     
	$("#i53").keyup(function(){
		i1(45,54,this,53,6);
		block_check(45,54,this,53,33);
	});     
																							//54 to 62
	$("#i54").keyup(function(){
		i1(54,63,this,54,0);
		block_check(54,63,this,54,54);
	});     
	$("#i55").keyup(function(){
		i1(54,63,this,55,0);
		block_check(54,63,this,55,54);
	});     
	$("#i56").keyup(function(){
		i1(54,63,this,56,0);
		block_check(54,63,this,56,54);
	});     
	$("#i57").keyup(function(){
		i1(54,63,this,57,3);
		block_check(54,63,this,57,57);
	}); 
	$("#i58").keyup(function(){
		i1(54,63,this,58,3);
		block_check(54,63,this,58,57);
	}); 
	$("#i59").keyup(function(){
		i1(54,63,this,59,3);
		block_check(54,63,this,59,57);
	}); 
	$("#i60").keyup(function(){
		i1(54,63,this,60,6);
		block_check(54,63,this,60,60);
	}); 
	$("#i61").keyup(function(){
		i1(54,63,this,61,6);
		block_check(54,63,this,61,60);
	}); 
	$("#i62").keyup(function(){
		i1(54,63,this,62,6);
		block_check(54,63,this,62,60);
	}); 
																							//63 to 71
	$("#i63").keyup(function(){
		i1(63,72,this,63,0);
		block_check(63,72,this,63,54);
	}); 
	$("#i64").keyup(function(){
		i1(63,72,this,64,0);
		block_check(63,72,this,64,54);
	});
	$("#i65").keyup(function(){
		i1(63,72,this,65,0);
		block_check(63,72,this,65,54);
	}); 
	$("#i66").keyup(function(){
		i1(63,72,this,66,3);
		block_check(63,72,this,66,57);
	});	
	$("#i67").keyup(function(){
		i1(63,72,this,67,3);
		block_check(63,72,this,67,57);
	}); 
	$("#i68").keyup(function(){
		i1(63,72,this,68,3);
		block_check(63,72,this,68,57);
	}); 
	$("#i69").keyup(function(){
		i1(63,72,this,69,6);
		block_check(63,72,this,69,60);
	});	
	$("#i70").keyup(function(){
		i1(63,72,this,70,6);
		block_check(63,72,this,70,60);
	}); 
	$("#i71").keyup(function(){
		i1(63,72,this,71,6);
		block_check(63,72,this,71,60);
	}); 
																							//72 to 80
	$("#i72").keyup(function(){
		i1(72,81,this,72,0);
		block_check(72,81,this,72,54);
	});
	$("#i73").keyup(function(){
		i1(72,81,this,73,0);
		block_check(72,81,this,73,54);
	}); 
	$("#i74").keyup(function(){
		i1(72,81,this,74,0);
		block_check(72,81,this,74,54);
	}); 
	$("#i75").keyup(function(){
		i1(72,81,this,75,3);
		block_check(72,81,this,75,57);
	}); 
	$("#i76").keyup(function(){
		i1(72,81,this,76,3);
		block_check(72,81,this,76,57);
	}); 
	$("#i77").keyup(function(){
		i1(72,81,this,77,3);
		block_check(72,81,this,77,57);
	});	
	$("#i78").keyup(function(){
		i1(72,81,this,78,6);
		block_check(72,81,this,78,60);
	}); 
	$("#i79").keyup(function(){
		i1(72,81,this,79,6);
		block_check(72,81,this,79,60);
	}); 
	$("#i80").keyup(function(){
		i1(72,81,this,80,6);
		block_check(72,81,this,80,60);
	}); 

	$("#i81").keyup(function(){
		i1(72,81,this,81,6);
		block_check(72,81,this,81,60);
	}); 
});

function Load(){
	randomNum=Math.floor(Math.random() * (4 - 1 + 1) ) + 1;
									switch(randomNum){
												case 1:copyArr=[].concat(Arr);
												break;
												case 2:copyArr=[].concat(Arr2);
												break;
												case 3:copyArr=[].concat(Arr3);
												break;
												case 4:copyArr=[].concat(Arr4);
												break;
												case 5:copyArr=[].concat(Arr5);
												break;
									}
									for(var i = 0; i<81; i++) {
												strId="#i"+i;
													if(copyArr[i]!=0){
														$(strId).prop('disabled',true);
														$(strId).val(copyArr[i]);
														$(strId).css("background-color", "rgb(0, 255, 255)");
													}
													else   
														$(strId).val('');

									}
}


function i1(first,last,z,index,block){				//function for row and column checking
					var num=$(z).val();
					flag_error=0;
					copyArr[index]=num;
					var sum=index;
								if(index>=27&&index<=36)
									sum=sum-9*3;
								if(index>=36&&index<=45)
									sum=sum-9*4;
								if(index>=45&&index<=54)
									sum=sum-9*5;
								if(index>=54&&index<=63)
									sum=sum-9*6;
								if(index>=63&&index<=72)
									sum=sum-9*7;
								if(index>=72&&index<=81)
									sum=sum-9*8;
								if(index>=81&&index<=89)
									sum=sum-9*9;
								
								for(i=first;i<last;i++){
								
										if(sum==index){
											sum=sum+9;
											continue;
										}
										else{			
											if(num==copyArr[sum]){	//for column checking
												flag_error=1;	
												colErr=1;
											}
										sum=sum+9;
										}
								}	

								for(i=first;i<last;i++){

											if(i==index)
												continue;
											else{
												if(num==copyArr[i]){	// for row checking
														flag_error=1;
														rowErr=1;
													}
											}
								}
									
}
	

function block_check(first,last,z,index,block){		// function block check
									var num=$(z).val();
									var s=block;
										for (var h = first; h < last; h++) { //for block
												if((h%3==0)&&(h>first))
													s=s+6;
												if(s==index){
													s++;
													continue;
												}
												else{		
													if(num==copyArr[s++]){
															flag_error=1;
														blockErr=1;
														}
												}
										}
										if(flag_error==1)
												$(z).css({ 'color': 'red'});
										else
												$(z).css({ 'color': 'green'});
											
										if((rowErr==0)&&(colErr==0)&&(blockErr==0))     //Error Message
										{
											$("p").css({ 'color': 'green'});
											$("p").text ("No Error");
										}
										if(blockErr==1)
										{
											$("p").css({ 'color': 'red'});
											$("p").text ("block Error");
											blockErr=0;
										}
										if(colErr==1)
										{
											$("p").css({ 'color': 'red'});
											$("p").text("column Error");
											colErr=0;
										}
										if(rowErr==1)
										{
											$("p").css({ 'color': 'red'});
											$("p").text("rowError");
											rowErr=0;
										}

}