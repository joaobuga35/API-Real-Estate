import { MigrationInterface, QueryRunner } from "typeorm";

export class kimoveisMigration41678139903510 implements MigrationInterface {
	name = "kimoveisMigration41678139903510";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query("ALTER TABLE \"users\" ALTER COLUMN \"admin\" DROP NOT NULL");
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query("ALTER TABLE \"users\" ALTER COLUMN \"admin\" SET NOT NULL");
	}

}
