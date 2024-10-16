import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { Menu } from './menu/entities/menu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mongodb",
    host: "127.0.0.1",
    port: 27017,
    database: "menuDB",
    synchronize: true,
    entities: [Menu],
    useUnifiedTopology: true,
    useNewUrlParser: true,
    
  }),
  MenuModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
