<?php

namespace Modules\Mahasiswa\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\Mahasiswa\Entities\M_mahasiswa;
use Illuminate\Support\Facades\Auth;

class MahasiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Response
     */

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        $idMahasiswa = Auth::user()->id;
        $daftarRencana = M_mahasiswa::where('id_mahasiswa', '=', $idMahasiswa)->get();
        $data = [
            'penelitian' => $daftarRencana
        ];
        $content = view('mahasiswa::dashboard', $data)->render();
        // if ($request->ajax()) {
        //     return response()->json(['html'=>$content]);
        // }
        return view('main')->with('content', $content);
    }

    public function dashboard(Request $request)
    {
        $idMahasiswa = Auth::user()->id;
        $daftarRencana = M_mahasiswa::where('id_mahasiswa', '=', $idMahasiswa)->get();
        $data = [
            'penelitian' => $daftarRencana
        ];
        $content = view('mahasiswa::dashboard', $data)->render();
        return response()->json(['html' => $content]);
    }

    public function form(Request $request)
    {
        $content = view('mahasiswa::form')->render();
        if ($request->ajax()) {
            return response()->json(['html' => $content]);
        }
        return view('main')->with('content', $content);
    }

    public function list(Request $request)
    {
        $content = view('mahasiswa::list')->render();
        if ($request->ajax()) {
            return response()->json(['html' => $content]);
        }
        return view('main')->with('content', $content);
    }

    public function daftarPenelitian(Request $request)
    {
        $penelitian = new M_mahasiswa;
        $penelitian->id_mahasiswa = $request->id_mahasiswa;
        $penelitian->judul = $request->judul;
        $penelitian->bidang_minat = $request->minat;
        $penelitian->promotor = $request->promotor;
        $penelitian->ko_promotor_1 = $request->copromotor1;
        $penelitian->ko_promotor_2 = $request->copromotor2;
        $status = $penelitian->save();

        if ($status === true) {
            $msg = "Data berhasil disimpan";
        } else {
            $msg = "Terjadi kesalahan. Silahkan coba lagi !";
        }

        echo json_encode($msg);
        // $response = array(
        //     'status' => 'success',
        //     'msg' => 'Data berhasil disimpan',
        // );
        // return Response::json($response); 
    }

    public function deletePenelitian(Request $request){
        $idMahasiswa = Auth::user()->id;
        $delete = M_mahasiswa::where('id_mahasiswa', '=', $idMahasiswa)->delete();
        if($delete === 1){
            $msg = "Data berhasil dihapus";
        } else {
            $msg = "Terjadi kesalahan. Silahkan coba lagi !";
        }
        echo json_encode($msg);
    }

    public function editPenelitian(Request $request){
        $idMahasiswa = Auth::user()->id;
        $perubahan = [
            'judul' => $request->judul,
            'bidang_minat' => $request->minat,
            'promotor' => $request->promotor,
            'ko_promotor_1' => $request->copromotor1,
            'ko_promotor_2' => $request->copromotor2,
            'updated_at' => date('Y-m-d H:i:s')
        ];
        $change = M_mahasiswa::where('id_mahasiswa', '=', $idMahasiswa)->update($perubahan);
        if($change === 1){
            $msg = "Data berhasil diubah";
        } else {
            $msg = "Terjadi kesalahan. Silahkan coba lagi !";
        }
        echo json_encode($msg);
    }
}
