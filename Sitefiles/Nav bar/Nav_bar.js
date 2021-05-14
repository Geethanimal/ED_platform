//primary colors
var primary_dg="#1E352F";
var primary_mg="#2D4A42";
var primary_lg="#35574D";
var primary_w="#FFFFFF";

var secondary_gra="#858585";
var secondary_lg="#14CC0E";

var accent_ora="#FF8C00";
var accent_red="#FF0606";
var accent_bl="#1A82F9";
//hover colors
var primary_dg_hover="#142420";
var primary_mg_hover="#233A34";
var primary_lg_hover="#2D4941";
var primary_w_hover="#F2F0F0";
//Disabled colors
var primary_dg_dis="#2B3533";
var primary_mg_dis="#3A4945";
var primary_lg_dis="#4D5855";
var primary_w_dis="#E1DEDE";

var secondary_gra_dis="#5E5C5C";
var secondary_lg_dis="#82C580";

var accent_ora_dis="#FEC279";
var accent_red_dis="#FC7878";
var accent_bl_dis="#7FB9FA";

//nav dropdown button


function main_dropdown_a_click(){
    
    document.getElementById("main_dropdown_wrapper").style.borderColor=secondary_lg;
    document.getElementById("Path_3221").style.fill=secondary_lg;
    document.getElementById("dropdown_view").style.display="block";
}

window.addEventListener('mouseup', function(event){
    var dp_v = document.getElementById("dropdown_view");
    if(event.target != dp_v && event.target.parentNode != dp_v){
        dp_v.style.display="none";
        document.getElementById("Path_3221").style.fill=secondary_gra;
        document.getElementById("main_dropdown_wrapper").style.borderColor=primary_mg;
    }
});