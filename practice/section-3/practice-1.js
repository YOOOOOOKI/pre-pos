'use strict';

function createUpdatedCollection(a, b) 
{

	var arr=a;
		for(let i=0;i<a.length;i++)
		{


			 for(let j=0;j<b.value.length;j++)
			 {
			 	if(a[i].key===b.value[j])
			 	{
			 		arr[i].count--;
			 	}
			 }

		  
		}

	return arr;
}
