<?php

namespace Tests\Unit;

use Tests\TestCase;

class CategoryControllerTest extends TestCase
{
    /**
     * Obtener la lista de categorias
     */

     /** @test */
    public function it_can_list_all_categories()
    {
        $response = $this->get('/api/categories');

        $response->assertStatus(200)
                 ->assertJsonStructure([
                     '*' => ['id', 'name'],
                 ]);
    }

    /**
     * Crear una categoria
     */

    /** @test */
    public function it_can_create_a_category()
    {
        $data = [
            'name' => 'New Category',
        ];

        $response = $this->postJson('/api/categories', $data);

        $response->assertStatus(201)
                 ->assertJson($data);

        $this->assertDatabaseHas('categories', $data);
    }

}
