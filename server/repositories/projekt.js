const MongoClient = require('mongodb').MongoClient;
const config = require('config');

class ProjektRepository {
    constructor(config) {
        this.config = config;
        this.database = 'maikpaulus';
        this.collection = 'projekt';;
    }

    async connect() {
        // Use connect method to connect to the server
        return new Promise((resolve, reject) => {
            MongoClient.connect(getDatabaseUrl(this.config), { useNewUrlParser: true }, (err, client) => {
                if (err) {
                    return reject(false);
                }

                return resolve(client);
            });  
        });      
    }

    async findAll() {
        const client = await this.connect();
        if (!client) {
            return false;
        }

        const db = client.db('maikpaulus');
        const projekte = db.collection('projekt');
        const queryFilter = process.env.NODE_ENV === 'development' ? {} : {active: true};

        return new Promise((resolve, reject) => {
            projekte.find(queryFilter).toArray((err, projekte) => {
                if (err) {
                   return resolve(false);
                }

                projekte = projekte.sort((prev, next) => {
                    const prevMaxYear = Math.max(...prev.meta.zeitrahmen.jahr);
                    const nextMaxYear = Math.max(...next.meta.zeitrahmen.jahr);
                    
                    if (nextMaxYear > prevMaxYear) {
                        return 1;
                    }
    
                    if (nextMaxYear === prevMaxYear) {
                        if (next.meta.zeitrahmen.jahr.length < prev.meta.zeitrahmen.jahr.length) {
                            return 1;
                        }
                    }
    
                    return -1;
                });
                
                return resolve(projekte);
            });

        });
    }
};

module.exports = exports = new ProjektRepository(config.has('database') ? config.get('database') : {});

const getDatabaseUrl = (config) => {
    return [
      'mongodb://', config.user, ':', config.password, '@', config.host, ':', config.port, '/', config.database
    ].join('');
};