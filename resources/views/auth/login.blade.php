@extends('layouts.app')

@section('content')
    <form method="POST" action="{{ route('login') }}">
        @csrf
        <div class="signin" [hidden]="login">
            <h1 class="topline">{{ __('login.header') }}</h1>
            <br />
            <div class="input-field">
                <input id="tc" type="text" placeholder="{{ __('login.tckn') }}" class="@error('tc') is-invalid @enderror" name="tc" value="{{ old('tc') }}" required autocomplete="tc" autofocus maxlength="11">
                @error('tc')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                @enderror
            </div>

            <div class="input-field">
                <input id="password" type="password" placeholder="{{ __('login.password') }}" class="@error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
                @error('password')
                <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
                @enderror
            </div>

            <div class="action">
                <a class="forgot" href="{{ route('password.request') }}">{{ __('login.forgot_password') }}</a>
            </div>

            <div class="login-box-button">
                <button type="submit">
                    {{ __('login.join') }}
                </button>
            </div>

            <footer>
                <p class="text-center mt-5">
                    <a href="{{ route('static.page.privacy-policy') }}" class="text-decoration-none small" style="color: #909090" target="_blank">{{ __('login.footer') }}</a>
                </p>
            </footer>
        </div>
    </form>
@endsection
