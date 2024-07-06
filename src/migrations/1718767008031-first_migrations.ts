import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigrations1718767008031 implements MigrationInterface {
    name = 'FirstMigrations1718767008031'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`roles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name_role\` varchar(30) NOT NULL, UNIQUE INDEX \`IDX_fcb5b99c98f04e9b9ea35678f8\` (\`name_role\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`username\` varchar(20) NOT NULL, \`password\` varchar(255) NOT NULL, \`role_id\` int NULL, UNIQUE INDEX \`IDX_fe0bb3f6520ee0469504521e71\` (\`username\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`genders\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name_gender\` varchar(50) NOT NULL, UNIQUE INDEX \`IDX_a3ef06f1c01211641da6f1515e\` (\`name_gender\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`song\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name_song\` varchar(50) NOT NULL, \`url_song\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_085ceeef04e2ba00e62642017e\` (\`name_song\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`gender_song\` (\`song_id\` int NOT NULL, \`gender_id\` int NOT NULL, INDEX \`IDX_8760574fd347cf610305796c2d\` (\`song_id\`), INDEX \`IDX_a597c3500ddc05f963fc604697\` (\`gender_id\`), PRIMARY KEY (\`song_id\`, \`gender_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_a2cecd1a3531c0b041e29ba46e1\` FOREIGN KEY (\`role_id\`) REFERENCES \`roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gender_song\` ADD CONSTRAINT \`FK_8760574fd347cf610305796c2de\` FOREIGN KEY (\`song_id\`) REFERENCES \`song\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`gender_song\` ADD CONSTRAINT \`FK_a597c3500ddc05f963fc604697a\` FOREIGN KEY (\`gender_id\`) REFERENCES \`genders\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`gender_song\` DROP FOREIGN KEY \`FK_a597c3500ddc05f963fc604697a\``);
        await queryRunner.query(`ALTER TABLE \`gender_song\` DROP FOREIGN KEY \`FK_8760574fd347cf610305796c2de\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_a2cecd1a3531c0b041e29ba46e1\``);
        await queryRunner.query(`DROP INDEX \`IDX_a597c3500ddc05f963fc604697\` ON \`gender_song\``);
        await queryRunner.query(`DROP INDEX \`IDX_8760574fd347cf610305796c2d\` ON \`gender_song\``);
        await queryRunner.query(`DROP TABLE \`gender_song\``);
        await queryRunner.query(`DROP INDEX \`IDX_085ceeef04e2ba00e62642017e\` ON \`song\``);
        await queryRunner.query(`DROP TABLE \`song\``);
        await queryRunner.query(`DROP INDEX \`IDX_a3ef06f1c01211641da6f1515e\` ON \`genders\``);
        await queryRunner.query(`DROP TABLE \`genders\``);
        await queryRunner.query(`DROP INDEX \`IDX_fe0bb3f6520ee0469504521e71\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_fcb5b99c98f04e9b9ea35678f8\` ON \`roles\``);
        await queryRunner.query(`DROP TABLE \`roles\``);
    }

}
