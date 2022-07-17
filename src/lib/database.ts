import * as Mongoose from 'mongoose'
import * as Config from '~/lib/configuration'

const env = Config.EnvServer()

export async function connect() {
    try {
        if (Mongoose.connection.readyState) {
            return
        }

        /// Connect.
        await Mongoose.connect(env.ConnectionString, Config.ConnectionOptions)
        Mongoose.connection.on('error', err => handleError(err))
    } catch (error) {
        handleError(error)
    }
}

function handleError(error: any) {
    throw error
}
