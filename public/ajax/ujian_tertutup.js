$(document).ready(function() {
      $('#tgl-ujian').datepicker({
            uiLibrary: 'bootstrap4',
            autoclose: true,
            todayHighlight: true
      });
});

Dropzone.options.myDropzone = {
      url: 'javascript:void(0);',
      autoProcessQueue: false,
      uploadMultiple: false,
      parallelUploads: 5,
      maxFiles: 1,
      maxFilesize: 5,
      acceptedFiles: '.zip, .tar.gz',
      addRemoveLinks: true,
      init: function() {
            dzClosure = this; // Makes sure that 'this' is understood inside the functions below.

            // for Dropzone to process the queue (instead of default form behavior):
            document.getElementById("submit-all").addEventListener("click", function(e) {
                  // Make sure that the form isn't actually being sent.
                  e.preventDefault();
                  e.stopPropagation();
                  dzClosure.processQueue();
            });

            //send all the form data along with the files:
            this.on("sendingmultiple", function(data, xhr, formData) {
                  formData.append("tgl-ujian", jQuery("#tgl-ujian").val());
                  formData.append("wkt-ujian", jQuery("#wkt-ujian").val());
                  formData.append("penguji1", jQuery("#penguji1").val());
                  formData.append("penguji2", jQuery("#penguji2").val());
                  formData.append("penguji3", jQuery("#penguji3").val());
            });
      }
};
