# Japanese Card Templates for Anki

## Usage and Limitations

1. The decks do not contain cards (except from the 2 demo ones), they are intended as templates for your own vocabulary.

2. The decks do not work in the desktop version of Anki. (Only Anki mobile is tested.)

3. I could not fix that the front of the first card is buggy. Therefore just skip to the back, it shows the normal front and a "Show back" button**, which shows the normal back. This only works for the first review session between app restarts.

4. Follow the following conventions for data entry in order to benefit from potential future development:

The *dictionary_form* field should contain the primary way to write a word in Japanese, i. e. kanji and kana are possible, and always be present.

The *dictionary_form_kana* field should contain the pronounciation of the word in Japanese. You can put any text or nothing here. I use kana, if *dictionary_form* contains kanji.

The *translation* field should contain the word in your native language (or any other language, which you want to use).

The *type* field is used to show the type of a word when it is important. Currently only verb types are implemented. For compatability with future versions, it should be one of *ichidan-verb*, *godan-verb*, *irregular-verb*, *noun*, *i-adjective*, *na-adjective*, *name*, *adverb*, or *other*.

## Decks

### [Luis' Japanese Writing right-handed](https://ankiweb.net/shared/info/1074138091)

Includes native to Japanese writing cards and Japanese to native recall cards.
The style is optimized for right-handed persons, i. e. the scroll area is on the left.

<img height="450" src="preview/IMG_3912.PNG"></img>
<img height="450" src="preview/IMG_3913.PNG"></img>
<img height="450" src="preview/IMG_3914.PNG"></img>
<img height="450" src="preview/IMG_3915.PNG"></img>
<img height="450" src="preview/IMG_3927.PNG"></img>
<img height="450" src="preview/IMG_3924.PNG"></img>
<img height="450" src="preview/IMG_3921.PNG"></img>
<img height="450" src="preview/IMG_3922.PNG"></img>
<img height="450" src="preview/IMG_3923.PNG"></img>

### [Luis' Japanese Writing left-handed](https://ankiweb.net/shared/info/1934329661)

Includes native to Japanese writing cards and Japanese to native recall cards.
The style is optimized for left-handed persons, i. e. the scroll area is on the right.

<img height="450" src="preview/IMG_3918.PNG"></img>

### [Luis' Japanese Writing symmetrical](https://ankiweb.net/shared/info/1569721815)

Includes native to Japanese writing cards and Japanese to native recall cards.
It features a symmetrical layout, i. e. there are two half as wide scroll areas on the left and the right.

<img height="450" src="preview/IMG_3919.PNG"></img>

### [Luis' Japanese Recall](https://ankiweb.net/shared/info/1769805441)

Includes native to Japanese and Japanese to native recall cards.
It features a symmetrical layout, i. e. there are two half as wide scroll areas on the left and the right.

<img height="450" src="preview/IMG_3925.PNG"></img>
<img height="450" src="preview/IMG_3926.PNG"></img>

## Installation

1. Add the shared deck of your choice by following the instructions on ankiweb.net like for any other shared deck.
   1. [Luis' Japanese Writing right-handed](https://ankiweb.net/shared/info/1074138091) 
   2. [Luis' Japanese Writing left-handed](https://ankiweb.net/shared/info/1934329661)
   3. [Luis' Japanese Writing symmetrical](https://ankiweb.net/shared/info/1569721815)
   4. [Luis' Japanese Recall](https://ankiweb.net/shared/info/1769805441)
2. Download a stroke order font, I recommend [this one](https://www.nihilist.org.uk/).
3. Rename the font file to *_KanjiStrokeOrders.ttf*.
4. Add the font file in Anki. See [Installing Fonts](https://docs.ankiweb.net/#/templates/styling?id=installing-fonts) in the Anki Manual for detailed instructions.

## Development

To-Do: Write documentation

### anki-persistence submodule

The anki-persistence submodule is planned to be used in order to use up-to-date code of anki-persistence instead of the copy-pasted code.