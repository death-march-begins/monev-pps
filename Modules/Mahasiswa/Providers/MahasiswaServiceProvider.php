<?php

namespace Modules\Mahasiswa\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Factory;

class MahasiswaServiceProvider extends ServiceProvider
{
    /**
     * Boot the application events.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerTranslations();
        $this->registerConfig();
        $this->registerViews();
        $this->registerFactories();
        $this->loadMigrationsFrom(module_path('Mahasiswa', 'Database/Migrations'));
    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(RouteServiceProvider::class);
    }

    /**
     * Register config.
     *
     * @return void
     */
    protected function registerConfig()
    {
        $this->publishes([
            module_path('Mahasiswa', 'Config/config.php') => config_path('mahasiswa.php'),
        ], 'config');
        $this->mergeConfigFrom(
            module_path('Mahasiswa', 'Config/config.php'), 'mahasiswa'
        );
    }

    /**
     * Register views.
     *
     * @return void
     */
    public function registerViews()
    {
        $viewPath = resource_path('views/modules/mahasiswa');

        $sourcePath = module_path('Mahasiswa', 'Resources/views');

        $this->publishes([
            $sourcePath => $viewPath
        ],'views');

        $this->loadViewsFrom(array_merge(array_map(function ($path) {
            return $path . '/modules/mahasiswa';
        }, \Config::get('view.paths')), [$sourcePath]), 'mahasiswa');
    }

    /**
     * Register translations.
     *
     * @return void
     */
    public function registerTranslations()
    {
        $langPath = resource_path('lang/modules/mahasiswa');

        if (is_dir($langPath)) {
            $this->loadTranslationsFrom($langPath, 'mahasiswa');
        } else {
            $this->loadTranslationsFrom(module_path('Mahasiswa', 'Resources/lang'), 'mahasiswa');
        }
    }

    /**
     * Register an additional directory of factories.
     *
     * @return void
     */
    public function registerFactories()
    {
        if (! app()->environment('production') && $this->app->runningInConsole()) {
            app(Factory::class)->load(module_path('Mahasiswa', 'Database/factories'));
        }
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return [];
    }
}
