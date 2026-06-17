<?php

namespace App\Http\Controllers;

use App\Http\Controllers\CourseController;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller {
    public function index() 
    {
        return response()->json(Course::all());
    }

    public function store(Request $request) 
    {
        $course = Course::create([
            'course_code' => $request->course_code,
            'course_title' => $request->course_title,
            'lecturer_name' => $request->lecturer_name,
        ]);

        return response()->json($course, 201);
    }

    public function show(Course $course)
    {
        return response()->json($course);
    }

    public function update(Request $request, Course $course)
    {
        $course->update($request->all());

        return response()->json($course);
    }

    public function destroy(Course $course)
    {
        $course->delete();

        return response()->json([
            'message' => 'Course deleted'
        ]);
    }
}



?>