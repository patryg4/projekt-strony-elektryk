$(document).ready(function()
{
    $("a").on('click', function(event) 
    {
        if (this.hash !== "") 
        {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            }, 800, function()
            {
                window.location.hash = hash;
            });
        }
    });
        
    $("#kursk").click(function()
    {
        $("#kursk_hid").slideToggle("slow");
        $('html, body').animate(
        {
            scrollTop: $("#kursk_hid").offset().top - 150
        }, 1500);
    });

    $("#alamein").click(function()
    {
        $("#alamein_hid").slideToggle("slow");
        $('html, body').animate(
        {
            scrollTop: $("#alamein_hid").offset().top - 150
        }, 1500);
    });

    $("#falaise").click(function()
    {
        $("#falaise_hid").slideToggle("slow");
        $('html, body').animate(
        {
            scrollTop: $("#falaise_hid").offset().top - 150
        }, 1500);
    });

    $("#hannut").click(function()
    {
        $("#hannut_hid").slideToggle("slow");
        $('html, body').animate(
        {
            scrollTop: $("#hannut_hid").offset().top - 150
        }, 1500);
    });

    $("#overlord").click(function()
    {
        $("#overlord_hid").slideToggle("slow");
        $('html, body').animate(
        {
            scrollTop: $("#overlord_hid").offset().top - 150
        }, 1500);
    });

    $("#rosienie").click(function()
    {
        $("#rosienie_hid").slideToggle("slow");
        $('html, body').animate(
        {
            scrollTop: $("#rosienie_hid").offset().top - 150
        }, 1500);
    });

    $("#tobruk").click(function()
    {
        $("#tobruk_hid").slideToggle("slow");
        $('html, body').animate(
        {
            scrollTop: $("#tobruk_hid").offset().top - 150
        }, 1500);
    });
});

function theme_picker() 
{
    document.getElementById("main").classList.toggle("dark_mode");
    document.getElementById("footer").classList.toggle("dark_mode");
}