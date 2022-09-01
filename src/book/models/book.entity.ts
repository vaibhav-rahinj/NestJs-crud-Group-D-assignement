import { Column,  Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

import { IsNotEmpty, IsString, IsInt} from "class-validator";
// import { BookCategoryEntity } from "./category/category.entity";
// import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { BookCategoryEntity } from "../category/category.entity";
// import { Factory } from 'nestjs-seeder';
// import {IsNotEmpty} from "@nestjs/common";

@Entity('book_details-1121')
export class BookEntity {
    @PrimaryGeneratedColumn()
    @IsInt()
    book_id: number;

    @Column({default: ''})
    @IsNotEmpty()
    @IsString()
    book_name: string;

    // @OneToMany(()=> BookCategoryEntity, 
    // (category:BookCategoryEntity)=>category.book, 
    // {onUpdate:'CASCADE',onDelete:'CASCADE'})
    // category:BookCategoryEntity[];

    // @OneToMany(()=> BookCategoryEntity, 
    // (category:BookCategoryEntity)=>category.book)
    // category:BookCategoryEntity[];
    // @JoinColumn({name:'category_id'})

    // recent
    // @OneToMany(()=> BookEntity, 
    // (book:BookEntity)=>book.category)
    // book:BookEntity[];
    // @JoinColumn({name:'category_id'})

    // category m-1 /
        // @ManyToMany(()=> BookCategoryEntity, (category:BookCategoryEntity)=>category.book)
        // category:BookCategoryEntity;
        // @JoinTable({name:'category_id'})   
    @ManyToMany(()=> BookCategoryEntity, (category:BookCategoryEntity)=>category.book)
    // @JoinTable({name:'Book_Category'}) 
    // @Column({name:"id"})
    // @JoinTable({name: "book_category1"}) 
    @JoinTable({
        name: "bookcategory123", // table name for the junction table of this relation
        // @Column()
        // id:number,
        joinColumn: {
            name: "book",
            referencedColumnName: "book_id",
            foreignKeyConstraintName:"book"
        },
        inverseJoinColumn: {
            name: "category",
            referencedColumnName: "categoryId",
            foreignKeyConstraintName:"category"
        }
    })
    // @PrimaryGeneratedColumn()
    // @PrimaryColumn() @IsNotEmpty() @IsInt() id:number
    category:BookCategoryEntity[];
   

    @Column()
    @IsNotEmpty()
    author: string ;

    @Column()
    @IsNotEmpty()
    @IsInt()
    price: number;

    @Column()
    @IsNotEmpty()
    @IsString()
    // // @Factory(faker => faker.image.imageUrl())
    book_image: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    book_isbn: string;
 
}

