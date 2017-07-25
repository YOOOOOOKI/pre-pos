

'use strict';

function countSameElements(collection)
{
  var arr=[];
  arr[0]={};
  arr[0].name=collection[0];
  arr[0].summary=1;
  var num=1;//计数输出数组的元素个数
  for(var i=1;i<collection.length;i++)//遍历collection数组，如果又跟arr数组里一样的，summary+1，如果没有则加上两个属性
  {
  		var judge=0;
  		for(var j=0;j<arr.length;j++)
  		{   

  			if(collection[i]===arr[j].name)
  			{
  				arr[j].summary++;
  				judge=1;
  			}
  			
  		}
  		if(collection[i].charAt(1)==='-'||collection[i].charAt(1)===':')//判断d-5和c：8的情况
  			{ 	
  				if(collection[i].charAt(0)===collection[i-1].charAt(0))
  				{
  					arr[num-1].summary=arr[num-1].summary+parseInt(collection[i].charAt(2));
  					
  				}
  				else
  				{
  					arr[num]={};
  					arr[num].name=collection[i].charAt(0);
 					arr[num].summary=parseInt(collection[i].charAt(2));
 					num++;
 					


  				}
  				
  			}
  		if(collection[i].charAt(1)==='[')
  		{       var str="";
      			for(var k=2;k<collection[i].length-1;k++)
      			{
      				str=str+collection[i][k];
      			}
      			
      			
  				

  					console.log(str);
  					console.log(num);
  					//console.log(arr[num].summary)；
  					arr[num-1].summary=arr[num-1].summary+parseInt(str);
  					

  				
  				
  		}
  		if(judge===0&&collection[i].charAt(1)!='-'&&collection[i].charAt(1)!=':'&&collection[i].charAt(1)!='[')
  		{   arr[num]={};
 			arr[num].name=collection[i];
 			arr[num].summary=1;
 			num++;
  		}

  }
  return arr;
}
