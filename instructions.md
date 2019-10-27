# using the OTP
# break the Message cipher text

cipher text is x char grouped in 5char cluster 
broken by spaces and newlines it needs to be
broken using the one time pad scheme for messages
if you analyze the code the actual OneTimePad method is
As Follows:

# //GIVEN
const letters =
{
'01' : 'A',
'02' : 'B',
'03' : 'C',
'04' : 'D',
'05' : 'E',
'06' : 'F',
'07' : 'G',
'08' : 'H',
'09' : 'I',
'10' : 'J',
'11' : 'K',
'12' : 'L',
'13' : 'M',
'14' : 'N',
'15' : 'O',
'16' : 'P',
'17' : 'Q',
'18' : 'R',
'19' : 'S',
'20' : 'T',
'21' : 'U',
'22' : 'V',
'23' : 'W',
'24' : 'X',
'25' : 'Y',
'26' : 'Z',
}
# Encrypting to ciphertext
"Hello World"
="HELLOWORLD"
HELLOWORLD
	      H E  L L O  W O  R L D
preTEXT    : 08051 21215 23151 81204
+ | up and down
OTP 	   : 77311 31456 69795 76193
=CIPHERTEXT: 75362 52661 82846 57397

BREAK(decrypt) SAMPLE:


Encrypting to ciphertext
"Hello World"
="HELLOWORLD"
HELLOWORLD
08051 21215 23151 81204

This would either need preknowledge of the OTP for quick secure comms
But in the 21st century thats even debatable
Becasue we can just BruteForce the OTP until we see a set of texts that
looks even remotely english by cross referencing nouns to anything found
in the possible rendered Reversed Texts of the Guessing OTP Brute Force

# ciphertext to break 
75362 52661 82846 57397
USING OTP:
77311 31456 69795 76193

Subtraction, Inverse Operations for deciphering, aka Linear Structuring
=
08051 21215 23151 81204

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
