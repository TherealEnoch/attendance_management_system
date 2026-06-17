<?php

namespace App\Http\Controllers;

use App\Http\Controllers\AttendanceController;
use App\Models\Attendance;
use Illuminate\Http\Request;

class AttendanceController extends Controller {
    public function index() 
    {
        return response()->json(Attendance::all());
    }

    public function store(Request $request) 
    {
        $attendance = Attendance::create([
            'student_id' => $request->student_id,
            'course_id' => $request->course_id,
            'status' => $request->status,
            'attendance_date' => $request->attendance_date
        ]);

        return response()->json($attendance, 201);
    }

    public function show(Attendance $attendance)
    {
        return response()->json($attendance);
    }

    public function update(Request $request, Attendance $attendance)
    {
        $student->update($request->all());

        return response()->json($attendance);
    }

    public function destroy(Attendance $attendance)
    {
        $student->delete();

        return response()->json([
            'message' => 'Attendance deleted'
        ]);
    }
}



?>