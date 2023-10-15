import {DataSource, ObjectType, QueryRunner, Repository} from "typeorm";
import {PgDataSource} from "@/main/config/data-source.js";
import {ConnectionError, ConnectionNotFoundError} from "@/infra/repos/postgres/helpers/errors.js";

export class PgConnection {
    private static instance?: PgConnection
    private query?: QueryRunner
    private connection?: DataSource

    private constructor() {
    }

    static getInstance(): PgConnection {
        if (PgConnection.instance === undefined) PgConnection.instance = new PgConnection()
        return PgConnection.instance
    }

    async connect(): Promise<void> {
        this.connection = this.connection === undefined
            ? await this.initialize()
            : this.connection
    }

    getRepository(entity: ObjectType<any>): Repository<any> {
        if (this.connection === undefined) throw new ConnectionNotFoundError()
        if (this.query !== undefined) return this.query.manager.getRepository(entity)
        return this.connection.manager.getRepository(entity)
    }


    private async initialize(): Promise<DataSource> {
        return PgDataSource.initialize()
            .then(connection => connection)
            .catch(err => {
                throw new ConnectionError(err)
            })
    }
}