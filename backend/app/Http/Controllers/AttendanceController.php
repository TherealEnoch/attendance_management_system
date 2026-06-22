<?php

namespace App\Http\Controllers;

use App\Http\Controllers\AttendanceController;
use App\Models\Attendance;
use App\Models\Student;
use Illuminate\Http\Request;

class AttendanceController extends Controller {
    public function index() 
    {
        return response()->json(Attendance::all());
    }

    public function store(Request $request) 
    {
        $attendance = Attendance::create([
            'student_name' => $request->student_name,
            'course_code' => $request->course_code,
            'status' => $request->status,
            'attendance_date' => $request->attendance_date
        ]);

        return response()->json($attendance, 201);
    }

    public function analytics()
{
    $students = Student::with('attendances')->get();

    $report = $students->map(function ($student) {

        $total = $student->attendances->count();

        $present = $student->attendances
            ->where('status', 'present')
            ->count();

        $percentage = $total > 0
            ? round(($present / $total) * 100, 2)
            : 0;

        return [
            'student' => $student->full_name,
            'present' => $present,
            'total' => $total,
            'percentage' => $percentage
        ];
    });

    return response()->json($report);
}

    public function show(Attendance $attendance)
    {
        return response()->json($attendance);
    }

    public function update(Request $request, Attendance $attendance)
    {
        $attendance->update($request->all());

        return response()->json($attendance);
    }

    public function destroy(Attendance $attendance)
    {
        $attendance->delete();

        return response()->json([
            'message' => 'Attendance deleted'
        ]);
    }
}



?>