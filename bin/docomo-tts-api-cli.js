#!/usr/bin/env node

var argv = require('argv');

var DocomoTtsApi = require("docomo-tts-api");

argv.option([
  {
    name: 'apikey',
    short: 'a',
    type: 'string',
    description: '[Mondatory] API KEY provided from docomo Developer support',
    example: "'" + argv.name + " --apikey=value' or '" + argv.name + " -a value'"
  },
  {
    name: 'savefile',
    short: 's',
    type: 'string',
    description: '[Mondatory] Filename to save',
    example: "'" + argv.name + " --savefile=value' or '" + argv.name + " -s value'"
  },
  {
    name: 'text',
    short: 't',
    type: 'string',
    description: '[Mondatory] Text to input TextToSpeech',
    example: "'" + argv.name + " --text=value' or '" + argv.name + " -t value'"
  }
]);

var args = argv.run();

if (args.options.apikey === undefined || args.options.savefile === undefined
  || args.options.text === undefined) {
  console.log("Please add mondatory arguments. You can use help option('-h')");
  process.exit(0);
}

var apiKey = args.options.apikey;
var saveFile = args.options.savefile;
var speechText = args.options.text;

var docomotts = new DocomoTtsApi(apiKey);
docomotts.save(saveFile, speechText);
console.log('Invoke docomo tts web api.');

