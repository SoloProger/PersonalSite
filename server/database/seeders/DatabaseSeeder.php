<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        $links = [
            [
                'name' => 'Главная',
                'path' => '../index.html'
            ],
            [
                'name' => 'Обо_мне',
                'path' => 'pages/about.html'
            ],
            [
                'name' => 'Портфолио',
                'path' => 'portfolio.html'
            ]
        ];
        foreach ($links as $link) {
            \App\Models\NavigationLink::factory()->create($link);
        }
    }
}
