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

        @if($penelitian->count() > 0)
        <div class="rincian-rencana">
            <table class="table">
                @foreach($penelitian as $p)
                <tbody>
                    <tr>
                        <td>Judul Penelitian</td>
                        <td></td>
                        <td>:</td>
                        <td>{{$p -> judul}}</td>
                    </tr>
                    <tr>
                        <td>Bidang Minat</td>
                        <td></td>
                        <td>:</td>
                        <td>{{$p -> bidang_minat}}</td>
                    </tr>
                    <tr>
                        <td>Promotor</td>
                        <td></td>
                        <td>:</td>
                        <td>{{$p -> promotor}}</td>
                    </tr>
                    <tr>
                        <td>Ko-Promotor 1</td>
                        <td></td>
                        <td>:</td>
                        <td>{{$p -> ko_promotor_1}}</td>
                    </tr>
                    <tr>
                        <td>Ko-Promotor 2</td>
                        <td></td>
                        <td>:</td>
                        <td>{{$p -> ko_promotor_2}}</td>
                    </tr>
                    <tr>
                        <td>Terakhir diupdate</td>
                        <td></td>
                        <td>:</td>
                        <td>{{$p -> updated_at}}</td>
                    </tr>
                </tbody>
                @endforeach
            </table>
            <button type="submit" class="btn btn-warning edt-rp">Edit Rencana</button>
            <a href="#0" class="btn btn-danger delete-rencana" style="float:right;">Delete</a>
            <form id="delete-penelitian" method="POST" action="{{ route('deletePenelitian') }}" style="display: none;">
                @csrf
                <button id="btn-delete-penelitian" type="submit" class="btn" style="display:none;">Delete</button>
            </form>
        </div>

        <div id="edit-rencana-penelitian" class="invisible">
            @foreach($penelitian as $data)
            <form id="edit-penelitian" method="POST" action="{{ route('editPenelitian') }}">
                @csrf
                <div class="form-group">
                    <label for="judul">Judul Penelitian</label>
                    <input type="text" id="judul" class="form-control input-custom" name="judul" placeholder="Isi Judul Penelitian" value=" {{ $data->judul }}">
                </div>

                <div class="form-group">
                    <label for="minat">Bidang Minat</label>
                    <input type="text" id="minat" class="form-control input-custom" name="minat" placeholder="Pilih Bidang Minat" value=" {{ $data->bidang_minat }}">
                </div>

                <div class="form-group">
                    <label for="promotor">Promotor</label>
                    <input type="text" id="promotor" class="form-control input-custom" name="promotor" placeholder="Pilih Promotor" value=" {{ $data->promotor }}">
                </div>

                <div class="form-group">
                    <label for="copromotor1">Ko-Promotor I</label>
                    <input type="text" id="copromotor1" class="form-control input-custom" name="copromotor1" placeholder="Masukkan nama Ko-Promotor I" value=" {{ $data->ko_promotor_1 }}">
                </div>

                <div class="form-group">
                    <label for="copromotor2">Ko-Promotor II</label>
                    <input type="text" id="copromotor2" class="form-control input-custom" name="copromotor2" placeholder="Masukkan nama Ko-Promotor II" value=" {{ $data->ko_promotor_2 }}">
                </div>

                <!-- <div class="form-group">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea class="form-control input-custom" rows="2"></textarea>
                    </div> -->
                <!-- <a href="#0" class="btn btn-info send-rencana" type="submit">Ajukan Rencana</a> -->
                <button type="submit" class="btn btn-info">Update</button>
                <a href="#0" class="btn btn-danger close-edit" style="float:right;">Batal</a>
            </form>
            @endforeach
        </div>

        @else
        <p class="card-text state-before">Anda Belum Memiliki Rencana Studi dan Rencana Penelitian</p>
        <div id="rencana-penelitian" class="invisible">
            <form id="daftar-penelitian" method="POST" action="{{ route('daftarPenelitian') }}">
                @csrf
                <input type="text" id="id_mahasiswa" class="form-control input-custom invisible" name="id_mahasiswa" value=" {{ Auth::user()->id }}">

                <div class="form-group">
                    <label for="judul">Judul Penelitian</label>
                    <input type="text" id="judul" class="form-control input-custom" name="judul" placeholder="Isi Judul Penelitian">
                </div>

                <div class="form-group">
                    <label for="minat">Bidang Minat</label>
                    <input type="text" id="minat" class="form-control input-custom" name="minat" placeholder="Pilih Bidang Minat">
                </div>

                <div class="form-group">
                    <label for="promotor">Promotor</label>
                    <input type="text" id="promotor" class="form-control input-custom" name="promotor" placeholder="Pilih Promotor">
                </div>

                <div class="form-group">
                    <label for="copromotor1">Ko-Promotor I</label>
                    <input type="text" id="copromotor1" class="form-control input-custom" name="copromotor1" placeholder="Masukkan nama Ko-Promotor I">
                </div>

                <div class="form-group">
                    <label for="copromotor2">Ko-Promotor II</label>
                    <input type="text" id="copromotor2" class="form-control input-custom" name="copromotor2" placeholder="Masukkan nama Ko-Promotor II">
                </div>

                <!-- <div class="form-group">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea class="form-control input-custom" rows="2"></textarea>
                    </div> -->
                <!-- <a href="#0" class="btn btn-info send-rencana" type="submit">Ajukan Rencana</a> -->
                <button type="submit" class="btn btn-info send-rencana">Ajukan Rencana</button>
                <a href="#0" class="btn btn-danger close-form" style="float:right;">Batal</a>
            </form>
        </div>
        <a href="#0" class="btn btn-info show-form state-before">Ajukan Rencana</a>
        @endif


    </div>
</div>

<script src="{{  Module::asset('Mahasiswa:js/mahasiswa.js') }}" type="text/javascript"></script>