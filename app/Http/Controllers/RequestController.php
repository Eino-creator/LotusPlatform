<?php

namespace App\Http\Controllers;

use App\Mail\RequestMail;
use App\Models\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreRequestRequest;
use App\Http\Requests\UpdateRequestRequest;
use Mail;

class RequestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequestRequest $request)
    {
        Mail::to('einohummel@gmail.com')->send(new RequestMail($request->all()));
//        dd($request->all());
        return redirect()->back()->with('success', 'Uw aanvraag is succesvol verzonden!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
//    public function update(UpdateRequestRequest $request, Request $request)
//    {
//        //
//    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        //
    }
}
