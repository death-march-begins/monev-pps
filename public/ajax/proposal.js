$(document).ready(function() {
    $('#datatable').DataTable({
        searching: false,
        info: false,
        columnDefs: [ 
        {
            targets: [ 2 ],
            orderable: false
        },
        {
            targets: [ 3 ],
            orderable: false
        }, 
        {
            targets: [ 4 ],
            orderable: false
        }]
        
    });

    //Buttons examples
    var table = $('#datatable-buttons').DataTable({
        lengthChange: false,
        buttons: ['copy', 'excel', 'pdf', 'colvis']
    });

    table.buttons().container()
        .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');
} );