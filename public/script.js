
var data = [4,6,'Hi',15.4432,'Noob',47,'Omaha',4.345,'Hike',12];

function isFloat(n)
{
    return Number(n) === n && n % 1 !== 0;
}

function sortNumbers(a,b){
   return a-b;
}

function append(where, val) { $('#'+where+' > div').append('<div>'+val+'</div>'); };

var strings = [];
var integers = [];
var floats = []
var grouped = false;

function group()
{
  if(grouped ==false){

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

function displayGroup(){
  group();
  appendArray("strings",strings);
  appendArray("integers",integers);
  appendArray("floats",floats);
}



function appendArray(val, array){
  for (var i = 0; i < array.length; i++) {
    append(val , array[i])
  }
}



function sort()
{
    group();

    $('div#sort > div > div').empty();

    strings.sort();
    integers.sort(sortNumbers);
    floats.sort(sortNumbers);

    appendArray("sorted_strings",strings);
    appendArray("sorted_integers",integers);
    appendArray("sorted_floats",floats);
}

$(document).ready(
    function()
    {
        for(var i=0;i<data.length;i++)
        {
            $('#data_set').append(data[i]);

            if(i < data.length-1)
            {
                $('#data_set').append(', ');
            }
        }
    }
)
