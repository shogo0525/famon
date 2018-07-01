<?php

namespace App\Http\Controllers;

use App\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
        $request->validate([
            'date' => 'required',
            'price' => 'required',
            'note' => 'required',
            'category_id' => 'required',
        ]);

        $item = Item::create([
            'user_id' => auth()->user()->id,
            'date' => $request->date,
            'price' => $request->price,
            'note' => $request->note,
            'category_id' => $request->category_id,
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
            'date' => 'required|date',
            'price' => 'required',
            'note' => 'nullable'
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

    public function chart()
    {
        return Item::where('user_id', auth()->user()->id)
                    ->select(DB::raw('sum(price) as price, category_id'))
                    ->groupBy('category_id')
                    ->get();
                    
        // 他の書き方（参考に）
        // $items = DB::table('items')
        //             ->select(DB::raw('sum(price) as item_price, category_id'))
        //             ->where('user_id', auth()->user()->id)
        //             ->groupBy('category_id')
        //             ->get();
    }
}
