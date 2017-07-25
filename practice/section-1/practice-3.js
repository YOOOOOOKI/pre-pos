'use strict';

function collectSameElements(a, b) 
{
	
	var arr = [];
		for(var i=0;i<a.length;i++)
	    {
	    		for (var j=0;j<b.value.length;j++)
        		{
        		if(a[i]===b.value[j])
        		{
        			arr.push(a[i]);
        		}
       			}
	    }

 	 return arr;
}
