# using the OTP<br/><br/>
# break the Message cipher text<br/>

cipher text is x char grouped in 5char cluster <br/>
broken by spaces and newlines it needs to be <br/>
broken using the one time pad scheme for messages <br/>
if you analyze the code the actual OneTimePad method is <br/>
As Follows: <br/>

# //GIVEN <br/>
const letters = <br/>
{ <br/>
'01' : 'A', <br/>
'02' : 'B',<br/>
'03' : 'C',<br/>
'04' : 'D',<br/>
'05' : 'E',<br/>
'06' : 'F',<br/>
'07' : 'G',<br/>
'08' : 'H',<br/>
'09' : 'I',<br/>
'10' : 'J',<br/>
'11' : 'K',<br/>
'12' : 'L',<br/>
'13' : 'M',<br/>
'14' : 'N',<br/>
'15' : 'O',<br/>
'16' : 'P',<br/>
'17' : 'Q',<br/>
'18' : 'R',<br/>
'19' : 'S',<br/>
'20' : 'T',<br/>
'21' : 'U',<br/>
'22' : 'V',<br/>
'23' : 'W',<br/>
'24' : 'X',<br/>
'25' : 'Y',<br/>
'26' : 'Z',<br/>
}<br/>
# Encrypting to ciphertext<br/>
"Hello World"<br/>
="HELLOWORLD"<br/>
HELLOWORLD<br/>
	     H E  L L O  W O  R L D<br/>
preTEXT    : 08051 21215 23151 81204<br/>
+ | up and down<br/>
OTP 	   : 77311 31456 69795 76193<br/>
=CIPHERTEXT: 75362 52661 82846 57397<br/>
<br/>
BREAK(decrypt) SAMPLE:<br/>

<br/>
Encrypting to ciphertext<br/>
"Hello World"<br/>
="HELLOWORLD"<br/>
HELLOWORLD<br/>
08051 21215 23151 81204<br/>

This would either need preknowledge of the OTP for quick secure one time message<br/>
But in the 21st century thats even debatable<br/>
Becasue we can just BruteForce the OTP until we see a set of texts that<br/>
looks even remotely english by cross referencing nouns to anything found<br/>
in the possible rendered Reversed Texts of the Guessing OTP Brute Force<br/>

# ciphertext to break <br/>

75362 52661 82846 57397<br/>
USING OTP:<br/>
Subtract<br/>
77311 31456 69795 76193<br/>
=<br/>
08051 21215 23151 81204<br/>
 H E  L L O  W O  R L D<br/> # Subtraction, Inverse Operations for deciphering, aka Linear Structuring<br/>


___________THE__REAL__TASK____________
-Using The Knowledge Recieved from document at
http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.391.364&rep=rep1&type=pdf
Rendered as a pdf download in the local DIR
There is a pretext on page 28 of the PDF Detailing a CIA message
In which instructs usage of a former agents OneTimePad for message
But the Message is not equal in length to the OTP provided
So the Task remains to Guess through the different indicies of the OTP
Within range of the size of the unspaced OneTimePad
The Biggest importance in computation of such is to Retain the 01
and 02 03 etc.. Status of the values, as humans moreever read such
as a literal string so you must retain 02 and not int just 2 because
Such doesnt directly translate back to the Cipher Structure

The Cipher provided in the PDF has been photoscanned to chars and is in
a .txt document in the local DIR

