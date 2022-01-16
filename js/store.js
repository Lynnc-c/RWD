$(function(){
    $("#markerR").click(function(){
        $("#locationTitle").removeClass('locationTitle');
        $("#locationTitle").removeClass('locationTitleP');
        $("#locationTitle").addClass('locationTitleR');
        $("#locationInformation").removeClass('locationInformation');
        $("#locationInformation").removeClass('locationInformationP');
        $("#locationInformation").addClass('locationInformationR');
        $("#locationInformation").html('<h3>中友百貨A棟 3F</h3><p>台中市北區三民路三段161號</p>');
    })

    $("#markerY").click(function(){
        $("#locationTitle").removeClass('locationTitleR');
        $("#locationTitle").removeClass('locationTitleP');
        $("#locationTitle").addClass('locationTitle');
        $("#locationInformation").removeClass('locationInformationR');
        $("#locationInformation").removeClass('locationInformationP');
        $("#locationInformation").addClass('locationInformation');
        $("#locationInformation").html('<h3>新光三越A11 1F</h3><p>台北市信義區松壽路11號</p>');
    })

    $("#markerP").click(function(){
        $("#locationTitle").removeClass('locationTitle');
        $("#locationTitle").removeClass('locationTitleR');
        $("#locationTitle").addClass('locationTitleP');
        $("#locationInformation").removeClass('locationInformation');
        $("#locationInformation").removeClass('locationInformationR');
        $("#locationInformation").addClass('locationInformationP');
        $("#locationInformation").html('<h3>大遠百 11F</h3><p>高雄市苓雅區三多四路21號</p>');
    })
});
