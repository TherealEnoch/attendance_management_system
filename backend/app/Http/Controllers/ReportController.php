<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Course;
use App\Models\Attendance;

class ReportController extends Controller
{
    public function dashboardStats() 
    {
        $students = Student::count();
        $courses = Course::count();
        $attendance = Attendance::count();

        return response()->json([
            'total_students' => $students,
            'total_courses' => $courses,
            'total_attendance_records' => $attendance,
        ]);
    }

    public function attendancePercentage($studentId)
    {
        $total = \App\Models\Attendance::where('student_id', $studentId)->count();

        $present = \App\Models\Attendance::where('student_id', $studentId)->where('status', 'present')->count();

        $percentage = $total > 0 ? round(($present / $total) * 100, 2) : 0;

        return response()->json([
            'student_id' => $studentId,
            'attendance_percentage' => $percentage
        ]);
    }
}
