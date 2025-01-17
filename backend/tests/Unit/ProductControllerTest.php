<?php

namespace Tests\Unit;

use App\Models\Category;
use App\Models\Product;
use Tests\TestCase;

class ProductControllerTest extends TestCase
{
    /**
     * Obtener la lista de productos
     */

     /** @test */
     public function it_can_list_all_products()
     {
         $response = $this->get('/api/products');

         $response->assertStatus(200)
                  ->assertJsonStructure([
                      '*' => ['id', 'name', 'stock', 'category'],
                  ]);
     }

     /** @test */
    public function it_can_show_a_single_product()
    {
        $product = Product::first(); // Usar el primer producto existente

        $response = $this->getJson("/api/products/{$product->id}");

        $response->assertStatus(200)
                 ->assertJson([
                     'id' => $product->id,
                     'name' => $product->name,
                     'stock' => $product->stock,
                     'category' => $product->category->name,
                 ]);
    }

    /** @test */
    public function it_can_create_a_product()
    {
        $category = Category::first(); // Usar una categoría existente

        $data = [
            'name' => 'Producto test ' . rand(100, 1000),
            'stock' => 50,
            'category_id' => $category->id,
        ];

        $response = $this->postJson('/api/products', $data);

        $response->assertStatus(201);

        $this->assertDatabaseHas('products', $data);
    }

    /** @test */
    public function it_can_update_a_product()
    {
        $product = Product::first();

        $data = [
            'stock' => 75,
        ];

        $response = $this->putJson("/api/products/{$product->id}", $data);

        $response->assertStatus(200)
                 ->assertJson($data);

        $this->assertDatabaseHas('products', array_merge(['id' => $product->id], $data));
    }

    /** @test */
    public function it_can_delete_a_product()
    {
        $product = Product::first();

        $response = $this->deleteJson("/api/products/{$product->id}");

        $response->assertStatus(204);

        $this->assertDatabaseMissing('products', [
            'id' => $product->id,
        ]);
    }
}
