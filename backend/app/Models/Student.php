<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = [
        'name',
        'email',
        'matric_no'
    ];

    public function attendances()
    {
        return $this->hasMany(Attendance::class);
    }
}