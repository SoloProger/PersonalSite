<?php


namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;


class NavigationLinkFactory extends Factory
{

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->sentence(6, true),
            'path' => $this->faker->sentence(6, true),
        ];
    }
}
