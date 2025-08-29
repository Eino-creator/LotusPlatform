<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateAlbumRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'cover_image' => ['nullable', 'image', 'max:2048'],
            'album_photos' => ['nullable', 'array'],
            'album_photos.*' => ['image', 'max:2048'],
            'removed_photo_ids' => ['nullable', 'array'],
            'removed_photo_ids.*' => ['integer', 'exists:album__photos,id'],
        ];
    }
}
