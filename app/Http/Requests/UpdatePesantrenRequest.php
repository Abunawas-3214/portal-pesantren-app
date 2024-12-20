<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePesantrenRequest extends FormRequest
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
            'user_id' => ['required', 'exists:users,id'],
            'name' => ['required', 'string', 'min:4', 'max:50'],
            'slug' => ['required', 'string', 'min:4', 'max:255'],
            'alamat' => ['nullable', 'string', 'min:4', 'max:255'],
            'kecamatan' => ['nullable', 'string'],
            'pendiri' => ['nullable', 'string', 'min:4', 'max:255'],
            'pengasuh' => ['nullable', 'string', 'min:4', 'max:255'],
            'tanggal_berdiri' => ['nullable', 'date'],
            'jumlah_santri' => ['nullable', 'numeric', 'min:1'],
            'gender' => ['nullable', 'in:putra,putri,putra_putri'],
            'program_unggulan' => ['nullable', 'string', 'min:4', 'max:50'],
            'contact' => ['nullable', 'numeric', 'min:62'],
            'logo' => ['nullable', 'file', 'max:10240'],
            'foto_sampul' => ['nullable', 'file', 'max:10240'],
        ];
    }
}
