<div class="card card-nav-tabs">
    <h4 class="card-header card-header-info">TAHAPAN PENELITIAN DISERTASI</h4>
    <div class="card-body">
        <!-- <h4 class="card-title">Special title treatment</h4>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#0" class="btn btn-primary">Go somewhere</a> -->
        <div class="container">
            <div class="row">
                <div class="stepper-container stepper-container-sm">
                    <!-- progressbar -->
                    <ul id="progressbar" class="progressbar-sm">
                        <li class="active" id="renja">
                            <div class="bullet"><strong>Pengajuan Rencana Penelitian</strong></div>
                        </li>
                        <li id="propen">
                            <div class="bullet"><strong>Proposal Penelitian</strong></div>
                        </li>
                        <li id="laporan1">
                            <div class="bullet"><strong>Laporan Kemajuan I</strong></div>
                        </li>
                        <li id="laporan2">
                            <div class="bullet"><strong>Laporan Kemajuan II</strong></div>
                        </li>
                        <li id="laporan3">
                            <div class="bullet"><strong>Laporan Kemajuan III</strong></div>
                        </li>
                        <li id="laporan4">
                            <div class="bullet"><strong>Laporan Kemajuan IV</strong></div>
                        </li>
                        <li id="laporan5">
                            <div class="bullet"><strong>Laporan Kemajuan V</strong></div>
                        </li>
                    </ul> <!-- fieldsets -->
                </div>
            </div>
        </div>
    </div>
</div>

<div class="card card-nav-tabs">
    <div class="card-body">
        <h4 class="card-title">RINCIAN RENCANA PENELITIAN YANG SEDANG BERJALAN</h4>
        <hr>

        <p class="card-text state-before">Anda Belum Memiliki Rencana Studi dan Rencana Penelitian</p>
        <div id="rencana-penelitian" class="invisible">
            <form method="" action="">
                <div class="form-group">
                    <label for="judul">Judul Penelitian</label>
                    <input type="text" id="judul" class="form-control input-custom" placeholder="Isi Judul Penelitian">
                </div>

                <div class="form-group">
                    <label for="minat">Bidang Minat</label>
                    <input type="text" id="minat" class="form-control input-custom" placeholder="Pilih Bidang Minat">
                </div>

                <div class="form-group">
                    <label for="promotor">Promotor</label>
                    <input type="text" id="promotor" class="form-control input-custom" placeholder="Pilih Promotor">
                </div>

                <div class="form-group">
                    <label for="copromotor1">Ko-Promotor I</label>
                    <input type="text" id="copromotor1" class="form-control input-custom" placeholder="Masukkan nama Ko-Promotor I">
                </div>

                <div class="form-group">
                    <label for="copromotor2">Ko-Promotor II</label>
                    <input type="text" id="copromotor2" class="form-control input-custom" placeholder="Masukkan nama Ko-Promotor II">
                </div>

                <!-- <div class="form-group">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea class="form-control input-custom" rows="2"></textarea>
                    </div> -->
                <a href="#0" class="btn btn-info send-rencana" type="submit">Ajukan Rencana</a>
                <a href="#0" class="btn btn-danger close-form" style="float:right;">Batal</a>
            </form>
        </div>
        <a href="#0" class="btn btn-info show-form state-before">Ajukan Rencana</a>

    </div>
</div>

<script src="{{  Module::asset('Mahasiswa:js/mahasiswa.js') }}" type="text/javascript"></script>