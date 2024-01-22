<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Termwind\Components\Dd;

class checkApi
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {

        if (!config('app.dev_key')) {
            error('Setup developer key!');
        }
        $cacheKey = 'check_api';
        $apiStatus = Cache::get($cacheKey);

        if ($apiStatus === null) {
           
            
            $devKey = config('app.dev_key');

            // if (!$devKey) {
            //     // If dev_key is not set in the environment, handle accordingly
            //     return response()->json(['error' => 'DEV_KEY not set in the environment'], 500);
            // }

            // API status not found in cache, make API call with the dev_key
            $apiResponse = Http::withHeaders(['dev_key' => $devKey])->get(config('app.dev_url'));

            if ($apiResponse->successful() && $apiResponse->json('status') === true) {
                // Cache the API status with a 5-day expiration
                Cache::put($cacheKey, true, now()->addDays(5));
            } else {
                // API check failed, return a response indicating the issue
                return response()->json(['error' => 'API check failed'], 503);
            }
        } elseif ($apiStatus !== true) {
            // Cached API status is false, return an error response
            return response()->json(['error' => 'API check failed'], 503);
        }

        dd($apiResponse);

        // API check passed or cached, allow the request to proceed
        return $next($request);
    }
}
