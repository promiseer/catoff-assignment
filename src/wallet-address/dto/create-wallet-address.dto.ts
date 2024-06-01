import { IsNotEmpty, IsOptional, IsString, IsDecimal } from 'class-validator';

export class CreateWalletAddressDto {
  @IsNotEmpty()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  label?: string;

  @IsNotEmpty()
  @IsDecimal()
  balance: number;
}
