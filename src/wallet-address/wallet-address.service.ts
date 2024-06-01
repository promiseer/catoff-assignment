import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWalletAddressDto } from './dto/create-wallet-address.dto';
import { UpdateWalletAddressDto } from './dto/update-wallet-address.dto';
import { WalletAddress } from './entities/wallet-address.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WalletAddressService {
  constructor(
    @InjectRepository(WalletAddress)
    private walletRepository: Repository<WalletAddress>,
  ) { }

  async create(
    createWalletAddressDto: CreateWalletAddressDto,
  ): Promise<CreateWalletAddressDto> {
    const newWalletAddress = this.walletRepository.create(
      createWalletAddressDto,
    );
    await this.walletRepository.save(newWalletAddress);
    return newWalletAddress;
  }

  findAll(): Promise<WalletAddress[]> {
    return this.walletRepository.find({});
  }

  async findOne(id: number) {
    const walletAddress = await this.walletRepository.findOne(id);
    if (!walletAddress) {
      throw new NotFoundException(`walletAddress with ID ${id} not found`);
    }
    return walletAddress;
  }

  async update(
    id: number,
    updateWalletAddressDto: UpdateWalletAddressDto,
  ): Promise<WalletAddress> {
    const walletAddress = await this.findOne(id);
    const updatedWalletAddress = Object.assign(
      walletAddress,
      updateWalletAddressDto,
    );
    return this.walletRepository.save(updatedWalletAddress);
  }

  async remove(id: number): Promise<void> {
    const walletAddress = await this.findOne(id);
    await this.walletRepository.remove(walletAddress);
  }
}
