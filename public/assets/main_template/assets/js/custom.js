$(document).ready(function() {
    $(".menu-app").click(function(event) {
        event.preventDefault();
        nav = $(this).data("val");
        name = $(this).data("nama");

        update(nav, name);
        setBtnMenu(this);
        setStateNav(name);
    });
    init()
});

function update(nav, name) {
    $('.loader').show();
    $.ajax({
        type: "GET",
        url: nav,
        success: function(htmlfile) {
            console.log(htmlfile);
            $("#container-content").html(htmlfile.html);
            sessionStorage.setItem("menu", nav);
            sessionStorage.setItem("name", name);

            $('.loader').hide();
        },
        error: function(result) {
            alert("error", result);
            $('.loader').hide();

        }
    });
}

function init() {
    // page load with json
    // sessionStorage used for store user state

    //if user session exist , force state to session state
    if (sessionStorage.getItem('menu')) {
        let menu = sessionStorage.getItem('menu');
        update(menu, sessionStorage.getItem('name'));
        setBtnMenu($('*[data-val="' + menu + '"]'));
        setStateNav(sessionStorage.getItem('name'));
    }
    // for first time, page just open with empty content only left nav and top nav
    // get home page for 1st dashboard menu, and append to content
    // update('/mahasiswa', 'Dashboard');
    // setBtnMenu($('#grupmenu a')[0]);
    // setStateNav('Dashboard');
}

function setStateNav(state) {
    $(".titlenav").html(state);
}

function setBtnMenu(target) {
    $("#grupmenu li").removeClass('active');
    $(target).parents('.nav-item').addClass('active');
}