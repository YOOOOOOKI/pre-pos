'use strict';

function collectSameElements(a,b) {
	var arr = [];
	for(var i=0;i<a.length;i++)
    {
    	for (var j=0;j<b[0].length;j++)
        {
        		if(a[i]===b[0][j])
        		{
        			arr.push(a[i]);
        		}
        }
    }

  return arr;
}
