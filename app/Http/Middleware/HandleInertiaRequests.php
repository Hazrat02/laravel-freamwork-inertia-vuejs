<?php

namespace App\Http\Middleware;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;
use Illuminate\Support\Facades\Redirect;
class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],

           

            // 'auth.admin' => fn () => $request->user('admin')
            //     ? $request->user('admin')->only('id', 'name', 'email')
            //     : null,


    //         Inertia::share('cssPath', fn (Request $request) => $request->user()
    // ? $request->user()->only('id', 'name', 'email')
    // : null
    //     ),

            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }



    public function rootView(Request $request): string
{
    
            // Check if the previous URL had an admin prefix
            $previousUrlHasAdminPrefix = strpos($request->session()->previousUrl(), '/admin') > 0;

            // Check if the current URL has an admin prefix
            $currentUrlHasAdminPrefix = $request->is('admin/*');
            $reloadPage =($previousUrlHasAdminPrefix && !$currentUrlHasAdminPrefix) ||  (!$previousUrlHasAdminPrefix && $currentUrlHasAdminPrefix);
           Inertia::share('reloadPage', $reloadPage);
 
            if ($request->is('admin/*')) {
                
                return 'admin';
            } else {
            
                return 'app';
            }

    
}
}