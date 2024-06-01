import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { WalletAddressService } from './wallet-address.service';
import { CreateWalletAddressDto } from './dto/create-wallet-address.dto';
import { UpdateWalletAddressDto } from './dto/update-wallet-address.dto';
import { WalletAddress } from './entities/wallet-address.entity';

@Controller('wallet-address')
export class WalletAddressController {
  constructor(private readonly walletAddressService: WalletAddressService) { }

  @Get()
  findAll(): Promise<Array<WalletAddress>> {
    return this.walletAddressService.findAll();
  }

  @Post()
  create(@Body() createWalletAddressDto: CreateWalletAddressDto) {
    return this.walletAddressService.create(createWalletAddressDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.walletAddressService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateWalletAddressDto: UpdateWalletAddressDto,
  ) {
    return this.walletAddressService.update(id, updateWalletAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.walletAddressService.remove(id);
  }
}
