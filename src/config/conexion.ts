import { DataSource } from "typeorm"
import { AppDataSource } from './data-source'

export class Conexion 
{
    get initConexion(): Promise<DataSource> {
        return AppDataSource.initialize()
    }
}