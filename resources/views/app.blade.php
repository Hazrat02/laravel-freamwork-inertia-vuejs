<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel-freamwork') }}</title>
        {{-- @include('partials.seo') --}}
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        {{-- <link rel="stylesheet" href="{{asset('/assets/frontend')}}"> --}}
        
        {{-- <link rel="stylesheet" href="{{ $cssPath }}"> --}}
        
        <link rel="preload" href="{{asset('assets/frontend/fonts/riode115b.ttf?5gap68" as="font" type="font/woff2')}}" crossorigin="anonymous">
        <link rel="preload" href="{{asset('assets/frontend/vendor/fontawesome-free/webfonts/fa-solid-900.woff2')}}" as="font" type="font/woff2"
            crossorigin="anonymous">
        <link rel="preload" href="{{asset('assets/frontend/vendor/fontawesome-free/webfonts/fa-brands-400.woff2')}}" as="font" type="font/woff2"
            crossorigin="anonymous">
        <script>
            WebFontConfig = {
                google: { families: ['Poppins:300,400,500,600,700,800'] }
            };
            (function (d) {
                var wf = d.createElement('script'), s = d.scripts[0];
                wf.src = './assets/frontend/js/webfont.js';
                wf.async = true;
                s.parentNode.insertBefore(wf, s);
            })(document);
        </script>
    
    
    
        <link rel="stylesheet" type="text/css" href="{{asset('assets/frontend/vendor/fontawesome-free/css/all.min.css')}}">
        <link rel="stylesheet" type="text/css" href="{{asset('assets//frontend/vendor/animate/animate.min.css')}}">
    
        <!-- Plugins CSS File -->
        <link rel="stylesheet" type="text/css" href="{{asset("assets/frontend/vendor/magnific-popup/magnific-popup.min.css")}}">
        <link rel="stylesheet" type="text/css" href="{{asset("assets/frontend/vendor/owl-carousel/owl.carousel.min.css")}}">
    
        <link rel="stylesheet" type="text/css" href="{{asset("assets/frontend/vendor/sticky-icon/stickyicon.css")}}">
    
        <!-- Main CSS File -->
        {{-- <link rel="stylesheet" type="text/css" href="{{asset('assets/frontend/css/demo1.min.css')}}"> --}}
        <!-- Scripts -->
        @routes
        {{-- @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"]) --}}
        @vite(['resources/js/app.js', 'resources/css/app.css'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia

    </body>
</html>
