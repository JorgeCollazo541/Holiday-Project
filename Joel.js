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
imgArray[0].src = 'Images/leather_jacket.jpeg';

imgArray[1] = new Image();
imgArray[1].src = 'Images/pro_controller.jpeg';

imgArray[2] = new Image();
imgArray[2].src = 'Images/gold_fedora.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'Images/gold_headphones.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'Images/gold_nikes.jpg';

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