const PDFDocument = require('pdfkit');
const fs = require('fs');
const projektRepository = require('../repositories/projekt');

const A4 = {
    width: 595.28, 
    height: 841.89
}

module.exports = exports = {
    async printAll(request, response) {
        const language = request.params.language || 'de';
        projektRepository.findAll()
            .then(projects => {
                response.set('Content-Type', 'application/pdf');
                if ('development' !== process.env.NODE_ENV) {
                    response.set('Content-disposition', 'attachment; filename="projekte-maik-paulus.pdf"');
                }
                
                let pagesToCreate = [];
                
                while (projects.length > 2) {
                    pagesToCreate.push(projects.slice(0, 2))
                    projects = projects.slice(2);
                }

                const dokument = new PDFDokument({
                    info: {
                        Title: `${getMetaDataByLanguage('projekte', language)} | Maik Paulus`,
                        Author: 'Maik Paulus'
                    }, 
                    language
                });
                
                pagesToCreate.forEach(projectsForPage => {
                    dokument.addPage(projectsForPage, { debug: false });
                });
                dokument.addPageNumbers();
                dokument.pipe(response);
                dokument.close();
            })
            .catch(err => {
                //console.log(err);
                return response.status(500).json({
                    success: false,
                    message: "Die Anfrage konnte nicht verarbeitet werden."
                })
            });
    }
}

function mm(mm) {
    return mm * 2.83465;
}

/* quick helper function to provide translations */
function getMetaDataByLanguage(keyword, language) {
    const metaData = {
        de: {
            projekte: 'Projekte',
            meineprojekte: 'Meine Projekte',
            seite: 'Seite',
            von: 'von',
            auftraggeber: 'Auftraggeber',
            ort: 'Ort',
            team: 'Agiles Team',
            art: 'Art',
            anforderungen: 'Anforderungen',
            aufgaben: 'Aufgaben',
            monat: 'Monat',
            monatsuffix: 'e',
            
            privat: 'Privat',
            festanstellung: 'Festanstellung',
            freiberuflich: 'Freiberuflich',

            j: 'Ja',
            n: 'Nein'
        },
        en: {
            projekte: 'Projects',
            meineprojekte: 'My projects',
            seite: 'Page',
            von: 'of',
            auftraggeber: 'Customer',
            ort: 'Location',
            team: 'Agile & Team',
            art: 'Type',
            anforderungen: 'Requirements',
            aufgaben: 'Tasks',
            monat: 'month',
            monatsuffix: 's',

            privat: 'Private',
            festanstellung: 'Permant',
            freiberuflich: 'Freelance',

            j: 'yes',
            n: 'no'
        }
    }

    let lang = language || 'de';

    return metaData[lang][keyword] || undefined;
}

/* helper function to get the right label for months */
function getMonthLabel(months, language) {
    let label = getMetaDataByLanguage('monat', language);

    if (1 < months) {
        label += getMetaDataByLanguage('monatsuffix', language);
    }

    return label;
}

/* helper function to get right answer yes / no */
/**
 * 
 * @param {bool} answer 
 * @param {*} language 
 */
function getAnswer(answer, language) {
    let formattedAnswer = answer ? 'j': 'n';
    return getMetaDataByLanguage(formattedAnswer, language); 
}

class PDFDokument {
    constructor(options) {
        this.document = new PDFDocument({
            size: [
                A4.width,
                A4.height
            ],
            autoFirstPage: false,
            bufferPages: true,
            margin: 0
        });

        if (options.info) {
            this.document.info = options.info;
        }

        this.language = options.language || 'de';
    }

    pipe(response) {
        this.document.pipe(response);
    }

    addPage(projects, options = {}) {
        this.debugMode = options.debug || false;
        this.document.addPage();

        if (this.debugMode) {
            this.document.strokeColor('#000');
            this.document.rect(
                mm(7), mm(7),
                A4.width - 2*mm(7),
                A4.height - 2*mm(7)
            ).stroke();
        }

        this.addPageHeader();

        this.projectsPerPage = projects.length;
        
        this.contentStartY = mm(12.84+16.65);
        
        this.contentHeight = A4.height - this.contentStartY - mm(7); 
        this.contentWidth = A4.width - mm(20) - mm(7);
        
        projects.forEach((project, order) => {
            this.addProject(project, order);
        });
    }

    addPageHeader() {
        this.document.rect(
            0, mm(12.84),
            A4.width, mm(16.65)
        ).fillColor('#228461').fill();

        this.document.font('public/assets/projekte/OpenSans-Bold.ttf', 16);

        this.document.fillColor('#fff')
            .text('MAIK PAULUS', mm(20) + mm(13.5), mm(17.5))

        const logo = fs.readFileSync('public/assets/projekte/logo.png');
        this.document.image(logo, mm(20), mm(16.2), { width: mm(9.92), height: mm(9.92)});
    }

    addProject(project = {}, order, options = {}) {
        const projectHeight = this.contentHeight / this.projectsPerPage;
        const projectStartX = mm(20);
        const projectStartY = this.contentStartY + order*projectHeight;
        
        if (this.debugMode) {
            this.document.strokeColor('#000');
            this.document.rect(projectStartX, projectStartY, this.contentWidth, projectHeight).stroke();
            this.document.strokeColor('#012135');
            this.document.rect(projectStartX, projectStartY + mm(3), this.contentWidth, projectHeight - mm(6)).stroke();
            this.document.rect(projectStartX, projectStartY + mm(3), this.contentWidth, projectHeight - mm(6)).stroke();
        }

        const projectTitle = project[`titel_${this.language}`] ||  project.titel;
        const projectMonths = getMonthLabel(project.meta.zeitrahmen.dauer, this.language);

        this.document.font('public/assets/projekte/OpenSans-Bold.ttf', 16)
        this.document.fillColor('#228461').text(`${projectTitle} (${project.meta.zeitrahmen.jahr.join(' / ')}, ${project.meta.zeitrahmen.dauer} ${projectMonths})`, projectStartX, projectStartY + mm(5), { width: this.contentWidth});
        this.document.moveDown(0.5);

        this.document.strokeColor('#228461')
            .moveTo(0, this.document.y - mm(3))
            .lineTo(A4.width, this.document.y - mm(3)).stroke();
        
        this.document.strokeColor('#228461').roundedRect(this.document.x, this.document.y, this.contentWidth, mm(15), 2).stroke();

        const art = getMetaDataByLanguage(project.meta.zeitrahmen.art.toLowerCase(), this.language) || project.meta.zeitrahmen.art;
        const team = getAnswer(project.meta.sonstiges.team, this.language);

        let factsY = this.document.y;
        let facts = [
            { titel: getMetaDataByLanguage('auftraggeber', this.language), value: project.meta.auftraggeber.name, width:  0.3 },
            { titel: getMetaDataByLanguage('ort', this.language), value: project.meta.auftraggeber.ort, width: 0.25 },
            { titel: getMetaDataByLanguage('team', this.language), value: team, width: 0.25 },
            { titel: getMetaDataByLanguage('art', this.language), value: art, width: 0.2 }
        ]

        let factWidth = 0;
        facts.forEach((fact, order) => {
            this.document.font('public/assets/projekte/OpenSans-Bold.ttf', 10).fillColor('#000');
            this.document.text(fact.titel + ':', projectStartX + factWidth*this.contentWidth, factsY + mm(2.5), { width: this.contentWidth * fact.width, align: 'center' })
            this.document.font('public/assets/projekte/OpenSans-Regular.ttf', 9).fillColor('#000');
            this.document.text(fact.value, { width: this.contentWidth * fact.width, align: 'center' })
            factWidth += fact.width;
        });
        
        this.document.moveDown(1.5);

        const projectRequirementsLabel = getMetaDataByLanguage('anforderungen', this.language);
        const projectRequirements = project.details[`anforderungen_${this.language}`] || project.details.anforderungen;
        const projectTasks = project.details[`aufgaben_${this.language}`] || project.details.aufgaben;

        // set anfordeungen
        this.document.font('public/assets/projekte/OpenSans-Bold.ttf', 11)
        this.document.fillColor('#228461').text(`${projectRequirementsLabel}:`, projectStartX, this.document.y, { width: this.contentWidth * 2/3});
        this.document.moveDown(0.25);
        
        this.document.font('public/assets/projekte/OpenSans-Regular.ttf', 10).fillColor('#000');
        projectRequirements.forEach(anforderung => {
            let textYStart = this.document.y;
            let numberOfLines = (this.document.heightOfString(anforderung, { width: this.contentWidth }) / this.document.currentLineHeight()); 
            this.document.text(anforderung, projectStartX + mm(4), this.document.y, { width: this.contentWidth });
            
            this.document.fontSize(10).list(['', ''], projectStartX, textYStart + mm(0.5), {
                bulletRadius: 2
            });

            if (numberOfLines > 1) {
                this.document.moveDown(numberOfLines-1);
            }
        });

        this.document.moveDown(0.5);

        const projectTaskLabel = getMetaDataByLanguage('aufgaben', this.language);

        this.document.font('public/assets/projekte/OpenSans-Bold.ttf', 11);
        this.document.fillColor('#228461').text(`${projectTaskLabel}:`, projectStartX, this.document.y, { width: this.contentWidth });
        this.document.moveDown(0.25);
        // set aufgaben
        this.document.font('public/assets/projekte/OpenSans-Regular.ttf', 10).fillColor('#000');
        projectTasks.forEach(aufgabe => {
            let textYStart = this.document.y;
            let numberOfLines = (this.document.heightOfString(aufgabe, { width: this.contentWidth }) / this.document.currentLineHeight()); 
            this.document.text(aufgabe, projectStartX + mm(4), this.document.y, { width: this.contentWidth });
                   
            this.document.fontSize(10).list(['', ''], projectStartX, textYStart + mm(0.5), {
                bulletRadius: 2
            });

            if (numberOfLines > 1) {
                this.document.moveDown(numberOfLines-1);
            }
        });

        this.document.moveDown(0.5);
        
        // set stack
        this.document.font('public/assets/projekte/OpenSans-Bold.ttf', 11)
        this.document.fillColor('#228461').text('Stack:', projectStartX, this.document.y, { width: this.contentWidth});
        this.document.moveDown(0.25);
        this.document.font('public/assets/projekte/OpenSans-Regular.ttf')
            .fontSize(10)
            .fillColor('#000');
        
        Object.keys(project.stack).forEach(key => {
            let textYStart = this.document.y;
            let numberOfLines = (this.document.heightOfString(`${project.stack[key].join(', ')}`, { width: this.contentWidth}) / this.document.currentLineHeight()); 
            this.document.text(`${project.stack[key].join(', ')}`, projectStartX + mm(4), this.document.y, { width: this.contentWidth });
         /*    this.document.text('123', this.document.x + mm(2), this.document.y + mm(1));
            this.document.moveUp();
            this.document.rect(this.document.x - mm(2), this.document.y - mm(1), this.document.widthOfString('123') + mm(4), this.document.heightOfString('123') + mm(2)).stroke(); */
            
            this.document.fontSize(10).list(['', ''], projectStartX, textYStart + mm(0.5), {
                bulletRadius: 2
            });

            if (numberOfLines > 1) {
                this.document.moveDown(numberOfLines-1);
            }
        });
    }

    addPageNumbers(options) {
        const pageRange = this.document.bufferedPageRange();
        
        const projectLabel = getMetaDataByLanguage('meineprojekte', this.language);
        const pageLabel = getMetaDataByLanguage('seite', this.language);
        const ofLabel = getMetaDataByLanguage('von', this.language);


        for (let i = pageRange.start; i < pageRange.count; i++) {
            this.document.switchToPage(i);
            this.document.fontSize(7).fillColor('#000').text(`${projectLabel} | ${pageLabel} ${i+1} ${ofLabel} ${pageRange.count}`, 0, A4.height - mm(10), { align: 'center', width: A4.width });
        }
    }

    close() {
        this.document.end();
    }
}