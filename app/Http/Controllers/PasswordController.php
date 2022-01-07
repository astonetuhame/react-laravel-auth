<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Mail\Message;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class PasswordController extends Controller
{
    public function forgot(Request $request)
    {
        $email = $request->input('email');
        $token = Str::random(12);

        DB::table('password_resets')->insert([
            'email' => $email,
            'token' => $token
        ]);

        Mail::send('reset', ['token' => $token], function (Message $message) use ($email) {
            $message->subject('Reset your password');
            $message->to($email);
        });

        return response([
            'message' => 'Check your email'
        ]);
    }
}
