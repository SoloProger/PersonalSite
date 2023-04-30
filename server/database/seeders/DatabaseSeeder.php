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
        $portfolio = [
            [
                "link" => "http://flagman-kirpich.ru/",
                "img_path" => "../assets/img/brickproject.png",
                "title" => "Флагман Кирпич",
                "is_action" => true,
                "description" => "",
            ],
            [
                "link" => "http://marianna-cafe.ru/",
                "img_path" => "../assets/img/marriana.png",
                "title" => "Марианна",
                "is_action" => true,
                "description" => "",
            ],
            [
                "link" => "https://obektuv.ru/",
                "img_path" => "../assets/img/obektuv.png",
                "title" => "Объектув",
                "is_action" => true,
                "description" => "",
            ],
            [
                "link" => "https://mambaroll.ru/",
                "img_path" => "../assets/img/mamba.png",
                "title" => "Черная мамба",
                "is_action" => true,
                "description" => "",
            ],
            [
                "link" => "https://github.com/SoloProger/Vue-Shop-Frontend",
                "img_path" => "../assets/img/buildingsite.png",
                "title" => "Сайт строительной компании",
                "is_action" => true,
                "description" => "",
            ],
            [
                "link" => "2",
                "img_path" => "../assets/img/mysite.png",
                "title" => "Сайт без фреймворков",
                "is_action" => true,
                "description" => "",
            ],
            [
                "link" => "1",
                "img_path" => "../assets/img/personsitev3.png",
                "title" => "Сайт. Версия 3",
                "is_action" => true,
                "description" => "",
            ],
            [
                "link" => "3",
                "img_path" => "../assets/img/personsitev2.png",
                "title" => "Сайт. Версия 2",
                "is_action" => true,
                "description" => "",
            ],
        ];
        foreach ($links as $link) {
            \App\Models\NavigationLink::factory()->create($link);
        }
        foreach ($portfolio as $project) {
            \App\Models\Portfolio::factory()->create($project);
        }
    }
}
