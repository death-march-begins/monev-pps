<?php

namespace Modules\Mahasiswa\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

class MahasiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index(Request $request)
    {   
        $content = view('mahasiswa::dashboard')->render();
        if ($request->ajax()) {
            return response()->json(['html'=>$content]);
        }
        return view('main')->with('content',$content);
    }

    public function form(Request $request)
    {
        $content = view('mahasiswa::form')->render();
        if ($request->ajax()) {
            return response()->json(['html'=>$content]);
        }
        return view('main')->with('content',$content);
    }

    public function list(Request $request)
    {
        $content = view('mahasiswa::list')->render();
        if ($request->ajax()) {
            return response()->json(['html'=>$content]);
        }
        return view('main')->with('content',$content);
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create()
    {
        return view('mahasiswa::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Response
     */
    public function show($id)
    {
        return view('mahasiswa::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Response
     */
    public function edit($id)
    {
        return view('mahasiswa::edit');
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }
}
