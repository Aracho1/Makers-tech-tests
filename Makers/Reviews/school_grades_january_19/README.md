Client: School reports company
help teachers find out how the students did on tests
Build a simple report 

Input: a string of csv test results
- Green, Amber, Red
'Green, Amber, Red, Green' [case insensitive]

Output: 
"Green: 2\nAmber: 1\nRed: 2"

Input                               | Output
" "                                 | raise error/exception ['no grades found']  
"Red"                               | "Red: 1
"Green, Red"                        | "Green: 1\nRed: 1"
"Green, Green, Amber, Red, Red"     | "Green: 2\nAmber: 1\nRed: 2"

outlier
* there can be a space between commas -> to account for;

