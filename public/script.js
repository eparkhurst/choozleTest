$(document).ready(
  displayData
)

var data = [4,6,'Hi',15.4432,'Noob',47,'Omaha',4.345,'Hike',12];
var strings = [];
var integers = [];
var floats = []
var grouped = false;


function isFloat(n)
{
    return Number(n) === n && n % 1 !== 0;
}

function sortNumbers(a,b)
{
   return a-b;
}

function addToDom(where, val)
{
   $('#'+where+' > div').append('<div>'+val+'</div>');
}

function appendArray(val, array)
{
  for (var i = 0; i < array.length; i++) {
    addToDom(val , array[i])
  }
}

function group()
{
  if(grouped === false){

    for(var i=0;i<data.length;i++)
    {
        if(isNaN(data[i]))
        {
            strings.push(data[i]);
        }
        else
        {
            if(isFloat(data[i]))
            {
                floats.push(data[i]);
            }
            else
            {
                integers.push(data[i]);
            }
        }
    }
    grouped = true;
  }
}

function displayGroup()
{
  if(grouped==false)
  {
    group();

    appendArray("strings",strings);
    appendArray("integers",integers);
    appendArray("floats",floats);
  }
}

function sort()
{
    $('div#sort > div > div').empty();

    sortedStrings = strings.sort();
    sortedIntegers = integers.sort(sortNumbers);
    sortedFloats = floats.sort(sortNumbers);

    appendArray("sorted_strings",sortedStrings);
    appendArray("sorted_integers",sortedIntegers);
    appendArray("sorted_floats",sortedFloats);
}

function displayData(){
    for(var i=0;i<data.length;i++)
    {
        $('#data_set').append(data[i]);

        if(i < data.length-1)
        {
            $('#data_set').append(', ');
        }
    }
}
