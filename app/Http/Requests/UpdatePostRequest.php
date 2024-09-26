<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'min:4', 'max:255'],
            'slug' => ['required', 'string', 'min:4', 'max:255'],
            'content' => ['required', 'min:20'],
            'status' => ['required', 'in:draft,published,archived'],
            'featured_image' => ['nullable', 'file', 'max:10240'],
            'categories' => ['nullable', 'array', 'exists:categories,id'],
            '_method' => ['required', 'in:PUT'],
        ];
    }
}
