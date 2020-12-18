window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
  });
var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);

var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'Images/';

function nextImage(element)
{
    var img = document.getElementById(element);

    for(var i = 0;i<imgArray.length;i++)
    {
        if(imgArray[i] == img)
        {
            if(i == imgArray.length)
            {
                var j = 0;
                document.getElementById(element).src = imgArray[j].src;
                break;
            }
            else
            var j = i + 1;
            document.getElementById(element).src = imgArray[j].src;
            break;
        }
    }   
}