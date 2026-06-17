<?php

namespace App\Http\Controllers;

use App\Http\Controllers\StudentController;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller {
    public function index() 
    {
        return response()->json(Student::all());
    }

    public function store(Request $request) 
    {
        $student = Student::create([
            'full_name' => $request->full_name,
            'matric_no' => $request->matric_no,
            'email' => $request->email,
            'department' => $request->department,
            'level' => $request->level,
        ]);

        return response()->json($student, 201);
    }

    public function show(Student $student)
    {
        return response()->json($student);
    }

    public function update(Request $request, Student $student)
    {
        $student->update($request->all());

        return response()->json($student);
    }

    public function destroy(Student $student)
    {
        $student->delete();

        return response()->json([
            'message' => 'Student deleted'
        ]);
    }
}



?>