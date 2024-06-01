import { Test, TestingModule } from '@nestjs/testing';
import { WalletAddressService } from './wallet-address.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletAddress } from './entities/wallet-address.entity';

describe('WalletAddressService', () => {
  let service: WalletAddressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([WalletAddress])],
      providers: [WalletAddressService],
    }).compile();

    service = module.get<WalletAddressService>(WalletAddressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
