@extends('admin.layout.app')

@section('content')

    <div class="container-fluid">
        <section class="content">
            <figure>
                <blockquote class="blockquote">
                    <h2>Dil Güncelle</h2>
                </blockquote>
            </figure>
            <div class="row">
                <div class="col-12 col-lg-12">
                    <form name="form-data">
                        @method('PUT') @csrf

                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" name="code" placeholder="Dil Kodu"
                                   value="{{$language->code}}">
                            <label for="floatingFirst">Dil Kodu</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" name="title" placeholder="Dil Adı"
                                   value="{{$language->title}}">
                            <label for="floatingFirst">Dil Adı</label>
                        </div>

                        <br>

                        <div class="mt-3">
                            <button type="button" onclick="createAndUpdateButton()" class="btn btn-success">Kaydet
                            </button>
                            <a href="{{route('admin.language.index')}}" class="btn btn-danger">İptal</a>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    </div>

@endsection

@section('meta')
    <title>Dil Düzenle</title>
@endsection

@section('css')
    @include('partials.stylesheet')
@endsection

@section('js')
    <script>
        const actionUrl = '{{route('admin.language.update',$language)}}';
        const backUrl = '{{route('admin.language.index')}}';
    </script>
    @include('partials.script')
@endsection
