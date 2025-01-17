<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            ['name' => 'Smartphone XYZ', 'stock' => 15, 'category' => 1],
            ['name' => 'Laptop ABC', 'stock' => 8, 'category' => 1],
            ['name' => 'Camiseta Básica', 'stock' => 100, 'category' => 2],
            ['name' => 'Pantalón Casual', 'stock' => 50, 'category' => 2],
            ['name' => 'Arroz Premium', 'stock' => 200, 'category' => 3],
            ['name' => 'Aceite de Cocina', 'stock' => 75, 'category' => 3],
            ['name' => 'Lámpara LED', 'stock' => 30, 'category' => 4],
            ['name' => 'Mesa de Centro', 'stock' => 12, 'category' => 4]
        ];

        foreach($products as $product) {
            DB::table('products')->insert([
                'name' => $product['name'],
                'stock' => $product['stock'],
                'category_id' => $product['category'],
            ]);
        }
    }
}
