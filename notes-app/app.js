const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

// Customize yargs version
yargs.version('1.1.0')

//Create add comman

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
       notes.removeNote(argv.title)
    }
}) 


//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler(){
        console.log('Read the note')
    }
})
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler(){
        console.log('List the note')
    }
})

yargs.parse()
//console.log(yargs.argv)
