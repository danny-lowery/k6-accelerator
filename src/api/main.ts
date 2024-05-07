import { NestFactory } from '@nestjs/core';
import { UsersModule } from './endpoints/users.module';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

async function bootstrap(): Promise<void> {
	const app: INestApplication = await NestFactory.create(UsersModule);

	const config: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
		.setTitle('nest-app-example')
		.setDescription('Example Nest App')
		.setVersion('1.0')
		.addTag('k6-accelerator')
		.build();
	const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);

	await app.listen(3000);
}
void bootstrap();
