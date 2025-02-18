import mysql from 'mysql2/promise';

class Database {
    private connection: mysql.Connection | null = null;

    constructor(private config: mysql.ConnectionOptions) {}

    async connect(): Promise<void> {
        if (this.connection) {
            return;
        }
        this.connection = await mysql.createConnection(this.config);
    }

    async query<T extends mysql.RowDataPacket[] | mysql.ResultSetHeader>(sql: string, params?: any[], callback?: (error: Error | null, results?: T) => void): Promise<void> {
        this.connect().then(async () => {
            if (!this.connection) {
                const error = new Error('Database not connected');
                if (callback) {
                    callback(error);
                    return;
                } else {
                    throw error;
                }
            }
            try {
                const [results] = await this.connection.execute<T>(sql, params);
                if (callback) {
                    callback(null, results);
                }
            } catch (error) {
                if (callback) {
                    callback(error as Error);
                } else {
                    throw error;
                }
            } finally {
                await this.close();
            }
        });
    }

    async close(): Promise<void> {
        if (this.connection) {
            await this.connection.end();
            this.connection = null;
        }
    }
}

export type BookAttributes = {
    id: number,
    title: string,
    author: string,
    note: string,
    lastModificationDate: Date
};


export default Database;