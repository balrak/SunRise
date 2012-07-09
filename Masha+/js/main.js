/**
 * Created with JetBrains PhpStorm.
 * User: akany
 * Date: 09.07.12
 * Time: 22:01
 * To change this template use File | Settings | File Templates.
 */

window.onload = init;
function init()
{
    var pdiv = document.getElementById("New_York");
    pdiv.onclick = clk_tab;
    pdiv.onmouseover = blk;
    pdiv = document.getElementById("Boston");
    pdiv.onclick = clk_tab;
    pdiv.onmouseover = blk;
    pdiv = document.getElementById("Los_Angeles");
    pdiv.onclick = clk_tab;
    pdiv.onmouseover = blk;
}

function clk_tab(e)
{
    var pview = document.getElementById("view");
    var pimg = document.createElement("img");
    switch(e.target.id)
    {
        case "New_York" :
        {

            pimg.src = "New_York.jpg";
            pview.innerHTML ="<img style = 'height: 100%; width: 100%' src = 'New_York.jpg'>";
            break;
        }
        case "Boston" :
        {
            pimg.src = "Boston.jpg";
            pview.innerHTML = "<img style = 'height: 100%; width: 100%' src = 'Boston.jpg'>";
            break;
        }
        case "Los_Angeles" :
        {
            pimg.src = "Los_Angeles.jpg";
            pview.innerHTML = "<img style = 'height: 100%; width: 100%' src = 'Los_Angeles.jpg'>";
            break;
        }
    }
    return true;
}

function blk(e)
{
    e.target.style.cursor = "default";
    e.target.onmousedown = function()
    {
        return false;
    }
}