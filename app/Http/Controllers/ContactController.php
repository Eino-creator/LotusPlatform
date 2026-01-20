<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactRequest;
use App\Http\Requests\UpdateContactRequest;
use App\Mail\ContactMail;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
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
    public function store(StoreContactRequest $request)
    {
//        $request->validate([
//            'nameContact' => 'required|string|max:255',
//            'emailContact' => 'required|email|max:255',
//            'subjectContact' => 'required|string|max:255',
//            'messageContact' => 'required|string',
//        ]);

//        Mail::raw($request->messageContact, function ($message) use ($request) {
//            $message->to('[your email address here]')
//                    ->subject($request->subjectContact)
//                    ->from($request->emailContact, $request->nameContact);
//        });

//        return back()->with('success', 'Uw mail is succesvol verzonden!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContactRequest $request, Contact $contact)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        //
    }
}
