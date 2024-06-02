import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity
{
    @PrimaryGeneratedColumn()
    id!: number

    @CreateDateColumn({
        name: "created_at",
        type: "timestamp"
    })
    created_at!: Date

    @UpdateDateColumn({
        name: "updated_at",
        type: "timestamp"
    })
    update_at!: Date
}