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
    pdiv = document.getElementById("Boston");
    pdiv.onclick = clk_tab;
    pdiv = document.getElementById("Los_Angeles");
    pdiv.onclick = clk_tab;
}

function clk_tab(e)
{
    var pview = document.getElementById("view");
    switch(e.target.id)
    {
        case "New_York" :
        {
            pview.images = "New_York"
            break;
        }
        case "Boston" :
        {
            pview.images = "New_York"
            break;
        }
        case "Los_Angeles" :
        {
            pview.images = "New_York"
            break;
        }
    }
    return true;
}