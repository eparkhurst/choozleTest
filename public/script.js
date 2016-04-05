$(document).ready(
  displayData
)

var data = [4,6,'Hi',15.4432,'Noob',47,'Omaha',4.345,'Hike',12];
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

function group(data)
{
    var strings = [];
    var integers = [];
    var floats = []

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
    return{
      strings:strings,
      integers:integers,
      floats:floats
    }
}

function displayGroup()
{
  if(grouped==false)
  {
    var groupedObject = group(data);

    appendArray("strings", groupedObject.strings);
    appendArray("integers", groupedObject.integers);
    appendArray("floats", groupedObject.floats);
  }
}

function sort()
{
    $('div#sort > div > div').empty();
    var groupedObject = group(data);

    sortedStrings = groupedObject.strings.sort();
    sortedIntegers = groupedObject.integers.sort(sortNumbers);
    sortedFloats = groupedObject.floats.sort(sortNumbers);

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


// module.exports={
//   isFloat : isFloat,
//   group:group
// }
