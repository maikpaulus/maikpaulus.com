const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const config = require('config');

const port = 80;
const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PHONE_REGEXP = /^(0|\+)[0-9\/ -]{8,}$/;

const app = express();

const publicFolder = path.join(__dirname, '..', 'public');

const catchAllFile = path.join(publicFolder, 'template.html');
const googleVerificationFile = path.join(publicFolder, 'google13bc9d8e66533e05.html');
const sitemapFile = path.join(publicFolder, 'sitemap.xml');

const routes = require('./routes');

app.use(express.static(publicFolder));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/dokumente/:language?/projekte', routes.projekte.printAll);

app.post('/kontakt', (req, res) => {
    let requestParams = req.body;
    
    let connectionParams = config.has('mailserver') ? config.get('mailserver') : undefined;
    if (connectionParams && paramsAreValid(requestParams)) {
        let transporter = nodemailer.createTransport({
            host: connectionParams.host,
            port: 465,
            secure: true,
            auth: {
                user: connectionParams.user,
                pass: connectionParams.password 
            }
        });

        let mailBody = `
            <p>
                Hallo Maik,<br><br>
                es ist eine neue Anfrage über das Kontaktformular eingegangen, folgende Daten wurden dabei übermittelt:
            </p>
            <p>
                Vorname: ${requestParams.firstname || ''}<br>
                Nachname: ${requestParams.lastname || ''}<br>
                E-Mail: ${requestParams.email || ''}<br>
                Telefon: ${requestParams.phone || ''}<br>
                Nachricht:<br>${requestParams.message || ''}
            </p>
            <p>
                Schöne Grüße,<br><br>
                deine Webseite
            </p>
        `;

        let mailOpts = {
            from: '"Deine Webseite" <webseite@maikpaulus.com>',
            to: 'work@maikpaulus.com',
            subject: 'Neue Anfrage über maikpaulus.com',
            html: mailBody
        };
    
        // send mail with defined transport object
        transporter.sendMail(mailOpts, (err, info) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: 'Die Anfrage konnte nicht verarbeitet werden.'
                })
            }
    
            return res.status(200).send({
                success: true,
                message: 'Die Anfrage konnte erfolgreich verarbeitet werden'
            });
        });    
    }
    else {
        return res.status(400).send({
            success: false,
            message: 'Die Anfrage konnte nicht verarbeitet werden.'
        })
    }
});

app.get('google13bc9d8e66533e05.html', (req, res) => {
    return res.render(googleVerificationFile);
});

app.get('sitemap.xml', (req, res) => {
    return res.render(sitemapFile);
});

app.get('/api/projekte', (req, res) => {
    const dbParams = config.has('database') ? config.get('database') : undefined;
    
    if (!dbParams) {
        res.status(404).send({
            success: false,
            message: 'Es konnten keine Projekte gefunden werden.'
        })
    }
    
    // Use connect method to connect to the server
    MongoClient.connect(getDatabaseUrl(dbParams), { useNewUrlParser: true }, (err, client) => {
        if (err) {
            return res.status(500).send({
                success: false,
                message: err.message
            })
        }
    
        const db = client.db('maikpaulus');
        const projekte = db.collection('projekt');
        const queryFilter = process.env.NODE_ENV === 'development' ? {} : {active: true};

        projekte.find(queryFilter).toArray((err, projekte) => {
            if (err) {
                return res.status(500).send({
                    success: false, 
                    message: err.message
                })
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

            return res.status(200).send({
                success: true,
                response: {
                    projekte
                }
            });
        });

        client.close();
    });
});

app.get('/api/projekt/:alias', (req, res) => {
    const alias = req.params.alias || undefined;
    const dbParams = config.has('database') ? config.get('database') : undefined;
    
    if (!alias || !dbParams) {
        return res.status(404).send({
            success: false,
            message: 'Das Projekt konnte nicht gefunden werden.'
        })
    }
    // Use connect method to connect to the server
    MongoClient.connect(getDatabaseUrl(dbParams), { useNewUrlParser: true }, function(err, client) {
        if (err) {
            return res.status(500).send({
                success: false,
                message: err.message
            })
        }
    
        const db = client.db('maikpaulus');
        const projekte = db.collection('projekt');
        const queryFilter = process.env.NODE_ENV === 'development' ? { alias } : {alias, active: true};

        projekte.findOne(queryFilter, (err, projekt) => {
            if (err || !projekt) {
                return res.status(404).send({
                    success: false, 
                    message: 'Das Projekt konnte nicht gefunden werden.'
                })
            }
            return res.status(200).send({
                success: true,
                response: {
                    projekt
                }
            });
        });

        client.close();
    });
});

app.get('*', function (req, res) {
    const pages = [ '/', '/impressum', '/datenschutz', '/kontakt', '/projekt', '/projekte'];
    const { title, description } = getSeoData(req.url);
    const folder = req.url.substring(0, req.url.indexOf('/', 1));
    const showGoogleAnalytics = process.env.NODE_ENV === 'production';

    if (pages.indexOf(folder || req.url) === -1) {
        res.status(404);
    }

    return res.render(catchAllFile, {
        title,
        description,
        showGoogleAnalytics
    });
});

app.listen(port, function (err) {
    console.log('express is listening on port ' + port);
});

/**
 * entscheidet, ob die Parameter weiterverarbeitet werden können oder nicht
 * @param {Object} params Parameter aus dem Kontaktformular 
 * @return {Boolean} true, wennn Parameter valide sind, sonst false
 */
function paramsAreValid(params) {
    // Vorname ist Pflichtfeld
    if (!params.firstname || 'string' !== typeof params.firstname) {
        return false;
    }

    // Nachname ist Pflichtfeld
    if (!params.lastname || 'string' !== typeof params.lastname) {
        return false;
    }

    // E-Mail existiert nicht oder ist nicht korrekt
    if (!params.email || !params.email.match(EMAIL_REGEXP)) {
        return false;
    }

    // wenn Telefon existiert, aber falsches Format
    if (params.phone && !params.phone.match(PHONE_REGEXP)) {
        return false;
    }

    // die Wünsche sind nicht leer, aber das Format ist nicht korrekt
    if (params.message && 'string' !== typeof params.message) {
        return false;
    }

    return true;
}

/**
 * get seo data for dynamic page loading
 */
function getSeoData(field) {
    const seoData = {
        '/': {
            title: 'Maik Paulus | Software Engineer | München',
            description: 'Seit 10 Jahren entwickle ich digitale Produkte in verschiedensten Bereichen, gestalte professionelle Webauftritte und maßgeschneiderte Webanwendungen.'
        },
        '/kontakt': {
            title: 'Maik Paulus | Kontakt',
            description: 'Seit 10 Jahren entwickle ich digitale Produkte in verschiedensten Bereichen, gestalte professionelle Webauftritte und maßgeschneiderte Webanwendungen.'
        },
        '/impressum': {
            title: 'Maik Paulus | Impressum',
            description: 'Seit 10 Jahren entwickle ich digitale Produkte in verschiedensten Bereichen, gestalte professionelle Webauftritte und maßgeschneiderte Webanwendungen.'
        },
        '/datenschutz': {
            title: 'Maik Paulus | Datenschutz',
            description: 'Seit 10 Jahren entwickle ich digitale Produkte in verschiedensten Bereichen, gestalte professionelle Webauftritte und maßgeschneiderte Webanwendungen.'
        },
        '/projekte': {
            title: 'Maik Paulus | Projekte',
            description: 'Seit 10 Jahren entwickle ich digitale Produkte in verschiedensten Bereichen, gestalte professionelle Webauftritte und maßgeschneiderte Webanwendungen.'
        }
    }

    return seoData[field] || seoData['/'];
}

const getDatabaseUrl = (config) => {
    return [
      'mongodb://', config.user, ':', config.password, '@', config.host, ':', config.port, '/', config.database
    ].join('');
};