'use strict';

function createUpdatedCollection(a, b) 
{   function sum(a)//将A中数量统计出来形成新的一个数组
	{
		var arr=[];
		arr[0]={key:"a", count:1};
		var num=1;
		for(let i=1;i<a.length;i++)
		{   var judge=0;
			for(let j=0;j<arr.length;j++)
			{
				if(a[i]===arr[j].key)
				{
					arr[j].count++;
					judge=1;
				}
			}
			if(judge===0)
			{
				arr[num]={};
				arr[num].key=a[i];
				arr[num].count=1;
				num++;
			}
		}
		return arr;
	}
	function  minus1(c,b)//将新数组c和b进行比较并将相同的满3减1
	{
		var arr1=c;
		for(let i=0;i<c.length;i++)
		{


			 for(let j=0;j<b.value.length;j++)
			 {
			 	if(c[i].key===b.value[j])
			 	{	
			 		arr1[i].count=arr1[i].count-parseInt(arr1[i].count/3);
			 	}
			 }

		  
		}

		return arr1;
	}
	
	let final=minus1(sum(a),b);
    return final;
}
