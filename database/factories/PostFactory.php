<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [

            'title' => fake()->text(30),
            'location' => fake()->text(20),
            'description' => fake()->text(200),
            'youtubevids' => fake()->text(100),
            'stuffneeded' => fake()->text(100),
            'notes' => fake()->text(200),
            'whentodo' => fake()->text(100)


            //
        ];
    }
}
