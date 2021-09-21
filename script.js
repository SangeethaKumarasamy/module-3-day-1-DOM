//DOM method
//first method of DOM(createElement)
//step 1
//division here  is the user defined variable and it can be anything
// //createElement accepts the tag name as a 'string'
// var division=document.createElement('div');
// //step 2 we need to add the content to the tag
// division.innerHTML="this is div";
// //step 3 is to add to the document to the body of the HTML
// document.body.append(division);
 

//task
var container=document.createElement('div');
container.setAttribute('class','container');
var row=document.createElement('div');
row.setAttribute('class','row');
var col=document.createElement('div');
col.setAttribute('class','col');
row.append(col);
container.append(row);
document.body.append(container);

