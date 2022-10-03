
function collinear([x1,  y1,  x2, y2,  x3,  y3])
{
    var area = x1 * (y2 - y3) +
            x2 * (y3 - y1) +
            x3 * (y1 - y2)

    if(area === 0 ){
     return "Yes"
    }
    return " No"
  }

const Input = [1,1,1,4,2,5]
const result = collinear(Input)
consol  e.log(result)

// Yes
