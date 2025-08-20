<?php

namespace App\Http\Controllers;

use App\Models\Album;
use App\Http\Requests\StoreAlbumRequest;
use App\Http\Requests\UpdateAlbumRequest;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AlbumController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Album $album)
    {
        $albums = Album::all();

        return Inertia::render('Albums/Index', [
            'albums' => $albums,
        ]);
    }

    public function authIndex()
    {
        $albums = Album::all();

        return Inertia::render('Auth/Albums/AlbumList', [
            'albums' => $albums,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Auth/Albums/AlbumCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAlbumRequest $request)
    {
        // Validate the incoming request
        $validated = $request->validated();

        // Handle file upload for main_image
        if ($request->hasFile('main_image')) {
            // Store the file in the 'cover_images' directory on the 'public' disk
            $validated['cover_image'] = $request->file('main_image')->store('cover_images', 'public');
        } else {
            // Optionally set a default image if no file is uploaded
            $validated['cover_image'] = null; // Or 'default_image.jpg' if you have a placeholder
        }

        // Create the album
        $album = Album::create([
            'title' => $validated['title'],
            'description' => $validated['description'],
            'cover_image' => $validated['cover_image'],
        ]);

        // Redirect to the albums list
        return redirect()->route('albums.auth.index')->with('success', 'Album created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Album $album)
    {
        $albums = Album::with('photos')->get();
        return Inertia::render('Albums/Show', [
            'albumId' => $album->id,
            'albums' => $albums,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Album $album)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAlbumRequest $request, Album $album)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Album $album)
    {
        //
    }
}
