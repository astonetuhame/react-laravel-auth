<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Mail\Message;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\PasswordResetRequest;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class PasswordController extends Controller
{
    public function forgot(Request $request)
    {
        $email = $request->input('email');
        $user = User::where('email', $email)->first();
        if ($user !== null) {
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
        return response([
            'error' => 'Email doesnot exist'
        ], Response::HTTP_NOT_FOUND);
    }

    public function reset(PasswordResetRequest $request)
    {
        $passwordReset = DB::table('password_resets')->where('token', $request->input('token'))->first();
        if (!$user = User::where('email', $passwordReset->email)->first()) {
            throw new NotFoundHttpException('User not found');
        }

        $user->password = Hash::make($request->input('password'));
        $user->save();

        return response([
            'message' => 'Success'
        ]);
    }
}
