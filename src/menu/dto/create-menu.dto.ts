import { IsIn, IsNotEmpty, IsString, Min } from "class-validator";

export class CreateMenuDto {
    
        
        @IsNotEmpty()
        @IsString()
        Name:string;
        @IsNotEmpty()
        @Min(0)
        price:number;
        @IsNotEmpty()
        @IsString()
        @IsIn(["veg","non-veg"])
        category:string;
    
}
