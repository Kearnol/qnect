import * as Cookie from "cookie"
import * as JsonWebToken from 'jsonwebtoken'
import * as Mongoose from 'mongoose'

/// Settings exposed to the server.
const envServer: Partial<EnvironmentServer> | null = (typeof window === 'undefined') ? {
    ConnectionString: process.env.MONGODB_URI,
    JsonWebTokenSecret: process.env.JWT_SECRET,
} : null

/// Environment configuration.
export function EnvServer(): EnvironmentServer {
    if (!envServer || Object.values(envServer).includes('')) {
        console.log('Invalid configuration.');
        console.log("envServer = ", envServer);
    }
    return envServer as EnvironmentServer
}

type EnvironmentServer = {
    ConnectionString: string,
    JsonWebTokenSecret: string,
}

/// Database configuration.
export const ConnectionOptions: Mongoose.ConnectOptions = {
   dbName: "queDB",
}

export const SchemaOptions: Mongoose.SchemaOptions = {
    timestamps: true,
    toJSON: {
        getters: true,
        versionKey: false,
    }
}


// Authentication config
export const Authentication = {
    SaltRounds: 10,
    MaxLoginAttempts: 5,
    LockTime: 2 * 60 * 60 * 1000 /// 2 hours.,
}

export const TokenOptions: JsonWebToken.SignOptions = {
    algorithm: 'HS256',
    // expiresIn: '64d',
}
