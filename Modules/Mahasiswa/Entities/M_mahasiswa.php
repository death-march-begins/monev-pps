<?php

namespace Modules\Mahasiswa\Entities;

use Illuminate\Database\Eloquent\Model;

class M_mahasiswa extends Model
{
    protected $table = 'rencanapenelitian';

    protected $fillable =[
        'id_mahasiswa','judul','bidang_minat','promotor','ko_promotor_1','ko_promotor_2'
    ];
}
