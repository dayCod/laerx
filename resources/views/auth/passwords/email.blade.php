@extends('layouts.app')

@section('content')

    <form method="POST" action="{{ route('password.email') }}">
        @csrf
        <div class="signin" [hidden]="login">
            <h1 class="topline">{{ __('forgot_password.header') }}</h1>
            <br />
            @if (session('status'))
                <div class="alert alert-success" role="alert">
                    {{ session('status') }}
                </div>
            @endif
            <div class="input-field">
                <input id="email" type="email" placeholder="{{ __('forgot_password.email') }}" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                @error('email')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
                @enderror
            </div>

            <div class="login-box-button">
                <button type="submit">
                    {{ __('forgot_password.submit') }}
                </button>
            </div>
        </div>
    </form>

@endsection
