import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';//Import pipe metadata

@Pipe({name: 'capitalize'})//name of the pipe to be used in AppComponent
export class CapitalizePipe implements PipeTransform {//export class CapitalizePipe to be used elsewhere
  transform(value: string, args: string[]): any { //declare transform function and take in the string
    if (!value) return value;

    return value.replace(/\w\S*/g, function(txt) {
        // '/' Is the beginning of a regex (regular expression). 
        //The \w looks for all word characters in a string. 
        //A word character is a character from a-z, A-Z, 0-9, including the _ (underscore) character. 
        //The \S is any character that is NOT a whitespace character. 
        //The * is a character that says to look for n zero or more times, where n is the metacharacter(the backslash tokens in the regex) in the regex. 

        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); //first letter of the string converted to uppercase + the rest of the string in lowercase
    });
  }
}