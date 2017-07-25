'use strict';

function countSameElements(collection) 
{
 var arr=[];
  arr[0]={};
  arr[0].key=collection[0];
  arr[0].count=1;
  var num=1;//计数输出数组的元素个数
  for(var i=1;i<collection.length;i++)//遍历collection数组，如果又跟arr数组里一样的，count+1，如果没有则加上两个属性
  {
  		var judge=0;
  		for(var j=0;j<arr.length;j++)
  		{   

  			if(collection[i]===arr[j].key)
  			{
  				arr[j].count++;
  				judge=1;
  			}
  			
  		}
  		if(collection[i].charAt(1)==='-')
  			{
  				arr[num]={};
  				arr[num].key=collection[i].charAt(0);
 				arr[num].count=parseInt(collection[i].charAt(2));
 				num++;
  			}
  		if(judge===0&&collection[i].charAt(1)!='-')
  		{   arr[num]={};
 			arr[num].key=collection[i];
 			arr[num].count=1;
 			num++;
  		}

  }
  return arr;
}
