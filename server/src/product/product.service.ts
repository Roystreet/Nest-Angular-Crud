import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from '../interface/product.interface';

@Injectable()
export class ProductService {
  image: string =
    'https://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2022/01/20185047/iphone-13-pro-max-silver-select.png';
  product: Product[] = [
    {
      id: 1,
      title: 'product',
      description: 'description',
      image: this.image,
      price: 20,
      stock: 20,
      status: true,
    },
    {
      id: 2,
      title: 'product',
      description: 'description',
      image: this.image,
      price: 20,
      stock: 20,
      status: true,
    },
    {
      id: 3,
      title: 'product',
      description: 'description',
      image: this.image,
      price: 20,
      stock: 20,
      status: true,
    },
  ];

  create(createProductDto: CreateProductDto): Product {
    let product: Product = {
      id: this.product.length + 1,
      title: createProductDto.title,
      description: createProductDto.description,
      image: createProductDto.image || this.image,
      price: createProductDto.price,
      stock: createProductDto.stock,
      status: createProductDto.status,
    };
    this.product.push(product);
    return product;
  }

  findAll(): Product[] {
    return this.product;
  }

  findOne(id: number): Product[] {
    return this.product.filter((p) => p.id === id);
  }

  update(id: number, updateProductDto: UpdateProductDto):{} {

    const product = this.product.filter((p) => p.id === id)[0]
    const updateProduct:Product={
      id:id,
      title: updateProductDto.title||product.title,
      description: updateProductDto.description||product.description,
      image: updateProductDto.image||product.image,
      price: updateProductDto.price||product.price,
      stock: updateProductDto.stock||product.stock,
      status: updateProductDto.status||product.status,
    } 

    this.product[id-1]=updateProduct


    return { msg:" update product"};
  }

  remove(id: number): {} {
    
    const product=this.product.filter(p => p.id !== id);
    
    if(product.length< this.product.length){
      
      this.product= product;
      return  { msg: "delete product"}
    } else{
      return { msg: "Not found"}
    }
  
  }
}
