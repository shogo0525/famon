<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        return Category::where('user_id', auth()->user()->id)->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
        ]);

        $category = Category::create([
            'user_id' => auth()->user()->id, // TODO: Change user_id to family_id
            'name' => $request->name,
        ]);
        return response($category, 201);
    }
}
