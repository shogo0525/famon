<?php

namespace App\Http\Controllers;

use App\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Item::where('user_id', auth()->user()->id)->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'date' => 'required',
            'price' => 'required',
            'note' => 'required'
        ]);

        $item = Item::create([
            'user_id' => auth()->user()->id,
            'category_id' => 2,
            'date' => $request->date,
            'price' => $request->price,
            'note' => $request->note,
        ]);
        return response($item, 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Item $item)
    {
        if ($item->user_id != auth()->user()->id) {
            return response()->json('Unauthorized', 401);
        }
        $data = $request->validate([
            'date' => 'required',
            'price' => 'required',
        ]);

        $item->update($data);
        return response($item, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function destroy(Item $item)
    {
        if ($item->user_id != auth()->user()->id) {
            return response()->json('Unauthorized', 401);
        }
        $item->delete();
        return response('Deleted item', 200);
    }
}
