<?php

namespace App\Http\Controllers;

use App\Models\Album;
use App\Http\Requests\StoreAlbumRequest;
use App\Http\Requests\UpdateAlbumRequest;
use DB;
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
        $validated = $request->validated();

        // Handle main_image upload
        if ($request->hasFile('main_image')) {
            $validated['cover_image'] = $request->file('main_image')->store('cover_images', 'public');
        } else {
            $validated['cover_image'] = null;
        }

        // Create the album first
        $album = Album::create([
            'title' => $validated['title'],
            'description' => $validated['description'],
            'cover_image' => $validated['cover_image'],
        ]);

        // Handle album_photos upload
        if ($request->hasFile('album_photos')) {
            foreach ($request->file('album_photos') as $image) {
                $path = $image->store('album_photos', 'public');
                $filename = $image->getClientOriginalName();

                // Create a record in album__photos table
                DB::table('album__photos')->insert([
                    'album_id' => $album->id,
                    'photo_path' => $path,
                    'filename' => $filename,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }

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
        return Inertia::render('Auth/Albums/AlbumEdit', [
            'album' => $album,
            'photos' => $album->photos,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAlbumRequest $request, Album $album)
    {
        // Validate the request data
        $validated = $request->validated();
        // Update album details
        $album->update([
            'title' => $validated['title'],
            'description' => $validated['description'],
        ]);
        // Handle new cover image upload
        if ($request->hasFile('main_image')) {
            // Delete old cover image if exists
            if ($album->cover_image) {
                Storage::disk('public')->delete($album->cover_image);
            }
            $album->cover_image = $request->file('main_image')->store('cover_images', 'public');
            $album->save();
        }
        // Handle new album photos upload
        if ($request->hasFile('album_photos')) {
            foreach ($request->file('album_photos') as $image) {
                $path = $image->store('album_photos', 'public');
                $filename = $image->getClientOriginalName();
                // Create a record in album__photos table
                DB::table('album__photos')->insert([
                    'album_id' => $album->id,
                    'photo_path' => $path,
                    'filename' => $filename,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Album $album)
    {
        // Delete associated photos from storage and database
        foreach ($album->photos as $photo) {
            Storage::disk('public')->delete($photo->photo_path);
            DB::table('album__photos')->where('id', $photo->id)->delete();
        }

        // Delete cover image from storage
        if ($album->cover_image) {
            Storage::disk('public')->delete($album->cover_image);
        }

        // Delete the album
        $album->delete();

        return redirect()->route('albums.auth.index')->with('success', 'Album deleted successfully!');
    }
}
