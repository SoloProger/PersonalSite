<?php


namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;


class PortfolioFactory extends Factory
{

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        return [
            'link' => $this->faker->sentence(25, true),
            'title' => $this->faker->sentence(6, true),
            'description' => $this->faker->text(250),
            'img_path' => $this->faker->sentence(15, true),
            'is_action' => $this->faker->boolean(20),
        ];
    }
}
