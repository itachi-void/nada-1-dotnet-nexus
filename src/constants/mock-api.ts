////////////////////////////////////////////////////////////////////////////////
// 🛑 Nothing in here has anything to do with Nextjs, it's just a fake database
////////////////////////////////////////////////////////////////////////////////

import { faker } from '@faker-js/faker';
import { matchSorter } from 'match-sorter'; // For filtering

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Define the shape of Product data
export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};

// Mock product data store
export const fakeProducts = {
  records: [] as Product[], // Holds the list of product objects

  initialize() {
    const sampleProducts: Product[] = [];
    const dotnetProducts = [
      {
        name: 'ASP.NET Core Web API Template',
        description: 'High-performance RESTful API starter featuring Clean Architecture, JWT, and EF Core.',
        category: 'Backend Services',
        price: 49.99
      },
      {
        name: 'SaaS Stripe Billing Gateway',
        description: 'Ready-to-use C# implementation for Stripe webhook handling and subscription management.',
        category: 'Security & Auth',
        price: 89.99
      },
      {
        name: 'Entity Framework Query Optimizer',
        description: 'Extension library for EF Core designed to track and optimize slow LINQ queries automatically.',
        category: 'Database Tools',
        price: 34.99
      },
      {
        name: 'JWT Authentication & RBAC Library',
        description: 'Lightweight, secure middleware for managing JWT verification and Role-Based Access Control in .NET.',
        category: 'Security & Auth',
        price: 29.99
      },
      {
        name: 'Redis Distributed Cache Wrapper',
        description: 'ASP.NET Core distributed caching wrapper with automatic cache invalidation and pub-sub support.',
        category: 'Backend Services',
        price: 19.99
      },
      {
        name: 'RabbitMQ Microservices Event Bus',
        description: 'Standardized pub/sub message broker connector for Microservices in C# with resilience patterns.',
        category: 'Cloud & DevOps',
        price: 59.99
      },
      {
        name: 'SQL Server Audit Logger',
        description: 'Automated tool to generate table auditing and change tracking history in SQL Server databases.',
        category: 'Database Tools',
        price: 39.99
      },
      {
        name: 'Next.js Shadcn Dashboard Starter',
        description: 'Fully responsive administrative console built using Next.js, Tailwind v4, and React 19.',
        category: 'Frontend UIs',
        price: 79.99
      },
      {
        name: 'Dockerized Microservices Boilerplate',
        description: 'Pre-configured Docker Compose scripts for containerizing C# APIs and React apps seamlessly.',
        category: 'Cloud & DevOps',
        price: 45.00
      },
      {
        name: 'Zustand & React Query Hook Pack',
        description: 'A set of optimized hooks for state management and high-performance server hydration in Next.js.',
        category: 'Frontend UIs',
        price: 14.99
      }
    ];

    function generateRandomProductData(id: number): Product {
      const template = dotnetProducts[(id - 1) % dotnetProducts.length];
      return {
        id,
        name: template.name,
        description: template.description,
        created_at: faker.date
          .between({ from: '2025-01-01', to: '2026-04-30' })
          .toISOString(),
        price: template.price,
        photo_url: `https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&w=150&h=150&q=80`,
        category: template.category,
        updated_at: faker.date.recent().toISOString()
      };
    }

    // Generate remaining records
    for (let i = 1; i <= 20; i++) {
      sampleProducts.push(generateRandomProductData(i));
    }

    this.records = sampleProducts;
  },

  // Get all products with optional category filtering and search
  async getAll({
    categories = [],
    search
  }: {
    categories?: string[];
    search?: string;
  }) {
    let products = [...this.records];

    // Filter products based on selected categories
    if (categories.length > 0) {
      products = products.filter((product) =>
        categories.includes(product.category)
      );
    }

    // Search functionality across multiple fields
    if (search) {
      products = matchSorter(products, search, {
        keys: ['name', 'description', 'category']
      });
    }

    return products;
  },

  // Get paginated results with optional category filtering, search, and sorting
  async getProducts({
    page = 1,
    limit = 10,
    categories,
    search,
    sort
  }: {
    page?: number;
    limit?: number;
    categories?: string | string[];
    search?: string;
    sort?: string;
  }) {
    await delay(1000);
    const categoriesArray = categories
      ? Array.isArray(categories)
        ? categories
        : String(categories).split(/[.,]/)
      : [];
    const allProducts = await this.getAll({
      categories: categoriesArray,
      search
    });

    // Sorting
    if (sort) {
      try {
        const sortItems = JSON.parse(sort) as {
          id: string;
          desc: boolean;
        }[];
        if (sortItems.length > 0) {
          const { id, desc } = sortItems[0];
          allProducts.sort((a, b) => {
            const aVal = (a as Record<string, unknown>)[id];
            const bVal = (b as Record<string, unknown>)[id];
            if (typeof aVal === 'number' && typeof bVal === 'number') {
              return desc ? bVal - aVal : aVal - bVal;
            }
            const aStr = String(aVal ?? '').toLowerCase();
            const bStr = String(bVal ?? '').toLowerCase();
            return desc ? bStr.localeCompare(aStr) : aStr.localeCompare(bStr);
          });
        }
      } catch {
        // Invalid sort param — ignore
      }
    }

    const totalProducts = allProducts.length;

    // Pagination logic
    const offset = (page - 1) * limit;
    const paginatedProducts = allProducts.slice(offset, offset + limit);

    // Mock current time
    const currentTime = new Date().toISOString();

    // Return paginated response
    return {
      success: true,
      time: currentTime,
      message: 'Sample data for testing and learning purposes',
      total_products: totalProducts,
      offset,
      limit,
      products: paginatedProducts
    };
  },

  // Get a specific product by its ID
  async getProductById(id: number) {
    await delay(3000); // Simulate a slow API call

    // Find the product by its ID
    const product = this.records.find((product) => product.id === id);

    if (!product) {
      return {
        success: false,
        message: `Product with ID ${id} not found`
      };
    }

    // Mock current time
    const currentTime = new Date().toISOString();

    return {
      success: true,
      time: currentTime,
      message: `Product with ID ${id} found`,
      product
    };
  },

  // Create a new product
  async createProduct(
    data: Omit<Product, 'id' | 'created_at' | 'updated_at' | 'photo_url'>
  ) {
    await delay(1000);

    const newProduct: Product = {
      ...data,
      id: this.records.length + 1,
      photo_url: `https://api.slingacademy.com/public/sample-products/${this.records.length + 1}.png`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    this.records.push(newProduct);

    return {
      success: true,
      message: 'Product created successfully',
      product: newProduct
    };
  },

  // Update an existing product
  async updateProduct(
    id: number,
    data: Omit<Product, 'id' | 'created_at' | 'updated_at' | 'photo_url'>
  ) {
    await delay(1000);

    const index = this.records.findIndex((product) => product.id === id);

    if (index === -1) {
      return {
        success: false,
        message: `Product with ID ${id} not found`
      };
    }

    this.records[index] = {
      ...this.records[index],
      ...data,
      updated_at: new Date().toISOString()
    };

    return {
      success: true,
      message: 'Product updated successfully',
      product: this.records[index]
    };
  }
};

// Initialize sample products
fakeProducts.initialize();
