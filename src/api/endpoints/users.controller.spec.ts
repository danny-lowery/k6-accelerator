import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('AppController', () => {
	let appController: UsersController;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [UsersController],
			providers: [UsersService],
		}).compile();

		appController = app.get<UsersController>(UsersController);
	});

	describe('users', () => {
		it('should return "Hello 1 User!"', () => {
			expect(appController.getUser(1)).toBe(`Hello 1 User!`);
		});
	});
});
