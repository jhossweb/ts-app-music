import { DataSource, DataSourceOptions } from 'typeorm'

const Config: DataSourceOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "appmusic",
    entities: [__dirname + "/../**/*.entity{.ts,.js}"],
    migrations: [__dirname + "/../migrations/*{.ts,.js}"],
    synchronize: false,
    migrationsRun: true
}

export const AppDataSource: DataSource = new DataSource(Config)