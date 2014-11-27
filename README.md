# docomo-tts-api-cli

docomo-tts-api-cli is command line tool to call docomo web api TextToSpeech(NTT IT version) and save speech file.

## Installation

```
$ npm install docomo-tts-api-cli
```

## Usage

```
$ docomo-tts-api-cli -a AAAAAAAAAAAAAAAAAAAAAAAAA -s tts.aac -t 日本語の読み上げのサンプル音声です。
```

## Help

```
Usage: docomo-tts-api-cli [options]

	--help, -h
		Displays help information about this script
		'docomo-tts-api-cli -h' or 'docomo-tts-api-cli --help'

	--apikey, -a
		[Mondatory] API KEY provided from docomo Developer support
		'docomo-tts-api-cli --apikey=value' or 'docomo-tts-api-cli -a value'

	--savefile, -s
		[Mondatory] Filename to save
		'docomo-tts-api-cli --savefile=value' or 'docomo-tts-api-cli -s value'

	--text, -t
		[Mondatory] Text to input TextToSpeech
		'docomo-tts-api-cli --text=value' or 'docomo-tts-api-cli -t value'
```

## See Also
[https://dev.smt.docomo.ne.jp/](https://dev.smt.docomo.ne.jp/)
