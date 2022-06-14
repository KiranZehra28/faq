$(function(){
    $("#div-1").accordion({
        // collapsible: true,
        // active: false
    });
})

$(function(){
    $("#div-2").accordion({
        // collapsible: true,
        // active: false
    });
})

$(function(){
    $("#div-3").accordion({
        // collapsible: true,
        // active: false
    });
})

$(function(){
    $("#div-4").accordion({
        // collapsible: true,
        // active: false
    });
})

$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');

        if (value == 'all'){
            $('.all').show('1000');
        }

        else{
            $('.all').filter('.' + value).show('1000');
            $('.all').not('.' + value).hide('1000');
        }
    })
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
})
