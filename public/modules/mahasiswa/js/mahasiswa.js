$(document).ready(function() {

    // var current_fs, next_fs, previous_fs; //fieldsets
    // var opacity;

    $(".show-form").click(function() {
        $("#rencana-penelitian").removeClass("invisible");
        $(".state-before").addClass("invisible");
    });

    $(".close-form").click(function() {
        $(".state-before").removeClass("invisible");
        $("#rencana-penelitian").addClass("invisible");
    });

    $(".edt-rp").click(function() {
        $("#edit-rencana-penelitian").removeClass("invisible");
        $(".rincian-rencana").addClass("invisible");
    });

    $(".close-edit").click(function() {
        $("#edit-rencana-penelitian").addClass("invisible");
        $(".rincian-rencana").removeClass("invisible");
    });

    $('#daftar-penelitian').on('submit', function(event) {
        $('.loader').show();
        event.preventDefault();
        $.ajax({
            url: "/mahasiswa/daftarPenelitian",
            method: "POST",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function(msg) {
                var message = msg.replace(/\"/g, "");
                if (message == "Data berhasil disimpan") {
                    $('.loader').hide();
                    Swal.fire(
                        'Berhasil',
                        'Data berhasil disimpan !',
                        'success'
                    );
                    update("/mahasiswa/dashboard", "Dashboard");
                } else {
                    $('.loader').hide();
                    Swal.fire(
                        'Gagal',
                        message,
                        'error'
                    );
                    update("/mahasiswa/dashboard", "Dashboard");
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $('.loader').hide();
                console.log(textStatus);
                console.log(errorThrown);
                Swal.fire('Gagal', errorThrown, 'error');
            },
        });
    });

    $(".delete-rencana").click(function() {

        swal({
            title: "Apakah anda yakin ?",
            text: "Anda akan menghapus rencana penelitian ini",
            icon: "warning",
            buttons: {
                cancel: true,
                confirm: true,
            }
        }).then(function(isConfirm) {
            if (isConfirm) {
                $('.loader').show();
                $("#btn-delete-penelitian").click();
            } else {
                swal("Delete dibatalkan", {
                    title: "Cancelled",
                    buttons: false,
                    timer: 1000,
                    icon: "error",
                });
            }
        })
    });

    $('#delete-penelitian').on('submit', function(event) {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "/mahasiswa/deletePenelitian",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function(data) {
                var str = data.replace(/\"/g, "");
                if (str == "Data berhasil dihapus") {
                    $('.loader').hide();
                    Swal.fire(
                        'Berhasil',
                        str,
                        'success'
                    );
                    update("/mahasiswa/dashboard", "Dashboard");
                    // console.log("success", data);
                } else {
                    $('.loader').hide();
                    Swal.fire(
                        'Gagal',
                        str,
                        'error'
                    );
                    update("/mahasiswa/dashboard", "Dashboard");
                    // window.location.href = BASE_URL + "admin/photo";
                }
            },
            error: function(data) {
                $('.loader').hide();
                console.log("error", data);
                Swal.fire('Gagal', data, 'error');
                update("/mahasiswa/dashboard", "Dashboard");
                // window.location.href = BASE_URL + "admin/photo";
            }
        });
    });

    $('#edit-penelitian').on('submit', function(event) {
        $('.loader').show();
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "/mahasiswa/editPenelitian",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function(data) {
                var str = data.replace(/\"/g, "");
                if (str == "Data berhasil diubah") {
                    $('.loader').hide();
                    Swal.fire(
                        'Berhasil',
                        str,
                        'success'
                    );
                    update("/mahasiswa/dashboard", "Dashboard");
                    // console.log("success", data);
                } else {
                    $('.loader').hide();
                    Swal.fire(
                        'Gagal',
                        str,
                        'error'
                    );
                    update("/mahasiswa/dashboard", "Dashboard");
                    // window.location.href = BASE_URL + "admin/photo";
                }
            },
            error: function(data) {
                $('.loader').hide();
                console.log("error", data);
                Swal.fire('Gagal', data, 'error');
                update("/mahasiswa/dashboard", "Dashboard");
                // window.location.href = BASE_URL + "admin/photo";
            }
        });
    });
    // $(".next").click(function() {

    //     current_fs = $(this).parent();
    //     next_fs = $(this).parent().next();

    //     //Add Class Active
    //     $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //     //show the next fieldset
    //     next_fs.show();
    //     //hide the current fieldset with style
    //     current_fs.animate({ opacity: 0 }, {
    //         step: function(now) {
    //             // for making fielset appear animation
    //             opacity = 1 - now;

    //             current_fs.css({
    //                 'display': 'none',
    //                 'position': 'relative'
    //             });
    //             next_fs.css({ 'opacity': opacity });
    //         },
    //         duration: 600
    //     });
    // });

    // $(".previous").click(function() {

    //     current_fs = $(this).parent();
    //     previous_fs = $(this).parent().prev();

    //     //Remove class active
    //     $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    //     //show the previous fieldset
    //     previous_fs.show();

    //     //hide the current fieldset with style
    //     current_fs.animate({ opacity: 0 }, {
    //         step: function(now) {
    //             // for making fielset appear animation
    //             opacity = 1 - now;

    //             current_fs.css({
    //                 'display': 'none',
    //                 'position': 'relative'
    //             });
    //             previous_fs.css({ 'opacity': opacity });
    //         },
    //         duration: 600
    //     });
    // });

    // $('.radio-group .radio').click(function() {
    //     $(this).parent().find('.radio').removeClass('selected');
    //     $(this).addClass('selected');
    // });

    // $(".submit").click(function() {
    //     return false;
    // })

});