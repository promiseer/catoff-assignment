import { Module } from '@nestjs/common';
import { WalletAddressService } from './wallet-address.service';
import { WalletAddressController } from './wallet-address.controller';
import { WalletAddress } from './entities/wallet-address.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([WalletAddress])],
  controllers: [WalletAddressController],
  providers: [WalletAddressService],
})
export class WalletAddressModule { }
