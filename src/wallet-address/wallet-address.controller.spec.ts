import { Test, TestingModule } from '@nestjs/testing';
import { WalletAddressController } from './wallet-address.controller';
import { WalletAddressService } from './wallet-address.service';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { WalletAddress } from './entities/wallet-address.entity';
import { Repository, getRepository } from 'typeorm';

describe('WalletAddressController', () => {
  let controller: WalletAddressController;
  let service: WalletAddressService;
  let repository: Repository<WalletAddress>;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([WalletAddress])],
      controllers: [WalletAddressController],
      providers: [WalletAddressService],
    }).compile();

    controller = module.get<WalletAddressController>(WalletAddressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
